function compute(){
    var money = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("no_years").value;
    var interest = money * years * rate / 100;
    var total_amount = parseInt(money) + parseFloat(interest);
    var result = document.getElementById("compute");
    var year = new Date().getFullYear() + parseInt(years);

    if (money <= 0)
    {
        alert("Please Enter a Positive Number");
        document.getElementById("amount").focus();
    }
    else{
        result.innerHTML = "if you deposit $" + "<mark>"  + money + "</mark>" + ",\<br>\at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br>\ you will receive an amount of $" + "<mark>" + total_amount + "</mark>" + ", \<br>\ in the year" + "<mark>" + year + "</mark>" + "\<br>";

    }
}

function update_rate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}