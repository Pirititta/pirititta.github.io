console.log("This is console msg.");

function validateForm() {
    let amountInput = document.querySelector("input[name=amount-input]");
    let amount = parseInt(amountInput.value);
    let price = 1000;
    let cost = 0;

    if (!(amount >= 1 && amount <= 10)) {
        alert("Rossz érték!!");
        return;

    } else {
        cost = amount * price;
        //alert("Összeg: " + cost);
        let msg = document.querySelector("form .msg strong");
        msg.innerHTML = `${cost}`;
    }

    console.log("Mennyiség:" + amount);
    console.log("ÁR:" + price);
    console.log("Összeg" + cost);


}

