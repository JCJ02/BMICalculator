function calculate() {
    var numOne = document.getElementById("height").value;
    var numTwo = document.getElementById("weight").value;

    // Formula of BMI in JavaScript
    var result = parseFloat(numTwo) / (parseFloat(numOne) * parseFloat(numOne));


    // Conditional Statment 
    if(!isNaN(result)) {
        document.getElementById("bmi").innerHTML=result;
    }

    if(result <= 18.4) {
        document.getElementById("category").innerHTML=" Underweight";
    }
    else if(result >= 18.5 && result <= 24.9) {
        document.getElementById("category").innerHTML=" Normal";
    }
    else if(result >= 25.0 && result <= 29.9) {
        document.getElementById("category").innerHTML=" Overweight";
    }
    else if(result >= 30.0) {
        document.getElementById("category").innerHTML=" Obese";
    }


}