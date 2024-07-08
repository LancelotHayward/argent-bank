import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { profileThunk } from "../../store/profileSlice"
import "./ProfileHeader.scss"

function ProfileHeader() {
    const profile = useSelector((state) => state.dashboard)
    const token = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const [username, setUsername] = useState([profile.firstName, profile.lastName])
    const [isEditingName, setEditingName] = useState(false)
    function toggleNameEditing() {
        setEditingName(!isEditingName)
    }
    async function saveName() {
        console.log(profile)
        const names = Array.from(document.getElementsByClassName("nameInput")).map(name => name.value)
        if (names.every(name => name.length > 0)) {
            toggleNameEditing()
            const firstName = names[0]
            const lastName = names[1]
            // setUsername([names[0], names[1]])
            const response = await dispatch(profileThunk({token, firstName, lastName}))
            console.log(response)
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