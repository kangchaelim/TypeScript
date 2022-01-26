// < ts -> js > 
function logName(name) {
    console.log(name);
}
logName('Jack');
// < Type Annotations >
var studentID = 12345;
var studentName = "Jenny Kim";
var age = 26;
var gender = "female";
var subject = "JavaScript";
var courseCompleted = false;
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: "Janet Jackson",
        // age: 26, 없어도 오류가 뜨지 않음
        gender: "male",
        subject: "JavaScript",
        courseCompleted: false
    };
}
function saveStudentDetails(student) {
    // student.studentID = 11222; '읽기 전용 속성이므로 'studentID'에 할당할 수 없습니다.'라는 오류가 뜸.
}
var student1 = {
    studentID: 123456,
    studentName: "Janet Jackson",
    age: 30,
    gender: "male",
    subject: "JavaScript",
    courseCompleted: false
};
saveStudentDetails(student1);
