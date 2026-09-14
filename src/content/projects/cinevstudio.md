---
title: "CinevStudio"
description: "CinevStudio는 이전 제작 도구의 편집 경험을 이어받은 Unreal Engine 기반 3D 콘텐츠 제작 도구입니다. 장면 배치부터 캐릭터 Action, Timeline·Shot·Camera 편집, 저장·복구와 산출물 생성까지 개발했습니다."
category: "3D 콘텐츠 제작 도구"
period: "2023.07 ~ 2026.05"
order: 110
image: "/assets/projects/cinevstudio/brand-cover.webp"
tags: ["Unreal Engine","C++","Timeline","UMG"]
---

**기간:** 2023.07 ~ 2026.05\
**이전 계보:** SpicePro, StoryEditor, Map Editor\
**환경:** Unreal Engine, C++, UMG, Blueprint, DataTable, Perforce

CinevStudio는 이전 제작 도구의 편집 경험을 이어받은 Unreal Engine 기반 3D 콘텐츠 제작 도구입니다. 장면 배치부터 캐릭터 Action, Timeline·Shot·Camera 편집, 저장·복구와 산출물 생성까지 개발했습니다.

초기에는 Perforce 작업 환경을 검증하고, 씬·컷·대사의 시간 규칙과 UI 요구사항을 정리했습니다. UMG·Timeline 구현과 오류 분석을 담당했으며, Map Editor의 배치 UI·기즈모·Save/Load와 자산 갱신 흐름도 개발했습니다.

이후 캐릭터와 오브젝트의 상호작용을 편집하는 Action·Interaction 시스템을 다뤘습니다. Scene Drag & Drop, ActionSet Load/Save, UnitActionData Editor와 캐릭터 stance 관리를 구현했습니다.

기획이 확정되지 않은 영역은 플러그인부터 확장하지 않고 실제 Action set을 먼저 축적해 검증하는 순서를 제안했습니다. 가변 길이 Action은 Intro·Middle·Outro로 나누고 단계적으로 구현 범위를 정리했습니다.

Timeline은 Track·Clip·Shot이 함께 움직이는 편집 모델로 확장했습니다. 새 Timeline UI, Clip Drag & Drop, 다중 이동, Shot 간 Ripple, ShotBand와 Camera Clip 생성·편집 기능을 구현했습니다.

UI의 Base·Component·View 책임을 구분한 가이드를 작성하고, Undo/Redo와 version tracking, backup·rollback을 개발했습니다. Shader·VFX·MP4 산출물을 반복 생성하는 CLI Export도 구현했습니다.
