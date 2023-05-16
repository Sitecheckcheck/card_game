export function renderGame(level) {
    let appHtml
    if (level === "1") {
        appHtml = `
    <div class="body game">
        <div class="game__header">
            <div class="time">
                <div class="time__block">
                    <p class="time__name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time__name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game__zone-1">
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="6">
            </li>
        </ul>
    </div>
    `
    } else if (level === "2") {
        appHtml = `
        <div class="body game">
        <div class="game__header">
            <div class="time">
                <div class="time__block">
                    <p class="time__name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time__name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game__zone-2">
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="6">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="7">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="8">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="9">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="11">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="12">
            </li>
        </ul>
    </div>
    `
    } else {
        appHtml = `
        <div class="body game">
        <div class="game__header">
            <div class="time">
                <div class="time__block">
                    <p class="time__name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time__name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game__zone-3">
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="6">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="7">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="8">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="9">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="11">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="12">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="13">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="14">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="15">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="16">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="17">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="18">
            </li>
        </ul>
    </div>
    `
    }

    return appHtml
    // appEl.innerHTML = appHtml
}