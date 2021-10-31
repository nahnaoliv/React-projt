
const Item = ({children}) => {
    return (
        <>
            <ul>
                <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{children}
                </a>
            </ul>
        </>
    )
}

export default Item;