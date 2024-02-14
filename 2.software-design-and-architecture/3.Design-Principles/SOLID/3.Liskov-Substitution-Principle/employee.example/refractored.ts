interface IEmployee {
    isEligibleForInsurance(): boolean;
}
interface EmployeeBonusEligible {
    calculateBonus(salary: number): number;
}
abstract class Employee1 implements IEmployee {
    private readonly id: number;
    private readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        return `Employee1 ID: ${this.getId()} Employee1 Name: ${this.getName()}`;
    }
}

class ContractEmployee1 extends Employee1 {
    constructor(id: number, name: string) {
        super(id, name);
    }

    isEligibleForInsurance(): boolean {
        return false;
    }
}
class PermanentEmployee1 extends Employee1 implements EmployeeBonusEligible {
    constructor(id: number, name: string) {
        super(id, name);
    }

    calculateBonus(salary: number): number {
        return salary * 0.1;
    }

    isEligibleForInsurance(): boolean {
        return true;
    }
}

class TemporaryEmployee1 extends Employee1 implements EmployeeBonusEligible {
    constructor(id: number, name: string) {
        super(id, name);
    }

    calculateBonus(salary: number): number {
        return salary * 0.05;
    }

    isEligibleForInsurance(): boolean {
        return false;
    }
}

class Main1 {
    static main() {
        const employees: EmployeeBonusEligible[] = [
            new PermanentEmployee1(1, "Sabbir"),
            new TemporaryEmployee1(2, "Sazzad")
        ];

        for (let employee of employees) {
            console.log(`${employee.toString()} Employee1 Bonus : ${employee.calculateBonus(1000)}`);
        }

        console.log("----------");
        const employeesOnly: IEmployee[] = [
            new PermanentEmployee1(1, "Sabbir"),
            new TemporaryEmployee1(2, "Sazzad"),
            new ContractEmployee1(3, "Abcdef")
        ];

        for (let employee of employeesOnly) {
            console.log(`${employee.toString()} Employee1 is eligible for Insurance : ${employee.isEligibleForInsurance()}`);
        }
    }
}

Main1.main();
