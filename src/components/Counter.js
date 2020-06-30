import { useState } from 'react'

const Counter = () => {
    const [ count, setCount ] = useState(0)

    return (
        <>
            <div>{ count }</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default Counter

// Class component example here

// import React from 'react'

// export default class Counter extends React.Component {
//     state = {
//         count: 0
//     }

//     setCount = (val) => {
//         this.setState({count: val})
//     }

//     render() {
//         const { count } = this.state

//         return (
//             <>
//                 <div>{ this.state.count }</div>
//                 <button onClick={() => this.setCount(count + 1)}>Increment</button>
//                 <button onClick={() => this.setCount(count - 1)}>Decrement</button>
//             </>
//         )
//     }
// }