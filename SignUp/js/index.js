
var signUp = document.getElementById("signUp");
var signUpName = document.querySelector('#signName') ;
var signUpEmail = document.querySelector('#signEmail') ;
var signUpPassword = document.querySelector('#signPassword') ;


var userList;
if(localStorage.getItem("accounts")!= null)
  {
    userList = JSON.parse(localStorage.getItem("accounts"))
  }
  else{
    userList = [] ;
  }

  signUp.addEventListener("mouseenter", function () {
    signUp.style.cssText = `
      background-color: #17A2B8;
      color:white;
      
      `;
  });
  signUp.addEventListener("mouseleave", function () {
    signUp.style.cssText = `
      background-color: transparent;
      color:#17A2B8;
      
      `;
  });

  signUp.addEventListener("click", function () {
    add();
  });



function add()
{
  if(signUpName.value ==''||signUpEmail.value==''||signUpPassword.value=='')
    {
      document.getElementById('message').innerHTML = `<p>All inputs is required</p>`
   
    }
    else{

      var account = 
      {
        name : signUpName.value,
        email : signUpEmail.value,
        password : signUpPassword.value,
      };
      userList.push(account);
      location.href="../Login/index.html"
      localStorage.setItem('accounts',JSON.stringify(userList));
      console.log(userList)
      clear()
      
  

    }
}
function clear()
{
  signUpName.value = null;
  signUpEmail.value = null;
  signUpPassword.value = null;
  
}


