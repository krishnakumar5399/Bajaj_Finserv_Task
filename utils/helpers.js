exports.categorizeInput = (inputArray) => {
    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alphaString = '';

    inputArray.forEach(item => {
        const str = item.toString();

        if (/^[0-9]+$/.test(str)) {
            const num = parseInt(str);
            sum += num;
            if (num % 2 === 0) {
                even_numbers.push(str);
            } else {
                odd_numbers.push(str);
            }
        } else if (/^[a-zA-Z]+$/.test(str)) {
            alphabets.push(str.toUpperCase());
            alphaString += str;
        } else {
            special_characters.push(str);
        }
    });

    return { even_numbers, odd_numbers, alphabets, special_characters, sum, alphaString };
};

exports.generateAltCaps = (inputStr) => {
    const reversed = inputStr.split('').reverse();
    let result = '';

    reversed.forEach((char, idx) => {
        result += idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    });

    return result;
};