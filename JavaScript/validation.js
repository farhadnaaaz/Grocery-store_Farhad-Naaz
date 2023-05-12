let unameNode=document.getElementById('usename')
let errorNode1=document.getElementById('error1')
function validate1(){
    errorNode1.textContent="";
    let fname=unameNode.value;
    let unamePattern= new RegExp("^[A-Za-z]*$");
    unameNode.style.border="2px red solid";
    if(fname==""){
        errorNode1.textContent="Username is required";
        return false;
    }
    else if(fname.length<5){
        errorNode1.textContent="Username must contain atleast 5 characters";
        return false;
    }
    else if(unamePattern.test(fname)==false){
        errorNode1.textContent="Username must have only alphabets";
        return false;
    }
    else{
        unameNode.style.border="2px rgb(44, 244, 44) solid";
        return true;
    }
}



let passNode=document.getElementById('pass');
let errorNode2=document.getElementById('error2');
function validate2(){
    errorNode2.textContent="";
    let password=passNode.value;
    passNode.style.border="2px red solid";
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode2.textContent="Password is required";
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode2.textContent="Password must not contain symbol. should contain alphabets and/or digits. password must be 4 to 8 characters long";
        return false;
    }
    else{
        passNode.style.border="2px green solid";
        return true;
    }
}
let fnameNode=document.getElementById('name');
let errorNode3=document.getElementById('error3');

function validate3(){
    errorNode1.textContent="";
    let fname=fnameNode.value;
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.style.border="2px red solid";
    if(fname==""){
        errorNode3.textContent="Name is required";
        return false;
    }
    else if(fname.length<5){
        errorNode3.textContent="Name must contain atleast 5 characters";
        return false;
    }
    else if(fnamePattern.test(fname)==false){
        errorNode3.textContent="Name must have only alphabets";
        return false;
    }
    else{
        fnameNode.style.border="2px green solid";
        return true;
    }
}
let emailNode=document.getElementById('email');
let errorNode4=document.getElementById('error4');
function validate4(){
    errorNode4.textContent="";
    let email=emailNode.value;
    emailNode.style.border="2px red solid";
    if(email==""){
        errorNode4.textContent="Email Id is required";
        return false;
    }
    else if(!email.includes('@')){
        errorNode4.textContent="Please enter valid EmailId";
        return false;
    }
    else if(email.endsWith('@')){
        errorNode4.textContent="Please enter valid EmailId";
        return false;
    }
    else{
        emailNode.style.border="2px green solid";
        return true;
    }
}

let addrNode=document.getElementById('addr');
let errorNode5=document.getElementById('error5');
function validate5(){
    errorNode5.textContent="";
    let addres=addrNode.value;
    addrNode.style.border="2px red solid";
    if(addres==""){
        errorNode5.textContent="Address is required";
        return false;
    }
    else{
        addrNode.style.border="2px green solid";
        return true;
    }
}


let nodeArray=[unameNode,passNode]
function validateForm(){
    let flag1=validate1();
    let flag2=validate2();
    
    let flagArray=[flag1,flag2];
    
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag2)
}



let nodeArray1=[unameNode,passNode,fnameNode,addrNode,emailNode]
function validateForm1(){
    let flag1=validate1();
    let flag2=validate2();
    let flag3=validate3();
    let flag4=validate4();
    let flag5=validate5();
    
    let flagArray=[flag1,flag2,flag3,flag4,flag5];
    
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag2 && flag3 && flag4 && flag5)
}