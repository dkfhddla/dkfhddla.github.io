---
title: "Shotloom Asset Library"
description: "정적 에셋 라이브러리 V1의 초기 구축부터 V2 API 런타임 설계·구현까지 담당했습니다. 배포용 파일·카탈로그 생성과 다운로드 검증을 기반으로, 목록 조회와 전달 정책을 분리하고 파일·메타데이터의 버전 일관성을 확보했습니다."
category: "3D 콘텐츠 제작 도구"
engagement: "company"
organization: "시나몬"
period: "2026.05 ~ 2026.08"
order: 90
image: "/assets/projects/asset-library/brand-cover.webp"
tags: ["Node.js","API","JSON Schema","Docker","CI"]
---

**역할:** V1 초기 구축, V2 런타임 구조 설계·API 구현, 빌드·발행·검증 경로 구성\
**환경:** Node.js, JSON Schema, SHA-256, Catalog·Resolver, Docker, CI

Shotloom에서 사용할 원본 에셋을 검증하고 배포용 파일·카탈로그를 생성해 전달하는 독립 라이브러리입니다. **로컬 정적 라이브러리 V1을 처음 구축하고, 이후 팀에서 정의한 API 계약을 바탕으로 V2 런타임을 설계·구현했습니다.**

## 직접 맡은 작업

- **V1 초기 구축:** 원본·메타데이터 관리부터 빌드, 정적 서버, 실제 HTTP 검증기, 카탈로그 스키마와 테스트까지 구현했습니다.
- **V2 런타임 설계·구현:** 팀에서 정의한 API 계약을 바탕으로 단일 리스너와 generation 고정 구조를 설계하고 common Catalog·Resolver를 구현했습니다.
- **발행과 런타임 통합:** generation 생성·검증과 원자적 발행, 잠금·복구 강화, 빌드 연결을 진행하고 API·정적 파일·readiness를 통합했습니다.
- **기존 경로 정리:** V2 전환 후 정적 channel·catalog fallback을 제거하고, 콘텐츠 해시 기반 파일 제공은 유지했습니다.

## V1: 에셋 공급의 기반부터 구축

### 외부 통합 전에 독립적으로 검증할 수 있는 경로

호스팅 스토리지나 CDN, 에디터 통합을 결정하기 전에 **원본 에셋에서 실제 다운로드까지 검증할 수 있는 기반**이 필요했습니다. 이후 통합이 검증되지 않은 카탈로그 형식과 파일 경로에 의존하지 않도록, 원본·메타데이터 관리와 빌드·정적 서버·HTTP 검증 도구를 먼저 구축했습니다.

<figure>
  <a class="project-detail-cover no-styling" href="/assets/projects/asset-library/v1-static-library.png" data-no-swup data-fancybox="asset-library-diagrams" data-type="image" aria-label="V1 정적 에셋 라이브러리 구조 확대 보기">
    <img src="/assets/projects/asset-library/v1-static-library.png" alt="원본 에셋과 소스 카탈로그를 빌드해 정적 서버로 제공하고, HTTP 검증 클라이언트가 stable 채널·catalog·파일을 순서대로 확인하는 V1 구조" width="3200" height="1800" loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; margin: 0;">
    <span class="project-cover-hint" aria-hidden="true">확대 보기 ↗</span>
  </a>
  <figcaption>V1 — 원본과 메타데이터 → 정적 산출물 → 실제 HTTP 검증. 이미지를 선택하면 확대할 수 있습니다.</figcaption>
</figure>

### 빌드 결과를 실제 HTTP 응답까지 확인

사람이 작성하는 카탈로그와 원본 파일을 분리해 관리하고, 빌드에서 파일의 SHA-256 해시·바이트 크기·Content-Type을 계산했습니다. 생성한 정적 catalog에는 **파일 내용의 해시로 구분되는 에셋·썸네일 URL**을 담았습니다.

검증 도구는 `stable 채널 → 정적 catalog → 파일 URL`을 따라 실제 HTTP 요청을 보냅니다. 다운로드한 파일의 해시와 크기뿐 아니라 Content-Type·Content-Length·Cache-Control 헤더도 확인하도록 구현했습니다.

이 단계의 범위는 로컬 정적 라이브러리와 검증 도구였습니다. Resolver HTTP API와 인증·권한은 포함하지 않았으며, 에디터 통합이나 외부 CDN 운영 완료를 의미하지 않습니다.

## V2: 목록 조회와 전달 정책을 분리

### 파일 주소를 목록에 직접 넣는 구조에서 확장

V1의 정적 catalog는 실제 파일 URL을 직접 포함했습니다. 전달 방식이 확장돼도 에셋 목록이 저장 위치나 공급자 URL에 묶이지 않도록, V2에서는 **무엇을 사용할 수 있는지 조회하는 역할과 어떻게 전달할지 결정하는 역할**을 분리했습니다.

팀에서 정의한 Catalog·Resolver 계약을 바탕으로 단일 Node.js 런타임 구조를 설계하고, common Catalog·Resolver 구현과 정적 파일 제공 경로를 통합했습니다.

