import { useState } from "react"
import BattleScreen from "./Screens/BattleScreen";
import ChoiseScreen from "./Screens/ChoiseScreen";
import { useRef } from "react";
import { result } from "./utils";




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
            <div>
                <h1>Текущий счёт: {points.current}</h1>
            </div>
            {setScreen()};
        </>
    )
}