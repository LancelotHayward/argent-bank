import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import ProfileHeader from "../../components/ProfileHeader/ProfileHeader.jsx"
import { dashboardThunk } from "../../store/dashboardSlice"


import "./Dashboard.scss"

function Dashboard() {
    useEffect(() => {
        document.title = 'Argent Bank - Dashboard';
    }, []);
    const dispatch = useDispatch()
    const token = useSelector((state) => state.login)
    async function getProfileData() {
        const reponse = await dispatch(dashboardThunk({token}))
    }
    getProfileData()
    return (
        <main className="main bg-dark">
          <ProfileHeader/>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
    )
}

export default Dashboard