import { createRequire } from "module";
const require = createRequire(import.meta.url);

// In some ESM environments, the function is actually exported 
// as the module itself, but accessed via require()
const pdf = require("pdf-parse-fork");

const parsePDF = async (buffer) => {
    try {
        if (!buffer || buffer.length === 0) {
            throw new Error("The PDF file buffer is empty.");
        }

        // Logic to find the actual function inside the object
        let pdfFunction;

        if (typeof pdf === 'function') {
            pdfFunction = pdf;
        } else if (pdf && typeof pdf.default === 'function') {
            pdfFunction = pdf.default;
        } else if (Object.keys(pdf).length > 0) {
            // Some versions of Node/Multer/ESM wrap CJS in an object 
            // where the first key is the function we need.
            pdfFunction = pdf[Object.keys(pdf)[0]];
        }

        if (typeof pdfFunction !== 'function') {
            throw new Error("Could not find the pdf-parse function. Module keys: " + Object.keys(pdf));
        }

        const data = await pdfFunction(buffer);

        if (!data || !data.text) {
            throw new Error("Extraction successful but no text found.");
        }

        return data.text;
    } catch (error) {
        console.error("Internal Parser Error:", error);
        throw new Error("PDF Parsing failed: " + error.message);
    }
};

export default parsePDF;