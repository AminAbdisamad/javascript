//Global variables 
const results = document.getElementById('results');
const loader = document.getElementById('loading');
const form = document.getElementById('loan-form');
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
form.addEventListener('submit',function(e){
    //hide results and show the loader
    results.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(calculate,2000);
    e.preventDefault();
});
function calculate(){
    //calculalations
    const presentValue = parseFloat(amount.value);
    const ratePerPeriod = parseFloat(interest.value) / 100 / 12;
    const numberOfPeriod = parseFloat(years.value) * 12;
    //compute monthly
    const x = Math.pow(1 + ratePerPeriod,numberOfPeriod);
    const monthly = (presentValue * x * ratePerPeriod) / (x-1);
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * numberOfPeriod).toFixed(2);
        totalInterest.value = ((monthly * numberOfPeriod) - presentValue).toFixed(2);
        //show results and hide the loader
        loader.style.display = 'none';
        results.style.display = 'block';
    }else{
        showError("Oops! Something went wrong, Ceck your numbers ");
    }   
}
function showError(error){
    //hide loader and results 
    results.style.display = 'none';
    loader.style.display = 'none';
    //create error message Div
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'alert alert-danger';
    errorMessage.appendChild(document.createTextNode(error));
    card.insertBefore(errorMessage,heading);
    //clear message  after 3s
    setTimeout(() => errorMessage.remove(),3000);
}

