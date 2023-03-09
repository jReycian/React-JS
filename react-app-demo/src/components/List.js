import ListItem from "./ListItem";

const List = ({ addToList, setAddToList }) => {
    return (
        <div>{addToList.map((tolist) => (
            <ListItem
                setAddToList={setAddToList}
                key={tolist.id}
                item={tolist}
                addToList={addToList}
            ></ListItem>
        ))}</div>
    )
}

export default List;