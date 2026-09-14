---
title: "Monopic Editor / Viewer"
description: "도면으로 3D 공간을 만들고 작품과 미디어를 배치하는 VORA VR의 가상 전시 제작 플랫폼입니다."
category: "VR 플랫폼과 시뮬레이터"
period: "2017 ~ 2018"
order: 80
image: "/assets/projects/monopic/gallery-space.webp"
tags: ["Unreal Engine 4","Spline","Node.js","AWS"]
link:
  - label: "YouTube 영상"
    value: "https://youtu.be/Yk2ACH2GKaY"
---

**기간:** 2017 ~ 2018\
**소속:** VORA VR (보라브이알)\
**역할:** 클라이언트/서버 개발\
**환경:** Unreal Engine 4, Spline, Instance Mesh, Node.js, AWS

## 프로젝트 영상

<iframe
  src="https://www.youtube-nocookie.com/embed/Yk2ACH2GKaY"
  title="모노픽 프로젝트 영상 — YouTube"
  width="960"
  height="540"
  style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; border: 0; border-radius: 0.75rem;"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

[YouTube에서 영상 열기](https://youtu.be/Yk2ACH2GKaY)

## 프로젝트 개요

모노픽(MONOPIC)은 사용자가 가상 공간에 갤러리를 구성하고 이미지를 공유하는 VR 플랫폼입니다. VORA VR의 본다빈치 발표자료에서는 도면 입력부터 공간 구성, 재질 편집, 이미지·영상·배경음악·텍스트 배치까지 이어지는 가상 전시 제작 도구로 소개했습니다.

촬영 지점을 클릭하며 이동하는 전시와 달리, 전시 공간 자체를 3D로 구성하고 그 안에서 이동하며 미디어를 감상하는 방식을 제안했습니다. 아래 이미지는 당시 발표자료에 수록된 전시 공간과 편집 화면입니다.

![영상과 이미지를 벽면에 배치한 몰입형 가상 전시 공간 예시 — VORA VR 발표자료 4쪽](/assets/projects/monopic/immersive-exhibition.webp)

## 담당한 개발

Spline 기반 도면 편집, Instance Mesh를 이용한 벽·바닥 자동 생성과 인테리어 자산 배치를 구현했습니다. 회원가입·로그인, 서버·DB 연동과 모바일·PC Viewer도 개발했습니다.

모바일과 PC 환경에 맞춘 최적화를 담당했습니다. 프로그래머 1명, 디자이너 1명, 기획자 1명으로 구성된 팀에서 클라이언트/서버 개발을 진행했습니다.

## 공간을 만드는 편집 흐름

다음은 발표자료에서 소개한 모노픽의 기능입니다.

### 도면 입력과 가상 공간 생성

사용자가 도면 값을 입력하면 해당 면적의 3D 가상 공간을 생성하는 흐름입니다. 자료에는 공간에 맞는 조명 값 계산과 공간 최적화도 기술 항목으로 소개되어 있습니다.

![가상 공간의 윤곽과 면적을 설정하는 도면 편집 화면 — VORA VR 발표자료 6쪽](/assets/projects/monopic/floor-plan-editor.webp)

### 공간 리소스와 재질 편집

자체 디자인·편집 리소스를 제공하고, 공간에 재질을 배치하는 기능을 소개했습니다. 편집기에서는 재질 교체와 오브젝트 이동·크기 조정·회전을 지원하는 3D 편집 UX·UI를 다뤘습니다.

[grid]
![공간 유형과 디자인 리소스를 선택하는 화면 — VORA VR 발표자료 7쪽](/assets/projects/monopic/space-materials.webp)
![공간의 재질을 선택하고 편집하는 화면 — VORA VR 발표자료 9쪽](/assets/projects/monopic/material-editor.webp)
[/grid]

### 이미지와 미디어 배치

이미지·영상·배경음악·텍스트를 가상 공간에 삽입하는 기능입니다. 발표자료의 화면에는 이미지 목록에서 콘텐츠를 골라 전시 벽면에 배치하는 흐름이 담겨 있습니다.

![이미지 목록에서 작품을 골라 전시 벽면에 배치하는 화면 — VORA VR 발표자료 8쪽](/assets/projects/monopic/media-placement.webp)

## 전시 활용 방향

본다빈치 발표자료에서는 영구 전시, 사전 전시 테스트, VR 도슨트, 전시 콘텐츠를 활용 방향으로 제안했습니다. VR Zone과 Oculus 플랫폼을 통한 전시 콘텐츠 제공도 제안 범위에 포함되어 있습니다. 이는 당시의 제안 내용이며, 실제 도입이나 출시 실적을 뜻하지 않습니다.
