import { ROCK, SCISSORS, PAPER } from "../constants";
import styles from "./button.module.css"


export default function Attack({attack}) {
    switch (attack) {
        case SCISSORS: {
            return (
                <div className={styles.scissors}>
                    <img className={styles.picture} src="icon-scissors.svg"></img>
                </div>
            )
        }
        case ROCK: {
            return (
                <div className={styles.rock}>
                    <img className={styles.picture} src="icon-rock.svg"></img>
                </div>
            )
        }
        case PAPER: {
            return (
                <div className={styles.paper}>
                    <img className={styles.picture} src="icon-paper.svg"></img>
                </div>
            )
        }
    }
}