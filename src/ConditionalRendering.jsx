// 38-6 Read Only Props Two Way Of Conditional Rendering

// Conditional Rendering one

export default function ConditionalRendering({work,isDone}) {
    if (isDone === true) {
        return (
            <p>Go to learn {work} .</p>
        )
    }
    else {
        return (
            <p>At first go to finish previous work then start to learn {work} .</p>
        )
    }
}

// Conditional Rendering Two

// export default function ConditionalRendering({ work, isDone }) {
//     if (isDone) {
//         return (
//             <p>Go to learn {work} .</p>
//         )
//     }
//     return (<p>At first go to finish previous work then start to learn {work} .</p>)
    
// }