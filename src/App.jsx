import Header from './component/Header.jsx'
import ProfileForm from './component/ProfileForm.jsx';
import ProfileList from './component/ProfileList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import textList from './pages/Home.jsx';
import ProfileLayout from './pages/ProfileLayout.jsx';
import ProfileModify from './component/ProfileModify.jsx';

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
        <Route path="/" element={<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
          <h1 >프로필 카드 리스트 만들기</h1>
          <ul style={{padding: '10px', width: '97%'}}>
          {textList.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul></div>} />
        <Route path="/Profile" element={<ProfileLayout/>}>
          <Route path="ProfileForm" element={<ProfileForm profileList={profileList} setProfileList={setProfileList} />} />
          <Route path="ProfileList" element={<ProfileList profileList={profileList} setProfileList={setProfileList} />} />
          <Route path="ProfileModify/:id" element={<ProfileModify profileList={profileList} setProfileList={setProfileList} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
