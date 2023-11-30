---
title: "이상한 나라의 JS"
excerpt: "자주 보이지는 않지만 마주치면 당황스러운 JavaScript의 수수께끼 같은 동작들을 알아보자"
date: "2023-11-30"
tags:
  - JavaScript
coverImage: "/assets/blog/school/cover.jpg"
ogImage:
  url: "/assets/blog/school/cover.jpg"
---

자주 보이지는 않지만 마주치면 당황스러운 JavaScript의 수수께끼 같은 동작들을 알아보자.

### 바NaN나

```jsx
("b" + "a" + +"a" + "a").toLowerCase();
// → 'banana'
```

바NaN나가 만들어지는 과정은 다음과 같다.

1. `'a' +`와 `+ 'a'` 사이의 공백으로 인해 `"ba" + (+"a") + "a"`로 해석
2. `+"a"`는 `NaN`으로 연산 (`"b" + "a" + NaN + "a"`)
3. 더하기(`+`) 연산과 `toLowerCase()`를 거치면 "banana"가 된다!

~~제일 웃겼던 동작이다.~~

### 객체지향 null

```js
typeof null;
// → 'object'
```

JavaScript 첫 버전부터 있었던 유명한 버그여서 그런지 mdn 공식 문서에도 [관련 내용](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof#null)이 나와있다.
기존 사이트에 대한 호환성 문제로 [ECMAScript 수정 제안](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null)도 거절된 것을 확인할 수 있다.

### min > max

```js
Math.min() > Math.max();
// → true
```

이 동작은 인자를 넘기지 않은 `Math.min()`과 `Math.max()`가 각각 무엇을 반환하는지 체크해보면 쉽게 이해할 수 있다.

```js
Math.min();
// → Infinity
Math.max();
// → -Infinity
```

`Infinity > -Infinity`, 당연하다. 다만 여기서 또 하나의 궁금증이 생긴다. 왜 양, 음의 무한대가 반환되는 것일까?

직접 `Math.min()`을 만든다고 상상해보자.

```js
function min(arr) {
    const initialValue = ?
    
    let smallestValue = initialValue;

    for (let i = 0; i < arr.length; i++) {
        smallestValue = arr[i] < smallestValue ? arr[i] : smallestValue;
    }

  return smallestValue;
}
```

방식은 조금씩 다를 수 있겠지만 `arr`을 순회하며 숫자를 비교해 최솟값을 찾는 로직일 것이다. 만약 `initialValue`의 값이 `arr` 내부의 값보다 작다면 어떻게 될까?  

`min` 함수의 의도와는 다르게 `arr` 중 최솟값이 아닌 `initialValue`를 반환하게 된다. 즉, `initialValue`는 JavaScript에서 다루는 값 중 가장 큰 값인 `Infinity`이어야 한다. `initialValue`가 가지는 값이 곧 인자 없이 호출된 `min()`의 반환값이 될 것이므로 `Infinity`를 반환하게 된다.

`Math.max()`도 동일한 이유로 가장 작은 값인 `-Infinity`를 반환한다.

### 0.30000000000000004

```js
0.3 + 0.2;
// → 0.5

0.1 + 0.2;
// → 0.30000000000000004
```

매우 유명한 부동소수점 이슈이다. 디테일한 이유를 설명하자면 알아보기 힘들 정도로 길다란 숫자 더미를 비교해가며 봐야 하므로 후속 포스팅으로 책임을 넘기겠다. 간단하게 요약하면 부동소수점 방식의 실수 표현 정밀도 문제 때문에 미세한 오차가 발생하는 것이다.


### parseInt라면 I’m not 신뢰에요

```js
["1", "7", "11"].map(parseInt);
// → [1, NaN, 3]
```

약간의 힌트가 필요한 수수께끼이다.

```js
["1", "7", "11"].map((num) => (parseInt(num)))
// → [1, 7, 11]
```

위의 코드가 정상 작동하는 것으로 미루어 보아 `parseInt`의 인자가 잘못 들어갔음을 유추할 수 있다. 두 가지 사실을 고려해보자.

- [`map`은 `callbackFn`에 `element`, `index`, `array` 세 값을 전달한다.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#parameters)
- [`parseInt`는 `string`, `radix(optional)` 두 인자를 받는다.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#parameters) `radix` 값에 8이 들어오면 8진수로 해석하고, 2가 들어오면 2진수로 해석한다. 0이거나 값이 없으면 `string`의 값에 따라 유추해서 해석한다.

이제 종합해볼 시간이다! `map(parseInt)`에서 `parseInt`는 `element`, `index` 값을 전달받는다. 풀어서 써보면 아래와 같다.

```js
parseInt('1', 0); // 10진법으로 유추, 정상적으로 1 반환
// → 1
parseInt('7', 1); // `radix` 에 2-36 외의 값이 들어오면 NaN 반환
// → NaN
parseInt('11', 2); // 2진법 상 11 → 2 + 1이므로 3 반환
// → 3
```


### 18 - 17 = 3

```js
018 - 017;
// → 3
```

이 동작도 진법 때문에 발생하는 문제이다. JavaScript에서는 앞에 `0`이 붙고, `0` 이후의 숫자들이 모두 `0-7` 범위인 경우 8진수로 해석한다. `018`은 `8`이 있으니 패스, `017`은 조건을 만족하기 때문에 8진수로 해석되어 `15`로 계산된다. 즉 `18 - 15`로 계산되어 `3`이 반환된다.


### 진실에 진실을 더하면

```js
true + true;
// → 2

false + true;
// → 1
```

끝판왕 전 쉬어가는 느낌으로 넣어보았다. 연산 시 `true`가 `1`로 변환되고, `false`가 `0`으로 변환되어 이와 같이 동작한다.


### 비밀 편지

```js
(![] + [])[+[]] +
(![] + [])[+!+[]] +
([![]] + [][[]])[+!+[] + [+[]]] +
(![] + [])[!+[] + !+[]];
// → 'fail'
```

조금 어지럽지만 하나하나 뜯어보자.

```js
// (![] + [])[+[]]

![] + []
// → 'false'
+[]
// → 0

'false'[0]
// → 'f'
```

```js
// (![] + [])[+!+[]]

+!+[] // +[]이 0이므로, !+[]은 true, +!+[]은 1
// → 1

'false'[1]
// → 'a'
```

```js
// ([![]] + [][[]])[+!+[] + [+[]]]


['false'] + undefined // [![]]은 ['false'], [][[]]는 undefined
// → 'falseundefined'
+!+[] + [+[]] // 1 + [0]
// → '10'

'falseundefined'['10']
// → 'i'
```

```js
// (![] + [])[!+[] + !+[]]

!+[] + !+[] // !+[]은 true, true + true는 2
// → 2

'false'[2]
// → 'l'
```

`'f'+'a'+'i'+'l'`! 해독을 완료했다. ~~이 정도면 JS가 이상한 게 아니라 JS 개발자들이 이상한 것 같다~~ 과정이 흥미로워서 비밀 편지 생성기 같은 것을 만들어봐도 재미있을 것 같다. 개발자 간의 시크릿 토크를 할 때 사용하도록 하자.

## 참고 자료

- [Why is the result of ('b'+'a'+ + 'a' + 'a').toLowerCase() 'banana'? | stackoverflow](https://stackoverflow.com/questions/57456188/why-is-the-result-of-ba-a-a-tolowercase-banana)
- [Why is Math.max() smaller than Math.min()? | Quora](https://www.quora.com/Javascript-Why-is-Math-max-smaller-than-Math-min)
- [What is the oddest JavaScript behavior? | dev.to](https://dev.to/ben/what-is-the-oddest-javascript-behavior-4dh2)
- [JSFuck.com](https://jsfuck.com/)
- [The Weird Parts of JavaScript](https://shivamv12.github.io/Weird-JS/)