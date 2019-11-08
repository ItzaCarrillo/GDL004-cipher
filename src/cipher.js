window.cipher = function (offset, messageToCipher) {                                  //metodo para codificar el mensaje                                                                                    
  let encodedMessage = "";
  let offsetInt = parseInt(offset);                                                   //metodo que cambia de string a number el offset para que
  if (offsetInt < 0) {                                                                //el asciiValue obtenga el desplazamiento correcto.                                                       
    offsetInt = (offsetInt % 26) + 26;                                                //desplazamiento offset negativos operacion que los 
  }                                                                                   //convierte a positivos para poder calcular la formula.
  for (let i = 0; i < messageToCipher.length; i++) {                                      //evento que evalua cada caracter para cifrar.
    if (messageToCipher.charCodeAt(i) == 32) {                                        //mantiene los espacion vacios.
      encodedMessage += " ";
    }
    else {
      let asciiValue = ((messageToCipher.charCodeAt(i) - 65 + offsetInt) % 26) + 65;  //formula para codificar un mensaje
      encodedMessage += String.fromCharCode(asciiValue);                              //salida de offset en codigo ascii
      //alert(encodedMessage);
    }
  }
  return encodedMessage;
};

window.decipher = function (offset, messageToDecipher) {                              //metodo para decodificar el mensaje
  let decodedMessage = "";
  let offsetInt = parseInt(offset);
  offsetInt = offsetInt * -1;      
  if (offsetInt < 0) {
    offsetInt = (offsetInt % 26) + 26;
  }
  for (let i = 0; i < messageToDecipher.length; i++) {
    if (messageToDecipher.charCodeAt(i) == 32) {
      decodedMessage +=  " ";
    }
    else {
      let asciiValue = ((messageToDecipher.charCodeAt(i) - 65 + offsetInt) % 26) + 65;//formula para decodificar un mensaje
      decodedMessage += String.fromCharCode(asciiValue);                              //salida de offset en codigo ascii
      //alert(encodedMessage);
    }
  }
  return decodedMessage;
};

