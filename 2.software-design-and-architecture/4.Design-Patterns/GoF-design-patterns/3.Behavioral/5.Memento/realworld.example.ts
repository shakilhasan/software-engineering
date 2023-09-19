const DEFAULT_MONTHLY_EXPENSES_LIMIT = 0;

class EmployeeOriginator {
    private _monthlyExpensesLimit: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
        this._monthlyExpensesLimit = DEFAULT_MONTHLY_EXPENSES_LIMIT;
    }

    private _name: string;

    get name() {
        return this._name;
    }

    private _salary: number;

    get salary() {
        return this._salary;
    }

    public raiseSalaryTo(newSalary: number) {
        this._salary = newSalary;
    }

    public raiseLimitTo(newLimit: number) {
        this._monthlyExpensesLimit = newLimit;
    }

    public saveSnapshot(): Memento<EmployeeState> {
        return new EmployeeMemento({
            salary: this._salary,
            monthlyExpensesLimit: this._monthlyExpensesLimit,
        });
    }

    public restore(memento: Memento<EmployeeState>): void {
        this._salary = memento.state.salary;
        this._monthlyExpensesLimit = memento.state.monthlyExpensesLimit;
        console.log(`Originator: Restored state from memento: ${memento.name}`);
    }

    public showState(): void {
        console.log(`Employee: State for ${this.name} is salary=${this._salary} and monthlyExpensesLimit=${this._monthlyExpensesLimit}`);
    }
}

interface Memento<T> {
    readonly state: T;
    readonly name: string;
    readonly date: Date;
}

interface EmployeeState {
    salary: number;
    monthlyExpensesLimit: number;
}

class EmployeeMemento implements Memento<EmployeeState> {
    constructor(state: EmployeeState) {
        this._state = state;
        this._date = new Date();
        this._name = `date=${this._date.toISOString().substring(0, 10)}, \
salary=${this._state.salary}, limit=\
${this._state.monthlyExpensesLimit}`;
    }

    private _state: EmployeeState;

    get state() {
        return this._state;
    }

    private _date: Date;

    get date() {
        return this._date;
    }

    private _name: string;

    get name() {
        return this._name;
    }
}

class EmployeeCaretaker {
    private _employeeMementos: Memento<EmployeeState>[] = [];

    private _employee: EmployeeOriginator;

    constructor(employee: EmployeeOriginator) {
        this._employee = employee;
    }

    public backup(): void {
        console.log('Employee caretaker: Saving employee\'s state...');
        this._employeeMementos.push(this._employee.saveSnapshot());
    }

    public undo(): void {
        if (!this._employeeMementos.length) {
            return;
        }
        const employeeMementoToRestore = this._employeeMementos.pop();

        console.log(`Employee caretaker: Restoring memento: ${employeeMementoToRestore.name}`);
        this._employee.restore(employeeMementoToRestore);
    }

    public showHistory(): void {
        if (!this._employeeMementos.length) {
            console.log('Empty employee mementos list');
        }
        for (const memento of this._employeeMementos) {
            console.log(memento.name);
        }
    }
}

//client code.

console.log('Client: Creating employee originator and caretaker...');
const originator = new EmployeeOriginator('Justin Case', 50000);
const caretaker = new EmployeeCaretaker(originator);

console.log('\nClient: Let\'s change states saving state before each change...');
caretaker.backup();
originator.raiseSalaryTo(60000);
caretaker.backup();
originator.raiseLimitTo(100);
caretaker.backup();
originator.raiseSalaryTo(100000);

console.log('\nClient: This is the history of mementos and the state of the originator:');
caretaker.showHistory();
originator.showState();

console.log('\nClient: Changed state up to 3 times, let\'s rollback to the initial state!');
caretaker.undo();
originator.showState();
caretaker.undo();
originator.showState();
caretaker.undo();
originator.showState();

console.log('\nClient: Now the history of mementos should be empty');
caretaker.showHistory();

console.log('\nClient: A new undo will leave the employee untouched');
caretaker.undo();
originator.showState();
