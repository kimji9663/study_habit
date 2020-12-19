// Headfirst JS - 7. validate 2

/**
 * 다음과 같은 형태의 전화번호를 입력 받습니다.
 * "123-4567"
 * 허용된 번호는 0에서 9까지의 숫자 중 7개.
 * 중간에 "-"가 선택적으로 들어갑니다.
 */

function validate(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }
    var first = phoneNumber.substring(0, 3); // 0번부터 3번까지
    var second = phoneNumber.substring(phoneNumber.length - 4); // 4번부터 끝까지

    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-"); // true 또는 false 리턴
    }
    return true;
}
console.log(validate("123-4567"));

// 이 코드에서 버그 찾기
// 오류발견!! 123-456 일 경우에도 true 리턴.