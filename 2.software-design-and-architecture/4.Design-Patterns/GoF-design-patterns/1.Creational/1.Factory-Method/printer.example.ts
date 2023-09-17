import {getPrinters as getPrinters_windows, print as print_windows} from "pdf-to-printer";
import {getPrinters as getPrinters_unix, print as print_unix} from "unix-print";

const os = require('os');
const osName = os.platform();
console.log('Operating System:', osName);
const printerName = 'your-printer-name'

interface Printer {
    getPrinters(): any;

    print(pdfToPrint: any): any;
}

class WindowsPrinter implements Printer {
    public async getPrinters(): Promise<any> {
        return await getPrinters_windows();
    }

    public async print(pdfToPrint: string): Promise<any> {
        const options = {
            printer: printerName,
            scale: "fit"
        };
        return await print_windows(pdfToPrint, options);
    }
}

class UnixPrinter implements Printer {
    public async getPrinters(): Promise<any> {
        return await getPrinters_unix();
    }

    public async print(pdfToPrint: string): Promise<any> {
        const options = ["-o landscape", "-o fit-to-page"];
        return await print_unix(pdfToPrint, printerName, options);
    }
}

class PrinterFactory {
    createPrinter() {
        if (osName === 'linux') return new UnixPrinter();
        else if (osName === 'windows') return new WindowsPrinter();
        else throw Error("Error! Unknown operating system.")
    }
}

const printFromPdf = async (pdfToPrint: string): Promise<void> => {
    const printer = new PrinterFactory().createPrinter();

    const printers = await printer.getPrinters();
    console.log("printers :>> ", printers);

    console.log('printerName :>> ', printerName);
    const printResponse = await printer.print(pdfToPrint);
    console.log("printResponse :>> ", printResponse);
};

export {printFromPdf, PrinterFactory};
