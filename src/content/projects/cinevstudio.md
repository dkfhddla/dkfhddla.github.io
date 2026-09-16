---
title: "CineV Studio"
description: "Unreal Engine 기반 3D 시네마틱 제작 도구입니다. Action·Timeline·Shot·Camera 편집 기능을 개발하고 UI System 설계·구축에 기여했습니다. AI 모션 연동, 저장·복구, CLI 편집·출력 자동화와 UI/UX Unit 리드를 담당했습니다."
category: "3D 콘텐츠 제작 도구"
engagement: "company"
organization: "시나몬"
period: "2023.07 ~ 2026.05"
order: 110
image: "/assets/projects/cinevstudio/brand-cover.webp"
tags: ["Unreal Engine","C++","Timeline","UMG"]
---

**기간:** 2023.07 ~ 2026.05 (활동 기록 기준)\
**역할:** Action·Timeline·Shot·Camera 개발, UI System 설계·구축 기여, AI 모션 연동, 저장·복구 및 CLI 자동화, UI/UX Unit 리드(2026.02 기준)\
**초기 제작 도구 경험:** [Spice Pro](/projects/spice-pro/)\
**환경:** Unreal Engine, C++, UMG, Blueprint, DataTable, Git, Perforce

## 어떤 도구인가요?

CineV Studio는 캐릭터와 소품을 3D 공간에 배치하고, 동작·표정·대사·카메라·조명을 연출해 영상으로 출력하는 **Unreal Engine 기반 3D 시네마틱 제작 도구**입니다. 이전 제작 도구의 편집 경험을 이어받아, 전문적인 3D 제작 지식 없이도 자신의 이야기를 장면으로 구성할 수 있도록 개발했습니다.

CineV의 스토리 기반 영상 제작 흐름에서 Studio는 **실제 3D 장면의 구성·편집·렌더링**을 담당합니다. 생성된 장면의 캐릭터나 카메라 구도, 조명처럼 원하는 요소를 개별적으로 수정할 수 있어, 창작 의도를 구체적인 연출로 다듬는 역할을 합니다.

## 이미지로 보는 편집 경험

아래는 CINEV 공식 소개 자료에 사용된 제품 이미지입니다. 동작 선택부터 인물 배치와 표정 조정까지, 장면의 요소를 직접 다듬는 제작 방식을 보여줍니다.

### 동작을 선택하고 타임라인에서 연출하기

라이브러리에서 원하는 동작을 찾아 캐릭터에 적용하고, 타임라인에서 동작과 대사의 순서를 맞춥니다. 아래 이미지는 두 캐릭터가 함께 걷는 동작과 각자의 대사를 같은 시간축에 배치하는 예시입니다.

![동작 라이브러리에서 함께 걷기를 선택하고 두 캐릭터의 동작과 대사를 타임라인에 배치하는 CINEV 공식 소개 이미지](/assets/projects/cinevstudio/action-timeline.webp)

### 인물의 위치와 표정 다듬기

3D 공간에서 캐릭터를 옮겨 인물 간 거리와 구도를 조정하고, 표정 라이브러리로 장면에 맞는 감정을 표현합니다. 위치·동작·표정을 각각 편집할 수 있어 같은 캐릭터와 배경을 유지하면서 연출을 바꿀 수 있습니다.

[grid]
![캐릭터를 드래그해 장면 안의 위치를 조정하는 CINEV 공식 소개 이미지](/assets/projects/cinevstudio/character-placement.webp)
![표정 라이브러리에서 감정을 선택해 캐릭터에 적용하는 CINEV 공식 소개 이미지](/assets/projects/cinevstudio/facial-expression.webp)
[/grid]

## 3D 장면 편집 튜토리얼

**3D Edit Deep Dive**는 CINEV 공식 Vimeo 채널의 3D 장면 편집 영상입니다. 장면을 직접 구성하고 다듬는 과정을 통해 제품의 사용 흐름을 살펴볼 수 있습니다.

