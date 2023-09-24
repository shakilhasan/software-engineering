"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs/promises"));
class FileExtractor {
    filepath;
    constructor(filepath) {
        this.filepath = filepath;
    }
    async extract() {
        //load file from this.filepath
        return fs.readFile(this.filepath, "utf8");
    }
}
class FileLoader {
    filepath;
    constructor(filepath) {
        this.filepath = filepath;
    }
    async load(input) {
        return fs.writeFile(this.filepath, JSON.stringify(input, undefined, 4));
    }
}
class FileTransformer {
    transform(input) {
        let result = {};
        input.split("\n").forEach((line) => {
            if (line.trim().length === 0)
                return;
            const [key] = line.split(",");
            if (typeof result === "undefined") {
            }
            if (typeof result[key] === "undefined")
                result[key] = 0;
            result[key] = result[key] + 1;
        });
        return result;
    }
}
// The Facade class
class ETLProcessor {
    extractor;
    transformer;
    loader;
    constructor(extractor, transformer, loader) {
        this.extractor = extractor;
        this.transformer = transformer;
        this.loader = loader;
    }
    async process() {
        const input = await this.extractor.extract();
        const transformed = this.transformer.transform(input);
        return this.loader.load(transformed);
    }
}
//client code
const processor = new ETLProcessor(new FileExtractor("input.txt"), new FileTransformer(), new FileLoader("output.json"));
processor.process().then(() => {
    console.log("Process completed");
});
