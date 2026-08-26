function  calculateTotal()
{
    let gr1 = parseFloat(document.getElementById("grocery1").value);
    let gr2 = parseFloat(document.getElementById("grocery2").value);
    let gr3 = parseFloat(document.getElementById("grocery3").value);

    let total = gr1 + gr2 + gr3;

    document.getElementById("result").innerHTML = `The Total amount is: ${total}`;
}