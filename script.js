const button = document.getElementById("btn");

function calculateBmi() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide valid height!!";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide valid weight!!";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.40) {
        result.innerHTML = `Your BMI is <b>${bmi}</b> which means you are Underweight.`
    } else if (bmi >= 18.40 && bmi < 24.90) {
        result.innerHTML = `Your BMI is <b>${bmi}</b> which means you are Normal.`
    } else if (bmi >= 24.90 && bmi < 29.90) {
        result.innerHTML = `Your BMI is <b>${bmi}</b> which means you are Overweight.`
    } else if (bmi >= 29.90 && bmi < 34.90) {
        result.innerHTML = `Your BMI is <b>${bmi}</b> which means you are under Obesity (Class I).`
    } else if (bmi >= 24.90 && bmi < 29.90) {
        result.innerHTML = `Your BMI is <b>${bmi}</b> which means you are under Obesity (Class II).`
    } else {
        result.innerHTML = `Your BMI is <b>${bmi} which means your are under Extreme Obesity.`
    }
}

