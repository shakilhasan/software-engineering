"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterFactory = exports.printFromPdf = void 0;
const pdf_to_printer_1 = require("pdf-to-printer");
const unix_print_1 = require("unix-print");
const os = require('os');
const osName = os.platform();
console.log('Operating System:', osName);
const printerName = 'your-printer-name';
class WindowsPrinter {
    async getPrinters() {
        return await (0, pdf_to_printer_1.getPrinters)();
    }
    async print(pdfToPrint) {
        const options = {
            printer: printerName,
            scale: "fit"
        };
        return await (0, pdf_to_printer_1.print)(pdfToPrint, options);
    }
}
class UnixPrinter {
    async getPrinters() {
        return await (0, unix_print_1.getPrinters)();
    }
    async print(pdfToPrint) {
        const options = ["-o landscape", "-o fit-to-page"];
        return await (0, unix_print_1.print)(pdfToPrint, printerName, options);
    }
}
class PrinterFactory {
    createPrinter() {
        if (osName === 'linux')
            return new UnixPrinter();
        else if (osName === 'windows')
            return new WindowsPrinter();
        else
            throw Error("Error! Unknown operating system.");
    }
}
exports.PrinterFactory = PrinterFactory;
const printFromPdf = async (pdfToPrint) => {
    const printer = new PrinterFactory().createPrinter();
    const printers = await printer.getPrinters();
    console.log("printers :>> ", printers);
    console.log('printerName :>> ', printerName);
    const printResponse = await printer.print(pdfToPrint);
    console.log("printResponse :>> ", printResponse);
};
exports.printFromPdf = printFromPdf;