<iframe src="https://player.vimeo.com/video/1177171671" title="CINEV 3D Edit Deep Dive 영상 플레이어" width="1280" height="608" loading="lazy" allow="fullscreen; picture-in-picture; encrypted-media" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" style="width: 100%; height: auto; aspect-ratio: 1280 / 608; border: 0; background: #111;"></iframe>

[Vimeo에서 원본 영상 보기](https://vimeo.com/1177171671) ·

[YouTube에서 3D 편집 튜토리얼 보기](https://www.youtube.com/watch?v=GKxlZUpQN44)

## 장면 구성에서 영상 출력까지

1. **장면 구성:** 배경을 정하고 캐릭터·소품 라이브러리에서 필요한 자산을 배치합니다.
2. **캐릭터 연기:** 동작과 표정을 적용하고, 대사와 목소리를 설정해 장면의 내용을 만듭니다.
3. **촬영과 분위기 연출:** 카메라 구도와 움직임, 시간대·날씨·조명을 조정합니다.
4. **타이밍 편집:** 타임라인에서 동작·대사·카메라 클립의 순서와 길이를 조정하고, 재생하거나 한 프레임씩 이동하며 결과를 확인합니다.
5. **저장과 출력:** 프로젝트를 저장해 다시 편집하거나, 카메라 트랙에 구성한 장면을 영상으로 렌더링합니다.

사용자는 3D 뷰포트에서 장면을 확인하고, 사이드 패널에서 자산과 속성을 선택하며, 타임라인에서 연출의 시간 흐름을 조정합니다. 이 세 영역 사이에서 선택한 대상과 편집 상태가 유지되는 것이 중요한 제작 경험입니다.

## 직접 맡은 개발

### 장면 배치와 캐릭터 Action 편집

패널에서 캐릭터·프랍을 끌어다 놓거나 뷰포트를 클릭해 장면에 배치하는 흐름을 구현했습니다. Action 클립의 삭제·이동·길이 조절과 대화 패널을 개발하고, 캐릭터의 손·골반 위치를 맞추는 IK와 오브젝트를 연결하는 Attach 처리를 상호작용에 연결했습니다.

ActionSet 저장·불러오기와 UnitActionData Editor를 구현해 동작의 메타데이터·애니메이션·타겟·상호작용 정보를 편집하도록 했습니다. 신체 부위별 애니메이션 우선순위와 캐릭터의 자세 상태인 stance를 관리하고, 자세에 맞는 동작과 대기 애니메이션을 선택하는 처리도 개발했습니다.

가변 길이 동작을 Intro·Middle·Outro로 나누는 **Three Patch**의 Section·ViewModel·Clip과 생성 위젯을 구현했습니다. 기획이 확정되지 않은 영역에서는 실제 Action set을 먼저 축적해 검증하도록 제안하고, 단계별 구현 범위를 정리했습니다.

### AI 모션 생성 모델 연동

**WANDR 걷기 생성 모델을 Unreal 편집기에 연결**하고, PoseToPose를 포함한 AI 실행 인터페이스를 통합했습니다. 모델 개발자와 위치·회전 입력 규칙을 맞추고, 생성 결과를 캐릭터의 이동과 동작에 적용하는 클라이언트 흐름을 개발했습니다.

첫 프레임의 회전이 편집기에서 추가 회전으로 적용되는 불일치를 진단하고, 모델 개발자가 제공한 수정 결과를 클라이언트에서 검증했습니다. 짧은 이동과 입력 길이 변환 오류도 수정했습니다.

### Timeline과 Shot 단위 편집

Timeline은 Track·Clip·Shot이 함께 움직이는 편집 모델로 확장했습니다. 동작이나 카메라의 시간 구간인 **Clip**, 클립을 묶는 **Track**, 촬영 단위인 **Shot**을 함께 다뤄 장면의 순서와 타이밍을 조정할 수 있도록 했습니다.

Clip Drag & Drop과 Ctrl/Shift 다중 선택, 여러 클립의 동시 이동, Trim·스냅 가이드를 구현했습니다. 동료와 함께 Shot 간 Ripple을 확장해, 클립을 옮기거나 길이를 바꿀 때 이후 Shot의 시간 배치까지 함께 조정하도록 했습니다.

Shot별 클립 배정·가시성·저장·삭제와 Undo/Redo를 연결했습니다. ShotBand 위젯 구현 이후에는 **ShotBlock 구조로 전환**하며 샷 선택·순서 변경·끝 범위 조절과 복제 Undo/Redo를 개발했습니다.

### Camera 편집과 미리보기

카메라 템플릿 선택부터 생성·편집·교체까지 이어지는 흐름과 속성 패널을 재구성했습니다. 수동 카메라 키, 렌즈·화각(FOV) 조절, 자동 카메라 미리보기와 PIP 상태 동기화를 구현했습니다.

카메라 키의 생성·삭제·이동·속성 변경을 Undo/Redo에 연결하고, 단축키·버튼 상태·기즈모가 편집 결과와 일치하도록 개선했습니다. 이후 줌 데이터 보존, 씬 로드 후 카메라 bake 갱신과 회전축이 겹치는 gimbal lock 문제도 수정했습니다.

### 프로젝트 저장·복구

프로젝트 버전 추적과 저장 백업·롤백을 구현하고, 동료의 JSON 복구·버전 비교 보강을 리뷰하고 통합했습니다. 저장 실패 시 기존 파일을 복원하는 흐름을 마련하고, 빈 프로젝트 원격 로드 크래시와 저장 시 캐스팅 목록에서 누락된 캐릭터를 복구하는 문제도 수정했습니다.

### CLI 씬 편집과 출력 자동화

명령줄에서 씬을 편집하는 **CinevEditScene commandlet**과 Shot 수정 기능을 동료와 함께 구현했습니다. 편집기 화면에서 반복하던 작업을 외부 실행 흐름과 연결할 수 있도록 씬·샷 식별자와 편집 작업을 처리했습니다.

Shader를 미리 준비하는 워밍업 commandlet, Gaussian VFX 출력과 전체 프레임 MP4 렌더링 선택 옵션을 추가했습니다. 카메라 bake 보강을 함께 진행해 씬 준비부터 영상 출력까지 자동화에 필요한 실행 경로를 확장했습니다.

## UI System 개편과 협업 구조 정리

**UI System 설계·구축에 기여하고, Scene Editor 적용과 Timeline 위젯 구현을 담당했습니다.** 화면의 외형, 편집 동작, 데이터 연결의 책임을 나누는 구조를 설계·구현하고, 팀이 같은 기준으로 위젯을 개발할 수 있도록 구현 규칙과 협업 방식을 정리했습니다. 새 UI의 캐릭터 선택 로직, Action 추가 기능 연결, 씬 활성화 이벤트의 바인딩 위치 수정도 진행했습니다. 2025년 2월에는 `UISystem 리뷰`를 작성하고 실제 위젯 구성을 검토해, 개발자와 디자이너가 수정할 영역을 구체화했습니다.

### 한 위젯에 집중된 화면과 제어 책임 분리

기존에는 `UCinevStoryEditorWidget`과 `WBP_StoryEditor_Design`이 화면 표시와 제어를 함께 담당했습니다. UI 요소를 추가하거나 바꿀 때도 같은 위젯을 수정해야 했고, Model이 ViewModel을 직접 생성·소유하는 구조 때문에 데이터와 화면의 의존성이 얽혀 있었습니다.

UI 생성·접근을 담당하는 Subsystem, 화면 영역을 배치하는 Layout, 위젯을 쌓고 전환하는 Layer로 책임을 나눠 시스템을 구축했습니다. 각 View가 필요한 ViewModel을 관리하고 Model을 연결하도록 정리해, 데이터 모델이 화면 구현에 의존하던 구조를 개선했습니다.

### Base·Component·View로 수정 범위 구분

제가 작성한 리뷰에서는 원칙을 실제 UMG 위젯의 구성과 수정 방법으로 풀어냈습니다.

| 구분 | 담당하는 일 | 수정 기준 |
| --- | --- | --- |
| **Base** | 위젯의 기본 외형·구조와 입력 이벤트 전달 | 외형을 조절할 속성과 인터페이스 제공 |
| **Component** | Base를 상속한 디자인 변형과 프리셋 | 디자이너가 노출된 속성으로 색·크기·스타일 수정 |
| **View** | Component와 다른 View를 조합하고 실제 편집 동작 연결 | C++에서 기능 로직을 구성하고 ViewModel 관리 |

예를 들어 액션·카메라·대사 클립은 공통 Base 위에 각자의 스타일을 가진 Component를 두고, View에서 필요한 편집 기능을 연결합니다. Figma의 이름과 위젯 이름도 맞춰 같은 역할의 위젯이 중복 생성되지 않도록 했습니다.

이 구조를 Scene Editor에 적용하며 Timeline Header·Main과 Track Group·Header, Track 모델과 위젯을 구현했습니다. 캐릭터 생성·삭제 시 갱신, 트랙과 캐릭터의 선택 연동, 세로 스크롤 동기화까지 연결했습니다. 공통 ComboBox·ScrollBox·ListView·CheckButton·Tooltip을 정비하고, C++과 Blueprint 위젯을 연결하는 BindWidget 방식도 가이드로 정리했습니다.

![UISystem 리뷰의 캐릭터 트랙 그룹 View. UMG 계층과 트랙·클립 클래스 설정을 통해 필요한 위젯을 조합하는 구조를 보여줍니다.](/assets/projects/cinevstudio/ui-component-composition.webp)

### 디자이너가 수정할 수 있는 지점을 명확히 만들기

리뷰에서는 복잡한 위젯 조합을 Component 안에 넣은 사례, View 안에 디자인까지 구현해 수정할 입구가 없는 사례를 짚었습니다. **위젯의 조합과 동작은 View에, 디자인 변경은 Component에** 두도록 기준을 정리했습니다.

프로그래머는 `EditDefaultsOnly`로 필요한 속성을 노출하고, 디자이너는 그 범위에서 외형을 조정하도록 했습니다. 복잡하거나 동적으로 구성되는 위젯은 `Project Settings > Cinev UI`에서도 설정할 수 있도록 수정 경로를 안내했습니다. 디자인 변경을 요청할 때마다 동작 코드까지 수정해야 하는 의존성을 줄이려는 작업이었습니다.

![UISystem 리뷰에 포함된 Project Settings의 Cinev UI 화면. Layout, UI Data Asset, 공통 메뉴와 클립 설정을 한곳에서 관리합니다.](/assets/projects/cinevstudio/ui-developer-settings.webp)

## UI/UX Unit 리드와 편집 경험 개선

2026년 2월에는 **UI/UX Unit 리드**로 Studio의 조작성과 사용자 작업 흐름 개선을 담당하며, 개발·기획·UI 디자인 직군이 함께 참여한 작업의 목표와 우선순위를 정리하고 작업 단위·담당 범위·의존성을 조율했습니다. 제작자가 클립을 옮기거나 속성을 바꿀 때 현재 편집 중인 대상과 주변 장면의 관계를 이해하고, 의도한 결과를 얻을 수 있는 경험에 초점을 맞췄습니다.

직접 구현한 변경으로는 타임라인 크기 조절의 실험 기능 제한 제거, 트랙 활성화와 클립 추가·더블클릭 편집, 수동 갱신과 오류 피드백 개선이 있습니다.

### Studio 1.4에서 정리된 팀 개선 결과

Studio 1.4 스쿼드 결과에는 타임라인 사용성, Undo/Redo 안정화, Shorts 연동 개선이 기록되어 있습니다. 아래는 해당 버전의 **팀 단위 완료 결과**이며, 앞서 소개한 개인 개발 범위와 함께 프로젝트의 개선 방향을 보여줍니다.

| 편집 중 겪는 문제 | 개선 내용 |
| --- | --- |
| 클립 편집이 주변 타이밍에 미치는 영향을 파악하기 어려움 | Ripple 적용 범위를 현재 캐릭터 트랙과 전체 트랙으로 세분화하고, 빈 공간 추가·제거 기능 제공 |
| 트랙이나 패널이 자동으로 바뀌어 작업 흐름이 끊김 | 트랙 열기·닫기를 수동 제어로 전환하고, 트랙 순서 변경과 클립 편집 패널 상태 유지 지원 |
| 미세한 조작이 어렵고 의도치 않은 입력이 발생함 | 줌 단계 버튼을 추가하고, 웹 스트리밍 환경의 클립 핸들 조작과 타임라인 스크롤 개선 |
| 속성 변경을 되돌리거나 실행 결과를 확인하기 어려움 | Camera Key·Action Clip 등의 Undo/Redo 추적을 확대하고, 실행 결과를 Toast Message로 안내 |
| Shorts와 Studio 사이에서 캐릭터와 장면 데이터를 연결해야 함 | 사용자 캐릭터 변경 파이프라인을 안정화하고, Scene 데이터의 JSON 변환 지원 |

이 과정에서 편집 기능의 제공뿐 아니라 **작업 상태를 유지하고, 변경 결과를 확인하며, 필요하면 되돌릴 수 있는 제작 경험**을 함께 다뤘습니다.

### 실제 시연: 작업 순서에 맞게 트랙 정리하기

여러 캐릭터를 편집할 때는 자주 확인하는 트랙을 가까이 두고, 펼쳐 둔 내용을 계속 볼 수 있어야 합니다. Studio 1.4에서는 캐릭터 트랙의 순서를 바꾸고, 다른 캐릭터나 클립을 선택해도 사용자가 정한 접기·펼치기 상태를 유지하도록 개선했습니다.

아래는 릴리즈 노트에 기록된 **타임라인·Shorts 연동 팀의 시연 영상**입니다. 해당 팀에 참여하며 진행한 편집 경험 개선의 결과를 보여줍니다.

**캐릭터 트랙 순서 변경 · 7초**

<video controls playsinline preload="none" width="1280" height="718" poster="/assets/projects/cinevstudio/track-reorder-poster.webp" aria-label="캐릭터 트랙 순서를 변경하는 Studio 1.4 시연" style="display: block; width: 100%; height: auto; aspect-ratio: 1280 / 718; border-radius: 0.75rem; background: #111;">
  <source src="/assets/projects/cinevstudio/track-reorder.mp4" type="video/mp4">
  <a href="/assets/projects/cinevstudio/track-reorder.mp4">트랙 순서 변경 영상 보기</a>
</video>

트랙 메뉴에서 위로 이동하거나 맨 위로 올려, 작업 우선순위에 맞게 캐릭터를 정리합니다.

**트랙 접기·펼치기 상태 유지 · 22초**

<video controls playsinline preload="none" width="1280" height="682" poster="/assets/projects/cinevstudio/track-state-poster.webp" aria-label="캐릭터 선택을 바꿔도 트랙의 접기 펼치기 상태가 유지되는 Studio 1.4 시연" style="display: block; width: 100%; height: auto; aspect-ratio: 1280 / 682; border-radius: 0.75rem; background: #111;">
  <source src="/assets/projects/cinevstudio/track-state.mp4" type="video/mp4">
  <a href="/assets/projects/cinevstudio/track-state.mp4">트랙 상태 유지 영상 보기</a>
</video>

트랙이 선택 대상에 따라 자동으로 열리고 닫히던 동작을 수동 제어로 바꿔, 비교 중인 트랙을 계속 펼쳐 둘 수 있도록 했습니다. 영상에는 Unreal Editor 안에서 실행한 개발 빌드가 표시됩니다.

### 실제 시연: 클립 이동이 영향을 주는 범위 선택하기

클립 하나의 타이밍을 바꾸려다 다른 캐릭터의 연출까지 움직이면 다시 맞춰야 할 작업이 생깁니다. 리플 편집의 적용 범위를 선택할 수 있도록 하여, 편집하려는 대상에 맞게 주변 클립의 이동을 제어합니다.

**리플 편집 범위 선택 · 20초**

<video controls playsinline preload="none" width="1280" height="718" poster="/assets/projects/cinevstudio/ripple-scope-poster.webp" aria-label="리플 적용 범위를 선택하고 클립을 이동하는 Studio 1.4 시연" style="display: block; width: 100%; height: auto; aspect-ratio: 1280 / 718; border-radius: 0.75rem; background: #111;">
  <source src="/assets/projects/cinevstudio/ripple-scope.mp4" type="video/mp4">
  <a href="/assets/projects/cinevstudio/ripple-scope.mp4">리플 편집 영상 보기</a>
</video>

연결을 해제하면 해당 클립만 이동할 수 있습니다. 같은 릴리즈에서는 빈 공간의 추가·삭제 범위도 클립, 캐릭터, 전체로 나누어 타이밍을 조정할 수 있게 했습니다.

### 편집 결과를 되돌리고 상태를 확인하기

Undo/Redo는 단순히 버튼을 제공하는 것보다 **어디까지 복구되는지 일관되게 동작하는 것**이 중요했습니다. Studio 1.4의 팀 개선 결과에서는 다음과 같이 복구 범위와 피드백을 보강했습니다.

- **Shot Band 편집 복구:** 생성·삭제·복제·순서 변경까지 Undo 범위를 확대했습니다.
- **화면 상태 동기화:** 오브젝트를 이전 위치로 되돌릴 때 기즈모도 함께 이동하고, 단축키 실행 후 버튼의 활성 상태도 갱신하도록 했습니다.
- **실행 결과 안내:** Toast Message로 Undo/Redo 결과를 알리고, 다른 씬으로 전환할 때는 이전 씬의 기록을 초기화했습니다.

## 릴리즈 화면으로 보는 제품의 발전

### 장면 배치와 촬영 결과를 함께 확인하는 카메라 미리보기

Studio 1.2에서는 카메라 클립의 촬영 화면을 작은 미리보기 창(PIP)으로 제공했습니다. 3D 공간의 캐릭터 배치와 카메라가 실제로 담는 구도를 한 화면에서 비교할 수 있습니다. 카메라 템플릿에는 샷 크기·상황별 필터와 카테고리 목록도 추가되었습니다.

![Studio 1.2 카메라 편집 화면. 3D 뷰포트 오른쪽 위의 PIP 창에서 캐릭터 클로즈업 구도를 확인할 수 있습니다.](/assets/projects/cinevstudio/camera-pip.webp)

### 클립을 읽고 조작하기 쉬운 타임라인

Studio 1.5.1에서는 타임라인의 표시 영역을 확대하고, 종류마다 달랐던 클립 추가 버튼을 `+`로 통일했습니다. 여러 액션을 선택한 뒤 시작 위치를 함께 옮기고, 이동할 위치를 홀로그램으로 미리 보여주는 기능도 추가되었습니다.

![Studio 1.5.1 개발 빌드의 확장된 타임라인. 릴리즈 노트의 빨간 표시가 액션 클립과 하단 스크롤 영역을 강조합니다.](/assets/projects/cinevstudio/timeline-expanded.webp)
