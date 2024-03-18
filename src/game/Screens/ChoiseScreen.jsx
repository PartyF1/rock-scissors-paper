import Scissors from "../Attacks/Scissors"
import Rock from "../Attacks/Rock"
import Paper from "../Attacks/Paper"

export default function ChoiseScreen(props) {
    const { setPlayerAttack } = props;
    return (
        <>
            <h1>Кликни на своего бойца, чтобы начать игру</h1>
            <button onClick={() => setPlayerAttack('scissors')}><Scissors /></button>
            <button onClick={() => setPlayerAttack('paper')}><Paper /></button>
            <button onClick={() => setPlayerAttack('rock')}><Rock /></button>
        </>
    )
}