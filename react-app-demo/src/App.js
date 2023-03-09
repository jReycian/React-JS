import Header from "./components/Header";
import Form from "./components/Form";
import {useState} from "react"
import List from "./components/List";

function App() {
  const [addFName, setAddFName] = useState("");
  const [addLName, setAddLName] = useState("")
  const [addToList, setAddToList] = useState([]);
  return (
    <div className="App">
      <Header/>
      <Form
       addFName={addFName}
        setAddFName ={setAddFName}
        addLName={addLName}
        setAddLName={setAddLName}
        addToList={addToList}
        setAddToList={setAddToList}
      />
      <List addToList={addToList} setAddToList={setAddToList}/>
    </div>
  );
}

export default App;
