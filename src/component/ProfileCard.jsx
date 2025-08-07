import Reverse from '../assets/PARADOX_reverse.png';
import Default from '../assets/PARADOX_default.png';
import { useNavigate } from 'react-router-dom';

export default function ProfileCard({ profileList, setProfileList, profile, index }) {

  const navigator = useNavigate();

  const getProfileImg = (imgUrl) => {
    if (imgUrl === '/assets/PARADOX_reverse.png') return Reverse;
    return Default;
  };

  const delProfile = (index) => {
    const temp = [...profileList].filter((_, i) => i !== index);
    setProfileList(temp);
  }

  const editProfile = (index) => {
    navigator(`/ProfileLayout/ProfileModify/${index}`);
  }

  return (
    <div style={{ border: '3px solid black', borderRadius: '30px', padding: '25px', margin: '50px', backgroundColor: '#fffbde', fontSize: '35px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{marginRight: '20px'}}><img src={getProfileImg(profile.imgUrl)} alt={profile.name} /></div>
        <div>
          <p><b>Team. {profile.team}</b></p>
          <p><b>{profile.job}</b></p>
          <p><b>tel.</b> {profile.tel}</p>
          <p><b>email.</b> {profile.email}</p>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <h2 style={{marginTop: 0}}>{profile.name}</h2>
        <div style={{marginRight: '75px'}}>
          <button style={{marginRight: '100px', scale: 2.5, backgroundColor: 'blue', borderRadius: '7px', border: '1px solid black'}} onClick={() => editProfile(index)}>수정</button>
          <button style={{marginRight: '50px', scale: 2.5, backgroundColor: 'red', borderRadius: '7px', border: '1px solid black'}} onClick={() => delProfile(index)}>삭제</button>
        </div>
      </div>
    </div>
  );
}