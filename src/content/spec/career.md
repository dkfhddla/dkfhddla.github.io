# 게임 개발에서 3D 콘텐츠 제작 도구까지

안녕하세요. 게임과 VR 클라이언트 개발을 거쳐 3D 콘텐츠 제작 도구를 개발해 온 심현보입니다.

Unreal Engine 기반 런타임 편집기부터 React·Rust 기반 3D 편집기까지 경험했습니다. 사용자의 편집 결과가 UI, 엔진, 저장, 미리보기와 내보내기에서 일관되게 동작하도록 만드는 문제를 주로 다뤘습니다.

- Email: `dkfhddla@naver.com`
- GitHub: [github.com/dkfhddla](https://github.com/dkfhddla)

## 3D 편집 도구를 만드는 개발자입니다

3D 편집기의 기능은 화면 안에서만 끝나지 않습니다.

사용자가 Timeline에서 Clip을 옮기면 재생 위치와 Shot 경계가 달라질 수 있습니다. 이 결과는 Undo/Redo와 저장에 반영되어야 하고, 프로젝트를 다시 열거나 이미지와 영상으로 내보낸 뒤에도 같아야 합니다.

저는 이 흐름을 UI와 엔진의 개별 기능으로 나누기보다 하나의 편집 경험으로 다룹니다. 요구사항을 상태, 소유권, 명령과 입출력 계약으로 구체화하고 각 단계의 결과가 일치하는지 확인합니다.

주로 다음과 같은 영역을 개발했습니다.

- Timeline·Sequence·Track·Clip·Shot·Camera 편집 모델
- Animation·Action·Interaction·IK·Pose 편집
- React·TypeScript UI와 Rust 코어·엔진 연동
- Unreal Engine 기반 런타임 편집 도구
- Undo/Redo, 저장·복구와 버전 추적
- 3D 자산 Catalog·Resolver·전달 시스템
- 이미지·영상·Shader·VFX 산출물 Export

## 게임 개발에서 제작 도구까지

2014년부터 2016년까지 Unity와 Unreal Engine을 사용해 게임을 기획하고 클라이언트를 개발했습니다.

게임 UI와 인벤토리, 수집·해금 시스템부터 플레이어 이동, 전투와 이벤트를 구현했습니다. Behavior Tree와 NavMesh를 이용한 AI, Scene Capture와 Material Instance를 활용한 CCTV 연출도 다뤘습니다.

2017년부터 2018년까지 주식회사 보라브이알에서 VR 플랫폼, 시뮬레이터와 게임 클라이언트를 개발했습니다.

가상 갤러리 제작·공유 플랫폼, ADAS 테스트 자료를 만드는 주행 시뮬레이터, 실제 피칭·타격 장비와 연동되는 크리켓 게임을 개발했습니다. 전시·모델하우스 VR의 공간 구성과 상호작용도 구현했습니다.

2019년에는 AWS Sumerian 기반 모바일 VR 홈쇼핑을 외주로 개발했습니다.

사용자가 이동할 수 있는 가상 공간을 구성하고 상품 3D 오브젝트의 회전·확대, 씬 전환, 구매 페이지 연결, 상품 데이터 입출력과 영상 재생 기능을 구현했습니다.

2021년부터 2026년까지 주식회사 시나몬에서 3D 콘텐츠 제작 도구의 클라이언트와 편집 시스템을 개발했습니다.

Unreal Engine 기반 런타임 편집 도구에서 시작해 React UI와 Rust 엔진을 연결하는 구조까지 담당 범위를 확장했습니다.

## 3D Timeline·Shot·Camera 편집기

사용자가 캐릭터 애니메이션과 카메라 연출을 시간축에서 구성하는 Unreal Engine 기반 제작 도구를 개발했습니다.

Track·Clip 기반 Timeline을 구현하고 재생 위치를 동기화했습니다. Clip Drag & Drop, 다중 선택·이동과 Ripple 편집도 개발했습니다.

Clip의 길이나 위치가 바뀌면 인접 Clip과 Shot 경계에 영향을 줄 수 있습니다. 단일 Clip의 변경이 Shot 경계를 넘어갈 때 적용되는 전파 규칙을 구현하고, 사용자가 편집 범위를 명시적으로 제어할 수 있도록 상태와 명령의 경계를 정리했습니다.

Camera Clip 생성·편집, 카메라 조작과 preset·preview 흐름도 구성했습니다. Undo/Redo 범위를 개선하고 프로젝트 버전 추적, backup·rollback과 반복 Export 기능을 연결했습니다.

이 프로젝트에서는 화면 UI뿐 아니라 편집 상태, 엔진 평가와 저장 모델을 하나의 흐름으로 다뤘습니다.

## AI 에이전틱 개발로 전환한 Shotloom

CinevStudio에서 약 4년 반 동안 축적한 기획과 제작 도구 경험을 바탕으로, Shotloom을 6개월 동안 새롭게 개발했습니다.

기존 코드를 옮긴 것이 아니라, 축적된 기획을 React·TypeScript 웹 UI와 Rust 런타임에 맞게 다시 설계했습니다. Timeline·Shot·Camera·Animation 등 핵심 편집 경험을 AI 에이전틱 개발 방식으로 구현하고 검증했습니다.

React 기반 웹 UI와 Rust 런타임을 연결해 장면, Timeline, Animation, Camera와 Pose를 편집하는 도구를 구성했습니다.

React 입력과 Rust 엔진 카메라 사이의 브리지를 구현하고, Timeline transport·playhead와 엔진 평가를 동기화했습니다. Animation import부터 Performance Clip 생성과 재생까지 이어지는 흐름도 연결했습니다.

Camera Clip 생성과 장면 자산 배치 기능을 구현했으며, 손·발 IK와 pole·rotation, gizmo를 이용해 Clip 단위로 Pose를 편집하는 기능을 개발했습니다.

Pose 상태가 다른 영역에 흩어지지 않도록 Clip이 소유하는 데이터로 전환했습니다. 이후 reload·Undo·preview·이미지 export에서도 같은 결과가 유지되는지 검증했습니다.

UI, 브리지, 코어, 엔진, 저장과 CLI를 함께 변경해야 하는 기능은 한 번에 구현하지 않았습니다. 소유권 전환, transaction, limb solve, viewport interaction과 export 검증 순서로 나누어 진행했습니다.

## 3D 자산 Catalog·전달 시스템

편집기가 여러 출처의 3D 자산을 일관된 방식으로 검색하고 가져올 수 있도록 자산 전달 시스템을 설계했습니다.

Catalog에서 Resolver를 거쳐 실제 자산 데이터를 받는 전달 계약을 만들고, 로컬 개발 환경과 호스팅 환경에서 사용하는 API·runtime 경계를 구성했습니다.

동일한 자산 버전을 식별하기 위해 deterministic revision과 content-addressed URL을 적용했습니다. 검증된 generation만 원자적으로 게시하도록 빌드 흐름도 구성했습니다.

공개 환경 smoke test와 consumer certification을 추가하고, 이전 계약과 fallback을 제거한 뒤 새 버전으로 전환했습니다.

공급자와 소비자를 함께 변경해야 했기 때문에 Schema·문서·테스트로 호환 경계를 고정했습니다. 검증에 실패한 산출물이 정상 버전으로 노출되지 않도록 검증과 게시 단계도 분리했습니다.

## 캐릭터 Action·Interaction 편집

캐릭터와 오브젝트의 애니메이션·위치·상태 변화를 편집하고 재생하는 Action 시스템을 개발했습니다.

ActionSet 저장·불러오기와 데이터 편집 기능을 구현하고, 캐릭터 stance와 Interaction 위치, IK·Attach 규칙을 검토했습니다.

기획이 확정되지 않은 영역을 미리 추상화하기보다 실제 Action 데이터를 먼저 축적한 뒤 구조를 확장하는 방향을 제안했습니다. Intro·Middle·Outro로 구성된 가변 길이 Action도 작은 단계로 나누어 검증했습니다.

자동 계산이 모든 결과를 결정하지 않도록 사용자 수동 보정과 시스템 책임의 경계를 구분했습니다.

## 문제를 해결하는 방식

모호한 요구사항은 곧바로 코드로 옮기기 어렵습니다. 먼저 어떤 상태가 존재하는지, 누가 상태를 소유하는지, 어떤 명령이 상태를 변경하는지 정리합니다.

UI와 엔진도 분리된 기능으로만 보지 않습니다. 사용자 입력부터 엔진 평가, 저장, 복구와 출력까지 이어지는 전체 흐름을 확인합니다.

변경 범위가 큰 기능은 검증 가능한 단계로 나눕니다. 각 단계에서 동작과 데이터 경계를 확인한 뒤 다음 범위로 확장해 실패 원인을 좁힐 수 있도록 합니다.

구현 완료와 실제 제품 반영도 구분합니다. 코드 작성, 리뷰, 병합, 배포와 제품에서의 동작을 각각 확인하고 검증된 결과만 설명합니다.

## 기술

- **Engine:** Unreal Engine 4·5, Unity
- **Language:** C++, Rust, TypeScript, JavaScript
- **UI:** UMG, React, ViewModel, 데이터 바인딩
- **3D Editing:** Sequence, Timeline, Track, Clip, Shot, Camera, IK
- **Backend·Data:** Node.js, AWS, JSON Schema, XML
- **Infrastructure:** GitHub Actions, CI, Docker
- **AI-assisted Development:** AI 에이전틱 개발, 요구사항 기반 구현·검증
- **VR:** VIVE, AWS Sumerian

## 경력 요약

- **주식회사 시나몬** — 3D 콘텐츠 제작 도구 개발, 2021 ~ 2026
- **VR 홈쇼핑 외주 개발** — AWS Sumerian 기반 모바일 VR, 2019.01 ~ 2019.04
- **주식회사 보라브이알** — VR 플랫폼·시뮬레이터·게임 개발, 2017 ~ 2018
- **게임 개발 창업** — Unity·Unreal Engine 게임 기획·클라이언트 개발, 2014 ~ 2016

## 학력

한국산업기술대학교 게임공학과 졸업
