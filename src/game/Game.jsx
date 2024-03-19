import { useState } from "react"
import BattleScreen from "./Screens/BattleScreen";
import ChoiseScreen from "./Screens/ChoiseScreen";
import { useRef } from "react";
import { getResult } from "./utils";
import { PointsTable } from "./pointsTable";




export default function Game() {
    const points = useRef(0);
    const [playerAttack, setPlayerAttack] = useState('');
    let result;

    if (playerAttack !== '') {
        result = getResult(playerAttack, points.current);
        points.current = result.points;
    }

    return (
        <>
            <PointsTable points={points.current}/>
            {playerAttack !== "" ?
                <BattleScreen playerAttack={playerAttack} computerAttack={result.computerAttack} winner={result.winner} setPlayerAttack={setPlayerAttack} /> :
                <ChoiseScreen setPlayerAttack={setPlayerAttack} />
            }
        </>
    )
}