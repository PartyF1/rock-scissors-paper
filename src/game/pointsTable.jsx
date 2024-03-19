import styles from "./game.module.scss"

export function PointsTable({points}) {
    return (
        <div className={styles.pointsTable}>
                <div className={styles.content}>КАМЕНЬ НОЖНИЦЫ БУМАГА</div>
                <div className={styles.counter}>CЧЁТ <br/> {points}</div>
        </div>
    )
}