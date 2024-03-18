import Scissors from "../Attacks/Scissors"
import Rock from "../Attacks/Rock"
import Paper from "../Attacks/Paper"
import styles from "../Attacks/button.module.css"

export default function ChoiseScreen(props) {
    const { setPlayerAttack } = props;

    return (
        <>
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