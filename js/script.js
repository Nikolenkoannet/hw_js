'use strict'

function Student(firstName, lastName, birthYear) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.attendance = Array(10).fill(null);
    this.grades = Array(10).fill(null);

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.present = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.error("attendance is full");
        }
    };

    this.absent = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.error("attendance is full");
        }
    };

    this.mark = function (score){
        if (score < 0 || score > 10) {
            console.error("The score must be from 0 to 10!");
            return;
        }
        const index = this.grades.indexOf(null);
        if (index !== -1) {
            this.grades[index] = score;
        } else {
            console.error("attendance is full");
        }
    };
    this.getAverageGrade = function () {
        let sum = 0;
        let count = 0;

        for (let grade of this.grades) {
            if (grade !== null) {
                sum += grade;
                count++;
            }
        }
        if (count === 0) {
            return 0;
        } else {
            return sum / count;
        }
    };

    this.getAverageAttendance = function () {
        let attended = 0;
        let total = 0;

        for (let status of this.attendance) {
            if (status !== null) {
                total++;
                if (status) {
                    attended++;
                }
            }
        }
        return total === 0 ? 0 : attended / total;
    };

    this.summary = function () {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();

        if (avgGrade > 9 && avgAttendance > 0.9) {
            return "Ух ти, який молодчинка!";
        } else if (avgGrade > 9 || avgAttendance > 0.9) {
            return "Нормально, але можна краще";
        } else {
            return "Редька!";
        }
    };
}



const student1 = new Student("Anna", "Nikolenko", 1997);

student1.present();
student1.present();
student1.absent();
student1.mark(10);
student1.mark(9);
console.log("Anna", student1.summary());

