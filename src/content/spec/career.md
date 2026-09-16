# 3D 콘텐츠 제작 도구 · Unreal Engine 클라이언트 개발자

Unreal Engine·C++ 기반 게임·VR 클라이언트에서 출발해 Timeline·Shot·Camera와 Action·IK·Pose 편집 모델을 설계·구현해 온 심현보입니다. 최근에는 React·TypeScript UI와 Rust 코어·엔진, 3D 자산 전달 시스템까지 담당하며 **사용자 입력부터 엔진 평가, 저장·복구와 출력까지 이어지는 편집 흐름**을 개발했습니다.

- Email: `dkfhddla@naver.com`
- GitHub: [github.com/dkfhddla](https://github.com/dkfhddla)

## 핵심 역량

- **실시간 3D 편집:** Timeline·Sequence·Track·Clip·Shot과 Camera·Animation 편집, Action·Interaction 및 IK·Pose·Gizmo 구현
- **엔진·클라이언트:** Unreal Engine·C++, UMG·Blueprint·ViewModel을 활용한 런타임 제작 도구와 UI 책임 구조 설계
- **웹·Rust 제작 도구:** React·TypeScript UI, Typed Bridge와 Rust·Bevy 엔진을 연결하는 입력·상태·평가 흐름 구현
- **저장·복구와 검증:** Undo/Redo, Save/Restore, 프로젝트 버전 관리·Backup/Rollback, Preview·Export 결과의 일관성 검증
- **3D 자산 파이프라인:** Catalog·Resolver 전달 계약, Schema와 CI 검증을 통한 자산 공급자·편집기 연동

## 대표 프로젝트

### [Shotloom — 웹 UI부터 3D 엔진까지](/projects/shotloom/)

**React · TypeScript · Rust · Bevy | 2026.04 ~ 2026.09 활동 기록 기준**

Viewport·Camera 조작, Timeline·Animation과 Performance Clip, 손발 IK·Pose 편집을 구현했습니다. 수동 자세를 Clip별로 저장하도록 상태 소유권을 정리하고, 다시 열기·Undo·미리보기·PNG 출력의 일관성을 자동 테스트로 검증했습니다. 3D 자산을 가져오는 편집기와 자산 전달 계약도 함께 개발했습니다.

### [CineV Studio — Unreal 기반 편집 시스템](/projects/cinevstudio/)

**Unreal Engine · C++ · UMG · Blueprint | 2023.07 ~ 2026.05 활동 기록 기준**

Action·Timeline·Shot·Camera 편집과 저장·복구, CLI 출력 기능을 개발하고, Shot 간 Ripple 편집은 동료와 함께 구현했습니다. UI 구조와 책임 경계를 설계하고 팀 개발 가이드로 정리했습니다. 2026년 사용성 개선 TF·UI/UX Unit에서는 개발·기획·UI 디자인 사이의 목표·우선순위·작업 의존성을 조율했습니다.

### [Spice Pro — 런타임 제작 도구의 기반](/projects/spice-pro/)

**Unreal Engine · Sequence · UMG · ViewModel**

런타임 Timeline과 Animation·Prop 제어용 Action 시스템, 캐릭터 커스터마이징 UI를 개발했습니다. ViewModel로 UI와 기능 코드의 책임을 나눴고, 초기 제작 도구 작업에서는 Map Editor와 Perforce 협업 환경을 구축했습니다.

초기 런타임 도구에서 편집 시스템 전반으로, 이후 웹 UI·Rust 엔진·자산 전달까지 담당 범위를 넓혀 왔습니다.

## 경력 상세

### 주식회사 시나몬 — 3D 콘텐츠 제작 도구 개발 | 2021 ~ 2026

#### Timeline·Shot·Camera와 편집 상태

Track·Clip 기반 Timeline과 재생 위치 동기화, Clip Drag & Drop, 다중 선택·이동을 구현했습니다. ShotBand 전환과 전용 위젯 이동을 담당하고, 동료와 함께 Shot 간 Ripple 편집을 확장했습니다.

클립을 옮기거나 길이를 바꾸면 주변 클립과 Shot 경계도 영향을 받습니다. 편집 범위를 사용자가 명시적으로 제어하는 방향으로 개선하고, Camera Clip 생성·편집과 카메라 조작·미리보기를 연결했습니다.

Shot 사이의 고정 폭 영역을 반영한 프레임·화면 좌표 변환을 공통화하고, 앞 Shot의 끝과 다음 Shot의 시작을 구분해 경계 드래그를 처리했습니다. [좌표 변환과 경계 처리 사례](/projects/cinevstudio/#샷-경계에서-시간과-화면-좌표-맞추기)

프로젝트 버전 관리와 저장 백업·복구를 구현하고, 동료의 JSON 복구·버전 비교 보강을 리뷰하고 통합했습니다. Shader·VFX·MP4 출력용 CLI 기능도 개발했습니다.

#### Action·Interaction과 AI 모션 연동

ActionSet 저장·불러오기와 UnitActionData Editor, 캐릭터 stance 관리를 구현했습니다. Interaction의 위치·IK·Attach 처리에서 자동 계산과 사용자 수동 보정의 범위를 구분했습니다.

기획이 확정되지 않은 부분은 실제 Action 데이터를 먼저 검증한 뒤 구조를 확장하도록 제안했습니다. 가변 길이 Action은 Intro·Middle·Outro로 나누고 단계별 구현·검증 범위를 정리했습니다.

WANDR 모션 생성 모델을 Unreal 편집기에 연동했습니다. 모델 개발자와 위치·회전 입력 계약을 맞추고, 첫 프레임 회전 불일치를 진단해 수정 모델의 클라이언트 적용을 검증했습니다.

Unreal NNE로 PoseToPose·WANDR의 모델 생성, 입력 형태 설정, 입출력 버퍼 연결과 추론 실행을 공통화했습니다.

#### UI 구조와 직군 간 협업

새 UI 시스템의 Scene Editor 적용과 Timeline 위젯 구현을 담당했습니다. Base는 기본 외형과 입력 전달, Component는 디자인 변형, View는 위젯 조합과 편집 동작을 맡도록 책임을 정리하고 C++·Blueprint 연결 가이드를 작성했습니다.

사이드패널의 탐색·전환을 정리하고, 편집 종료 시 복원 가능한 이전 패널로 돌아가는 흐름을 구현했습니다.

2026년 사용성 개선 TF·UI/UX Unit 리드로 개발·기획·UI 디자인 직군의 목표와 우선순위를 정리했습니다. 요구사항을 실행 가능한 작업으로 나누고 담당 범위·의존성·결정 사항을 조율했습니다.

#### Shotloom — 상태 소유권부터 저장·출력까지

React 입력과 Typed Bridge를 Rust·Bevy 런타임에 연결하고, Viewport·Camera·Timeline·Animation 편집을 구현했습니다.

캐릭터에 공통으로 남던 수동 자세는 클립 전환 시 다른 동작에 영향을 줄 수 있었습니다. 자세를 Performance Clip이 소유하도록 바꾸고, 편집 중 미리보기와 확정된 저장 상태를 나눴습니다. 손발 IK·Gizmo 조작의 확정·취소, Undo/Redo·다시 열기·미리보기·PNG 출력을 자동 테스트로 검증했습니다.

Performance Clip의 재생 속도·Trim·Slip을 구현하면서 원본 모션 시간과 타임라인 시간을 분리했습니다. 편집 후에도 Pose Key가 같은 모션 시점을 유지하도록 저장·평가·Undo/Redo·출력의 시간 규칙을 맞췄습니다.

#### 3D 자산 전달 시스템

여러 출처의 3D 자산을 검색하고 가져오기 위한 Catalog·Resolver 전달 계약을 설계·구현했습니다. 로컬·호스팅 환경의 API와 Schema를 맞추고, 자산 버전 식별 및 검증을 통과한 산출물만 게시하는 빌드 흐름을 구성했습니다.

공급자와 편집기를 함께 변경하면서 문서·테스트·CI로 호환 범위를 확인했습니다. [자산 전달 시스템 상세 보기](/projects/asset-library/)

### VR 홈쇼핑 외주 개발 | 2019.01 ~ 2019.04

AWS Sumerian 기반 모바일 VR 쇼핑 공간을 개발했습니다. 가상 공간 이동, 상품 3D 오브젝트 회전·확대, 씬 전환·구매 페이지 연결, 상품 데이터 입출력과 영상 재생을 구현했습니다. [프로젝트 보기](/projects/vr-shopping/)

### 주식회사 보라브이알 — VR·시뮬레이터·게임 클라이언트 | 2017 ~ 2018

- **[Monopic Editor·Viewer](/projects/monopic/):** Spline 기반 도면 편집과 Instance Mesh 기반 벽·바닥 생성, 인테리어 자산 배치, 서버·DB와 모바일·PC Viewer 연동
- **[ADAS Simulator](/projects/adas-simulator/):** Spline 도로 제작 도구, 신호등 설정, 주행·신호·표지판에 반응하는 Vehicle AI와 차량 데이터 XML 입출력
- **[Cricket Game](/projects/cricket-hero/):** 피칭 머신과 투수 캐릭터 동기화, 실제 타격 데이터의 게임 내 움직임 반영, 수비수 AI·서버 통신
- **전시·모델하우스 VR:** 공간 구성, 사용자 이동·상호작용·Level 전환과 외부 장비 연동

### 게임 개발 창업 — 기획·클라이언트 개발 | 2014 ~ 2016

Unity·Unreal Engine으로 게임 UI·인벤토리·수집·해금, 플레이어 이동·전투·이벤트를 구현했습니다. Behavior Tree·NavMesh 기반 AI와 Scene Capture·Material Instance를 활용한 CCTV 연출도 개발했습니다.

## 개발과 검증 방식

요구사항을 상태·소유권·명령·입출력 계약으로 구체화하고, 큰 기능은 검증 가능한 단계로 나눕니다. 사용자 입력부터 엔진 평가, 저장·복구·출력까지 이어지는 결과를 확인합니다.

Shotloom에서는 제작 도구 개발 경험을 바탕으로 기능과 모듈 구조를 정의하고 Codex를 구현 보조 도구로 활용했습니다. 결과 코드를 검토하고 사용자 흐름에서 실행하며, 모듈 책임과 상태 경계 및 자동 테스트 결과를 확인했습니다.

구현·리뷰·병합과 배포·제품 반영은 구분해 설명합니다. 프로젝트별 구현 및 검증 범위는 각 상세 페이지에 정리했습니다.

## 학력

한국산업기술대학교 게임공학과 졸업
