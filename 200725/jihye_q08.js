// 08. 객체의 키 이름 중복
/*
 * 자바스크립트 객체를 다음과 같이 만들었다. 
   출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )
*/

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);//84 : 객체의 키가 중복된 경우에는 가장 마지막 키값이 현재의 값

 