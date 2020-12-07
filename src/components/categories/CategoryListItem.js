const CategoriesListItem = ({ id, name, elementSelectedCallback }) => {
    const elementSelected = () => {
        elementSelectedCallback(id)
    }

    return (
        <div className="list-item" onClick={elementSelected}>
            <h3 className="list-item__title">{name}</h3>
        </div>
    )
}

export default CategoriesListItem