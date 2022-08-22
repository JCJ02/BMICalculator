// function of menu button
const menuButtonIcon = document.querySelector("#menuButton");
const menuList = document.querySelector(".navbarMenu");

menuButtonIcon.addEventListener("click", function() {
    menuButtonIcon.classList.toggle("isActive");
    menuList.classList.toggle("active");
})



// BMI Calculator

// function of calculate button
const calculateButton = document.getElementById("calculateButton").onclick = function() {
    let inputOne = document.getElementById("height").value;
    let inputTwo = document.getElementById("weight").value;

    // Formula of BMI in JavaScript 
    let results = parseFloat(inputTwo) / (parseFloat(inputOne) * parseFloat(inputOne));

    // Conditional Statement 
    if(!isNaN(results)) {
        document.getElementById("bmi").innerHTML = results;
    }
    
    for(var i = 0; i < results; i++) {
        if(results <= 18.4) {
            document.getElementById("category").innerHTML = "Underweight";
            document.getElementById("category").style.color = "yellow";
            document.getElementById("bmi").style.color = "yellow";
        }
        else if(results >= 18.5 && results <= 24.9) {
            document.getElementById("category").innerHTML = "Normal";
            document.getElementById("category").style.color = "green";
            document.getElementById("bmi").style.color = "green";
        } 
        else if(results >= 25.0 && results <= 29.9) {
            document.getElementById("category").innerHTML = "Overweight";
            document.getElementById("category").style.color = "#FC4C01";
            document.getElementById("bmi").style.color = "#FC4C01";
        }
        else if(results >= 30 && results <= 34.9) {
            document.getElementById("category").innerHTML = "Obese";
            document.getElementById("category").style.color = "#D62929";
            document.getElementById("bmi").style.color = "#D62929";
        }
        else {
            document.getElementById("category").innerHTML = "Extremely Obese";
            document.getElementById("category").style.color = "red";
            document.getElementById("bmi").style.color = "red";
        }
    }
    
    
   
}

// Function of reset button
const resetButton = document.getElementById("resetButton").onclick = function() {
    const resetInputOne = document.getElementById("height").value = "";
    const resetInputTwo = document.getElementById("weight").value = "";
    const resultOne = document.getElementById("bmi").innerHTML = "";
    const resultTwo = document.getElementById("category").innerHTML = "";
};

