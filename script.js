document.addEventListener("DOMContentLoaded", function() {
    const generate = document.getElementById("generate");
    const copy = document.getElementById("copy");
    const alert_copy = document.getElementById("copy-alert");
    const password = document.getElementById("password");
    const length_value = document.getElementById("length-value");
    const letters_input = document.getElementById("letters");
    const numbers_input = document.getElementById("numbers");
    const symbols_input = document.getElementById("symbols");
    const mixedcase_input = document.getElementById("mixedcase");
    const length_input = document.getElementById("length");

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";

    if (length_value && length_input) {
        length_value.textContent = length_input.value;

        length_input.addEventListener("input", function(event) {
            length_value.textContent = event.target.value;
        });
    }

    function generatePassword(length, characters) {
        let index = 0;
        let pass = "";
        password.value = "";

        let intervalId = setInterval(() => {
            if (index < length){
                pass = characters.charAt(Math.floor(Math.random() * characters.length));
                password.value += pass;
                index++;
            } else {
                clearInterval(intervalId);
                generate.disabled = false;
            }
        }, 70);
    }

    generate.addEventListener("click", async function() {
        generate.disabled = true;
        let characters = "";
        let passwordLength = length_input.value;

        if (letters_input.checked) {
            characters += lowerCase;

            if (mixedcase_input.checked) {
                characters += upperCase + lowerCase;
            }
        }

        if (numbers_input.checked) {
            characters += numbers;
        }

        if (symbols_input.checked) {
            characters += symbols;
        }

        generatePassword(passwordLength, characters);
    });

    copy.addEventListener("click", async function() {
        if (password.value) {
            navigator.clipboard.writeText(password.value).then(() => {
                alert_copy.style.display = "block";
                setTimeout(() => {
                    alert_copy.style.display = "none"
                }, 2000);
            }, () => {
                alert('Failed to copy password to clipboard.');
            });
        }
    });
});