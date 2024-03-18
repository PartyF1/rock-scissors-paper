import { useState } from "react"
import BattleScreen from "./Screens/BattleScreen";
import ChoiseScreen from "./Screens/ChoiseScreen";
import { useRef } from "react";
import { result } from "./utils";
import styles from "./game.module.css"




export default function Game() {
    const points = useRef(0);
    const [playerAttack, setPlayerAttack] = useState('');
    const computerAttack = useRef("rock");
    let winner = "";

    if (playerAttack !== '') {
        winner = result(playerAttack, computerAttack, points)
    }

    function setScreen() {
        return (
            <div>
                {playerAttack !== "" ?
                    <BattleScreen playerAttack={playerAttack} computerAttack={computerAttack.current} winner={winner} setPlayerAttack={setPlayerAttack} /> :
                    <ChoiseScreen setPlayerAttack={setPlayerAttack} />
                }
            </div>
        )
    }

    return (
        <>
            <div className={styles.title}>
                <span className={styles.content}>КАМЕНЬ <br/> НОЖНИЦЫ <br/> БУМАГА</span>
                <span className={styles.counter}>CЧЁТ <br/> {points.current}</span>
            </div>
            {setScreen()}
        </>
    )
}