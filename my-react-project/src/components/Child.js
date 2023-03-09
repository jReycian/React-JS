import React from "react"
function Child({ count }) {
    console.log("Child component is being rerendered")
    return (
        <div>
            <h1> Child count is: {count}</h1>
        </div>
    )
}
export default React.memo(Child)