"use strict";
//Models
class Student {
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
}
class NormalStudent extends Student {
    constructor(name, id, section) {
        super(name, id, section);
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score + ((score * this.NORMAL_BONUS) / 100);
    }
}
class ClassRepresentative extends Student {
    constructor(name, id, section) {
        super(name, id, section);
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score + ((score * this.CR_BONUS) / 100);
    }
}
//Services
class ScoreGeneratingService {
    static calculateScores(students = []) {
        let score = 0;
        students.forEach(student => {
            score += student.getScore();
        });
        return score;
    }
    static outputSummedScore(totalScore) {
        console.log(totalScore);
    }
}
// client code
let normalStudent1 = new NormalStudent('Naim', '1404111', 'A');
let normalStudent2 = new NormalStudent('Jamil', '1404112', 'A');
let normalStudent3 = new NormalStudent('Hasan', '1404113', 'A');
let normalStudent4 = new ClassRepresentative('Akash', '1404001', 'A');
normalStudent1.setScore(55);
normalStudent2.setScore(89);
normalStudent3.setScore(32);
normalStudent4.setScore(92);
let students = [normalStudent1, normalStudent2, normalStudent3, normalStudent4];
let totalScore = ScoreGeneratingService.calculateScores(students);
ScoreGeneratingService.outputSummedScore(totalScore);
