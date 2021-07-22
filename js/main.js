const inputs = document.getElementsByClassName('input');
let tipPercentage;

let billInput = document.getElementById('bill-input');
billInput.addEventListener('keyup', (e) => {
    billInput = e.target.value;
    Calculator(billInput, numPeople, tipPercentage);
})

let numPeople = document.getElementById('number-of-people');
numPeople.addEventListener('keyup', (e) => {
    numPeople = e.target.value;
    Calculator(billInput, numPeople, tipPercentage);
})
const tipButtons = document.querySelectorAll('.tip-btn')
tipButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // chuyển tất cả button về background như cũ
        document.querySelectorAll(".tip-btn").forEach(btn => {
            btn.style.backgroundColor = "hsl(183deg 100% 15%)";
        })

        // chuyển button được click về màu khác
        button.style.backgroundColor = "red";
        tipPercentage = button.value;
        Calculator(billInput, numPeople, tipPercentage);
    })
})
const resetBtn = document.getElementById("btn");

resetBtn.addEventListener('click', (e) => {
    let zero = 0;
    document.getElementById("bill-input").value = 0;
    document.getElementById("number-of-people").value = 0;
    tipButtons.forEach((bt) => {
        bt.style.backgroundColor = "hsl(183deg 100% 15%)";
    })
    document.getElementById('tip-amount-value').textContent = '$' + zero.toFixed(2);
    document.getElementById('total-amount-value').textContent = '$' + zero.toFixed(2);
})


function Calculator(billInput, numPeople, tipPercentage) {
    let totalAmount
        , tipPerPerson, zero;
    zero = 0;

    tipPerPerson = (billInput * tipPercentage)/numPeople;
    totalAmount = (billInput/numPeople) + tipPerPerson;

    if (billInput > 0 && numPeople > 0) {
        document.getElementById('tip-amount-value').textContent = '$' + tipPerPerson.toFixed(2);
        document.getElementById('total-amount-value').textContent = '$' + totalAmount.toFixed(2);


    }
    else {
        document.getElementById('tip-amount-value').textContent = '$' + zero.toFixed(2)
        document.getElementById('total-amount-value').textContent = '$' + zero.toFixed(2)
    }
}


