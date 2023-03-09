import styles from "../style.module.css"
import Input from "./Input";

const Form = ({addFName, setAddFName, addLName, setAddLName, addToList, setAddToList}) => {
    return (
        <div className={styles.form}>
            <Input 
                addFName={addFName}
                setAddFName={setAddFName}
                addLName={addLName}
                setAddLName={setAddLName}
                addToList={addToList}
                setAddToList={setAddToList}
            ></Input>
        </div>
    )
}
export default Form;