const textInput = document.querySelector('#text_input');
const textOutput = document.querySelector('#text-output');
let emptyContentArea = document.querySelector('.saida_texto_resultado_vazio');
let contentAreaOk = document.querySelector('.saida_texto_ok');
const copyButton = document.querySelector('#copy')

emptyContentArea.style.display = 'block';
contentAreaOk.style.display = 'none';

const btnEncrypt = () => {
  if(!validate(textInput.value)){
    emptyContentArea.style.display = 'none';
    contentAreaOk.style.display = 'block'
    textOutput.value = encrypt(textInput.value)
    textInput.value = '';
  }else{
    alert('Por favor, digite apenas letras minúsculas. :)');
    textInput.value = ''
  }
}

const btnDescrypt = () => {
  if(!validate(textInput.value)){
    emptyContentArea.style.display = 'none';
    contentAreaOk.style.display = 'block'
    textOutput.value = descrypt(textInput.value)
    textInput.value = '';
  }else{
    alert('Por favor, digite apenas letras minúsculas. :)');
    textInput.value = ''
  }
}

copyButton.addEventListener('click', ()=>{
  textOutput.select();
  textOutput.setSelectionRange(0, 99999);
  document.execCommand("copy");
})


const validate = (string) =>{
  let special = /[`!@#$%^&*()_+\-=\[\]{};':"+\\|,<>\/?~]/;
  let uppercase = /[A-Z]/;
  let numbers = /[0-9]/;
  return (special.test(string))||(uppercase.test(string))||(numbers.test(string));
} 

const encrypt = string => encryptedString = string.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
const descrypt = string => decryptedString = string.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g,"a").replace(/ober/g, "o").replace(/ufat/g, "u");