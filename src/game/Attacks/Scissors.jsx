import styles from "./button.module.css"

export default function Scissors() {
    return (
        <div className={styles.button} style={{ border: "1vw blue solid" }}>
            <img className={styles.picture} src="icon-scissors.svg"></img>
        </div>
    )
}