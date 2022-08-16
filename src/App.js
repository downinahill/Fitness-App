/* eslint-disable no-unreachable */
import React from 'react';
import { Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'
import SearchExercises from './components/SearchExercises'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton';
import User from './components/User';



function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID
  console.log(clientId);
  const { isAuthenticated } = useAuth0();
  console.log({isAuthenticated})

  return (


    <Box width='400px' sx={{width: {xl: '1488px' }}} m='auto'>

      <Navbar />
      <Routes>
          <Route exact path ='/' element={<LoginButton />} />
          
          <Route path = '/home' element={<Home />} />
          <Route path = '/exercise/:id' element={<ExerciseDetail />} />
          <Route path = '/search' element={<SearchExercises />} />
          <Route path = 'logout' element={<LogoutButton />} />
      </Routes>
        {/* <Footer /> */}
    </Box>
  );
    }

export default App;
