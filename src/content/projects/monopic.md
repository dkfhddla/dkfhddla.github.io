---
title: "Monopic Editor / Viewer"
description: "도면으로 가상 갤러리를 만들고 감상하는 플랫폼. 기존 Editor를 이어서 개발하고 Viewer·서버를 새로 구현하며 공간 생성과 저장·전달을 연결했습니다."
category: "VR 플랫폼과 시뮬레이터"
engagement: "company"
organization: "보라VR"
period: "2017–2018 재직 중 · 세부 참여일 미확정"
role: "Editor 후속 개발·Viewer 및 서버 신규 개발"
delivery: "시연·테스트 · 출시 여부 미확정"
order: 90
image: "/assets/projects/monopic/gallery-space.webp"
tags: ["Unreal Engine", "Spline", "Node.js", "MongoDB", "AWS"]
link:
  - label: "제품 소개 영상"
    value: "https://youtu.be/Yk2ACH2GKaY"
---

## 프로젝트 맥락과 역할

사용자가 사진·미디어를 가상 갤러리에 전시하고 모바일·PC Viewer에서 감상하는 플랫폼입니다. 입사 시 일부 구현된 **Editor는 이어받아 개발**했고, **Viewer와 서버는 처음부터 개발**했습니다. 정부과제를 위한 시연·테스트까지 수행했으며 출시·운영 여부는 확정하지 않았습니다.

## 도면의 안과 밖을 구분해 공간 만들기

**문제:** 탑뷰에서 점·라인으로 벽과 방을 만드는 편집기에서는 내부 바닥·천장을 채우고 소품을 배치할 위치가 도면 안쪽인지 판별해야 했습니다.

**본인 기여와 구조:** 한 방향의 ray가 경계와 만나는 횟수의 홀짝을 이용해 안팎을 구분하는 방식을 적용했습니다. Spline 도면과 공간 생성·인테리어 배치 개발을 연결했습니다. 정확한 교차 계산 코드와 모든 경계 조건의 검증까지 확장하지 않습니다.

**확인된 결과:** 안팎 판별을 내부 바닥·천장과 소품 배치에 사용했습니다.

![갤러리 윤곽을 설정하는 Monopic 도면 편집 화면](/assets/projects/monopic/floor-plan-editor.webp)

## Editor에서 저장한 공간을 Viewer로

Unreal SaveGame으로 편집한 공간을 저장하고, Viewer가 서버를 통해 저장 파일을 받아 로드하는 경로를 개발했습니다. Node.js·MongoDB 기반 회원가입·로그인·DB 연동도 담당했습니다. 기존 Editor와 신규 Viewer·서버의 개인 기여를 구분합니다.

## 실제 제품 화면과 소개 영상

아래는 당시 공개 프로젝트 자료의 미디어 배치 화면입니다. 제품 전체의 기능과 본인 구현 범위는 동일하지 않습니다.

![이미지 목록에서 작품을 골라 가상 전시 벽에 배치하는 실제 Monopic 화면](/assets/projects/monopic/media-placement.webp)

<iframe src="https://www.youtube-nocookie.com/embed/Yk2ACH2GKaY" title="Monopic 제품 소개 영상" width="960" height="540" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="fullscreen; encrypted-media; picture-in-picture" allowfullscreen style="width:100%;height:auto;aspect-ratio:16/9;border:0;"></iframe>

[YouTube 원본 영상](https://youtu.be/Yk2ACH2GKaY)
