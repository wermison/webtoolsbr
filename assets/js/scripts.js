const sortearBtn = document.getElementById('sortear');
sortearBtn.addEventListener('click', sortearTimes);

function sortearTimes() {
    const numPlayers = parseInt(document.getElementById('num-players').value);
    const playerNames = document.getElementById('player-names').value.split('\n').map(name => name.trim()).filter(name => name !== '');

    if (!numPlayers || numPlayers <= 0 || playerNames.length === 0) {
        document.querySelector('#resultado').innerHTML = ``;
        document.querySelector('#resultado').innerHTML = `<p class="alert alert-danger text-center">Por favor, preencha todos os campos!</p>`;
        return;
    }

    if (numPlayers > playerNames.length) {
        document.querySelector('#resultado').innerHTML = ``;
        document.querySelector('#resultado').innerHTML = `<p class="alert alert-danger text-center">Número de jogadores por time não pode ser maior que o número total de jogadores.</p>`;
        return;
    }

    // Embaralhe a lista de jogadores
    const shuffledPlayers = shuffle(playerNames);

    // Divida a lista em equipes
    const numTeams = Math.ceil(shuffledPlayers.length / numPlayers);
    const teams = [];

    for (let i = 0; i < numTeams; i++) {
        const startIndex = i * numPlayers;
        const endIndex = startIndex + numPlayers;
        const team = shuffledPlayers.slice(startIndex, endIndex);
        teams.push(team);
    }

    // Exiba o resultado na tela
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerHTML = '';

    for (let i = 0; i < teams.length; i++) {
        const teamEl = document.createElement('div');
        teamEl.innerHTML = `<hr><h4>Time ${i + 1}:</h4> ${teams[i].join('<br>')}`;
        resultadoEl.appendChild(teamEl);
    }

    // let limparNum = document.querySelector("#num-players");
    // limparNum.value = "";
    // let limparPlayer = document.querySelector("#player-names");
    // limparPlayer.value = "";
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}