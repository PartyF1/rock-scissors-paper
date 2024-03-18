export function getWinner(playerAttack, computerAttack) {
    if (playerAttack === computerAttack) {
        return null;
    } else {
        switch (playerAttack) {
            case "scissors": {
                return computerAttack === 'rock' ? "computer" : "player";
            }
            case "rock": {
                return computerAttack === 'paper' ? "computer" : "player";
            }
            case "paper": {
                return computerAttack === 'scissors' ? "computer" : "player";
            }
        }
    }
}

export function result(playerAttack, computerAttack, points) {
    const attack = Math.floor(Math.random() * (3) + 1);
    switch (attack) {
        case 1: {
            computerAttack.current = "paper";
            break;
        }
        case 2: {
            computerAttack.current = "scissors";
            break;
        }
        case 3: {
            computerAttack.current = "rock";
            break;
        }
        default: break;
    }
    const winner = getWinner(playerAttack, computerAttack.current);
    if (winner === "player") {
        points.current++;
    } else if (winner === "computer") {
        points.current--;
    }
    return winner;
}