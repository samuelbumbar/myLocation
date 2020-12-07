import { useState } from "react"

const CategoryForm = ({ category, onSubmitCallback }) => {
    const [name, setName] = useState(category ? category.name : '')
    const [error, setError] = useState('')

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            setError('Please provide a category name.')
        } else {
            setError('')
            onSubmitCallback({ name })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <input
                placeholder="name"
                className="text-input"
                value={name}
                onChange={onNameChange}
                required
            />
            <button className="button">Submit</button>
        </form>
    )
}

export default CategoryForm