// 38-6 Read Only Props Two Way Of Conditional Rendering

// Conditional Rendering 01 :

// export default function ConditionalRendering({work,isDone}) {
//     if (isDone === true) {
//         return (
//             <p>Go to learn {work} .</p>
//         )
//     }
//     else {
//         return (
//             <p>At first go to finish previous work then start to learn {work} .</p>
//         )
//     }
// }


//-------------------------------------------------------------------------


// Conditional Rendering 02 :

// export default function ConditionalRendering({ work, isDone }) {
//     if (isDone) {
//         return (
//             <p>Go to learn {work} .</p>
//         )
//     }
//     return (<p>At first go to finish previous work then start to learn {work} .</p>)

// }


//-------------------------------------------------------------------------

//38-7 Six Ways To Do Conditional Rendering: If, Ternary And AND OR

// Conditional Rendering 03 : with Ternary oparetor

// export default function ConditionalRendering({ work, isDone }) {

//         return (
//             <p>{isDone ? 'finished' : 'Work On'}:{work}</p>
//         )
// }



//-------------------------------------------------------------------------


// Conditional Rendering 04 : &&

// export default function ConditionalRendering({ work, isDone }) {

//     return (
//         <p>{work} { isDone && 'Done'}</p>
//     )
// }



//-------------------------------------------------------------------------


// Conditional Rendering 05 : ||

// export default function ConditionalRendering({ work, isDone }) {

//     return (
//         <p>{work} {isDone || ':Do it'}</p>
//     )
// }




//-------------------------------------------------------------------------


// Conditional Rendering 06 :

export default function ConditionalRendering({ work, isDone }) {
    let res;
    if (isDone) {
       
        res= <p>Go to learn {work} .</p>
   
    }
    else {
        
        res = (<p>At first go to finish previous work then start to learn {work} .</p>)
    }

    return res;

}