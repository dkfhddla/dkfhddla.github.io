---
title: "Night Guard: Hospital"
description: "CCTV로 병실을 감시하는 VR 공포 게임입니다. 사업계획서 경진대회 우수상을 받은 기획을 바탕으로 Unity 팀 개발에서 기획·PM을 맡고, 이후 Unreal Engine으로 프로토타입을 1인 개발했습니다."
category: "게임 프로젝트"
engagement: "personal"
period: "2014 ~ 2015"
order: 20
image: "/assets/projects/night-guard/cctv.webp"
tags: ["Unreal Engine","Behavior Tree","NavMesh"]
link:
  - label: "프로토타입 플레이 영상"
    value: "https://youtu.be/bbz7xkBQljI"
  - label: "Gear VR 게임잼 출품 영상"
    value: "https://youtu.be/igss9PaePOs"
---

**기간:** 2014 ~ 2015\
**역할:** 초기 Unity 팀의 기획·PM → Unreal Engine 프로토타입 1인 개발\
**개발 과정:** Unity 팀 개발 → Unreal Engine으로 재구현\
**구현 기술:** Blueprint, Behavior Tree, NavMesh, Scene Capture, Material Instance

## 프로젝트 개요

경비실에서 CCTV로 환자를 확인하고 관리하는 VR 공포 게임으로 기획했습니다. 통제실의 9개 CCTV와 메인 모니터, 조작 가능한 장치의 배치를 설계하고 병실·복도·격리실 등 공간별 역할과 맵 구조를 기획서에 정리했습니다.

## 기획과 사업계획서 수상

게임 콘셉트, Oculus Rift 활용, 다른 게임과의 차별점, 유통·마케팅 계획을 담은 사업계획서를 작성하고 발표했습니다. 2014년 제3회 창의적 사업계획서 경진대회에서 팀으로 우수상을 받았습니다.

## Unity 팀 개발에서 Unreal 1인 개발로

초기에는 4인 팀으로 Unity에서 개발했습니다. 기획·PM 1명과 프로그래머 3명으로 구성된 팀에서 게임 기획서 작성과 개발 일정 관리를 담당했습니다.

초기 팀 개발이 중단된 뒤에는 Unreal Engine으로 전환해 프로토타입을 혼자 다시 구현하고 완성했습니다. 이 단계에서는 게임 기능과 AI 행동, CCTV 시스템을 직접 개발했습니다. 모바일 버전으로 삼성 VR 게임잼에 참여했으며, 개발 과정에서 익힌 기능은 블로그 강의로 정리했습니다.

## 담당한 개발

- Scene Capture로 9개의 감시 화면을 구성하고, 각 화면의 클릭 이벤트와 CCTV 전환을 구현했습니다.
- Material Instance를 이용해 감시 모니터의 노이즈 효과를 구성했습니다.
- Behavior Tree·NavMesh 기반 AI 행동과 이동, 기획에 필요한 게임 기능을 구현했습니다.
- 플레이어의 움직임과 조작을 구현하고, 스테이지 레벨을 디자인했습니다.

## 개발 화면

[grid]
![CCTV 다중 감시 화면 — 2015년 프로토타입](/assets/projects/night-guard/cctv.webp)
![CCTV 전환 로직을 구성한 Unreal Blueprint 일부](/assets/projects/night-guard/blueprint.webp)
[/grid]

## 프로젝트 영상

### 프로토타입 플레이 영상

<iframe
  src="https://www.youtube-nocookie.com/embed/bbz7xkBQljI"
  title="프로토타입 플레이 영상 — YouTube"
  width="960"
  height="540"
  style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; border: 0; border-radius: 0.75rem;"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

[YouTube에서 프로토타입 플레이 영상 열기](https://youtu.be/bbz7xkBQljI)

### Gear VR 게임잼 출품 영상

<iframe
  src="https://www.youtube-nocookie.com/embed/igss9PaePOs"
  title="Gear VR 게임잼 출품 영상 — YouTube"
  width="960"
  height="540"
  style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; border: 0; border-radius: 0.75rem;"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

[YouTube에서 Gear VR 게임잼 출품 영상 열기](https://youtu.be/igss9PaePOs)
