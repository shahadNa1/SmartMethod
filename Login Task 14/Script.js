function validation(){
  var input_text = document.querySelector("#input_SSID");
  var input_password = document.querySelector("#input_password");
  var error_msg = document.querySelector(".error_msg");

  if(input_SSID.value.length <= 8 || input_password.value.length <= 6 ){
    error_msg.style.display = "inline-block";
    input_text.style.border = "1px solid #f74040";
    input_password.style.border = "1px solid #f74040";
    return false;
  }
  else{
    alert("form submitted successfully")
    return true;
  }

}

var input_fields = document.querySelectorAll(".input");
var login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
  input_item.addEventListener("input", function(){
    if(input_item.value.length > 3){
      login_btn.disabled = false;
      login_btn.className = "btn enabled"
    }
  })
})