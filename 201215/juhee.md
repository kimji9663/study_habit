### vue.js

#### v-slot
v-slot을 쓸떄는 디자인 요소는 하위 버전에서 관리 한다고 생각해야함. 
즉, 몸통은 그대로 두고 가지치기 형식으로 쭉쭉 가져다 쓰면서 
조건에 맞게 형식과 디자인을 바꿔서 사용

#### api 호출 순서 
api가 mouted에서 불러와서 브라우저 그려질때는 api가 호출되지않음.
즉, 그 시간엔 아무것도 안불러와져있어 콘솔에 오류로 찍힘.
```v-if="products.length > 0``` 형태로 ```v-if```조건문을 주어 해결
