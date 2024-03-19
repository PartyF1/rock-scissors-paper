import { COMPUTER, PLAYER } from "../constants";

export function WinnerWindow({winner}) {
    switch(winner) {
        case PLAYER: {
            return (<h1>Вы победили!</h1>);
        }
        case COMPUTER: {
            return (<h1>Компьютер победил</h1>);
        }
        default: {
            return (<h1>Ничья</h1>)
        }
    }
}