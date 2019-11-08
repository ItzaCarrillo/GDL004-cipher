function isUppercase(txtToMod) {                                                //funcion que llama el id de el mensaje a cifrar o decifrar
  var title = document.getElementById(txtToMod);                                //y especifica el parametro de uso solomayusculas .  
  var regExp = /[A-Z]/;
     if (!regExp.test(title.value)) {
        title.value = "";
        return false;
        }
     else {
           return true;
        }
}
function sendMessagetoEncode() {                                               //funcion que valida el txtMode  sea con mayusculas 
  var encryptMessage = document.getElementById("txtToMod");                    //y valida numero offset que se ingreso para el desplazamiento.
  var resultMessage = document.getElementById("resultMessage");                 
  if (isUppercase(encryptMessage.id) == false) {
    alert("Please enter valid text. No lowercase or special characters allowed.");
  }
  else {
    offsetElement = document.getElementById("offsetValue");
    offsetValue = offsetElement.value;
    if (offsetValue == "") {
      alert("Please enter an offset value");
    }
    else {
      resultMessage.innerText = cipher(offsetValue, encryptMessage.value);
      resultMessage.removeAttribute("hidden");
    }
  }
}

function sendMessagetoDecode() {
  var decryptMessage = document.getElementById("txtToMod");
  if (isUppercase(decryptMessage.id) == false) {
    alert("Please enter valid text. No lowercase or special characters allowed.");
  }
  else {
    offsetElement = document.getElementById("offsetValue");
    offsetValue = offsetElement.value;
    if (offsetValue == "") {
      alert("Please enter an offset value");
    }
    else {
      resultMessage.innerText = decipher(offsetValue, decryptMessage.value);
      resultMessage.removeAttribute("hidden");
    }
  }
}

function reset() {
  document.getElementById("txtToMod").value="";
  document.getElementById("offsetValue").value = "";
  document.getElementById("resultMessage").value = "";
}
