let input = document.querySelector('.input')
let button = document.querySelector('.input.-btn')
let email = document.querySelector('.email')
let span = document.querySelector('.spn')


function enviar() {
    if(input.value === "") {
        alert("[ERRO] Preencha o campoe corretamente")
        email.innerHTML = "Requered email valided"
        return false
    }else {
        alert(`E-mail enviado com sucesso !! Verifique sua caixa de entrada e span.`)
       span.innerHTML = input.value
    }
}

button.onclick = enviar