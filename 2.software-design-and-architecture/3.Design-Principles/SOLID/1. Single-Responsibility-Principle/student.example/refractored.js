"use strict";
//Models
class Student_1 {
    name;
    id;
    section;
    CR_BONUS = 10;
    NORMAL_BONUS = 0;
    score = 0;
    constructor(name, id, section) {
        this.name = name;
        this.id = id;
        this.section = section;
    }
    getScore() {
        return this.score;
    }
}
class NormalStudent_1 extends Student_1 {
    constructor(name, id, section) {
        super(name, id, section);
    }
    setScore(score) {
        this.score = score + ((score * this.NORMAL_BONUS) / 100);
    }
}
class ClassRepresentative_1 extends Student_1 {
    constructor(name, id, section) {
        super(name, id, section);
    }
    setScore(score) {
        this.score = score + ((score * this.CR_BONUS) / 100);
    }
}
//Services
class OutputService_1 {
    static outputSummedScore(totalScore) {
        console.log(totalScore);
    }
}
class ScoreGeneratingService_1 {
    static calculateScores(students = []) {
        let score = 0;
        students.forEach(student => {
            score += student.getScore();
        });
        return score;
    }
}
// client code
let normalStudent_1_1 = new NormalStudent_1('Naim', '1404111', 'A');
let normalStudent_1_2 = new NormalStudent_1('Jamil', '1404112', 'A');
let normalStudent_1_3 = new NormalStudent_1('Hasan', '1404113', 'A');
let normalStudent_1_4 = new ClassRepresentative_1('Akash', '1404001', 'A');
normalStudent_1_1.setScore(55);
normalStudent_1_2.setScore(89);
normalStudent_1_3.setScore(32);
normalStudent_1_4.setScore(92);
let students_1 = [normalStudent_1_1, normalStudent_1_2, normalStudent_1_3, normalStudent_1_4];
let totalScore_1 = ScoreGeneratingService_1.calculateScores(students_1);
OutputService_1.outputSummedScore(totalScore_1);
