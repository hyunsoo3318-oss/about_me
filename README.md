## 자기소개 포트폴리오 웹사이트

프론트엔드 개발을 처음 시작하며 만든 개인 포트폴리오 및 자기소개 웹사이트입니다. 바닐라 JavaScript, HTML5, CSS3를 사용하여 구현한 반응형 웹 애플리케이션입니다.

## 기술 스택

- HTML5: 시맨틱 마크업을 활용한 구조화된 웹 페이지
- CSS3: 모던한 디자인과 반응형 레이아웃 구현
- Vanilla JavaScript: 프레임워크 없이 순수 JavaScript로 인터랙티브 기능 구현

## 주요 기능

스티키 네비게이션 헤더
- 페이지 상단에 고정되는 네비게이션 바
- 섹션별 앵커 링크를 통한 빠른 이동
- CSS position: sticky를 활용한 구현

부드러운 스크롤링
- 헤더 높이를 고려한 오프셋 계산으로 정확한 위치 이동
- window.scrollTo()의 behavior: "smooth" 옵션 활용
- 해시 링크 클릭 시 해당 섹션으로 부드럽게 스크롤

프로필 이미지 줌 기능
- 클릭 시 이미지 확대/축소 토글
- CSS transform: scale()을 활용한 애니메이션 효과
- transition 속성으로 부드러운 전환 효과

기술 스택 호버 효과
- 마우스 오버 시 색상 및 폰트 굵기 변경
- 이벤트 리스너를 통한 인터랙티브한 사용자 경험 제공

유틸리티 함수
- jQuery 스타일의 간결한 DOM 선택 함수 ($, $$)
- 코드 가독성 및 유지보수성 향상

## 구현 세부사항

HTML 구조는 시맨틱 HTML5 태그(header, nav, section, footer)를 사용하여 구조화했습니다. CSS는 Flexbox를 활용한 레이아웃 구성과 position: sticky로 고정 헤더를 구현했으며, 반응형 디자인을 위해 max-width와 margin: auto를 활용했습니다.

JavaScript는 이벤트 리스너를 통한 사용자 인터랙션 처리, History API(pushState)를 활용한 URL 해시 관리, 페이지 로드 시 해시 기반 스크롤 처리를 구현했습니다.

## 프로젝트 구조

```
about_me/
├── index.html
├── index.css
├── reset.js
└── images/
    ├── photo.jpg
    ├── html_css_js.png
    ├── pypy.png
    └── java.png
```
