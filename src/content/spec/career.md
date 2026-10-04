약 **8년의 개발 경력**을 가진 3D 제작 도구 개발자입니다. Timeline·Camera·Character Animation, Map Editor와 Action·Interaction 시스템을 중심으로 개발했습니다. UI에서 바꾼 값이 엔진의 평가, 저장·복구와 출력까지 같은 의미로 이어지도록 연결합니다.

## 핵심 경험

| 분야 | 직접 다룬 개발 |
| --- | --- |
| Unreal Engine·C++ | 런타임 Timeline·Shot·Camera 편집, UMG·Blueprint·ViewModel, Map Editor |
| 캐릭터·상호작용 | Action·Animation·IK·Attach, 자세와 소품 상태, 모션 생성 모델의 클라이언트 연동 |
| 편집 데이터 | Undo/Redo, Save/Load, 저장 버전 추적과 백업·실패 복구 |
| 웹·Rust | React·TypeScript UI와 Rust·Bevy 엔진의 명령·이벤트 연결, Clip별 Pose 편집 |
| 자산·검증 | Catalog·Resolver API, 파일·메타데이터 일관성, 빌드와 전달 경로 검증 |
| 개발 워크플로 | Codex·MCP 기반 요구사항 구체화, 구현 범위·계약 검토, 자동 테스트와 동료 리뷰 |

<span id="cinnamon"></span>

## 시나몬 2021.07-2026.08

**프로덕트 클라이언트 개발 · 2021.07.05–2026.08.31**

3D 영상 제작 도구의 초기 런타임 기능부터 편집 시스템과 웹·Rust 기반 후속 도구까지 참여했습니다.

- **[SpicePro](/projects/spice-pro/):** 런타임 Timeline·Action, 캐릭터 커스터마이징 UI와 ViewModel, Map Editor를 구현했습니다. Action 정보를 실제 장면에서 입력하는 툴과 DataTable 기반 UI 자동 생성을 개발했습니다.
- **[CineV Studio](/projects/cinevstudio/):** Timeline·Shot·Camera와 캐릭터 상호작용, UI 구조, 저장·복구와 CLI 출력을 담당했습니다. Shot 리플 편집과 MetaAction·UnitAction은 동료와 공동 개발했고, UI·상태 책임은 구현과 코드리뷰로 개선했습니다. 정확한 전체 참여 기간은 확정하지 않았습니다.
- **[Shotloom](/projects/shotloom/):** React·TypeScript UI와 Rust·Bevy 엔진을 연결해 뷰포트·카메라·타임라인·Pose·IK 편집을 개발했습니다. 클립의 상태 소유권과 저장·Undo·출력의 일관성을 검토하고 검증했습니다.
- **[Shotloom Asset Library](/projects/asset-library/):** 자산 공급 프로젝트의 초기 구축과 API 런타임, 검증된 파일 묶음의 게시·제공을 담당했습니다. 팀에서 정의한 계약과 편집기 소비 경로를 맞췄습니다.

2026년 1–2월 UI/UX TF에서는 **개발자 2명(본인 포함), 기획자 1명, UI 디자이너 1명**의 작업을 조율했습니다. 우선순위·담당 범위·작업 의존성, 디자인 검토와 공유를 맡았습니다.

Shotloom 참여는 2026년 4월부터 시작했고, 퇴사 후 9월 둘째 주까지 구현 마무리에 추가 참여했습니다. 이 기간은 시나몬 재직 기간에 합산하지 않습니다. Asset Library는 2026.05.28–08.25의 참여 기록이며 인수인계 문서 작성을 포함합니다.

<span id="soulx"></span>

## SOUL X · 프리랜서 2019.01–2019.10

- **[AWS Sumerian 가상 홈쇼핑](/projects/vr-shopping/):** 상품 선택·3D 관찰·추가 정보 표시·구매 페이지 연결 등 전반적인 로직과 상호작용을 개발했습니다. 프로젝트 기록은 2019.01–04이며, 전체 프리랜서 기간과 구분합니다.
- **[Unreal 교통 시스템](/projects/autonomous-driving-assets/):** 도로·Spline 차량 주행·신호등 에셋을 개발하고 설정·사용 설명서를 작성했습니다. 에셋 스토어 등록을 목표로 했으며, 판매 완료를 주장하지 않습니다.

