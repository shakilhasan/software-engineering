abstract class Employee {
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

    abstract calculateBonus(salary: number): number;

    abstract isEligibleForInsurance(): boolean;
}

class PermanentEmployee extends Employee {
    constructor(id: number, name: string) {
        super(id, name);
    }

    isEligibleForInsurance(): boolean {
        return true;
    }

    calculateBonus(salary: number): number {
        return salary * 0.1;
    }
}

class TemporaryEmployee extends Employee {
    constructor(id: number, name: string) {
        super(id, name);
    }

    isEligibleForInsurance(): boolean {
        return false;
    }

    calculateBonus(salary: number): number {
        return salary * 0.05;
    }
}

class ContractEmployee extends Employee {
    constructor(id: number, name: string) {
        super(id, name);
    }

    isEligibleForInsurance(): boolean {
        return false;
    }

    calculateBonus(salary: number): number {
        throw new Error("Not implemented");
    }
}

class Main {
    static main() {
        const employees: Employee[] = [];
        employees.push(new PermanentEmployee(1, "Sabbir"));
        employees.push(new TemporaryEmployee(2, "Sazzad"));
        employees.push(new ContractEmployee(3, "Abc"));

        for (let employee of employees) {
            console.log(`Employee ID: ${employee.getId()} Employee Name: ${employee.getName()} - Employee is eligible for Insurance: ${employee.isEligibleForInsurance()}`);
        }

        console.log("--------------------");

        for (let employee of employees) {
            try {
                console.log(`Employee ID: ${employee.getId()} Employee Name: ${employee.getName()} Employee Bonus: ${employee.calculateBonus(1000)}`);
            } catch (error) {
                console.error("This employee is not eligible for bonus");
            }
        }
    }
}

Main.main();
