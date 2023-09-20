//https://github.com/RefactoringGuru/design-patterns-typescript/blob/main/src/TemplateMethod/RealWorld/index.ts
interface Country {
    name: string;
    vat: number;
}

interface Customer {
    name: string;
    id: string;
    country: Country;
}

interface InvoiceLine {
    product: string;
    units: number;
    unitPrice: number;
}

class Invoice {
    private _lines: InvoiceLine[] = [];
    private _notes: string = '';
    constructor(private readonly _customer: Customer) {}
    addLine(newLine: InvoiceLine) {
        this._lines = [...this._lines, newLine];
    }
    get taxes(): number {
        return this.subtotal * this.customer.country.vat;
    }
    get subtotal(): number {
        return this._lines.reduce(
            (acc, currLine) => (acc + currLine.unitPrice * currLine.units),
            0);
    }
    get total(): number {
        return this.subtotal + this.taxes;
    }
    get lines(): InvoiceLine[] {
        return this._lines;
    }
    get customer(): Customer {
        return this._customer;
    }
    get notes(): string { return this._notes; }
    set notes(notes: string) {
        this._notes = notes;
    }
}

abstract class InvoiceFormatter {
    constructor(protected readonly invoice: Invoice) {
    }
    public format(): string {
        return `
${this.formatHeader()}
${this.hookFormatSubHeader()}
${this.formatCustomer()}
${this.formatInvoiceLines()}
${this.formatTaxes()}
${this.formatTotal()}
${this.formatFooter()}
${this.hookFormatSubFooter()}
`;
    }

    protected abstract formatHeader(): string;
    protected abstract formatCustomer(): string;
    protected abstract formatInvoiceLines(): string;
    protected abstract formatTaxes(): string;
    protected abstract formatFooter(): string;
    /** These operations have already a default implementation */
    protected hookFormatSubHeader(): string { return ''; }
    protected formatTotal(): string {
        return `Total: ${this.invoice.total}€`;
    }
    protected hookFormatSubFooter(): string { return ''; }
}

class HtmlInvoiceFormatter extends InvoiceFormatter {
    protected formatHeader(): string {
        return '<h1>ACME S.L. Invoice</h1>';
    }
    protected hookFormatSubHeader(): string {
        return '</hr>';
    }
    protected formatCustomer(): string {
        return `<div id='customer'>Customer: ${this.invoice.customer.name}, id: ${this.invoice.customer.id}</div>`;
    }
    protected formatInvoiceLines(): string {
        return `<ul>\n${this.invoice.lines.map(l => (`  <li>${l.product}, units=${l.units}, amount=${l.units * l.unitPrice}€</li>`)).join('\n')}</ul>`;
    }
    protected formatTaxes(): string {
        return `<div>Taxes: ${this.invoice.taxes}€</div>`;
    }
    protected formatFooter(): string {
        return `<footer>Center Avenue, 42, Rockland  -  ${new Date().getFullYear()}</footer>`;
    }
}

class MarkdownInvoiceFormatter extends InvoiceFormatter {
    protected formatHeader(): string {
        return '#ACME S.L. Invoice';
    }
    protected hookFormatSubHeader(): string {
        return '---';
    }
    protected formatCustomer(): string {
        return `Customer: **${this.invoice.customer.name}**, id: ${this.invoice.customer.id}`;
    }
    protected formatInvoiceLines(): string {
        return `${this.invoice.lines.map(l => (`*${l.product}, units=${l.units}, amount=${l.units * l.unitPrice}€`)).join('\n')}`;
    }
    protected formatTaxes(): string {
        return `Taxes: ${this.invoice.taxes}€`;
    }
    protected formatFooter(): string {
        return `Center Avenue, 42, Rockland  -  ${new Date().getFullYear()}`;
    }
    protected formatTotal(): string {
        return `**Total**: ${this.invoice.total}€`;
    }
    protected hookFormatSubFooter(): string {
        return '---';
    }
}

//client code
const SPAIN: Country = {
    name: 'Spain',
    vat: 0.21,
};
const AMAZON: Customer = {
    name: 'Amazon Spain',
    id: 'amazon-spain',
    country: SPAIN,
};
const INVOICE: Invoice = new Invoice(AMAZON);
INVOICE.addLine({ product: 'Nuts', units: 3, unitPrice: 5 });
INVOICE.addLine({ product: 'Still water', units: 10, unitPrice: 2 });
INVOICE.addLine({ product: 'Sandwich', units: 1, unitPrice: 10 });

console.log('Formatting in HTML');
console.log(new HtmlInvoiceFormatter(INVOICE).format());
console.log('\nFormatting in Markdown');
console.log(new MarkdownInvoiceFormatter(INVOICE).format());
