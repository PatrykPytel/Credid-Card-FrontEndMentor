function verify(reg, x) { 
    const y = document.getElementById("backcard");
    if (!(reg.test(x))) { 
        y.innerHTML = "KURWA";
    }
}
function change0() { 
    const re = new RegExp("^[0-9]{3}$"); 
    const y = document.getElementById("cardname");
    const x = document.getElementById("name");
    y.innerHTML = x.value;
    verify(re,x.value);
}
function change1() { 
    const re = new RegExp("^[0-9]{3}$"); 
    const y = document.getElementById("cardnumbers");
    const x = document.getElementById("numbers");
    y.innerHTML = x.value;
    verify(re,x.value);
}
function change2() { 
    const re = new RegExp("^[0-9]{3}$"); 
    const y = document.getElementById("month");
    const x = document.getElementById("mm");
    y.innerHTML = x.value;
    verify(re,x.value);
}
function change3() { 
    const re = new RegExp("^[0-9]{3}$"); 
    const y = document.getElementById("year");
    const x = document.getElementById("yy");
    y.innerHTML = x.value;
    verify(re,x.value);
}
function change4() {
    const re = new RegExp("^[0-9]{3}$"); 
    const y = document.getElementById("backcard");
    const x = document.getElementById("cvc");
    y.innerHTML = x.value;
    verify(re,x.value);


}
