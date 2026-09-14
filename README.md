# Jacob / Dev Notes

[Firefly](https://github.com/CuteLeaf/Firefly) 테마를 기반으로 만든 개인 기술 블로그입니다.

## 로컬 실행

Node.js 24와 pnpm 11이 필요합니다.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

글은 `src/content/posts`에 Markdown 또는 MDX 파일로 추가합니다. 공개 전에 아래 명령으로 확인합니다.

```bash
pnpm check
pnpm type-check
pnpm build
```

`main` 브랜치에 반영되면 GitHub Actions가 GitHub Pages용 정적 사이트를 빌드하고 배포합니다. 저장소의 **Settings → Pages → Source**는 `GitHub Actions`로 설정해야 합니다.

## 프로젝트 전시

`/projects/`는 Firefly의 프로젝트 전시 방식을 이 블로그에 맞춘 카드 목록입니다.
`src/content/projects/`에 Markdown 또는 MDX 파일을 추가하면 목록과 개별 상세 페이지가 생성됩니다.
기존 프로젝트의 본문과 이미지는 각 파일로 이전했습니다.

```yaml
---
title: "프로젝트 이름"
description: "목록에 표시할 간단한 설명"
category: "3D 콘텐츠 제작 도구"
period: "2026.04 ~ 2026.08"
order: 100
image: "/assets/projects/example/cover.webp"
detailImage: "/assets/projects/example/editor.webp"
tags: ["React", "Rust"]
status: "developing"
draft: false
link:
  - label: "GitHub"
    value: "https://github.com/owner/repository"
---
```

파일 이름이 주소가 됩니다. 예를 들어 `shotloom.md`는 `/projects/shotloom/`입니다.
`order`가 클수록 먼저 표시되고, 같으면 선택 필드 `published`의 최신 날짜순으로 정렬됩니다.
`image`에는 공개 경로, HTTP(S) URL 또는 문서 기준 상대 경로를 사용할 수 있습니다.
상세 첫 이미지에 실제 작업 화면을 쓰려면 선택 필드 `detailImage`를 지정합니다.
목록은 `image`를 유지하고, 상세는 `detailImage`가 없으면 `image`를 사용합니다.
이미지를 생략하면 테마 색상의 기본 표지가 표시됩니다.

상태는 `planning`, `developing`, `published`, `archived`를 지원합니다.
생략하면 `unspecified`(상태 미지정)이며, 참여 기간만으로 제품의 출시·운영 상태를 추정하지 않습니다.
`draft: true`인 프로젝트는 개발 미리보기에는 표시되고 배포 빌드에서는 제외됩니다.
검색과 분야·상태 필터는 URL에 저장되어 새로고침과 뒤로 가기에서 복원됩니다.

## Credits

Based on [Firefly](https://github.com/CuteLeaf/Firefly), originally derived from [Fuwari](https://github.com/saicaca/fuwari), and distributed under the MIT License.
