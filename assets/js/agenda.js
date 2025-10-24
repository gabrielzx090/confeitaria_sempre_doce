const calendario = document.getElementById('calendario')

const opcoes = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    width: 500,
    height: 500,
    headerToolbar: {
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        center: 'title',
        left: ''
    },

    eventClick: function (info) {
        alert(
            'Nome: ' + info.event.title + '\n' +
            'Quantidade: ' + info.event.extendedProps.quantidade + '\n' +
            'Telefone: ' + info.event.extendedProps.telefone + '\n' +
            'Comentario: ' + info.event.extendedProps.comentario
        );
    }
}

var calendarioJS = new FullCalendar.Calendar(calendario, opcoes)

// Buscar os compromissos no LS
let reservaLS = window.localStorage.getItem('compromissos')
reservaLS = JSON.parse(reservaLS)

// Muitos compromissos, é uma lista
// Então vamos precisar de for
for (let i = 0; i < reservaLS.length; i++) {

    const reserva = reservaLS[i]

    // Adiciona o evento no calendario
    calendarioJS.addEvent({
        title: reserva['title'],
        start: reserva['start'],
        end: reserva['end'],
        telefone: reserva['telefone'],
        produto: reserva['produto'],
        quantidade: reserva['quantidade'],
        comentario: reserva['comentario']
    })
}
calendarioJS.render()