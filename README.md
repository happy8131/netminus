- header(movies, tv, search)

- grid, poster(별점)

- search input, 검색 결과를 띄워주는 컴포넌트

- 로딩화면

- detail
  (제목, 출시년도, 상영시간, 장르, 언어, 줄거리,
  작가, 회사, 나라 > ROUTER)

진행과정

1. 컴포넌트, 페이지 폴더를 만든다
2. styled component, react router패키지 설치
3. router 구현
   3-1. Home router
   3-2. Tv router
   3-3. Search router
   3-4. Detail router
4. pages 구현
   4-1. home page 구현
   4-2. tv page 구현
   4-3. search page 구현
   4-4. detail page 구현
5. component 구현
   5-1. header component 구현
   5-2. loading component 구현
   5-3. search component 구현
   5-4. result component 구현
   5-5. grid component 구현
   5-6. poster component 구현
6. 배포

데이터 흐름도
page > grid > poster
search page > grid > result
poster > detail
page > loading
