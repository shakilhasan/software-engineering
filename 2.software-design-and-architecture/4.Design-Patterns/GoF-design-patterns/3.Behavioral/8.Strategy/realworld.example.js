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
const path = __importStar(require("path"));
class LocalUpload {
    upload(filePath, name, content) {
        return new Promise((resolve, reject) => {
            const result = {
                success: true,
                message: "Uploaded to local storage",
            };
            fs.writeFile(path.join(__dirname, filePath, name), content)
                .then(() => {
                resolve(result);
            })
                .catch((e) => {
                result.success = false;
                result.message = "Error uploading to local storage";
                reject(result);
            });
        });
    }
}
class AWSUpload {
    upload(filePath, name, content) {
        return new Promise((resolve, reject) => {
            const result = {
                success: true,
                message: "Uploaded to AWS storage",
            };
            setTimeout(() => {
                resolve(result);
            }, 1000);
        });
    }
}
class Context {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    fileUpload(filePath, name, content) {
        return this.strategy.upload(filePath, name, content);
    }
}
const localUpload = new LocalUpload();
const awsUpload = new AWSUpload();
const context = new Context(localUpload);
context.fileUpload("/", "Output.txt", "Hello World").then((result) => {
    console.log(result);
});
