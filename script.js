document.addEventListener('DOMContentLoaded', () => {
    const passwordSlider = document.getElementById("passwordLengthSlider");
    const sliderOutput = document.getElementById("sliderValue");
    const passwordBox = document.getElementById("passwordBox");
    const lowercaseCheckbox = document.getElementById("includeLowercase");
    const uppercaseCheckbox = document.getElementById("includeUppercase");
    const numbersCheckbox = document.getElementById("includeNumbers");
    const symbolsCheckbox = document.getElementById("includeSymbols");
    const generateButton = document.getElementById("generateButton");
    const copyButton = document.getElementById("copyButton");

    sliderOutput.textContent = passwordSlider.value;

    passwordSlider.addEventListener('input', () => {
        sliderOutput.textContent = passwordSlider.value;
    });

    generateButton.addEventListener('click', () => {
        passwordBox.value = generatePassword();
    });

    function generatePassword() {
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";
        const specialChars = "~!@#$%^&*";
        
        let characterSet = "";

        if (lowercaseCheckbox.checked) characterSet += lowerCase;
        if (uppercaseCheckbox.checked) characterSet += upperCase;
        if (numbersCheckbox.checked) characterSet += digits;
        if (symbolsCheckbox.checked) characterSet += specialChars;

        if (!characterSet) return "";

        let password = "";
        const passwordLength = parseInt(passwordSlider.value, 10);

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            password += characterSet[randomIndex];
        }

        return password;
    }

    copyButton.addEventListener('click', () => {
        if (passwordBox.value) {
            navigator.clipboard.writeText(passwordBox.value);
            copyButton.innerText = "check";
            copyButton.title = "Copied!";
            setTimeout(() => {
                copyButton.innerText = "content_copy";
                copyButton.title = "";
            }, 3000);
        }
    });
});