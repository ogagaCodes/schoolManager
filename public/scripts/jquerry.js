    
    let togglebtn = document.getElementById("showPassword");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    togglebtn.addEventListener('click', function(){
        if (password.type === "password" && confirmPassword.type === "password" ) {
            password.type = "text";
            confirmPassword.type = "text";
            togglebtn.innerText ="hide password";
          } else {
            password.type = "password";
            confirmPassword.type = "password";
            togglebtn.innerText ="show password";
          }

    });
    
  

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function animateMessages(){
    $("#emailErrorMsg").addClass("animate");
}
let emailErrorMesage="";
let  phoneErrorMessage= ""; 
let passwordErrorMessage= "";
let  mainErrorMSg = "";
let validData = function(){
    $("#submitbtn").click(function(){
    
        if(isEmail($("#email").val())==false && $("#email").val() != ""){
            emailErrorMesage += "<p>you must provide a valid email</p>";
            $("#emailErrorMsg").html(emailErrorMesage);
        
        } else{
            $("#emailErrorMsg").html("");
        }
        if($.isNumeric($("#phone").val()) == false && $("#phone").val() != ""){
            phoneErrorMessage+= "<p>you must provide a valid phone number</p>";
            $("#phoneErrorMsg").html(phoneErrorMessage); 
        } else{
            $("#phoneErrorMsg").html("");
        }
        if($("#password").val() != $("#confirmPassword").val() && $("#password").val() != ""){
            passwordErrorMessage += "your password don't match ";
            $("#passwordErrorMsg").html(passwordErrorMessage);
        } else{
            $("#passwordErrorMsg").html("");
        }
          if($("#phone").val() == "" || $("#email").val() == ""  || $("#password").val() == ""){
            mainErrorMSg += "please some fields are empty,correct them";
            $("#erromessage1").html(mainErrorMSg);
          }else{
            $("#erromessage1").html("");
        }
         
    
         if(mainErrorMSg === "" && phoneErrorMessage === "" && emailErrorMesage === "" && passwordErrorMessage === ""){
            let welcomeMessage = document.getElementById('successMessage');
            let body = document.getElementById('container');
            
            
            $("#userName").html($("#email").val());
            welcomeMessage.style.display = "block";
            body.style.opacity ="30%";
         }  

    
          emailErrorMesage="";
          phoneErrorMessage=""; 
          passwordErrorMessage="";
           mainErrorMSg ="";
           $("h1").addClass("animate") ; 
    
    })
}


validData();
  

 
span.addEventListener('click',function(){
    let welcomeMessage = document.getElementById('successMessage');
    let body = document.getElementById('container');
    welcomeMessage.style.display = "none";
    body.style.opacity ="100%";
   }) 
