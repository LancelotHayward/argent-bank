import { useState } from 'react';
import "./ProfileHeader.scss"

function ProfileHeader() {
    const [username, setUsername] = useState(["Tony", "Jarvis"])
    const [isEditingName, setEditingName] = useState(false)
    function toggleNameEditing() {
        setEditingName(!isEditingName)
    }
    function saveName() {
        const names = Array.from(document.getElementsByClassName("nameInput")).map(name => name.value)
        if (names.every(name => name.length > 0)) {
            toggleNameEditing()
            setUsername([names[0], names[1]])
        }
    }
    if (isEditingName) {
        return (
            <div className="header">
                <h1>Welcome back</h1>
                <div className="edit">
                    <div id="leftEdit">
                        <input type="text" placeholder={username[0]} className="nameInput"/>
                        <button onClick={saveName}>Save</button>
                    </div>
                    <div>
                        <input type="text" placeholder={username[1]} className="nameInput"/>
                        <button onClick={toggleNameEditing}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="header">
            <h1>Welcome back<br />{username[0] + " " + username[1]} !</h1>
            <button className="edit-button" onClick={toggleNameEditing}>Edit Name</button>
        </div>
    )
}
export default ProfileHeader