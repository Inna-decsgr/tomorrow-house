내일의 집 - 오늘의 집 클론 코딩

##### 배포 링크 📌
https://inna-decsgr.github.io/tomorrow-house/

### 1.GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class=" gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button is-cart"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class=" gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button is-cart"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avater-32">
      <img src="./assets/images/img-user-01.jpg" alt="4달라 아저씨" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인을 했을 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avater-24">
      <img src="./assets/images/img-user-01.jpg" alt="4달라 아저씨" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```

### 3. Product-review
<<<<<<< HEAD
=======

- 유저 이미지가 있는 경우, 사용자가 도움됨을 미체크, 도움됨 1+

```html
<li class="review-item">
  <article class="review-card">
    <header class="review-card-header">
      <h3 class="visually-hidden">사달라 님이 작성한 리뷰</h3>
      <a href="/" class="avater-24">
        <img src="./assets/images/img-user-01.jpg" alt="4달라 아저씨" />
      </a>

      <div class="info">
        <a class="username" href="/"><strong>사달라</strong></a>

        <div class="detail">
          <div class="star-rating-13" aria-label="5.0점 / 5.0점">
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
          </div>

          <div class="misc">
            <time datetime="2021-01-01"> 2021.01.01 </time>
            <span>오늘의집 구매</span>
          </div>
        </div>
      </div>
    </header>

    <div class="review-card-body">
      <p>
        집 전체를 데운다기보다는 틀어놓고 앞에 앉아있으면 따땃해지는 정도예요.
        불 꺼놓고 난로 켜고 담요 덮은 채로 커피 마시면 아주 좋아요. 고양이도
        좋아해요
      </p>
    </div>

    <footer class="review-card-footer">
      <button type="button" class="btn-outlined btn-32">도움이 돼요</button>
      <p>
        <strong><span>7</span>명</strong>에게 도움이 되었습니다.
      </p>
    </footer>
  </article>
</li>
```

- 유저 이미지가 없는 경우

```html
<h3 class="visually-hidden">우유파이 님이 작성한 리뷰</h3>
<a href="/" class="avater-24" aria-label="우유파이 님의 프로필로 이동"></a>
```

- 유저가 리뷰이미지를 올린 경우

```html
<div class="review-card-body">
  <div class="review-image">
    <img
      src="assets/images/img-review-04.jpg"
      alt="고영희님이 좋아합니다 님의 리뷰 사진"
    />
  </div>
  <p>
    고양이가 좋아해요 ㅎㅎ 섬세한 온도조절이 안되는게 아쉽지만, 이 가격 이
    디자인이면 만족할 수 밖에 없어요 :) 좋습니다!
  </p>
</div>
```

- 사용자가 도움됨을 체크, 도움됨 1+

```html
<footer class="review-card-footer">
  <button type="button" class="btn-primary btn-32">
    <i class="ic-check" aria-hidden></i>
    도움됨
  </button>
  <p>
    <strong><span>1</span>명</strong>에게 도움이 되었습니다.
  </p>
</footer>
```

- 사용자가 도움됨을 미체크, 도움됨 x

```html
<footer class="review-card-footer">
  <button type="button" class="btn-outlined btn-32">도움이 돼요</button>
</footer>
```

- 리뷰가 0개일 경우

```html
<section
  id="product-review"
  class="product-section product-review"
  role="tabpanel"
>
  <header class="product-section-header">
    <h1 class="title">리뷰</h1>
    <strong class="badge" aria-label="0개">0</strong>
    <a class="text-button" href="/">리뷰쓰기</a>
  </header>

  <div class="product-section-content">
    <p class="review-empty">
      첫 리뷰를 남겨주세요!<br />
      최대 <strong> 500P</strong>를 드립니다.
    </p>
  </div>
</section>
```

### 4. Inquiry Card Variations

- 문의 공개, 답변 미완료

```html
<div class="inquiry-card-body">
  <div class="inquiry-content">
    <span aria-label="문의 내용">Q</span>
    <p>
      상품받았는데<br />
      사용하면서 보니까 불들어오는곳 옆에<br />
      하얀 부분이 갈색으로 얼룩져있는데 불량인가요...?<br />
      위험하지는 않겠죠? 다른분들 후기사진에는 다 깨끗한 것 같아서요!<br />
      사진첨부가없어서 텍스트로 설명하려 하니 애매하네요ㅠㅠ
    </p>
  </div>
</div>
```

- 문의 미공개, 답변 미완료

```html
<div class="inquiry-card-body">
  <div class="inquiry-content">
    <span aria-label="문의 내용">Q</span>
    <p>
      <i class="ic-lock" aria-hidden></i>
      비밀글입니다.
    </p>
  </div>
