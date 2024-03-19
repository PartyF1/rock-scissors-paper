import styles from "./screens.module.scss"
import Attack from "../Attacks/Attack";
import { WinnerWindow } from "./WinnerWindow";


export default function BattleScreen(props) {
    const { playerAttack, computerAttack, winner, setPlayerAttack } = props;
    return (
        <>
            <div className={styles.battle}>
                <div>
                    <h1>Таки игрок!</h1>
                    <Attack attack={playerAttack}/>
                </div>
                <div>
                    <WinnerWindow winner={winner}></WinnerWindow>
                    <button onClick={() => setPlayerAttack('')}>Ишче раз?</button>
                </div>
                <div>
                    <h1>Таки компуктер!</h1>
                    <Attack attack={computerAttack}/>
                </div>
            </div>   
        </>
    )
}