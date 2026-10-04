---
title: "SpicePro"
description: "Unreal 런타임 영상 제작 도구. Action 입력 툴, DataTable 기반 캐릭터 UI 자동 생성과 GUID 기반 맵 복원으로 제작·편집의 기반을 구현했습니다."
category: "3D 콘텐츠 제작 도구"
engagement: "company"
organization: "시나몬"
period: "2021.07–2023.07"
role: "Timeline·Action, 커스터마이징 UI·Map Editor 개발"
delivery: "사내 테스트·외부 시연 · 미출시"
order: 105
image: "/assets/projects/spice-pro/actor-path.webp"
tags: ["Unreal Engine 5", "C++", "UMG", "DataTable", "Sequencer", "Map Editor", "Perforce"]
---

## 프로젝트 맥락과 역할

배경·배우·애니메이션·카메라를 조합해 3D 장면과 영상을 만드는 도구입니다. Unreal Sequencer를 활용·확장해 실행 중 Timeline을 편집하도록 개발했습니다.

**2021.07.05–2023.07.20 참여**하며 런타임 Timeline·Action, 캐릭터 커스터마이징 UI·ViewModel과 Map Editor를 맡았습니다. 사내 테스트·외부 시연까지 진행했으며 출시하지 못했습니다.

## 숫자 입력을 장면에서의 Action 제작으로

**문제:** Action은 애니메이션·타깃·IK와 시작 위치·타이밍 정보를 포함합니다. DataTable의 수치만으로 캐릭터와 소품의 위치나 재생 시점을 예측하기 어려웠습니다.

**본인 기여:** Action 정보 입력 툴을 개발해, 장면에서 캐릭터와 타깃 위치를 조절하고 애니메이션을 재생하며 타이밍을 확인하도록 했습니다. 조정한 정보를 DataTable에 저장하고, 런타임 Timeline의 Action 클립 생성·평가에 연결했습니다. 기획자·콘텐츠 제작자가 액션별 정보를 입력하는 역할을 맡았습니다.

**확인된 결과:** 사용 과정에서 세부 조정이 편해지고 재작업이 줄었다는 정성적 결과가 있었습니다. 절감 시간이나 감소율은 측정되지 않았습니다.

## DataTable로 커스터마이징 UI 생성

**문제:** 얼굴 조절 항목이 많아 개별 UI를 수작업으로 계속 만들기 어려웠습니다.

**본인 기여와 구조:** 팀장이 제안한 데이터 기반 생성 아이디어를 바탕으로 조절 컨트롤러 UI의 자동 생성 구조를 설계·구현했습니다. Unreal DataTable에 항목을 등록하고 TSet·TMap을 활용해 UI 생성과 캐릭터 조절값 연결까지 처리했습니다.

**확인된 결과:** 새 조절 항목을 데이터에 추가하면 UI와 값 연결이 함께 생성되는 경로를 구현했습니다. 아이디어 제공과 본인의 설계·구현 기여를 구분합니다.

![SpicePro 얼굴 미리보기와 홍채·수정체 조절 항목이 보이는 실제 실행 화면](/assets/projects/spice-pro/character-customization.png)

## Map Editor의 GUID 기반 복원

**문제:** 촬영용 배경·세트를 저장했다 다시 열 때 기존 런타임 UObject 참조를 그대로 복원할 수 없었습니다.

**본인 기여와 결과:** 오브젝트 식별용 GUID를 저장하고, 로드 시 오브젝트를 새로 만든 뒤 저장된 GUID와 연결하도록 구현했습니다. 오브젝트 배치·Explorer·Gizmo·환경 제어와 Save/Load를 담당했습니다. 정확한 부모·자식 참조 복원 순서와 모든 실패 경우의 보장까지 확장하지 않습니다.

## UI 책임과 초기 협업 환경

ViewModel로 화면 표시와 기능 코드의 책임을 나눴습니다. 개발·아트·연출 팀과 캐릭터 자산 갱신 절차를 조율했고, 초기에는 Ubuntu 기반 Perforce 서버·스트림과 복수 클라이언트 연결·외부 접속 경로를 구성·검증했습니다. 이후 담당자 입사 후 재구축된 환경 전체의 운영은 본인 기여로 포함하지 않습니다.

## 실제 화면과 제품 소개

페이지 상단은 캐릭터의 경로와 Timeline을 함께 편집하는 실제 화면입니다. 아래는 씬·컷을 구성하는 라이브 스토리보드 화면입니다. 팀 제품의 화면이며, 화면 전체의 단독 개발을 의미하지 않습니다.

![SpicePro 씬·컷 목록과 라이브 스토리보드의 실제 실행 화면](/assets/projects/spice-pro/storyboard.png)

[제품 홍보 영상 · YouTube](https://youtu.be/Db-BoxKov3I)

이 경험은 이후 [CineV Studio의 편집 시스템과 UI 재구축](/projects/cinevstudio/)으로 이어졌습니다.
