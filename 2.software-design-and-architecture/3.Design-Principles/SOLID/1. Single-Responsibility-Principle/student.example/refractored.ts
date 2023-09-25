//Models
abstract class Student_1 {
    public CR_BONUS: number = 10;
    public NORMAL_BONUS: number = 0;
    public score: number = 0;

    protected constructor(protected name: any, protected id: any, protected section: any) {
    }

    getScore() {
        return this.score;
    }

    abstract setScore(score: number): any;
}

class NormalStudent_1 extends Student_1 {
    constructor(name: any, id: any, section: any) {
        super(name, id, section);
    }

    setScore(score: number): void {
        this.score = score + ((score * this.NORMAL_BONUS) / 100);
    }
}

class ClassRepresentative_1 extends Student_1 {
    constructor(name: any, id: any, section: any) {
        super(name, id, section);
    }

    setScore(score: number): void {
        this.score = score + ((score * this.CR_BONUS) / 100);
    }
}

//Services
class OutputService_1 {
    static outputSummedScore(totalScore: number) {
        console.log(totalScore);
    }

}

class ScoreGeneratingService_1 {
    static calculateScores(students: Student_1[] = []) {
        let score = 0;
        students.forEach(student => {
            score += student.getScore()
        })
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
