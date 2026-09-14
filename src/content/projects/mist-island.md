---
title: "Mist Island"
description: "소리·빛·냄새의 흔적을 AI가 감지해 플레이어를 추적하는 게임입니다. 인벤토리·아이템 상호작용과 흔적 시스템을 구현하고 PM·레벨 설계를 담당했습니다."
category: "게임 프로젝트"
period: "2015 ~ 2016"
order: 30
image: "/assets/projects/mist-island/hospital-layout.webp"
tags: ["Unreal Engine","Blueprint","인벤토리","AI 추적","레벨 설계"]
link:
  - label: "게임 콘셉트 트레일러"
    value: "https://youtu.be/Qala_SuONKI"
---

**기간:** 2015 ~ 2016

**역할:** 콘텐츠 프로그래밍, PM, 레벨 설계\
**환경:** Unreal Engine, Blueprint, HUD, Physics Handle, Matinee

## 게임 목표

주인공이 남기는 소리·빛·냄새를 따라오는 구미호를 피해 섬을 탈출하는 게임입니다. 플레이어의 행동이 추적의 단서가 되며, 아이템을 활용해 추적을 방해하는 플레이를 구성했습니다.

## 스터디에서 창업팀으로

교내에서 Unreal Engine 스터디를 모집해 함께 공부하면서 시작한 프로젝트입니다. 공모전 출품을 목표로 게임을 기획하고, 창업을 목표로 뜻이 맞는 사람들과 팀을 구성했습니다. 게임 창조 오디션에서 프로젝트를 발표했습니다.

콘텐츠 프로그래밍과 PM을 함께 맡아 게임 기능 구현, 일정 관리와 레벨 설계를 진행했습니다.

## AI 추적을 위한 흔적 시스템

플레이어와 아이템이 일정 시간 동안 남기는 소리·빛·냄새를 AI가 감지하는 Clue 시스템을 구현했습니다. 흔적의 종류에 따라 강도와 유지시간을 다르게 설정했습니다.

![AI가 감지하는 흔적의 범위와 상태를 확인하는 Clue 시스템 디버그 화면 — 자료 16쪽](/assets/projects/mist-island/clue-debug.webp)

## 인벤토리와 아이템 상호작용

HUD 기반 인벤토리, 퀵슬롯, 퀵리스트와 크로스헤어를 제작했습니다. 아이템 습득과 개수 제한, 버리기·소환·사용·결합을 구현하고, 사용 대기시간과 쿨타임을 화면에 표시했습니다.

퀵슬롯은 인벤토리의 아이템을 옮겨 두고 빠르게 사용하는 기능이며, 퀵리스트는 습득한 아이템이나 한 번 조합했던 아이템을 쉽게 조합하도록 구성한 기능입니다.

![인벤토리와 퀵슬롯·퀵리스트 UI — 자료 15쪽](/assets/projects/mist-island/inventory.webp)

### 물리 기반 잡기·던지기·설치

플레이어의 트레이스로 일정 거리 안의 아이템을 확인하고 윤곽선을 표시했습니다. Physics Handle을 이용한 잡기 기능과 던지기, 잡은 아이템을 배치하는 설치 기능을 개발했습니다.

방울은 설치하거나 던져 소리 흔적을 남기고, 부적은 AI를 방해합니다. 기둥에는 트랩과 아이템을 설치할 수 있으며, 로프는 기둥이나 바닥에 설치하고 다른 아이템과 조합할 수 있도록 구성했습니다.

### 아이템 Blueprint 구조

아이템을 상위·하위 Blueprint로 구분했습니다. 기본 아이템과 설치·흔적·홀드·로프 등을 다루는 상위 Blueprint 아래에 방울, 병, 부적, 기둥, 로프 같은 개별 아이템을 구성했습니다.

## 팀 일정 관리

회의에서 월 단위 개발 계획을 세우고, 역할별로 주 단위 목표를 나눴습니다. 일별 작업 기록으로 진행 상황을 확인하고, 매주 회의에서 다음 일정을 조정했습니다. 콘텐츠 프로그래밍을 진행하면서 팀의 목표와 실제 작업을 함께 관리했습니다.

## 평면도에서 플레이 시나리오와 레벨 구현까지

병원 평면도에 방·복도와 가구를 배치하고, 플레이어와 AI의 위치·움직임을 표시한 예시 시나리오를 작성했습니다. 공간 배치와 그 안에서 일어날 플레이를 함께 기획했습니다.

[grid]
![병원의 방·복도와 가구 배치를 정리한 평면도](/assets/projects/mist-island/floor-plan.webp)
![플레이어와 AI의 위치·움직임을 표시한 병원 플레이 시나리오](/assets/projects/mist-island/play-scenario.webp)
[/grid]

병원 1층과 지하층을 Unreal Engine의 레벨로 구성하고, 야외 필드의 지형과 환경을 제작했습니다. 아래는 병원 공간 배치와 야외 필드의 구현 화면입니다.

[grid]
![병원 레벨의 공간 배치 작업 — 2016년 개발 화면](/assets/projects/mist-island/hospital-layout.webp)
![야외 필드의 지형과 환경 구성 — 2016년 개발 화면](/assets/projects/mist-island/field.webp)
[/grid]

## 소개 영상 제작

Unreal Engine의 Matinee로 주요 콘텐츠를 소개하는 영상을 제작했습니다. 개발 과정에서 습득한 지식은 강의 형식의 블로그 글로 정리했습니다.

## 프로젝트 영상

### 게임 콘셉트 트레일러

<iframe
  src="https://www.youtube-nocookie.com/embed/Qala_SuONKI"
  title="게임 콘셉트 트레일러 — YouTube"
  width="960"
  height="540"
  style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; border: 0; border-radius: 0.75rem;"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

[YouTube에서 게임 콘셉트 트레일러 열기](https://youtu.be/Qala_SuONKI)
