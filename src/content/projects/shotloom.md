---
title: "Shotloom"
description: "Codex를 활용해 개발한 3D 장면·Shot 제작 도구입니다. React와 Rust·Bevy를 연결하고, AI가 작성한 코드의 동작 검증과 모듈 구조 개선을 직접 수행했습니다."
category: "3D 콘텐츠 제작 도구"
period: "2026.04 ~ 2026.08"
order: 100
image: "/assets/projects/shotloom/brand-cover.webp"
tags: ["Codex","AI 에이전틱 개발","React","TypeScript","Rust","Bevy","IK"]
---

**기간:** 2026.04 ~ 2026.08\
**환경:** Codex, React, TypeScript, Rust, Bevy Engine, 웹↔엔진 bridge, Timeline, Camera, IK, persistence, CLI

웹 UI와 Rust 런타임을 연결해 3D 장면과 Shot을 편집하는 제작 도구입니다. 사용자 입력부터 엔진 평가, 저장과 Export까지 이어지는 기능을 하나의 흐름으로 구현했습니다.

CinevStudio에서 4년 6개월 동안 축적한 기획과 제작 경험을 바탕으로, Codex·React·Rust·Bevy Engine을 활용해 Shotloom의 핵심 제작 도구를 6개월 동안 새롭게 개발했습니다.

기존 코드를 옮긴 것이 아니라 필요한 기능과 구조를 다시 정의했습니다. AI 에이전트가 작성한 결과를 직접 테스트하고, 중복된 책임과 모듈 경계를 검토하며 구조를 지속적으로 개선했습니다.

React 입력 훅과 브리지 계약, Rust 엔진을 연결해 viewport camera navigation을 개발했습니다. Timeline transport·playhead, Animation import·Performance Clip, Camera Clip과 장면 자산 배치 기능도 연결했습니다.

수동 Pose의 소유권을 Performance Clip으로 옮기고, IK transaction과 손·발 4-limb, pole·rotation, gizmo interaction을 단계적으로 구현했습니다.

편집 결과가 서로 다른 경로에서 달라지지 않도록 reload·Undo·preview·PNG export가 같은 평가 계약을 사용하도록 검증했습니다. 외부 캐릭터 검색·가져오기·배치와 Pose Key 저장도 연결했습니다.

관련 이슈와 PR에서 주요 범위의 병합과 검증이 확인됐으며, Pose authoring의 일부 후속 범위는 당시 진행 중으로 기록되어 있습니다.

관련 글: [나는 Codex 발사대가 된 걸까](/posts/am-i-a-codex-launcher/)
