let input = document.querySelector('.input')
let button = document.querySelector('.input.-btn')

function enviar() {
    if(input.value === "") {
        alert("[ERRO] Preencha o campoe corretamente")
        return false
    }else {
        alert('ok')
    }
}

button.onclick = enviar