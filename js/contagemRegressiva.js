// Defina a data de início das férias
var startDate = new Date("2023-07-17").getTime();

// Atualiza o contador a cada segundo
var countdown = setInterval(function() {
    // Obtém a data e a hora atual
    var now = new Date().getTime();

    // Calcula o tempo restante até as férias
    var timeRemaining = startDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Exibe a contagem regressiva na página
    document.getElementById("countdown").innerHTML = days + " dias, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos";

    // Verifica se a contagem regressiva chegou a zero
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "As férias começaram!";
    }
}, 1000);
