import styles from "./screens.module.css"
import Attack from "../Attacks/Attack";


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
                    {winner === "player" ?
                        <h1>Вы победили!</h1> :
                        winner === "computer" ?
                            <h1>Вы проиграли!</h1> :
                            <h1>Ничья!</h1>}
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