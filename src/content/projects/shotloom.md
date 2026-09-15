---
title: "Shotloom"
description: "스토리보드의 샷을 3D 장면으로 열어 캐릭터·동작·카메라를 연출하고 영상 생성으로 이어가는 제작 도구입니다. Codex를 활용해 React와 Rust·Bevy를 연결하고, 편집·저장·렌더링의 일관성을 검증했습니다."
category: "3D 콘텐츠 제작 도구"
engagement: "company"
organization: "시나몬"
period: "2026.04 ~ 2026.08"
order: 100
image: "/assets/projects/shotloom/brand-cover.webp"
detailImage: "/assets/projects/shotloom/scene-editor.webp"
tags: ["Codex","AI 에이전틱 개발","React","TypeScript","Rust","Bevy","IK"]
---

**기간:** 2026.04 ~ 2026.08\
**역할:** 웹 UI·엔진 연동, 뷰포트·카메라 편집, 작업물 저장·렌더링, Clip Pose·IK 개발\
**환경:** Codex, React, TypeScript, Rust, Bevy Engine, Timeline, Camera, IK, CLI

## 어떤 도구인가요?

Shotloom은 하나의 촬영 단위인 **Shot**을 중심으로 캐릭터와 소품을 배치하고, 타임라인에서 동작과 카메라를 편집하는 3D 제작 도구입니다. CineV 스토리보드에서 만든 샷을 3D 장면으로 열거나, 편집기에서 직접 장면을 구성할 수 있습니다.

생성된 초안을 사람이 원하는 구도와 동작으로 다듬고, 다시 영상 생성과 다음 장면 제작에 활용하는 흐름을 제공합니다. 아래는 제품의 제작 흐름이며, 제가 직접 맡은 개발 범위는 뒤에서 구분해 소개합니다.

## 프로젝트 영상

### SceneGen 생성 결과

3D 장면의 구도를 편집한 뒤 SceneGen으로 생성한 결과입니다. 아래 영상에서 주변 공간이 보이는 구도와 인물의 움직임을 확인할 수 있습니다. (약 5초)

<video controls playsinline preload="none" width="864" height="496" aria-label="SceneGen 생성 결과 영상" style="display: block; width: 100%; height: auto; aspect-ratio: 864 / 496; border-radius: 0.75rem; background: #111;">
  <source src="/assets/projects/shotloom/scenegen-video.mp4" type="video/mp4" />
  <a href="/assets/projects/shotloom/scenegen-video.mp4">SceneGen 생성 결과 영상 열기</a>
</video>

### 포즈·동작·카메라 편집 시연

캐릭터의 포즈와 동작, 카메라 구도를 편집하고 SceneGen 영상 생성으로 이어가는 과정을 담은 시연입니다. (15초)

<video controls playsinline preload="none" width="1280" height="720" poster="/assets/projects/shotloom/scene-editor.webp" aria-label="Shotloom 포즈·동작·카메라 편집 시연 영상" style="display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; border-radius: 0.75rem; background: #111;">
  <source src="/assets/projects/shotloom/editing-demo.mp4" type="video/mp4" />
  <a href="/assets/projects/shotloom/editing-demo.mp4">Shotloom 편집 시연 영상 열기</a>
</video>

## 스토리보드에서 3D 연출로

![장면 구성의 출발점이 되는 원본 스토리보드 샷](/assets/projects/shotloom/storyboard.webp)

위 원본 샷을 바탕으로 3D 장면을 열고, 페이지 상단의 실제 편집 화면처럼 캐릭터와 카메라를 조정해 다른 구도로 연출합니다. 2D 이미지의 구도를 3D 공간에서 직접 확인하고 수정할 수 있습니다.

### 동작 생성과 타임라인 편집

원하는 움직임을 문장으로 입력해 동작 후보를 생성하고 미리 봅니다. 사용할 후보와 대상 캐릭터, 적용 구간을 선택하면 타임라인에 **Performance Clip**으로 추가되어 다른 동작 및 카메라와 함께 편집할 수 있습니다.

[grid]
![텍스트 프롬프트로 캐릭터 동작을 생성하는 화면](/assets/projects/shotloom/motion-prompt.webp)
![대상 캐릭터와 적용 구간을 정해 Performance Clip으로 추가하는 화면](/assets/projects/shotloom/performance-clip.webp)
[/grid]

### 카메라 구도와 움직임 연출

카메라 시점에서 장면을 보며 위치와 회전을 조정하고, 원하는 프레임에 키를 기록합니다. 타임라인의 여러 키로 카메라 이동을 만들며, 화각(FOV)도 별도 키로 저장할 수 있습니다.

