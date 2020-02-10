window.onload=function(){
    let passwordReset = document.querySelector('#passwordReset');
    let resetForm = document.getElementById('resetForm');
    let bodyContainer = document.querySelector('.bodyContainer');
    
    passwordReset.addEventListener('click', function(){
       resetForm.style.display ="block";
       resetForm.style.display ="flex";
       resetForm.style.alignItems = "center";
       resetForm.style.justifyContent = "center"
       
        });
  }
 