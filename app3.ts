// function sendGreeting(message:string, userName:string):void {
//     console.log(`${message}, ${userName}`);
// }

// sendGreeting('Hello', 'Mark');

// 선택적 매개변수 예시
// 첫 번째 argument만 전달하고 싶을 때
// 그냥 'Mark'를 지웠을 때 오류 발생
// 함수에 정의된 모든 매개 변수가 함수에 필요하다고 가정하기 때문
// 해결방법
// 매개변수 뒤에 ? 붙여주기! 있어도되고 없어도 되는 선택적 매개변수로 변환
// 단, 선택적 매개변수들은 필수 매개변수 뒤에 위치해야 함
// function sendGreeting(message:string, userName?:string):void {
//     console.log(`${message}, ${userName}`);
// }

// sendGreeting('Hello');


// 기본 매개변수 예시
// function sendGreeting(message:string, userName = 'there'):void {
//     console.log(`${message}, ${userName}`);
// }

// sendGreeting('Hello');

function sendGreeting(message = 'Hello', userName = 'there'):void {
    console.log(`${message}, ${userName}`);
}

sendGreeting(); // Hello, there
sendGreeting('Good morning'); // Good morning, there
sendGreeting('Goode morning', 'Jenny'); // Goode morning, Jenny



