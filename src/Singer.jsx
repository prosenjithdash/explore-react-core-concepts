// 38-8 (Advanced) Rendering Lists Of Users Using Map

export default function Singer({singer}) {
    console.log(singer)
    return (
        <div>
            <h2>Singer: {singer.name }</h2>
            <p>Age:{singer.age}</p>
        </div>
    )
}