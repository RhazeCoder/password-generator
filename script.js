document.addEventListener("DOMContentLoaded", function() {
    const length_value = document.getElementById("length-value");
    const length_input = document.getElementById("length");
    

    if (length_value && length_input) {
        length_value.textContent = length_input.value;

        length_input.addEventListener("input", function(event) {
            length_value.textContent = event.target.value;
        });
    }
});