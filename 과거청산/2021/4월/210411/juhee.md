### 자바스크립트 다시 읽기 



### 스코프 
: 함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다고 헸다. 
이것은 매개변수를 참조할 수 있는 **유효범위**, 즉 배개변수의 스코프가 함수 몸체 내부로 한정되기 때문이다.
> 스코프는 식별자가 유효한 범위를 말한다. 

>> 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.

- 식별자 결정 
: 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지를 결정 하는 것.

> 스코프는 식별자를 검색할 때 사용하는 규칙. 

- 스코프 체인
: 함수 몸체 내부에서 함수가 정의된 것을 '**함수의 중첩**' 이라 한다. 
: 함구 몸체 내부에서 정의한 함수를 '**중첩 합수**', 중첩 함수를 포한하는 함수를 '**외부 함수**' 라고 한다.
> 스코프가 함수의 중첩에 의해 계층적 구조를 갖는것 **(스코프 체인)**을 의미함.


**변수**를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다. 

**상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수 없다**


### 스코프의 종류
1. 전역 스코프
    - 코드의 바깥 영역
        - **어디서든 참조할 수 있다.** 

2. 지역 스코프 
    - 함수 몸체 내부 
        - **자신의 지역 스코프와 하위 지역 스코프에서 유효함.**

--- 

### 단어 


**렉시컬 환경**
: 코드가 어디서 실행되며 주변에 어떤 코드가 있는지 확인하는 것. 
코드의 문맥은 렉시컬 환경으로 이루어지며, 이를 구현한 것이 실행 컨테스트이다.



