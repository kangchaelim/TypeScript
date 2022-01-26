// Any Type 예시
let someValue = 5;
someValue = 'hello';
someValue = true;
// 타입을 바꿔써도 에러가 나지 않음
// Union Type 예시
let price = 5;
price = 'free';
let totalCost;
let orderID;
const calculateTotalCost = (price, qty) => {
};
const findOrderID = (customer, productID) => {
    return orderID;
};
// Type Guard 예시
let itemPrice;
// const setItemPrice = (price: StrOrNum):void=> {
//     itemPrice = price;
// };
// setItemPrice(50);
// itemPrice에 ''StrOrNum' 형식은 'number' 형식에 할당할 수 없습니다.'라는 오류가 뜸
// typeof Operator(변수의 데이터 타입을 반환하는 연산자)과 조건문을 사용하면 해결 가능
const setItemPrice = (price) => {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
