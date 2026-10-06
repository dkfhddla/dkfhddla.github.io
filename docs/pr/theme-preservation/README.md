# 기존 Firefly 테마 유지 검증

기준은 main `791175e`입니다. PR #20에 추가했던 별도 포트폴리오 레이아웃을 제거하고, 기존 배너·색상·폰트·카드·사이드바·드롭다운 내비게이션·블로그 홈과 Swup 탐색을 복원했습니다. 경력·프로젝트 문서의 사실 정정과 개인 기여 보완은 유지합니다.

`src/config`, `src/layouts`, `src/styles`, `src/components`는 main과 동일합니다. Astro 설정과 홈·소개·경력 라우트도 main과 동일합니다. 프로젝트 목록은 CineV 기여 문구 한 줄만 보완했고, 상세는 기존 스타일로 본인 역할과 확인된 결과를 표시합니다. [소스 비교 결과](theme-source-check.json)를 확인할 수 있습니다.

## 동일 화면 크기 비교

Chromium에서 main과 수정본을 각각 1440×1000 / 390×844, 같은 light 색상·한국어 locale·reduced motion 조건으로 캡처했습니다. 두 환경 모두 로컬 개발 툴바만 캡처에서 제외했습니다. 아래 파일은 화면 크기 그대로 저장했고, 콘텐츠가 달라진 경력·상세도 같은 공통 테마가 유지되는지 비교했습니다.

| 화면 | main 데스크톱 | 수정 데스크톱 | main 모바일 | 수정 모바일 |
| --- | --- | --- | --- | --- |
| 홈 | [main](home-desktop-main.png) | [수정](home-desktop-updated.png) | [main](home-mobile-main.png) | [수정](home-mobile-updated.png) |
| 프로젝트 목록 | [main](projects-desktop-main.png) | [수정](projects-desktop-updated.png) | [main](projects-mobile-main.png) | [수정](projects-mobile-updated.png) |
| 경력 | [main](career-desktop-main.png) | [수정](career-desktop-updated.png) | [main](career-mobile-main.png) | [수정](career-mobile-updated.png) |
| CineV Studio | [main](cinevstudio-desktop-main.png) | [수정](cinevstudio-desktop-updated.png) | [main](cinevstudio-mobile-main.png) | [수정](cinevstudio-mobile-updated.png) |

## 접근성 범위와 남은 사항

전체 WCAG A/AA 자동 검사 결과는 [원본 비교 JSON](accessibility-comparison.json)에 기록했습니다. 모든 비교 화면에서 가로 넘침은 없습니다. 경력의 새 표는 기존 가로 스크롤 래퍼에 키보드 포커스를 추가해 조작할 수 있도록 보완했습니다.

기존 main의 light 테마에 색 대비 위반이 있습니다. 수정본도 같은 테마 토큰을 사용하므로 해당 위반이 남으며, 문서의 링크·태그 수에 따라 검출 노드 수는 달라집니다. 전체 접근성 통과로 보고하지 않습니다. 브라우저 회귀 검사는 색 대비 결과를 별도 첨부하고 다른 WCAG 위반은 실패로 처리합니다.

JavaScript 없이도 본문과 기본 링크는 제공되며 키보드로 목록↔상세를 이동할 수 있습니다. 원래 테마의 검색·필터·모바일 메뉴·이미지 확대는 JavaScript를 사용합니다. 보조 기술별 사용성 및 외부 플레이어 전체 조작은 자동 검사의 범위에 포함하지 않습니다.
