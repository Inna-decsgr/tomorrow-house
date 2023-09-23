## 4. Inquiry Card Variations

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
