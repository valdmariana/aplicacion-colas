var socket = io();
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor')
});

$('button').on('click', function () {
    socket.emit('siguienteTicket', null, function (resp) {
        $('#lblNuevoTicket').text(resp.siguiente);
    });
});

socket.on('estadoActual', function (ticket) {
    $('#lblNuevoTicket').text(ticket.actual);
});