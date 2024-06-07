var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var btn = document.getElementById("btn");
var signUpBtn = document.getElementById("SignUp");
var para = document.getElementById("para");
var logOut = document.getElementById("logout");

var userList;

if (localStorage.getItem("list") !== null) {
  userList = JSON.parse(localStorage.getItem("list"));
  console.log(userList);
} else {
  userList = [];
}

signUpBtn.onclick = function (e) {
  e.preventDefault();
  para.innerHTML = `<p id="para" class="text-center text-white mt-3">
  You have an account?
<a id="SignUp" class="text-white" href="">Signin</a>
</p>`;
  userNameInput.classList.toggle("d-none");
  btn.innerHTML = "Sign Up";
};

btn.onclick = function () {
  var userInfo = {
    userName: userNameInput.value,
    userEmail: userEmailInput.value,
    userPassword: userPasswordInput.value,
  };
  if (btn.innerHTML == "Sign Up") {
    userList.push(userInfo);
    localStorage.setItem("list", JSON.stringify(userList));
    resetInputs();
  } else {
    signIn();
  }
};

function resetInputs() {
  userNameInput.value = null;
  userEmailInput.value = null;
  userPasswordInput.value = null;
}

// function validation(){

// }

function signIn() {
  for (var i = 0; i < userList.length; i++) {
    if (
      userEmailInput.value == userList[i].userEmail &&
      userPasswordInput.value == userList[i].userPassword
    ) {
      console.log("hiii");
      document
        .getElementById("incorrect")
        .classList.add("d-none");
      document.getElementById("wel").classList.remove("d-none");
      document.getElementById("main").classList.toggle("d-none");
      document.getElementById("nav").classList.toggle("d-none");
      document.getElementById(
        "wel"
      ).innerHTML = `<h1 class="py-5 my-5 text-center text-white">Welcome ${userList[i].userName}</h1>`;
    } else {
      console.log("noooo");
      document
        .getElementById("incorrect")
        .classList.replace("d-none","d-block");
      // document
      //   .getElementById("incorrect")
      //   .classList.add("d-block");
    }
  }
  resetInputs()
}

logOut.onclick = function () {
  document.getElementById("main").classList.toggle("d-none");
  document.getElementById("nav").classList.toggle("d-none");
  document.getElementById("wel").classList.add("d-none");
  document
  .getElementById("incorrect")
  .classList.replace("d-block","d-none");
};
