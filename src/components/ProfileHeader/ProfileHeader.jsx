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
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    async function saveName() {
        if (firstName?.length > 0 && lastName?.length > 0) {
            setEditingName(!isEditingName)
            dispatch(profileThunk({token, firstName, lastName}))
            dispatch(dashboardThunk({token}))
        }
    }
    if (isEditingName) {
        return (
            <div className="header">
                <h1>Welcome back</h1>
                <div className="edit">
                    <div id="inputs">
                        <input type="text" placeholder={profile.firstName} onChange={e => setFirstName(e.target.value)}/>
                        <input type="text" placeholder={profile.lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div id="buttons">
                        <button onClick={saveName}>Save</button>
                        <button onClick={e => setEditingName(!isEditingName)}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="header">
            <h1>Welcome back<br />{profile.firstName + " " + profile.lastName} !</h1>
            <button className="edit-button" onClick={e => setEditingName(!isEditingName)}>Edit Name</button>
        </div>
    )
}
export default ProfileHeader