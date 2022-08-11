import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from '../../component/dashboard/Container'
import MyEvent from './pages/MyEvent'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Container >
            <Routes>
                <Route path="/" element={<MyEvent />}/>
            </Routes>
        </Container>
    </div>
  )
}

export default Dashboard