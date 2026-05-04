let body=document.querySelector("#input");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let reset=document.querySelector("#reset");
let calc=document.querySelector("#calc");
let zero=document.querySelector("#zero");
let sum=document.querySelector("#sum");
let prod=document.querySelector("#prod");
let minus=document.querySelector("#minus");
let div=document.querySelector("#div");
let del=document.querySelector("#delete");
let num1=Number;
let num2=Number;
let operador=Text;
body.textContent="";

reset.addEventListener("click",()=>{
    body.textContent="";
    num1=0;
    num2=0;
}
);
one.addEventListener("click",()=> digitInput(1));

two.addEventListener("click",()=> digitInput(2));

three.addEventListener("click",()=> digitInput(3));

four.addEventListener("click",()=> digitInput(4));

five.addEventListener("click",()=> digitInput(5));

six.addEventListener("click",()=> digitInput(6));

seven.addEventListener("click",()=> digitInput(7));

eight.addEventListener("click",()=> digitInput(8));

nine.addEventListener("click",()=> digitInput(9));

zero.addEventListener("click",()=> digitInput(0));

sum.addEventListener("click",()=> operatorInput("+"));

div.addEventListener("click",()=> operatorInput("/"));

prod.addEventListener("click",()=> operatorInput("x"));

minus.addEventListener("click",()=> operatorInput("-"));

del.addEventListener("click",()=>{
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
});

calc.addEventListener("click",()=> {
    console.log(num1);
    console.log(num2);
    console.log(operador);
    if (operador=="+"){
        body.textContent=+Number(num1)+Number(num2);
    } else if (operador=="-"){
        body.textContent=+Number(num1)-Number(num2);
    } else if (operador=="x"){
        body.textContent=+Number(num1)*Number(num2);
    } else if (operador=="/"){
        body.textContent=+Number(num1)/Number(num2);
    };
    num1=body.textContent;
    
});

function digitInput(a) {
    let temp=body.textContent[body.textContent.length-1];
    if (temp=="-"||temp=="+"||temp=="/"||temp=="x"){
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
    }
    body.textContent=body.textContent+a;
    num2=+body.textContent;
}

function operatorInput(a) {
    if (!isNaN(body.textContent)&& body.textContent!=""){
    num1=body.textContent;
    operador=a;
    body.textContent=operador;
    
    }
    let temp=body.textContent;
    if (temp=="-"||temp=="+"||temp=="/"||temp=="x"){
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
    }
    body.textContent=body.textContent+a;
}