import { COMPUTER, PAPER, PLAYER, ROCK, SCISSORS } from "./constants";

function getWinner(playerAttack, computerAttack) {
    if (playerAttack === computerAttack) {
        return null;
    } else {
        switch (playerAttack) {
            case SCISSORS: {
                return computerAttack === ROCK ? COMPUTER : PLAYER;
            }
            case ROCK: {
                return computerAttack === PAPER ? COMPUTER : PLAYER;
            }
            case PAPER: {
                return computerAttack === SCISSORS ? COMPUTER : PLAYER;
            }
        }
    }
}

function getComputerAttack() {
    switch (Math.floor(Math.random() * (3) + 1)) {
        case 1: {
            return PAPER;
        }
        case 2: {
            return SCISSORS;
        }
        case 3: {
            return ROCK;
        }
        default: return;
    }
}


export function getResult(playerAttack, points) {
    const computerAttack = getComputerAttack()
    const winner = getWinner(playerAttack, computerAttack);
    if (winner === PLAYER) {
        points++;
    } else if (winner === COMPUTER) {
        points--;
    }
    return {points: points, winner: winner, computerAttack: computerAttack};
}