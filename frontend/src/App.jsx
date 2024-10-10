import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import Navbar from './components/Navbar'

function App() {
  return (
    <Box minH={"100vh"} minW={"100vw"} bg={useColorModeValue("gray.100", "gray.900")} >
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
