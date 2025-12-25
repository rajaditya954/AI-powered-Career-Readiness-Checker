import parsePDF from "../utils/pdf.parser.js";
import analyzeWithGemini from "../services/gemini.service.js";

export const analyzeResume = async (req, res) => {
    try {
        // 1. Check if file exists in the request
        if (!req || !req.file) {
            console.error("Upload Error: No file found in req.file");
            return res.status(400).json({
                error: "No resume file uploaded. Ensure your frontend key is 'resume'."
            });
        }

        // 2. Extract data from request
        const role = req.body.role || "General Professional";
        const fileBuffer = req.file.buffer;

        console.log(`Processing upload: ${req.file.originalname}, Size: ${fileBuffer.length} bytes`);

        // 3. Extract text from the PDF buffer
        let resumeText;
        try {
            resumeText = await parsePDF(fileBuffer);
        } catch (parseError) {
            return res.status(422).json({
                error: `PDF Extraction failed: ${parseError.message}`
            });
        }

        // 4. Send extracted text to Gemini
        const analysis = await analyzeWithGemini(resumeText, role);

        // 5. Success Response
        return res.status(200).json({
            success: true,
            filename: req.file.originalname,
            role: role,
            analysis: analysis
        });

    } catch (error) {
        console.error("ANALYZE CONTROLLER ERROR:", error);
        return res.status(500).json({
            error: error.message || "Internal server error during analysis"
        });
    }
};