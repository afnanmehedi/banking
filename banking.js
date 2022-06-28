function getInput(input){
    const inputField = document.getElementById(input);
    const inputFieldText = inputField.value;
    const getAmountInput = parseFloat(inputFieldText);
    inputField.value = '';
    return getAmountInput;
}

function updateTotal(id, amountInput){
    const updateValue = document.getElementById(id);
    const updateValueText = updateValue.innerText;
    const getUpdateValue = parseFloat(updateValueText);
    const totalValue = getUpdateValue + amountInput;
    updateValue.innerText = totalValue;
}

function updateBalance (value, amountInput, isAdd){
    const updateBalance = document.getElementById(value);
    const updateBalanceText = updateBalance.innerText;
    const previousUpdateBalance = parseFloat(updateBalanceText);
    // const newUpdateBalance = previousUpdateBalance + amountInput;
    let newUpdateBalance;
    
        if(isAdd){
        newUpdateBalance = previousUpdateBalance + amountInput;
        }
        else {
        newUpdateBalance = previousUpdateBalance - amountInput;
        }

    updateBalance.innerText = newUpdateBalance;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    amountInput = getInput('deposit-input');
    updateTotal('deposit-total', amountInput);
    updateBalance ('balance-total', amountInput, true);
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    amountInput = getInput('withdraw-input');
    updateTotal('withdraw-total', amountInput);
    updateBalance ('balance-total', amountInput, false);
})