// < ts -> js > 
function logName(name) {
    console.log(name);
}
logName('Jack');
// < Type Annotations >
let studentID = 12345;
let studentName = "Jenny Kim";
let age = 26;
let gender = "female";
let subject = "JavaScript";
let courseCompleted = false;
// function getStudentDetails(studentID:number): {
// 함수의 결과값에도 타입 명시할 수 있음
// 함수가 아무것도 반환하지 않을 경우 타입을 void라 명시 할 수 있음
// object라고 타입 명시 후 아무것도 반환하는게 없을 때 콘솔창에 '선언된 형식이 'void'도 'any'도 아닌 함수는 값을 반환해야 합니다.'라는 오류가 뜨게 된다.
// 반환되는 객체의 구조를 타입으로 지정
//     studentID:number;
//     studentName:string;
//     age:number;
//     gender:string;
//     subject:string;
//     courseCompleted:boolean;
// }{   
//     return null;
// }
// < TypeScript Interface > // < TypeScript Enum >
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: "Janet Jackson",
        // age: 26, 없어도 오류가 뜨지 않음
        gender: GenderType.Male,
        subject: "JavaScript",
        courseCompleted: false,
    };
}
function saveStudentDetails(student) {
    // student.studentID = 11222; '읽기 전용 속성이므로 'studentID'에 할당할 수 없습니다.'라는 오류가 뜸.
}
let student1 = {
    studentID: 123456,
    studentName: "Janet Jackson",
    age: 30,
    gender: GenderType.Male,
    subject: "JavaScript",
    courseCompleted: false,
};
saveStudentDetails(student1);
