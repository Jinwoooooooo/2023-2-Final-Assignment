# 🎟️ 영화 티켓 판매 키오스크 (Movie Ticket Kiosk)

> **기존 키오스크 UI의 아쉬움을 해결하기 위해 직접 설계한 영화 예매 시스템**

영화관 키오스크의 불편한 사용자 경험을 개선하고자 기획한 **개인 프로젝트**입니다.  
HTML, CSS로 UI를 구성하고, JavaScript로 영화 선택부터 좌석 예매, 결제, 티켓 출력까지 전 과정을 동작하는 키오스크를 구현했습니다.

---

## 📌 프로젝트 개요

- **프로젝트명**: Movie Ticket Kiosk
- **개발 형태**: 개인 프로젝트
- **개발 목표**: 실제 영화관 키오스크의 사용자 경험을 분석하고, 더 직관적이고 편리한 UI/UX로 구현
- **핵심 아이디어**: 영화 예매 과정을 물 흐르듯 자연스럽게, 시각적으로 명확하게 전달

---

## 🧑‍💻 구현 기술

| 분야      | 사용 기술                |
|-----------|--------------------------|
| 마크업     | HTML5                   |
| 스타일링   | CSS3 (레이아웃, 애니메이션 포함) |
| 동작 제어  | JavaScript, JQuery, JQueryUI |

---

## 🎬 주요 기능 및 동작 흐름

### 1️⃣ 첫 화면 — 영화 목록 + 예고편/광고
- **상영 중인 영화 목록**을 카드 형식으로 표시
- 각 영화 정보: **포스터, 제목, 상영 시간, 연령 등급**
- 화면 상단에 **예고편 영상과 광고 자동 반복 재생**

### 2️⃣ 인원 선택
- 영화 포스터 클릭 시 **인원 선택 창** 표시
- 일반/청소년 구분, **최대 16명까지 선택 가능**
- 인원 수를 선택하면 **다음 버튼** 활성화

### 3️⃣ 좌석 선택
- 좌석 창에서 **선택한 인원 수만큼 좌석 선택 가능**
- **이미 예매된 좌석은 회색**으로 표시되어 선택 불가
- 모든 좌석을 선택하면 다음 단계로 이동 가능

### 4️⃣ 결제
- 결제는 **카드 전용**
- 미리 설정한 **카드를 드래그**하여 리더기에 올려놓는 방식
- 올바르게 결제되면 “✅ 결제 완료” 알림 팝업 표시

### 5️⃣ 티켓 출력
- 결제 완료 후 **영수증(티켓)**이 화면에 출력됨
- 상단에 **프린트 버튼**과 **홈 버튼** 표시
  - **프린트 버튼** 클릭 시 티켓 출력
  - **홈 버튼** 클릭 시 첫 화면으로 이동

---

## 🧩 추가 구현 요소

- 사용자 편의성 고려한 **단계별 화면 전환**
- **예매 불가 좌석 시각화**를 통한 실시간 좌석 정보 제공
- 키오스크 특성에 맞춘 **드래그 기반 카드 결제 UX**
