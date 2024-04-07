import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Team from './pages/Team.jsx';
import Contacts from './pages/Contacts.jsx';
import Invoices from './pages/Invoices.jsx';
import Form from './pages/Form.jsx';
import Calendar from './pages/Calendar.jsx';
import Faq from './pages/Faq.jsx';
import { BarChart } from './pages/BarChart.jsx';
import PieChart from './pages/PieChart.jsx';
import LineChart from './pages/LineChart.jsx';
import Geography from './pages/Geography.jsx';
import { Box } from '@mui/material';
import NotFound from './pages/dashPages/NotFound.jsx';

/*
<Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      */
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Dashboard />} />
    <Route path="team" element={<Team />} />
    <Route path="contacts" element={<Contacts />} />
    <Route path="invoices" element={<Invoices />} />
    <Route path="form" element={<Form />} />
    <Route path="calendar" element={<Calendar />} />
    <Route path="faq" element={<Faq />} />
    <Route path="bar" element={<Box sx={{height:"80vh" , width:"100%"}}><BarChart /></Box>} />
    <Route path="pie" element={<Box sx={{height:"80vh" , width:"100%"}}><PieChart /></Box> } />
    <Route path="line" element={ <Box sx={{height:"80vh" , width:"100%"}}><LineChart /></Box> } />
    <Route path="geograph" element={<Box sx={{height:"80vh" , width:"100%"}}><Geography /></Box>} />


    
    <Route path="*" element={<Box sx={{height:"80vh" , width:"100%"}}><NotFound /></Box>} />
  </Route>
  )
);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);