const header = {
    color: "blue",
    fontSize: "40px",
    textAlign: "left",
}
export default function InlineComponent() {
    return (
        <div>
            <h1 style={header}>This is an inline component</h1>
        </div>
    )
}