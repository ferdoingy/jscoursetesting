let count = 0; // Initialize count to 0

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count; 
}

function checkCountValue() {
    if (count === 10)
    {
        alert("Your ig post gained 10 followers!");
    }
    else
    {
        if (count === 20)
        {
            alert("Your ig post gained 20 followers!");
        }
    }
}

function resetCount()
{
    count = 0;
    document.getElementById("countDisplay").innerHTML = count;
    alert("The followers count has been reset");
}