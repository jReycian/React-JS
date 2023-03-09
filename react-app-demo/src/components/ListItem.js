import styles from "../style.module.css"

const ListItem = (item, setAddToList, addToList) => {
    console.log("ListItem")
    console.log(item)
    return (
        <div className={styles.tolistitem}>
            <h3 className={styles.listnames}>{item.fname}</h3>
            <button className={styles.deletebutton}>Done</button>
        </div>
    )
}
export default ListItem;