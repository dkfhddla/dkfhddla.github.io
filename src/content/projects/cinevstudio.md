---
title: "CineV Studio"
description: "Unreal 기반 3D 시네마틱 제작 도구. 샷 경계의 시간·화면 좌표, UI 상태 책임과 저장 실패 복구를 정리하며 편집 흐름을 개발했습니다."
category: "3D 콘텐츠 제작 도구"
engagement: "company"
organization: "시나몬"
period: "시나몬 재직 기간 내 참여 · 2026.08 퇴사"
role: "Timeline·Shot·Camera, Action·UI·저장·출력 개발"
delivery: "출시·실제 고객 이용 (팀 제품)"
order: 130
image: "/assets/projects/cinevstudio/action-timeline.webp"
tags: ["Unreal Engine", "C++", "UMG", "Blueprint", "Timeline", "Camera", "NNE"]
---

## 프로젝트 맥락과 역할

CineV Studio는 캐릭터와 소품을 배치하고 동작·카메라·조명을 편집해 영상으로 출력하는 제작 도구입니다. SpicePro의 폭넓은 기능을 씬·컷별 월드 설정과 타임라인에 집중하도록 개편한 제품으로, Unreal 프로그램을 Pixel Streaming으로 웹에 제공했습니다.

개발 과정의 처음부터 끝까지 참여하며 장면 배치, Timeline·Shot·Camera와 Action 편집, UI 구조와 저장·CLI 출력 작업을 맡았습니다. 제품은 출시돼 실제 고객이 이용했습니다. 이 결과는 팀 제품의 결과이며, 전체 제품을 단독 개발한 것은 아닙니다. 시나몬 재직은 **2021.07–2026.08**이며 정확한 전체 프로젝트 참여일은 확정하지 않았습니다.

<span id="직접-맡은-개발"></span>

## 샷 경계에서 시간과 화면 좌표 맞추기

**문제:** 샷 사이에는 고정 폭의 UI 영역이 있지만 타임라인 시간은 줌에 따라 달라집니다. 경계를 드래그할 때 화면 위치만으로 계산하면 앞 샷의 끝과 다음 샷의 시작을 구분하기 어려웠습니다. 클립 이동·트림·리플에서는 주변 클립과 샷 범위도 함께 바뀝니다.

**본인 기여와 기술 구조:** 고정 폭 영역을 반영한 프레임·화면 좌표 변환을 공통화하고, 같은 시간 경계에서도 앞 샷 끝과 다음 샷 시작의 화면 위치를 구분해 처리했습니다. ShotBand와 범위 조정, 클립 이동·트림과 Undo/Redo를 연결했습니다. Shot 간 리플의 기초를 직접 구현한 뒤 동료와 함께 기능을 확장했습니다.

**확인된 결과:** 샷 경계의 드래그가 공통 좌표 기준을 사용하고, 편집 범위를 사용자가 선택하는 리플 동작으로 확장했습니다. 한 편집으로 변경된 상태를 Undo/Redo에서 함께 복원하도록 다뤘습니다.

<video controls playsinline preload="none" width="1280" height="720" poster="/assets/projects/cinevstudio/ripple-scope-poster.webp" aria-label="CineV Studio 리플 편집 범위 시연" style="width:100%;height:auto;aspect-ratio:16/9;background:#111;">
  <source src="/assets/projects/cinevstudio/ripple-scope.mp4" type="video/mp4" />
  <a href="/assets/projects/cinevstudio/ripple-scope.mp4">리플 편집 영상 열기</a>
</video>

팀 제품의 편집 시연입니다. 영상에 보이는 전체 UI의 개인 구현을 의미하지 않습니다.

## UI와 편집 상태의 책임 나누기

**문제:** 화면 표시와 데이터 변경의 책임이 섞이면 클립 위치만 바뀌거나, 공통 함수가 로드 중에도 재생 위치를 바꾸는 등 호출 경로에 따라 동작이 달라질 수 있었습니다. 데이터 모델이 ViewModel을 직접 생성·소유하던 구조도 있어 데이터와 화면의 의존성이 얽혀 있었습니다.

**본인 기여:** Unreal Engine의 CommonUI를 참고해 CineV Studio의 편집 흐름에 맞는 UI System을 공동 설계·구축했습니다. Scene Editor 적용과 Timeline 위젯 구현을 담당하고, View가 필요한 ViewModel을 관리하며 데이터 모델을 연결하도록 정리했습니다.

Base는 외형·입력 전달, Component는 디자인 변형, View는 위젯 조합과 편집 동작을 맡는 구조입니다. 이 구분과 C++·Blueprint 연결 방법을 가이드로 정리했습니다.

