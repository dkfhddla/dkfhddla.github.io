---
title: "3D Asset Delivery Pipeline"
description: "Shotloom에서 사용할 3D 자산을 로컬과 호스팅 환경에 일관되게 전달하는 독립 프로젝트입니다. 자산 공급자와 편집기 사이의 API·Schema·빌드·검증·운영 경계를 설계하고 구현했습니다."
category: "3D 콘텐츠 제작 도구"
engagement: "company"
organization: "시나몬"
period: "2026.05 ~ 2026.08"
order: 90
image: "/assets/projects/asset-library/brand-cover.webp"
tags: ["API","JSON Schema","Docker","CI"]
---

**기간:** 2026.05 ~ 2026.08\
**환경:** API, JSON Schema, Catalog·Resolver, content-addressed asset, Docker, CI

Shotloom에서 사용할 3D 자산을 로컬과 호스팅 환경에 일관되게 전달하는 독립 프로젝트입니다. 자산 공급자와 편집기 사이의 API·Schema·빌드·검증·운영 경계를 설계하고 구현했습니다.

`Catalog → Resolver → bytes`로 이어지는 v2 전달 계약을 정리하고, 로컬·호스팅 환경의 API·Schema·provider 경계를 구성했습니다.

build-derived revision과 content-addressed URL을 도입했습니다. 완료된 generation만 원자적으로 게시하고 실패한 산출물은 정상 버전과 분리해 정리하도록 빌드 흐름을 구성했습니다.

공개 호스팅 환경을 확인하는 smoke test와 consumer certification을 추가했습니다. 새 계약으로 전환한 뒤에는 이전 v1 static fallback을 제거하고 release record를 필요한 범위로 줄였습니다.

핵심 구현의 PR 병합과 대표 검증 성공은 확인됐으며, 실제 운영 배포 시점과 공급자·소비자의 최종 전환 상태는 별도 확인이 필요한 범위입니다.
