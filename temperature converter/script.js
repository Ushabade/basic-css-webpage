function convertToFarhenheit() {
    const celsiusInput = document.getElementById("celsius");
    const resultParagraph = document.getElementById("result");

    const celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        resultParagraph.textContent = "Please enter a valid number.";
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    resultParagraph.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
