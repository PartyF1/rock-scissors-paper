import styles from "./button.module.css"

export default function Scissors() {
    return (
        <div className={styles.button} style={{ border: "1vw red solid" }}>
            <img className={styles.picture} src="icon-rock.svg"></img>
        </div>
    )
}