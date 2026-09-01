# 만들어 온 프로젝트

게임 클라이언트와 VR 콘텐츠에서 시작해, 사용자가 3D 장면을 직접 구성하는 제작 도구까지 개발해 왔습니다.

이 페이지는 회사보다 실제 제품과 프로젝트를 기준으로 정리했습니다. 각 항목에는 공개 가능한 자료에서 확인된 개인 작업만 적었으며, 팀 전체 결과나 확인되지 않은 출시·배포 성과는 포함하지 않았습니다.

## 3D 콘텐츠 제작 도구

### CinevStudio

**기간:** 2023.07 ~ 2026.05\
**이전 계보:** SpicePro, StoryEditor, Map Editor\
**환경:** Unreal Engine, C++, UMG, Blueprint, DataTable, Perforce

CinevStudio는 이전 제작 도구의 편집 경험을 이어받은 Unreal Engine 기반 3D 콘텐츠 제작 도구입니다. 장면 배치부터 캐릭터 Action, Timeline·Shot·Camera 편집, 저장·복구와 산출물 생성까지 개발했습니다.

초기에는 Perforce 작업 환경을 검증하고, 씬·컷·대사의 시간 규칙과 UI 요구사항을 정리했습니다. UMG·Timeline 구현과 오류 분석을 담당했으며, Map Editor의 배치 UI·기즈모·Save/Load와 자산 갱신 흐름도 개발했습니다.

이후 캐릭터와 오브젝트의 상호작용을 편집하는 Action·Interaction 시스템을 다뤘습니다. Scene Drag & Drop, ActionSet Load/Save, UnitActionData Editor와 캐릭터 stance 관리를 구현했습니다.

기획이 확정되지 않은 영역은 플러그인부터 확장하지 않고 실제 Action set을 먼저 축적해 검증하는 순서를 제안했습니다. 가변 길이 Action은 Intro·Middle·Outro로 나누고 단계적으로 구현 범위를 정리했습니다.

Timeline은 Track·Clip·Shot이 함께 움직이는 편집 모델로 확장했습니다. 새 Timeline UI, Clip Drag & Drop, 다중 이동, Shot 간 Ripple, ShotBand와 Camera Clip 생성·편집 기능을 구현했습니다.

UI의 Base·Component·View 책임을 구분한 가이드를 작성하고, Undo/Redo와 version tracking, backup·rollback을 개발했습니다. Shader·VFX·MP4 산출물을 반복 생성하는 CLI Export도 구현했습니다.

### Shotloom

**기간:** 2026.04 ~ 2026.08\
**환경:** React, TypeScript, Rust, 웹↔엔진 bridge, Timeline, Camera, IK, persistence, CLI

웹 UI와 Rust 런타임을 연결해 3D 장면과 Shot을 편집하는 제작 도구입니다. 사용자 입력부터 엔진 평가, 저장과 Export까지 이어지는 기능을 하나의 흐름으로 구현했습니다.

React 입력 훅과 브리지 계약, Rust 엔진을 연결해 viewport camera navigation을 개발했습니다. Timeline transport·playhead, Animation import·Performance Clip, Camera Clip과 장면 자산 배치 기능도 연결했습니다.

수동 Pose의 소유권을 Performance Clip으로 옮기고, IK transaction과 손·발 4-limb, pole·rotation, gizmo interaction을 단계적으로 구현했습니다.

편집 결과가 서로 다른 경로에서 달라지지 않도록 reload·Undo·preview·PNG export가 같은 평가 계약을 사용하도록 검증했습니다. 외부 캐릭터 검색·가져오기·배치와 Pose Key 저장도 연결했습니다.

관련 이슈와 PR에서 주요 범위의 병합과 검증이 확인됐으며, Pose authoring의 일부 후속 범위는 당시 진행 중으로 기록되어 있습니다.

### asset-library

**기간:** 2026.05 ~ 2026.08\
**환경:** API, JSON Schema, Catalog·Resolver, content-addressed asset, Docker, CI

Shotloom에서 사용할 3D 자산을 로컬과 호스팅 환경에 일관되게 전달하는 독립 프로젝트입니다. 자산 공급자와 편집기 사이의 API·Schema·빌드·검증·운영 경계를 설계하고 구현했습니다.

`Catalog → Resolver → bytes`로 이어지는 v2 전달 계약을 정리하고, 로컬·호스팅 환경의 API·Schema·provider 경계를 구성했습니다.

build-derived revision과 content-addressed URL을 도입했습니다. 완료된 generation만 원자적으로 게시하고 실패한 산출물은 정상 버전과 분리해 정리하도록 빌드 흐름을 구성했습니다.

공개 호스팅 환경을 확인하는 smoke test와 consumer certification을 추가했습니다. 새 계약으로 전환한 뒤에는 이전 v1 static fallback을 제거하고 release record를 필요한 범위로 줄였습니다.

핵심 구현의 PR 병합과 대표 검증 성공은 확인됐으며, 실제 운영 배포 시점과 공급자·소비자의 최종 전환 상태는 별도 확인이 필요한 범위입니다.