<figure>
  <a class="project-detail-cover no-styling" href="/assets/projects/asset-library/v2-catalog-resolver.png" data-no-swup data-fancybox="asset-library-diagrams" data-type="image" aria-label="V2 Catalog·Resolver 구조 확대 보기">
    <img src="/assets/projects/asset-library/v2-catalog-resolver.png" alt="검증된 generation을 API 런타임에 제공하고, 에디터가 Catalog에서 ref를 받은 뒤 Resolver에서 URL을 조회해 파일을 다운로드하는 V2 구조" width="3200" height="1800" loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; margin: 0;">
    <span class="project-cover-hint" aria-hidden="true">확대 보기 ↗</span>
  </a>
  <figcaption>V2 — 에디터가 목록 조회 → 전달 정보 조회 → 파일 다운로드를 순서대로 수행합니다.</figcaption>
</figure>

- **Catalog:** 에셋의 메타데이터와 참조값(ref)을 제공합니다. ref는 클라이언트가 내부 형식을 해석하지 않고 그대로 전달하는 식별 정보입니다.
- **Resolver:** Context와 ref를 받아 해당 에셋의 전달 URL 등 전달 정보를 반환합니다.
- **Direct bytes:** 에디터가 반환된 URL에서 에셋·썸네일 파일을 다운로드합니다.

Catalog가 내부적으로 Resolver를 호출하는 구조가 아니라, **에디터가 두 API를 순서대로 사용**합니다. 에셋의 목록·전달 정책은 라이브러리에 두고, 가져온 에셋을 병합하고 장면에 적용하는 작업은 에디터의 책임으로 남겼습니다.

| 구분 | V1: 정적 라이브러리 | V2: Catalog·Resolver |
| --- | --- | --- |
| 목록 조회 | stable 채널을 거쳐 정적 catalog 조회 | Catalog API 조회 |
| 목록에 담는 정보 | 메타데이터와 실제 파일 URL | 메타데이터와 ref |
| 전달 정보 결정 | catalog에 URL을 직접 포함 | Resolver에서 별도로 결정 |
| 발행·제공 단위 | 정적 산출물 생성과 HTTP 검증 | 완성된 generation 발행과 런타임 고정 |

단계를 분리하면서 클라이언트의 연동 절차는 늘어납니다. 그 대신 목록의 정체성과 전달 방식을 독립적으로 다룰 수 있습니다. 전환의 목적은 **전달 방식의 확장과 책임 분리**였습니다.

여기서 V2는 Catalog의 `schema_version: 2`를 사용하는 흐름을 뜻합니다. 실제 HTTP API 경로는 `/v1/asset-library/...`입니다.

## 핵심 설계: 파일과 메타데이터를 같은 버전으로

API 스냅샷과 실제 파일이 다른 빌드의 결과를 참조하지 않도록, V2 런타임 설계에서는 **검증된 파일과 스냅샷을 하나의 불변 generation으로 묶는 방식**을 정의했습니다. generation은 함께 발행하고 제공하는 완성된 버전 단위입니다.

1. **후보 구성·검증:** 별도 staging 영역에서 파일과 스냅샷을 준비하고 스키마·식별자·파일 무결성을 확인합니다.
2. **완성본 발행:** 검증된 generation을 발행합니다. 발행된 버전은 수정하지 않습니다.
3. **선택 확정:** `current.json` 선택 포인터를 원자적으로 교체해 사용할 generation을 지정합니다.
4. **런타임 고정:** 서버 시작 시 선택된 generation을 검증하고 API 스냅샷과 정적 파일 경로를 함께 고정합니다.

**설계상 절충은 새 버전 반영에 서버 재시작이 필요하다는 점입니다.** 실행 중인 서버는 포인터가 바뀌어도 기존 버전을 계속 사용합니다. 제공 중인 버전의 일관성을 우선한 구조이며, 자동 reload나 무중단 전환을 제공하는 설계는 아닙니다.

V1에도 콘텐츠 해시 URL과 불변 catalog snapshot은 있었지만, 위 completed generation 발행·런타임 고정은 V2에서 추가한 설계입니다.

## 전환 이후: 기존 경로를 제거한 이유

V2 API 도입 당시에는 기존 정적 producer를 유지했습니다. 에디터의 에셋 가져오기를 `Catalog → Resolver → bytes` 경로로 전환한 뒤에는, V1 fallback이 전환 오류를 숨기는 별도 호환 경로로 남지 않도록 제거했습니다.

제거한 것은 `/channels/stable.json`과 `/catalogs/v1/...` 문서 경로입니다. **콘텐츠 해시 기반 에셋·썸네일 파일 제공은 유지**했습니다. API 도입과 기존 경로 제거를 별도 단계로 진행해, 새 전달 계약으로의 전환을 마무리했습니다.

에셋을 가져온 뒤 장면 배치와 편집으로 이어지는 흐름은 [Shotloom 프로젝트](/projects/shotloom/)에서 확인할 수 있습니다.
