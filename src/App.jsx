import Header from './component/Header.jsx'
import ProfileForm from './component/ProfileForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ProfileForm />
    </BrowserRouter>
  )
}

export default App