</div>
```

- 문의 공개, 답변완료

```html
<div class="inquiry-card-body">
  <div class="inquiry-content">
    <span aria-label="문의 내용">Q</span>
    <p>
      화이트 재입고 날짜 알려 주세요 그리고 4평 남짓 방에 두려고 하는데 너무
      가까울까요
    </p>
  </div>
  <div class="inquiry-content">
    <span aria-label="답변 내용">A</span>
    <div class="seller">
      <strong>OA</strong>
      <time datetime="2021-01-11 12:34"> 2021년 1월 11일 12시 34분</time>
    </div>
    <p>
      안녕하세요 고객님, 보아르입니다:)<br />
      현재 고객님의 주문 정보가 확인되지 않아 바로 안내드리지 못하는 점 양해
      부탁드립니다.<br />
      문의하신 제품의 경우 현재 주문폭주로 인한 예약 판매중으로 순차 발송
      진행되고 있습니다.<br />
      주문 시 최대한 빠른 발송 진행될 수 있도록 노력하겠습니다.<br />
      감사합니다.
    </p>
  </div>
</div>
```


- 문의가 없을 경우

```html
<section
  id="product-inquiry"
  class="product-section product-inquiry is-open"
  role="tabpanel"
>
  <header class="product-section-header">
    <h1 class="title">문의</h1>
    <strong class="badge" aria-label="0개">0</strong>
    <a class="text-button" href="/">문의하기</a>
    <button class="icon-button sm-only" type="button" aria-label="더보기">
      <i class="ic-chevron" aria-hidden></i>
    </button>
  </header>

  <div class="product-section-content">
    <p class="inquiry-empty">문의 내역이 없습니다.</p>
  </div>
</section>
```



>>>>>>> aaad2181f5341b1d5ff269e35fcbf734cf132433

- 유저 이미지가 있는 경우, 사용자가 도움됨을 미체크, 도움됨 1+

```html
<li class="review-item">
  <article class="review-card">
    <header class="review-card-header">
      <h3 class="visually-hidden">사달라 님이 작성한 리뷰</h3>
      <a href="/" class="avater-24">
        <img src="./assets/images/img-user-01.jpg" alt="4달라 아저씨" />
      </a>

      <div class="info">
        <a class="username" href="/"><strong>사달라</strong></a>

        <div class="detail">
          <div class="star-rating-13" aria-label="5.0점 / 5.0점">
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
            <i class="ic-star is-active"></i>
          </div>

          <div class="misc">
            <time datetime="2021-01-01"> 2021.01.01 </time>
            <span>오늘의집 구매</span>
          </div>
        </div>
      </div>
    </header>

    <div class="review-card-body">
      <p>
        집 전체를 데운다기보다는 틀어놓고 앞에 앉아있으면 따땃해지는 정도예요.
        불 꺼놓고 난로 켜고 담요 덮은 채로 커피 마시면 아주 좋아요. 고양이도
        좋아해요
      </p>
    </div>

    <footer class="review-card-footer">
      <button type="button" class="btn-outlined btn-32">도움이 돼요</button>
      <p>
        <strong><span>7</span>명</strong>에게 도움이 되었습니다.
      </p>
    </footer>
  </article>
</li>
```

- 유저 이미지가 없는 경우

```html
<h3 class="visually-hidden">우유파이 님이 작성한 리뷰</h3>
<a href="/" class="avater-24" aria-label="우유파이 님의 프로필로 이동"></a>
```

- 유저가 리뷰이미지를 올린 경우

```html
<div class="review-card-body">
  <div class="review-image">
    <img
      src="assets/images/img-review-04.jpg"
      alt="고영희님이 좋아합니다 님의 리뷰 사진"
    />
  </div>
  <p>
    고양이가 좋아해요 ㅎㅎ 섬세한 온도조절이 안되는게 아쉽지만, 이 가격 이
    디자인이면 만족할 수 밖에 없어요 :) 좋습니다!
  </p>
</div>
```

- 사용자가 도움됨을 체크, 도움됨 1+

```html
<footer class="review-card-footer">
  <button type="button" class="btn-primary btn-32">
    <i class="ic-check" aria-hidden></i>
    도움됨
  </button>
  <p>
    <strong><span>1</span>명</strong>에게 도움이 되었습니다.
  </p>
</footer>
```

- 사용자가 도움됨을 미체크, 도움됨 x

```html
<footer class="review-card-footer">
  <button type="button" class="btn-outlined btn-32">도움이 돼요</button>
</footer>
```

- 리뷰가 0개일 경우

```html
<section
  id="product-review"
  class="product-section product-review"
  role="tabpanel"
>
  <header class="product-section-header">
    <h1 class="title">리뷰</h1>
    <strong class="badge" aria-label="0개">0</strong>
    <a class="text-button" href="/">리뷰쓰기</a>
  </header>

  <div class="product-section-content">
    <p class="review-empty">
      첫 리뷰를 남겨주세요!<br />
      최대 <strong> 500P</strong>를 드립니다.
    </p>
  </div>
</section>
```
