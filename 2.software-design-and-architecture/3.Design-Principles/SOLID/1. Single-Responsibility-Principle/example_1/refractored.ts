//Models
abstract class Student {
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

class NormalStudent extends Student {
    constructor(name: any, id: any, section: any) {
        super(name, id, section);
    }

    setScore(score: number): void {
        this.score = this.score + ((this.score * this.NORMAL_BONUS) / 100);
    }
}

class ClassRepresentative extends Student {
    constructor(name: any, id: any, section: any) {
        super(name, id, section);
    }

    setScore(score: number): void {
        this.score = this.score + ((this.score * this.CR_BONUS) / 100);
    }
}

//Services
class OutputService {
    static outputSummedScore(totalScore: number) {
        console.log(totalScore);
    }

}

class ScoreGeneratingService {
    static calculateScores(students: Student[] = []) {
        let score = 0;
        students.forEach(student => {
            score += student.getScore()
            console.log(student.getScore());
        })
        return score;
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
OutputService.outputSummedScore(totalScore);
