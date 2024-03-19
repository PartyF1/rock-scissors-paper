import { PAPER, ROCK, SCISSORS } from "../constants";
import Attack from "../Attacks/Attack";

export default function ChoiseScreen(props) {
    const { setPlayerAttack } = props;

    return (
        <>
            <div onClick={() => setPlayerAttack(SCISSORS)}>
                <Attack attack={SCISSORS}/>
            </div>
            <div onClick={() => setPlayerAttack(PAPER)}>
                <Attack attack={PAPER}/>
            </div>
            <div onClick={() => setPlayerAttack(ROCK)}>
                <Attack attack={ROCK}/>
            </div>
        </>
    )
}