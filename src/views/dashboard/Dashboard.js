import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from '../../component/dashboard/Container'
import MyEvent from './pages/events/MyEvent'
import CreateEvent from './pages/events/CreateEvent'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Container >
            <Routes>
                <Route path="/" element={<MyEvent />}/>
                <Route path="/create-event" element={<CreateEvent />}/>
            </Routes>
        </Container>
    </div>
  )
}

export default Dashboard