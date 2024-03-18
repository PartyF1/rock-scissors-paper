import Scissors from "../Attacks/Scissors";
import Rock from "../Attacks/Rock"
import Paper from "../Attacks/Paper"


export default function BattleScreen(props) {
    const { playerAttack, computerAttack, winner, setPlayerAttack } = props;
    return (
        <>
            <span>
                <div>
                    <h1>Таки игрок!</h1>
                    {playerAttack === "rock" ? <Rock /> :
                        playerAttack === "paper" ? <Paper /> :
                            <Scissors />}
                </div>
                <div>
                    <h1>Таки компуктер!</h1>
                    {computerAttack === "rock" ? <Rock /> :
                        computerAttack === "paper" ? <Paper /> :
                            <Scissors />}
                </div>
            </span>
            <div>
                {winner === "player" ?
                    <h1>Вы победили!</h1> :
                    winner === "computer" ?
                        <h1>Вы проиграли!</h1> :
                        <h1>Ничья!</h1>}
            </div>
            <button onClick={() => setPlayerAttack('')}>Ишче раз?</button>
        </>
    )
}