import { useState } from "react"
import { connect } from "react-redux"

const LocationForm = ({ location, categories, onSubmitCallback }) => {
    const [name, setName] = useState(location ? location.name : '')
    const [address, setAddress] = useState(location ? location.address : '')
    const [x_coordinates, setXcoordinates] = useState(location ? location.x_coordinates : '')
    const [y_coordinates, setYcoordinates] = useState(location ? location.y_coordinates : '')
    const [category, setCategory] = useState(location ? location.category : '')
    const [error, setError] = useState('')

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const onXcoordinatesChange = (e) => {
        setXcoordinates(e.target.value)
    }

    const onYcoordinatesChange = (e) => {
        setYcoordinates(e.target.value)
    }

    const onCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name)
            setError('Please provide a location name.')
        else if (!address)
            setError('Please provide a location address.')
        else if (!x_coordinates)
            setError('Please provide a location x_coordinates.')
        else if (!y_coordinates)
            setError('Please provide a location y_coordinates.')
        else if (!category)
            setError('Please provide a location category.')
        else {
            setError('')
            onSubmitCallback({ name, address, x_coordinates, y_coordinates, category })
        }
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <input
                placeholder="name"
                className="text-input"
                value={name}
                onChange={onNameChange}
                required
            />
            <input
                placeholder="address"
                className="textarea"
                value={address}
                onChange={onAddressChange}
                required
            />
            <input
                placeholder="x coordinates"
                className="text-input"
                value={x_coordinates}
                onChange={onXcoordinatesChange}
                required
            />
            <input
                placeholder="y coordinates"
                className="text-input"
                value={y_coordinates}
                onChange={onYcoordinatesChange}
                required
            />
            <select 
                className="select"
                value={category} 
                onChange={onCategoryChange} 
                required
            >
                <option value='' disabled>category</option>
                {
                    categories.map(categoryItem =>
                        <option key={categoryItem.id} value={categoryItem.id}>{categoryItem.name}</option>
                    )
                }
            </select>
            <button className="button">Submit</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    categories: Object.values(state.categories || {})
})

export default connect(mapStateToProps)(LocationForm)