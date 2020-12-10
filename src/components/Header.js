import { useState } from "react"

const Header = ({ addButtonClickedCallback, editButtonClickedCallback, removeButtonClickedCallback }) => {
    const [editButtonEnabled, setEditButtonEnabled] = useState(false)
    const [removeButtonEnabled, setRemoveButtonEnabled] = useState(false)

    const editButtonClicked = () => {
        editButtonClickedCallback()
        setEditButtonEnabled(!editButtonEnabled)
    }

    const removeButtonClicked = () => {
        removeButtonClickedCallback()
        setRemoveButtonEnabled(!removeButtonEnabled)
    }

    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <div className="header__title">
                        <h1>myLocations</h1>
                    </div>
                    <div className="header__links">
                        <button className="button button--link" onClick={addButtonClickedCallback} disabled={editButtonEnabled || removeButtonEnabled}>Add</button>
                        <button className="button button--link" onClick={editButtonClicked} disabled={removeButtonEnabled}>Edit</button>
                        <button className="button button--link" onClick={removeButtonClicked} disabled={editButtonEnabled}>Remove</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header