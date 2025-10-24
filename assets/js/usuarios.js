function carregarUsuarios() {
    const usuarioLS = window.localStorage.getItem('usuarios')
    const usuarios = JSON.parse(usuarioLS)
    const tbodyUsuarios = document.getElementById('tbody-usuarios')

    for (let i=0; i < usuarios.length; i++) {
        const usuario = usuarios[i]
        const nome = usuario.nome
        const email = usuario.email

        const linha = document.createElement('tr')

        const coluna1 = document.createElement('td')
        const coluna2 = document.createElement('td')

        coluna1.textContent = nome
        coluna2.textContent = email

        linha.appendChild(coluna1)
        linha.appendChild(coluna2)

        tbodyUsuarios.appendChild(linha)
    }
}

carregarUsuarios()