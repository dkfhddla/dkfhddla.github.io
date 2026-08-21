# Jacob / Dev Notes

AstroWind를 기반으로 만든 개인 기술 블로그입니다.

## 로컬 실행

Node.js 22.22.3 이상이 필요합니다.

```bash
npm ci
npm run dev
```

글은 `src/data/post`에 Markdown 또는 MDX 파일로 추가합니다. 공개 전에 아래 명령으로 전체 사이트를 확인합니다.

```bash
npm run check
npm run build
```

`main` 브랜치에 반영되면 GitHub Actions가 GitHub Pages용 정적 사이트를 빌드하고 배포합니다. 저장소의 **Settings → Pages → Source**는 `GitHub Actions`로 설정해야 합니다.

## Credits

Based on [AstroWind](https://github.com/arthelokyo/astrowind), distributed under the MIT License.
