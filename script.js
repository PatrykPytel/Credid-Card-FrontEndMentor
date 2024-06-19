//let currcolor = "red";


function change0() { 
    const y = document.getElementById("cardname");
    const x = document.getElementById("name");
    y.innerHTML = x.value;
  //  verify(re,x);
}
function change1() { 
    const y = document.getElementById("cardnumbers");
    const x = document.getElementById("numbers");
    y.innerHTML = x.value;
   // verify(re,x);
}
function change2() { 
    const y = document.getElementById("month");
    const x = document.getElementById("mm");
    y.innerHTML = x.value;
   // verify(re,x);
}
function change3() { 
    const y = document.getElementById("year");
    const x = document.getElementById("yy");
    y.innerHTML = x.value;
 ///  verify(re,x);
}
function change4() {
    const y = document.getElementById("backcard");
    const x = document.getElementById("cvc");
    y.innerHTML = x.value;
   // verify(re,x);


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


function verify() {
    const reg = new RegExp("^[A-Z]{1}[a-z]{2,15}\\s[A-Z]{1}[a-z]{2,16}$"); 
    const reg1 = new RegExp("^[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}$"); 
    const reg2 = new RegExp("^[0]{1}[1-9]{1}|[1]{1}[0-2]{1}$");
    const reg3 = new RegExp("^[0-9]{2}$"); 
    const reg4 = new RegExp("^[0-9]{3}$"); 
    const p0 = document.getElementById("errorName");
    const p1 = document.getElementById("errorchild");
    const p2 = document.getElementById("errorYM");
    const p3 = document.getElementById("errorCVC");
    const x0 = document.getElementById("name");
    const x1 = document.getElementById("numbers");
    const x2= document.getElementById("mm");
    const x3 = document.getElementById("yy");
    const x4 = document.getElementById("cvc");
    if(!(reg.test(x0.value))) { 
        x0.style.borderColor = "red";
        if(x0.value.length==0)  {
            p0.innerHTML = "Can't be blank";
        }else  { 
            p0.innerHTML = "Wrong format, letters only";
        }
    }
    if(!(reg1.test(x1.value))) { 
        x1.style.borderColor = "red";
        if(x1.value.length==0)  {
            p1.innerHTML = "Can't be blank";
        }else  { 
            p1.innerHTML = "Wrong format, numbers only";
        }
    }
    if(!(reg4.test(x4.value))) { 
        x4.style.borderColor = "red";
        if(x4.value.length==0)  {
            p3.innerHTML = "Can't be blank";
        }else  { 
            p3.innerHTML = "Wrong format";
        }
    }
    if(!(reg2.test(x2.value))) { 
        x2.style.borderColor = "red";
    }
    if(!(reg3.test(x3.value))) { 
        x3.style.borderColor = "red";
    }
    if((x2.value.length == 0) || (x3.value.length == 0))  { 
        p2.innerHTML = "Can't be blank";
    }else  { 
        p2.innerHTML = "Wrong format, try again"
    }
}