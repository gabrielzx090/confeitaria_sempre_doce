function confirmarReserva() {
    const nome = document.getElementById('nome')
    const produto =  document.getElementById('produto')
    const quantidade =  document.getElementById('quantidade')
    const data =  document.getElementById('data')
    const telefone =  document.getElementById('telefone')
    const comentario =  document.getElementById('comentario')

     const reservaCalendario = {
        title: nome.value,
        start: data.value,
        end: data.value,
        produto: produto.value,
        quantidade: quantidade.value,
        telefone: telefone.value,
        comentario: comentario.value
    }

    let reservaLS = window.localStorage.getItem('reservas')

    if (reservaLS == undefined) {
        // Não existe a lista no LS
        reservaLS = []
    } else {
        // Existe a lista no LS
        reservaLS = JSON.parse(reservaLS)
    }

    // Salva o compromisso no LS
    reservaLS.push(reservaCalendario)
    window.localStorage.setItem('compromissos', JSON.stringify(reservaLS))

    alert('Sua reserva foi realizada com êxito! ✅')
}