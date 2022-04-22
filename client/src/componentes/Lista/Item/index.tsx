export default function Item({título, texto}: {título: string, texto: string}) {
    return (
        <li>
            <h1> {título} </h1>
            <h3> {texto} </h3>
        </li>
    )
}