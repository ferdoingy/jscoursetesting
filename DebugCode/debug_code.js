function performOperation()
{
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    // check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2))
    {
        // Perform the operation
        let result = multiply(num1, num2);
        let resultAddition = sum(num1, num2);
        let resultDivision = divide(num1, num2);

        // Display the result
        displayResult(result);
    }
    else
    {
        displayResult("Please enter valid numbers.");
    }
}

function multiply(a, b)
{
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function sum(a, b)
{
    // Introduce a debugger statement to pause execution
    debugger;

    return a + b;
}

function divide(a, b)
{
    // Introduce a debugger statement to pause execution
    debugger;
    if (b === 0)
    {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
function displayResult(result, resultAddition, resultDivision)
{
    // Display the result in the paragraph element
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result multiplication is: ${result}
                            The result addition is: ${resultAddition}
                            The result division is: ${resultDivision}`;
}