![캐릭터 동작과 카메라 위치·회전 키를 같은 타임라인에서 편집하는 화면](/assets/projects/shotloom/camera-keys.webp)

### 영상 생성과 다음 장면으로 연결

편집한 장면에 생성 조건과 참조 이미지를 더해 **SceneGen**으로 영상을 생성합니다. 결과를 확인한 뒤 선택한 영상의 **마지막 프레임 이미지**를 CineV 스토리보드에 추가해 다음 장면 제작에 활용할 수 있습니다.

![편집 장면을 바탕으로 SceneGen 결과를 확인하고 CineV로 보내는 화면](/assets/projects/shotloom/scenegen-result.webp)

작업을 이어갈 파일과 제작 결과는 용도에 맞게 구분됩니다.

| 용도 | 결과물 |
| --- | --- |
| 저장 후 다시 편집 | 캐릭터·클립·카메라 키를 다시 불러오는 `.shotloom.zip` 작업물 |
| 카메라 연출 결과 확인 | 첫·마지막 프레임 PNG와 1920×1080 무음 WebM(VP9) 영상 |
| SceneGen 생성 | 편집 장면과 생성 조건을 반영한 영상 |
| CineV 스토리보드로 전달 | 선택한 생성 영상의 마지막 프레임 이미지 |

## 직접 맡은 개발

### 웹 입력을 실제 장면·카메라 편집으로 연결

React의 입력 처리와 명령·이벤트 브리지를 Rust·Bevy 런타임에 연결했습니다. 뷰포트 이동·회전·확대, 타임라인 재생과 재생 위치 조작, 동작 가져오기와 클립 배치, 카메라 편집 및 장면 자산 배치를 구현했습니다.

편집 화면을 둘러보는 카메라와 촬영용 카메라의 책임을 나누고, 입력을 이동·회전·확대 같은 의미로 정리해 런타임에 전달하도록 개선했습니다.

### 저장한 작업물을 다시 열고 렌더링하기

가져온 에셋의 원본 데이터와 썸네일을 작업물에 보존하고, 저장된 작업물을 CLI에서 이미지로 렌더링하는 경로를 연결했습니다. Asset Library v2의 Catalog·Resolver 계약에 맞춰 외부 에셋을 가져오고 검증된 데이터를 저장하는 편집기 측 기능도 담당했습니다.

다시 열기, 실행 취소, 미리보기, PNG 내보내기가 같은 평가 규칙을 사용하도록 검증해 실행 경로마다 편집 결과가 달라지는 문제를 줄였습니다.

### 클립별 자세 편집과 손발 IK

수동으로 수정한 자세가 각 Performance Clip에 저장되도록 소유권을 옮겼습니다. 같은 원본 자세를 공유하는 인접 클립도 수정 내용이 섞이지 않고 독립적으로 편집되도록 구성했습니다.

양손과 양발의 목표 위치에 맞춰 관절을 계산하는 **IK**를 연결하고, 뷰포트의 이동·회전 핸들로 손발의 위치와 방향을 조정할 수 있게 했습니다. 활성 클립과 동작 취소 판단은 실제 자세를 계산하는 런타임이 담당하도록 중복 로직을 정리했습니다.

## AI를 활용한 개발과 검증

CinevStudio에서 4년 6개월 동안 축적한 제작 도구 개발 경험을 바탕으로, 필요한 기능과 모듈 구조를 다시 정의하고 Codex를 활용해 구현을 진행했습니다. React와 Rust·Bevy 사이의 연결, 상태 소유권, 저장과 복구를 주요 검토 대상으로 삼았습니다.

AI 에이전트가 작성한 코드는 직접 실행해 사용자 조작부터 엔진 평가와 저장 결과까지 확인했습니다. 중복된 책임과 모듈 경계를 검토하고, 재생·실행 취소·다시 열기에서도 같은 결과가 유지되는지 검증하며 구조를 개선했습니다. 제품의 AI 동작·영상 생성 기능과 별개로, 이 과정이 제가 수행한 **AI 활용 개발과 품질 검증 경험**입니다.

개인 기여는 병합과 검증이 확인된 범위를 중심으로 정리했으며, 2026년 8월 기록 당시 자세 편집의 일부 후속 작업은 진행 중이었습니다.

관련 글: [Shotloom의 발전 과정과 개인 기여](/posts/shotloom-project-history/) · [나는 Codex 발사대가 된 걸까](/posts/am-i-a-codex-launcher/)