동료 코드리뷰에서는 화면 위치를 직접 바꾸는 대신 **클립 데이터 변경 → 변경 이벤트 → UI 갱신**을 사용하도록 제안했습니다. 샷 추가 뒤 재생 위치 이동은 사용자 편집 호출부가 맡도록 분리했습니다. 카메라 생성 중과 편집 중의 데이터 차이, 약한 참조와 종료 시 미리보기 정리도 검토했습니다.

**확인된 결과:** 데이터 갱신 책임과 사용자 편집의 부수 효과를 분리하는 변경이 반영됐습니다. 직접 구현한 카메라 키·화각·PIP 미리보기와 Undo/Redo, 패널 종료 후 복귀를 같은 편집 흐름으로 연결했습니다.

![CineV Studio의 카메라 구도를 PIP로 확인하는 실제 편집 화면](/assets/projects/cinevstudio/camera-pip.webp)

## 저장 실패 복구와 자동 출력

**문제:** 씬과 메타데이터를 여러 파일로 저장할 때 일부 단계만 성공하면 작업물의 구성 파일이 맞지 않을 수 있었습니다. CLI 출력은 일반 화면 실행과 월드 초기화 조건도 달랐습니다.

**본인 기여:** 기존 파일을 백업하고 저장 실패를 감지하면 복원하거나 새 파일을 정리하는 처리를 구현했습니다. 모든 저장 단계가 끝난 뒤 성공을 기록하고 생성·수정 버전을 추적했습니다. 동료의 JSON 복구·파일 이동 검사·버전 비교 보강은 리뷰하고 통합했습니다.

Commandlet에서 Gaussian 배경이 빠지는 문제에는 렌더링 전 월드·FXSystem 상태를 확인하고, 필요한 경우에만 생성·연결하도록 보완했습니다. 준비 실패는 출력 실패로 처리하고 초기화 조건을 검사하는 Unreal Automation 테스트 코드를 추가했습니다.

씬 편집 Commandlet과 샷 수정 기능은 동료와 함께 구현했습니다. 셰이더 캐시 예열에는 진행 로그·단계별 제한 시간·실패 원인 로그를 추가했고, 영상 출력에서는 PNG 시퀀스를 유지하면서 MP4 인코딩을 선택하도록 분리했습니다.

**확인된 결과:** 감지된 저장 실패의 복구 경로와 출력 초기화의 성공·실패 조건을 명시했습니다. 저장 복구는 파일별 백업·복원이며, 강제 종료에서도 보장되는 원자적 저장으로 설명하지 않습니다.

## Action·AI 모션과 팀 협업

ActionSet 저장·불러오기와 UnitAction 데이터 편집, Stance 상태, IK·Attach와 소품 상호작용을 개발했습니다. MetaAction·UnitAction의 구조 발전은 논의와 공동 개발을 거쳤습니다. 가변 길이 동작은 도입·반복·종료 구간으로 나누는 편집 기능을 구현했습니다.

WANDR·PoseToPose를 Unreal 편집기에 연결하며 NNE 모델 생성·입력 형태·입출력 버퍼·추론 호출을 공통화했습니다. **첫 프레임의 추가 회전은 입력·모델 입출력·클라이언트 변환을 비교해 진단했고, 모델 담당자가 수정한 결과를 제품에서 검증했습니다.** 모델 자체의 개발·수정은 본인 기여로 포함하지 않습니다.

<span id="함께-맡은-개발과-팀-역할"></span>

2026년 1–2월 UI/UX TF는 개발자 2명(본인 포함), 기획자 1명과 UI 디자이너 1명이 참여했습니다. 본인은 우선순위·분담·의존성, 디자인 검토와 팀 간 공유를 조율했습니다.

## 실제 제품 영상과 이어지는 작업

아래는 CINEV 공식 **3D Edit Deep Dive**입니다. 캐릭터 배치부터 동작·카메라 편집까지 제품 전체 흐름을 보여 줍니다.

<iframe src="https://player.vimeo.com/video/1177171671?dnt=1" title="CINEV 공식 3D Edit Deep Dive" width="1280" height="608" loading="lazy" allow="fullscreen; picture-in-picture; encrypted-media" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" style="width:100%;height:auto;aspect-ratio:1280/608;border:0;"></iframe>

[Vimeo 원본](https://vimeo.com/1177171671) · [YouTube 튜토리얼](https://www.youtube.com/watch?v=GKxlZUpQN44)

[초기 런타임 도구 · SpicePro](/projects/spice-pro/) → [웹·Rust 후속 도구 · Shotloom](/projects/shotloom/)
