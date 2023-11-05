  const mainEl = document.querySelector(".main")

  const passwordEl = document.createElement('input')//ств елемент

  passwordEl.classList.add('password')
  passwordEl.setAttribute('placeholder', 'Згенеруй пароль')
  passwordEl.addEventListener('keypress', (evt) => {
    evt.preventDefault()
})

  passwordEl.addEventListener('focus', (evt) => { 
   
    navigator.clipboard.writeText(passwordEl.value);
})

const copyBtn = document.createElement('button')
copyBtn.classList.add('password-button')
copyBtn.innerText = "Копіюй!!!"

copyBtn.addEventListener('click', (evt) => {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordEl.value);
})

const generateBTN = document.createElement('button')
generateBTN.classList.add('password-button')
generateBTN.innerText = "Генеруй!!!"
generateBTN.addEventListener('click', (evt) => {
let password =  generatePassword(12)
passwordEl.value = password
})

function generatePassword (passwordLength){
    const numbers = '0123456789'
    const uper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const symbol = "!@#$%^&*()_+";

    const all =  numbers+ uper+ lower+symbol

    let randomString = ''

    for (let i = 0; i < passwordLength; i+=1){
      let randomNumber = Math.floor(Math.random() * all.length)
      randomString +=all[randomNumber]
    }
    return randomString;
}


mainEl.appendChild(passwordEl)
mainEl.appendChild(copyBtn)
mainEl.appendChild(generateBTN)