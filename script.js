let input = document.querySelector('.input').value
let button = document.querySelector('.input.-btn')

button.onclick = enviar

function enviar() {
    if(input === "") {
        alert("[ERRO] Preencha o campoe corretamente")
    }else {
        alerte('ok')
    }
}