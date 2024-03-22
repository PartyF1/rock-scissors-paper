import { PAPER, ROCK, SCISSORS } from "../constants";
import Attack from "../Attacks/Attack";

export default function ChoiseScreen(props) {
    const { setPlayerAttack } = props;

    return (
        <>
            {[PAPER, ROCK, SCISSORS].map((elem => {
                return (
                    <div onClick={() => setPlayerAttack(elem)}>
                        <Attack attack={elem} />
                    </div>
                )
            }))}
        </>
    )
}