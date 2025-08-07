import Header from './component/Header.jsx'
import ProfileForm from './component/ProfileForm.jsx';
import ProfileList from './component/ProfileList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [profileList, setProfileList] = useState([{
    id: 1,
    name: "신은총",
    team: "PARADOX",
    imgUrl: "./assets/PARADOX_reverse.png",
    job: "Paradox-Intern",
    tel: "010-1234-5678",
    email: "paradox@gmail.com",
  }]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/ProfileForm" element={<ProfileForm profileList={profileList} setProfileList={setProfileList} />} />
        <Route path="/ProfileList" element={<ProfileList profileList={profileList} setProfileList={setProfileList} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
