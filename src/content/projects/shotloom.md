---
title: "Shotloom"
description: "React UI와 Rust·Bevy 엔진을 연결한 브라우저 3D 편집기. 클립별 Pose·IK와 시간 규칙을 정리해 저장·Undo·출력의 일관성을 검증했습니다."
category: "3D 콘텐츠 제작 도구"
engagement: "company"
organization: "시나몬"
period: "2026.04–2026.09 둘째 주"
role: "Viewport·Camera·Timeline·Pose·IK, UI·엔진 연동"
delivery: "사내 테스트·테스트 빌드"
order: 120
image: "/assets/projects/shotloom/scene-editor.webp"
tags: ["React", "TypeScript", "Rust", "Bevy", "Timeline", "Camera", "IK", "Codex", "MCP"]
---

## 프로젝트 맥락과 역할

CineV Studio의 Pixel Streaming 제공 방식에는 로딩·재접속 대기, UI 지연과 서버 비용 부담이 있었습니다. Shotloom은 Unreal 기반 실행을 브라우저 안에서 동작하는 Bevy 엔진과 React UI로 전환하는 방향으로 시작했습니다.

이미지 기반 3D 씬의 캐릭터·동작·포즈·카메라를 편집하고, 출력한 시퀀스를 AI 재생성에 연결하는 도구입니다. 본인은 Viewport·Camera·Timeline·Animation, Clip Pose·손발 IK와 에셋 연동·작업물 저장·렌더링 경로를 담당했습니다. AI 생성 모델 자체를 개발한 것은 아닙니다.

**참여 기간은 2026년 4월부터 9월 둘째 주까지**입니다. 시나몬 재직은 8월 31일 종료됐으며, 이후 약 2주간 구현 마무리에 추가 참여했습니다. 사내 테스트 후 테스트 빌드까지 확인했고, 정식 출시·외부 고객 이용은 확인하지 않았습니다.

## 웹 입력을 엔진의 편집 동작으로

**문제:** React 화면과 엔진이 각각 선택·재생·취소 상태를 판단하면 같은 조작이 서로 다른 결과를 만들 수 있습니다.

**본인 기여와 구조:** React·TypeScript 입력을 명령·이벤트 브리지로 Rust·Bevy에 연결했습니다. 뷰포트 이동·회전·확대, 타임라인 재생 위치, 클립 배치와 카메라 키 편집을 구현했습니다. 장면을 둘러보는 카메라와 촬영용 카메라의 역할을 구분하고, 활성 클립과 취소 판단은 실제 자세를 계산하는 런타임이 담당하도록 정리했습니다.

**확인된 결과:** UI의 조작이 엔진 평가와 연결되고, 사용자가 편집한 장면을 미리 보고 작업물로 저장해 다시 여는 흐름을 구현했습니다. 기존 제공 방식보다 로딩·UI 반응이 좋아졌다는 정성적 확인은 있으나, 임의의 성능 수치를 사용하지 않습니다.

## 클립마다 독립적인 Pose와 IK

**문제:** 캐릭터에 공통으로 남던 수동 자세는 다른 클립을 편집할 때도 영향을 줄 수 있었습니다. 조작 중인 임시 자세를 즉시 저장하면 취소하기도 어려웠습니다.

**본인 기여:** 수동 자세를 각 **Performance Clip이 소유**하도록 구성했습니다. 손발의 위치·방향을 조절하는 IK와 Gizmo를 연결하고, 편집 중 Draft와 확정된 상태를 나눠 적용·취소·Undo/Redo로 이어지게 했습니다.

**확인된 결과:** 같은 원본 자세를 공유하는 인접 클립도 독립적으로 편집하도록 만들었습니다. 상태 직렬화·엔진 평가, 다시 열기·미리보기·PNG 출력이 같은 규칙을 사용하는지 자동 테스트와 직접 조작으로 검증했습니다.

## 원본 모션 시간과 타임라인 시간 분리

**문제:** Trim·Slip·재생 속도를 바꾸면 화면에 보이는 시간과 원본 모션의 시점이 달라집니다. Pose Key가 잘못된 시간 기준에 묶이면 편집 뒤 다른 동작 시점을 수정하게 됩니다.

**본인 기여와 결과:** 원본 모션 시간과 타임라인 시간을 분리하고, 키가 같은 원본 모션 시점을 따라가도록 저장·평가 규칙을 맞췄습니다. 구간 변경, 분수 재생 속도와 Undo/Redo·저장 변환을 회귀 테스트로 다뤘습니다. AI와 진행한 구현·검토 경험이며 모든 코드를 수작업으로 작성한 것으로 설명하지 않습니다.

## 에셋 가져오기와 작업물·출력

Asset Library의 **Catalog → Resolver → 파일** 계약에 맞춰 에셋을 조회하고 씬에 배치하는 편집기 측 기능을 담당했습니다. 원본 에셋과 썸네일을 작업물에 보존하고, 저장한 작업물을 CLI에서 이미지로 렌더링하는 경로를 연결했습니다.

편집기의 자산 소비와 공급 시스템 개발은 연결돼 있지만 책임이 다릅니다. [Asset Library 프로젝트](/projects/asset-library/)에서 공급·게시·검증 구조를 설명합니다.

## AI 개발에서 맡은 판단과 검증

개발자 4명의 팀에서 Codex 구현 → Claude 리뷰 → 동료 리뷰를 공통 절차로 사용했습니다. 본인은 요구사항을 구체화하고 이슈를 나누며, 계약·모듈 경계와 리뷰 결과를 검토했습니다. 자동 테스트를 기본으로 하고 직접 조작도 수행했습니다.

Ouroboros MCP의 인터뷰로 빠진 요구사항과 구현 방향을 정리했습니다. Slack·GitHub·Linear·Notion MCP로 설계 공유, PR·리뷰, 작업 기록과 문서 작성을 연결했습니다. PR·리뷰 상태 알림 봇도 구성했습니다. 팀 공통 절차의 최초 설계나 조직 전체 생산성 향상을 단독 성과로 주장하지 않습니다.

## 실제 편집 영상과 생성 결과

포즈·동작·카메라 편집에서 영상 생성으로 이어지는 팀 제품 시연입니다. 편집 도구 개발과 AI 모델의 생성 결과를 구분합니다.

<video controls playsinline preload="none" width="1280" height="720" poster="/assets/projects/shotloom/scene-editor.webp" aria-label="Shotloom 실제 포즈·동작·카메라 편집 시연" style="width:100%;height:auto;aspect-ratio:16/9;background:#111;">
  <source src="/assets/projects/shotloom/editing-demo.mp4" type="video/mp4" />
  <a href="/assets/projects/shotloom/editing-demo.mp4">편집 시연 영상 열기</a>
</video>

![캐릭터 동작과 카메라 키를 함께 편집하는 실제 Shotloom 타임라인](/assets/projects/shotloom/camera-keys.webp)

아래는 편집한 3D 장면을 바탕으로 SceneGen에서 생성한 결과입니다.

<video controls playsinline preload="none" width="864" height="496" aria-label="SceneGen 생성 결과" style="width:100%;height:auto;aspect-ratio:864/496;background:#111;">
  <source src="/assets/projects/shotloom/scenegen-video.mp4" type="video/mp4" />
  <a href="/assets/projects/shotloom/scenegen-video.mp4">생성 결과 영상 열기</a>
</video>

[전체 기능 테스트 · YouTube](https://youtu.be/OeyOMw4zknI) · [개발 과정 기록](/posts/shotloom-project-history/) · [AI 개발에 대한 회고](/posts/am-i-a-codex-launcher/)
