import { useState } from 'react'
import './App.css'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'

function App() {

  return (
    <>
    <h1>Github Inspector</h1>
    <h2>Search Anyone by Github ID.</h2>
    <hr/>    
    <ProfileViewerWithSearch/>
    </>
  )
}

export default App
