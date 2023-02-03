/*static user acc*/
var email = "gic@gmail.com";
var password = "Gic123";
function turnOnCookie(name) {
  name = name + "=";
  //   Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  let decodedCookie = decodeURIComponent(document.cookie);
  //   Because when we retreive all the value in cookie it separate the value from one to one by' ;'
  let items = decodedCookie.split(";");
  for (let i = 0; i < items.length; i++) {
    while (items[i].charAt(0) == " ") {
      items[i] = items[i].substring(1);
    }
    if (items.indexOf(name) == 0) {
      return items[i].substring(name.length, items[i].length);
    }
  }
  return "";
}

function login() {
  /*verify Email*/
  var date = new Date();

  date.setTime(date.getTime() + 30 * 1000);
  //console.log(date.toUTCString);
  document.cookie = "email=gic@gmail.com;expires=" + date.toUTCString();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (
    this.email === email &&
    this.password === password &&
    document.cookie === "email=gic@gmail.com"
  ) {
    location.href = "./home.html";
  }
}
function logout() {
  location.href = "./Ex5.html";
}
function ExpiredDate() {
  var cookieValue = getCookie("email");
  if (cookieValue != "gic@gmail.com") {
    location.href = "Ex5.html";
  }
}
