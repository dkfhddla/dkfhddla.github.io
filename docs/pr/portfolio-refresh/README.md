# 포트폴리오 재정비 화면 검증

기존 Firefly 테마와 블로그 홈을 유지하며 경력·프로젝트 문서를 재정비했습니다. 프로젝트 목록·상세·경력·소개는 원래 MainGridLayout과 Markdown 컴포넌트를 사용합니다. 기존 `/posts/` 글과 아카이브·RSS 주소를 유지합니다. [main과 동일 크기의 전후 비교](../theme-preservation/README.md)도 준비했습니다.

## 화면

| 화면 | 데스크톱 1440px | 모바일 390px |
| --- | --- | --- |
| 홈 | [스크린샷](home-desktop.png) | [스크린샷](home-mobile.png) |
| CineV Studio | [스크린샷](cinevstudio-desktop.png) | [스크린샷](cinevstudio-mobile.png) |
| 경력 | [스크린샷](career-desktop.png) | [스크린샷](career-mobile.png) |

프로덕션 빌드의 실제 브라우저 화면입니다. 프로젝트에 등장하는 화면·영상은 팀 제품 자료이며, 개인 기여는 각 페이지에서 별도로 설명합니다. 새 SpicePro 이미지 2장은 외부 공개가 확인된 실제 실행 화면입니다.

## 재현

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm check
pnpm type-check
pnpm build
pnpm exec playwright install chromium
pnpm test:portfolio
```

Playwright는 데스크톱·모바일에서 다음 동작을 검증합니다.

- 주요 페이지의 제목·언어·가로 넘침과 WCAG A/AA 자동 검사. 기존 테마의 색 대비 결과는 별도 첨부하고 나머지 위반은 실패 처리
- 대소문자·공백을 포함한 검색, 참여 형태 필터, 결과 없음과 초기화
- 목록·상세·뒤로/앞으로 이동의 반복, 프로젝트·경력·기존 블로그 간 Swup 이동
- 키보드 이미지 확대·Escape 닫기·초점 복귀와 표 가로 스크롤 포커스
- 모든 프로젝트의 내부 링크·이미지·목차 앵커와 기존 글 URL
- JavaScript가 꺼진 상태의 본문과 키보드 기본 링크 탐색
- 로컬 프로젝트 시연 영상의 로드와 재생

원래 light 테마의 색 대비 위반은 유지되며 전체 접근성 통과로 보고하지 않습니다. [실제 비교 결과와 검사 범위](../theme-preservation/README.md)를 참고하세요. 외부 영상은 공개 응답·제목을 확인했고, 원격 플레이어의 지역·계정별 재생까지 자동 테스트하지 않습니다. CI는 검증만 실행합니다.
