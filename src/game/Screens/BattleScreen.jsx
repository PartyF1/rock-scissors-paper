import styles from "./screens.module.scss"
import Attack from "../Attacks/Attack";
import { WinnerWindow } from "./WinnerWindow";


export default function BattleScreen(props) {
    const { playerAttack, computerAttack, winner, setPlayerAttack } = props;
    return (
        <>
            <div className={styles.battle}>
                <div>
                    <h2>Таки игрок!</h2>
                    <Attack attack={playerAttack}/>
                </div>
                <div>
                    <WinnerWindow winner={winner}/>
                    <button onClick={() => setPlayerAttack('')}>Ишче раз?</button>
                </div>
                <div>
                    <h2>Таки компуктер!</h2>
                    <Attack attack={computerAttack}/>
                </div>
            </div>   
        </>
    )
}