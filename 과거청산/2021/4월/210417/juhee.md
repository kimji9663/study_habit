### js 책 다시 읽기 

### 프로퍼티 어트리뷰트 

내부슬롯과 내부 메서드  :  이중 대괄호로 감싼 이름들이 내부 슬롯과 내부 매서드 이다. 
직접 접근할 수 있도록 외부로 공개된 객체의 프로퍼티는 아니다. 
즉, 내부 슬롯과 내부 메서드는 자바스트립트 엔진의 내부 로직이므로 원칙적으로 자바스크립트는 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지 않음. 

> 모든 객체는 내부 슬롯을 가진다 __proto__를 통해 간접적으로 접근할 수 있다. 

#### 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다. 

프로퍼티의 상태란, 
1. 프로퍼티의 값
2. 값의 갱신 가능 여부 
3. 열거 가능 여부 
4. 재 정의 가능 여부
