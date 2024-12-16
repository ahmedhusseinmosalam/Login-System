var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var userList = [];
userList = JSON.parse(localStorage.getItem("accounts"));

document.getElementById("login").addEventListener("click", function () {
  if ( signInEmail.value == ''||signInPassword.value=='') {
    document.getElementById("message").innerHTML = `<p>All inputs is required</p>`;
  }
  else{
    checkUser()
  }
});

function checkUser()
{
  for(var i = 0 ;i < userList.length ; i++)
    {
      if(signInEmail.value == userList[i].email&&signInPassword.value == userList[i].password)
        {
          var y = userList[i].name;
          localStorage.setItem("userName",y);
          location.href = "../home/home.html";
          break;
        }
    }
  }























// for (var i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("input", function () {
//     validationInput(this);
//   });
// }

// function validationInput(element) {
//   var text = element.value;
//   var regex = {
//     signInEmail: /^\w+@gmail\.com$/,
//     signInPassword: /^[A-Z]?\d*$/,
//   };
//   if (regex[element.id].test(text) == true) {
//     element.classlist.add("is-valid");
//     element.classlist.remove("is-invalid");
//     return true;
//   } else {
//     element.classlist.add("is-invalid");
//     element.classlist.remove("is-valid");
//     return false;
//   }
// }



