function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // return hours + ":" + minutes;
    return `${hours}:${minutes} ou ${hours} horas e ${minutes} minutos`
}

function calcular() {

    let startTime = document.querySelector('#start-time').value;
    let endTime = document.querySelector('#end-time').value;

    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = date.getFullYear();

    let start = new Date(year, month - 1, day, startTime.substr(0, 2), startTime.substr(3, 2));

    if (startTime < endTime) {

        let end = new Date(year, month - 1, day, endTime.substr(0, 2), endTime.substr(3, 2));

        let diff = Math.abs(start.getTime() - end.getTime());

        document.querySelector("#result").innerHTML = `<p class="alert alert-success text-center">A diferença em horas é de ${msToTime(diff)}</p>`

    } else {

        let end = new Date(year, month - 1, day, endTime.substr(0, 2), endTime.substr(3, 2));

        end.setDate(end.getDate() + 1);

        let diff = Math.abs(start.getTime() - end.getTime());

        document.querySelector("#result").innerHTML = `<p class="alert alert-success text-center">A diferença em horas é de ${msToTime(diff)}</p>`
    }
}