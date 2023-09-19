"use strict";
const DEFAULT_MONTHLY_EXPENSES_LIMIT = 0;
class EmployeeOriginator {
    _monthlyExpensesLimit;
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
        this._monthlyExpensesLimit = DEFAULT_MONTHLY_EXPENSES_LIMIT;
    }
    _name;
    get name() {
        return this._name;
    }
    _salary;
    get salary() {
        return this._salary;
    }
    raiseSalaryTo(newSalary) {
        this._salary = newSalary;
    }
    raiseLimitTo(newLimit) {
        this._monthlyExpensesLimit = newLimit;
    }
    saveSnapshot() {
        return new EmployeeMemento({
            salary: this._salary,
            monthlyExpensesLimit: this._monthlyExpensesLimit,
        });
    }
    restore(memento) {
        this._salary = memento.state.salary;
        this._monthlyExpensesLimit = memento.state.monthlyExpensesLimit;
        console.log(`Originator: Restored state from memento: ${memento.name}`);
    }
    showState() {
        console.log(`Employee: State for ${this.name} is salary=${this._salary} and monthlyExpensesLimit=${this._monthlyExpensesLimit}`);
    }
}
class EmployeeMemento {
    constructor(state) {
        this._state = state;
        this._date = new Date();
        this._name = `date=${this._date.toISOString().substring(0, 10)}, \
salary=${this._state.salary}, limit=\
${this._state.monthlyExpensesLimit}`;
    }
    _state;
    get state() {
        return this._state;
    }
    _date;
    get date() {
        return this._date;
    }
    _name;
    get name() {
        return this._name;
    }
}
class EmployeeCaretaker {
    _employeeMementos = [];
    _employee;
    constructor(employee) {
        this._employee = employee;
    }
    backup() {
        console.log('Employee caretaker: Saving employee\'s state...');
        this._employeeMementos.push(this._employee.saveSnapshot());
    }
    undo() {
        if (!this._employeeMementos.length) {
            return;
        }
        const employeeMementoToRestore = this._employeeMementos.pop();
        console.log(`Employee caretaker: Restoring memento: ${employeeMementoToRestore.name}`);
        this._employee.restore(employeeMementoToRestore);
    }
    showHistory() {
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
