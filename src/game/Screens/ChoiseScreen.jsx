import Scissors from "../Attacks/Scissors"
import Rock from "../Attacks/Rock"
import Paper from "../Attacks/Paper"
import styles from "../Attacks/button.module.css"

export default function ChoiseScreen(props) {
    const { setPlayerAttack } = props;

    return (
        <>
            <h1>Кликни на своего бойца, чтобы начать игру</h1>
            <span onClick={() => setPlayerAttack("scissors")}>
                <Scissors />
            </span>
            <span onClick={() => setPlayerAttack('paper')}>
                <Paper />
            </span>
            <span onClick={() => setPlayerAttack('rock')}>
                <Rock />
            </span>
        </>
    )
}