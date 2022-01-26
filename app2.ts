// Any Type 예시
let someValue: any = 5;
someValue = 'hello';
someValue = true;
// 타입을 바꿔써도 에러가 나지 않음

// Union Type 예시
let price:number|string = 5;
price = 'free';
// price = false; ''boolean' 형식은 'string | number' 형식에 할당할 수 없습니다.' 오류 발생

// Type Aliases 예시
type StrOrNum = number | string;
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (price:StrOrNum, qty:number):void => {

};

const findOrderID = (customer: {customerID:StrOrNum, 
    name: string}, productID:StrOrNum):StrOrNum => {
        return orderID;
    }

// Type Guard 예시
let itemPrice: number;

// const setItemPrice = (price: StrOrNum):void=> {
//     itemPrice = price;
// };

// setItemPrice(50);
// itemPrice에 ''StrOrNum' 형식은 'number' 형식에 할당할 수 없습니다.'라는 오류가 뜸
// typeof Operator(변수의 데이터 타입을 반환하는 연산자)과 조건문을 사용하면 해결 가능

const setItemPrice = (price: StrOrNum):void=> {
    if (typeof price === 'string'){
        itemPrice = 0;
    } else{
        itemPrice = price;
    }   
};

setItemPrice(50);