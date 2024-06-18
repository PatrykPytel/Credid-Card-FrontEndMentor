//let currcolor = "red";
function verify(reg, x) { 
    const y = document.getElementById("backcard");
    if (!(reg.test(x.value))) { 
        x.style.borderColor = "red";
       // currcolor = "red";
    }else { 
       // currcolor = "hsl(278, 68%, 11%)";
        x.style.borderColor = "hsl(278, 68%, 11%)"
    }
}

function change0() { 
    const re = new RegExp("^[A-Z]{1}[a-z]{2,15}\\s[A-Z]{1}[a-z]{2,16}$"); 
    const y = document.getElementById("cardname");
    const x = document.getElementById("name");
    y.innerHTML = x.value;
    verify(re,x);
}
function change1() { 
    const re = new RegExp("^[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}$"); 
    const y = document.getElementById("cardnumbers");
    const x = document.getElementById("numbers");
    y.innerHTML = x.value;
    verify(re,x);
}
function change2() { 
    const re = new RegExp("^[0]{1}[1-9]{1}|[1]{1}[0-2]{1}$"); 
    const y = document.getElementById("month");
    const x = document.getElementById("mm");
    y.innerHTML = x.value;
    verify(re,x);
}
function change3() { 
    const re = new RegExp("^[0-9]{2}$"); 
    const y = document.getElementById("year");
    const x = document.getElementById("yy");
    y.innerHTML = x.value;
    verify(re,x);
}
function change4() {
    const re = new RegExp("^[0-9]{3}$"); 
    const y = document.getElementById("backcard");
    const x = document.getElementById("cvc");
    y.innerHTML = x.value;
    verify(re,x);


}
let p = document.getElementById("top");
function changecolor0(element) {
    element.style.borderColor = "hsl(278, 68%, 11%)";
    if(p.style.borderColor!="red"){
        p.style.borderColor = "hsl(270, 3%, 87%)";
    }
   // p.style.borderColor = "hsl(270, 3%, 87%)";
    p = element;
}