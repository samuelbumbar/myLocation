const LocationsListItem = ({ id, name, address, x_coordinates, y_coordinates, category, elementSelectedCallback }) => {
    const elementSelected = () => {
        elementSelectedCallback(id)
    }

    return (
        <div className="list-item" onClick={elementSelected}>
            <div>
                <h3 className="list-item__title">{name}</h3>
                <span className="list-item__sub-title">{address}</span>
            </div>
            <h3 className="list-item__data">{category.name}</h3>
        </div>
    )
}

export default LocationsListItem