## VR 플랫폼과 시뮬레이터

### Monopic Editor / Viewer

**기간:** 2017 ~ 2018\
**환경:** Unreal Engine 4, Spline, Instance Mesh, Node.js, AWS

사용자가 가상 공간에 갤러리를 구성하고 이미지를 공유하는 VR 플랫폼입니다.

Spline 기반 도면 편집, Instance Mesh를 이용한 벽·바닥 자동 생성과 인테리어 자산 배치를 구현했습니다. 회원가입·로그인, 서버·DB 연동과 모바일·PC Viewer도 개발했습니다.

### ADAS 자율주행 시뮬레이터

**기간:** 2017 ~ 2018\
**환경:** Unreal Engine 4, Spline, 차량 AI, XML

도로 상황과 차량 상태를 재현해 ADAS 테스트 자료를 만드는 시뮬레이터입니다.

Spline 기반 도로 제작 도구, 설정 가능한 신호등과 주행·신호·표지판에 반응하는 차량 AI를 구현했습니다. 차량 속력·기어·휠·블랙박스 데이터의 XML 입출력도 개발했습니다.

### 크리켓 히어로

**기간:** 2017 ~ 2018\
**환경:** Unreal Engine 4, 장비 입력, 게임 AI, 서버 통신

실제 피칭·타격 장비 입력을 게임 플레이와 연결하는 스포츠 게임입니다.

피칭 머신과 투수 캐릭터를 동기화하고, 실제 타격 데이터를 게임 속 공의 움직임으로 변환했습니다. 타구에 반응하는 수비수 AI, 게임 연출과 진행 로직, 서버 데이터 송수신을 구현했습니다.

### 모바일 VR 홈쇼핑

**기간:** 2019.01 ~ 2019.04\
**환경:** AWS Sumerian, HTML, JavaScript

모바일 VR 공간에서 상품을 3D로 살펴보고 구매 페이지로 이동하는 쇼핑 프로젝트입니다.

VR 공간과 사용자 이동, 상품 오브젝트의 회전·확대, 씬 전환을 구현했습니다. 상품 페이지와 데이터 입출력을 연결하고 가상 공간 안에서 영상을 재생하는 기능도 개발했습니다.

## 게임 프로젝트

### 결혼하자! Shake It!

**기간:** 2014 ~ 2016

게임 UI 설계·디자인과 클라이언트 기능을 담당했습니다. 추첨형 아이템 획득 시스템, 아이템 도감과 시나리오 해금 기능을 구현했습니다.

[grid]
![게임 전체 화면과 주요 상태 UI — 2016년 프로토타입](/assets/projects/shake-it/main-ui.webp)
![클리커 플레이 화면 — 2016년 프로토타입](/assets/projects/shake-it/gameplay.webp)
[/grid]

### Mist Island

**기간:** 2014 ~ 2016

플레이어 이동과 UI·인벤토리, 단서 수집 시스템을 구현했습니다. 이벤트 오브젝트가 소리·빛·냄새의 흔적을 남기도록 구성해 탐색 흐름과 연결했습니다.

[grid]
![병원 레벨의 공간 배치 작업 — 2016년 개발 화면](/assets/projects/mist-island/hospital-layout.webp)
![야외 필드의 지형과 환경 구성 — 2016년 개발 화면](/assets/projects/mist-island/field.webp)
[/grid]

### Night Guard: Hospital

**기간:** 2014 ~ 2016\
**환경:** Unreal Engine, Behavior Tree, NavMesh, Scene Capture, Material Instance

게임 콘셉트와 AI 행동을 설계하고 관련 클라이언트 기능을 구현했습니다. Behavior Tree·NavMesh 기반 AI 이동과 CCTV·다중 감시 모니터 연출을 구성했습니다.

[grid]
![CCTV 다중 감시 화면 — 2015년 프로토타입](/assets/projects/night-guard/cctv.webp)
![CCTV 전환 로직을 구성한 Unreal Blueprint 일부](/assets/projects/night-guard/blueprint.webp)
[/grid]

## 개발 워크플로 자동화

**기간:** 2026.05 ~ 2026.07\
**환경:** GitHub Actions, GitHub API, Linear, Slack, 테스트 자동화

PR 리뷰, Linear 이슈와 배포 상태를 팀 채널에서 추적하기 위한 자동화를 개발했습니다.

페이지네이션된 Slack 스레드 검색과 Linear 식별자 노출, 리뷰 댓글 묶음과 라벨 동작을 구현했습니다. 관련 스크립트·테스트·문서를 함께 작성했습니다.

워크플로 코드 병합과 검증 성공은 확인됐지만, 실제 전달 성공률이나 조직 단위 효과는 별도 자료가 없어 이 페이지에는 포함하지 않았습니다.

---

경력의 시간 순서와 문제 해결 방식은 [경력 페이지](/career/)에서 확인할 수 있습니다.