<span id="boravr"></span>

## 보라VR 2017.01–2018.12

**VR·시뮬레이터·게임 클라이언트 개발**

- **[Monopic Editor / Viewer](/projects/monopic/):** 기존 Editor를 이어받아 도면·공간 편집을 개발하고, Viewer와 서버를 새로 개발했습니다. Spline·Instance Mesh 기반 공간 구성, 미디어 배치와 서버·DB 연결을 다뤘습니다.
- **[ADAS 시뮬레이터](/projects/adas-simulator/):** 2018.01–12, UE4 C++·Blueprint 프로그래밍을 혼자 담당했습니다. Spline 도로 도구, 신호·차량 AI와 XML·화면 추출을 구현했습니다. 속도별 전방 Collision Box 위치와 앞차 거리 기반 속도 조절을 적용하고, 이미지 저장을 별도 스레드로 분리했습니다.
- **[크리켓 히어로즈](/projects/cricket-hero/):** 피칭·타격 장비 입력을 게임 내 공·캐릭터와 연결하고 수비수 AI·게임 진행·서버 통신을 개발했습니다.
- **[시등도](/projects/sideungdo/) · [Luxury Residence](/projects/luxury-residence/):** 공간·씬 구성, 플레이어 이동과 레벨 전환, VR·트레드밀·키오스크 등 장비 연동을 담당했습니다.
- **[Diamond City AR](/projects/diamond-city-ar/):** Unity·C# 기반 건축 AR 콘텐츠의 동작 프로세스를 개발했습니다.

## 개인·팀 프로젝트와 초기 외주

2014–2016년 개인·팀 작업에서 기획·일정 관리와 게임 기능 개발을 경험했습니다. 이 기간을 회사 재직 경력에 더하지 않습니다.

- **[Night Guard: Hospital](/projects/night-guard/):** 초기 팀의 기획·PM을 맡고, Unreal 프로토타입을 혼자 개발했습니다. Behavior Tree·NavMesh AI와 Scene Capture·Material Instance 기반 CCTV를 구현했습니다. 2014년 사업계획서 경진대회 팀 우수상을 받았습니다.
- **[미스트 아일랜드](/projects/mist-island/):** 아이템·인벤토리·Physics Handle 상호작용과 레벨을 개발하며 팀 일정 관리에 참여했습니다.
- **[Shake It!](/projects/shake-it/):** Unity·C#으로 데이터 기반 해금·보상·타이머·업그레이드 기능과 UI·배경 디자인을 담당했습니다.
- **[C2L 턴제 RPG 프로토타입](/projects/lethe/) · [스시런](/projects/research-runner/):** 보라VR 입사 이전 외주로 전투·턴제·UI와 타일 기반 맵 생성을 개발했습니다. 정확한 개발 기간은 확정하지 않았습니다.
- **[IOCP 서버](/projects/iocp-server/):** 졸업 작품에서 C++ 접속·패킷 처리와 게임 로직의 서버 처리를 담당했습니다.

## AI와 함께 개발하는 방식

Shotloom과 Asset Library에서는 Codex를 활용한 구현·리뷰를 진행했습니다. 본인은 원하는 동작과 요구사항을 구체화하고, 이슈를 나누며 계약·모듈 경계와 리뷰 결과를 검토했습니다. 자동 테스트를 기본으로 하고 직접 조작해 결과를 확인했습니다.

Ouroboros MCP의 인터뷰로 빠진 요구사항과 구현 방향을 정리했고, Slack·GitHub·Linear·Notion MCP로 설계 공유·PR 리뷰·작업 기록·문서 작성을 연결했습니다. Codex 구현 → Claude 리뷰 → 동료 리뷰는 팀 공통 절차였습니다.

## 학력과 연락처

한국산업기술대학교 게임공학과 졸업.

Email: dkfhddla@naver.com · [GitHub](https://github.com/dkfhddla)
