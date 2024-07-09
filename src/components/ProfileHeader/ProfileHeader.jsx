import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { profileThunk } from "../../store/profileSlice"
import { dashboardThunk } from "../../store/dashboardSlice"
import "./ProfileHeader.scss"

function ProfileHeader() {
    const profile = useSelector((state) => state.dashboard)
    const token = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const [isEditingName, setEditingName] = useState(false)
    function toggleNameEditing() {
        setEditingName(!isEditingName)
    }
    async function saveName() {
        const names = Array.from(document.getElementsByClassName("nameInput")).map(name => name.value)
        if (names.every(name => {
            if (name.length <= 0) {
                return false
            }
            if (name === undefined) {
                return false
            }
            return true
        })) {
            toggleNameEditing()
            dispatch(profileThunk({token, firstName: names[0], lastName: names[1]}))
            dispatch(dashboardThunk({token}))
        }
    }
    if (isEditingName) {
        return (
            <div className="header">
                <h1>Welcome back</h1>
                <div className="edit">
                    <div id="leftEdit">
                        <input type="text" placeholder={profile.firstName} className="nameInput"/>
                        <button onClick={saveName}>Save</button>
                    </div>
                    <div>
                        <input type="text" placeholder={profile.lastName} className="nameInput"/>
                        <button onClick={toggleNameEditing}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="header">
            <h1>Welcome back<br />{profile.firstName + " " + profile.lastName} !</h1>
            <button className="edit-button" onClick={toggleNameEditing}>Edit Name</button>
        </div>
    )
}
export default ProfileHeader