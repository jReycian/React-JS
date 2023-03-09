import styles from "../style.module.css"
import shortid from "shortid"

const Input = ({ addFName, setAddFName,  addLName, setAddLName, addToList, setAddToList }) => {
    const handle_FName = (event) => {
        setAddFName(event.target.value)
    }
    const handle_LName = (event) => {
        setAddLName(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setAddToList([...addToList, {fname: addFName, lname: addLName, id: shortid.generate()}])
    }
    return (
        <div>
            <form  onSubmit={handleSubmit} >
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                        </tr>
                        <tr>
                            <td>
                                <input value={addFName} onChange={handle_FName} className={styles.inputText} type="text" placeholder="First Name"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                        </tr>
                        <tr>
                            <td>
                                <input value={addLName} onChange={handle_LName} className={styles.inputText} type="text" placeholder="Last Name"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className={styles.buttonAdd}>Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Input;