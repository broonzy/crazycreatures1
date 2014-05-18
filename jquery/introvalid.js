
/*function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
    {
    c_end = c_value.length;
    }
  c_value = unescape(c_value.substring(c_start,c_end));
  }
return c_value;
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{
var username=getCookie("username");
if (username!=null && username!="")
  {
  $("#greeting").append("Hi " + username + " have fun playing crazy creatures").fadeIn(3000);
  }
else 
  {
  username=prompt("Please enter your name:","");
  if (username!=null && username!="")
    {
    setCookie("username",username,365);
    }
  }
}
*/

/*setting up the variables*/
var user_name;
var expires = new Date();
function display() {
/*will display the cookie if there is one present */
if ((document.cookie == "") == false){

var length = document.cookie.length -1;
var message = document.cookie.substr(5, length);
/*displays the message in the div which fades in/out */
$("#greeting").append("Hi " + message + "<br /> " + "Let's make CRAZY CREATURES!").fadeIn().delay(3000).fadeOut(2000);
}
}



function check(){
/* takes the user entry from the textbox */
user_name = document.getElementById("name").value;
expires.setFullYear(expires.getFullYear() + 1);
/*validation placed if the textbox is empty */
if (user_name == ""){
alert("please enter your name");
}
else{
/* the cookie is set and a link to begin the game */
document.cookie = escape("name") + " " + escape(user_name) + "; expires =" + expires.toGMTString();
$("#bonus-intro").effect("shake", { times:4 }, 3500);

}

}































