---
title: "ADAS 자율주행 시뮬레이터"
description: "도로 상황과 차량 상태를 재현해 ADAS 테스트 자료를 만드는 시뮬레이터입니다."
category: "VR 플랫폼과 시뮬레이터"
engagement: "company"
organization: "보라브이알"
period: "2018.01 ~ 2018.12"
order: 70
image: "/assets/projects/adas-simulator/driving-view.webp"
tags: ["Unreal Engine 4","Spline","차량 AI","XML"]
---

**기간:** 2018.01 ~ 2018.12\
**역할:** 프로그래밍 전반\
**환경:** Unreal Engine 4, Spline, 차량 AI, XML

도로 상황과 차량 상태를 재현해 ADAS 테스트 자료를 만드는 시뮬레이터입니다.

## 가상 도시와 교통 시스템

가상의 도시와 교통 시스템을 구성하고, Spline 기반 도로 제작 도구를 개발했습니다. 설정 가능한 신호등과 주행·신호·표지판에 반응하는 차량 AI를 구현했습니다.

[grid]
![가상 도시와 도로 구성 — 자료 28쪽](/assets/projects/adas-simulator/virtual-city.webp)
![시가지·고속도로·시험장·주차 구역을 포함한 도로 배치 — 자료 28쪽](/assets/projects/adas-simulator/road-layout.webp)
[/grid]

## 시뮬레이션 데이터 처리

블랙박스 화면은 PNG 이미지로 추출하고, 주행 차량의 상태는 XML로 처리했습니다. 차량 속력·기어·휠 등 상태 데이터와 시각 자료를 함께 다루는 기능을 개발했습니다.

## 후속 에셋화 개발

시뮬레이터에서 사용한 신호등·도로 도구와 차량 AI는 이후 소울엑스의 [자율주행 도구 에셋화](/projects/autonomous-driving-assets/) 프로젝트에서 재사용할 수 있는 형태로 정리했습니다.
