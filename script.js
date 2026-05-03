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
}
);
one.addEventListener("click",()=>{
    let temp=body.textContent[body.textContent.length-1];
    if (temp=="-"||temp=="+"||temp=="/"||temp=="x"){
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
    }
    body.textContent=body.textContent+"1";
    num2=+body.textContent;
});
two.addEventListener("click",()=>{
    body.textContent=body.textContent+"2";
});
three.addEventListener("click",()=>{
    body.textContent=body.textContent+"3";
});
four.addEventListener("click",()=>{
    body.textContent=body.textContent+"4";
});
five.addEventListener("click",()=>{
    body.textContent=body.textContent+"5";
});
six.addEventListener("click",()=>{
    body.textContent=body.textContent+"6";
});
seven.addEventListener("click",()=>{
    body.textContent=body.textContent+"7";
});
eight.addEventListener("click",()=>{
    body.textContent=body.textContent+"8";
});
nine.addEventListener("click",()=>{
    body.textContent=body.textContent+"9";
});
zero.addEventListener("click",()=>{
    body.textContent=body.textContent+"0";
});
sum.addEventListener("click",()=>{
    if (!isNaN(body.textContent)&& body.textContent!=""){
    num1=body.textContent;
    operator="+";
    body.textContent=operator;
    }
    let temp=body.textContent[body.textContent.length-1];
    if (temp=="-"||temp=="+"||temp=="/"||temp=="x"){
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
    }
    body.textContent=body.textContent+"+";
});
div.addEventListener("click",()=>{
    let temp=body.textContent[body.textContent.length-1];
    if (temp=="-"||temp=="+"||temp=="/"||temp=="x"){
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
    }
    body.textContent=body.textContent+"/";
});
prod.addEventListener("click",()=>{
    let temp=body.textContent[body.textContent.length-1];
    if (temp=="-"||temp=="+"||temp=="/"||temp=="x"){
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
    }
    body.textContent=body.textContent+"x";
});
minus.addEventListener("click",()=>{
    let temp=body.textContent[body.textContent.length-1];
    if (temp=="-"||temp=="+"||temp=="/"||temp=="x"){
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
    }
    body.textContent=body.textContent+"-";
});
del.addEventListener("click",()=>{
    body.textContent=body.textContent.slice(0,body.textContent.length-1);
});

calc.addEventListener("click",()=>{
    body.textContent
});