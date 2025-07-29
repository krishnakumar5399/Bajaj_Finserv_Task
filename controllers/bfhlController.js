const { categorizeInput, generateAltCaps } = require('../utils/helpers');

exports.processData = (req, res) => {
    try {
        const inputArray = req.body.data;
        const {
            even_numbers,
            odd_numbers,
            alphabets,
            special_characters,
            sum,
            alphaString
        } = categorizeInput(inputArray);

        const response = {
            is_success: true,
            user_id: "krishna_kumar_29072025",
            email: "krishna@example.com",
            roll_number: "12345678",
            even_numbers,
            odd_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string: generateAltCaps(alphaString)
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, message: 'Something went wrong.' });
    }
};