function validarLogin() {
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    let lista = window.localStorage.getItem('usuarios')

    lista = JSON.parse(lista)

    let logado = false

    for (let i=0; i < lista.length; i++) {
        const usuario = lista[i]
        const emailLista = usuario.email
        const passwordLista = usuario.password

        if (emailLista == email.value) {
            if (passwordLista == password.value) {
                alert('Sucesso, você está logado!')
                logado = true
                break
               
            } else {
                logado = false
            }
        } else {
            logado = false
        }
    }

    if (logado == false) {
        alert('Login inválido')
    } else {
         window.location.href = '../../pages/home-admin.html'
    }
}