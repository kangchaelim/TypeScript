class Employee {
 fullName: string;
 age: number;
 jobTitle: string;
 hourlyRate: number;
 workingHoursPerWeek:number;
 
 printEmployeeDetails = ():void => {
        console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은
        ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
    }
}
// 클라스 내에서 this 키워드를 통해 접근 가능


let employee1 = new Employee();
employee1.printEmployeeDetails(); // undefined의 직업은 undefined 이고 일주일의 수입은 NaN 달러 이다.
