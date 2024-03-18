import styles from "./button.module.css"

export default function Paper() {
    return (
        <div className={styles.button} style={{ border: "1vw yellow solid"}}>
            <img className={styles.picture} src="icon-paper.svg"></img>
        </div>
    )
}