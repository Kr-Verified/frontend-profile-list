export default function ProfileList({ profileList, setProfileList }) {


  return (
    <div>
      <h1>프로필 카드 목록</h1>
      {profileList.map((profile, index) => (
          <div key={index}>
            <h2>{profile.name}</h2>
            <p>Team. {profile.team}</p>
            <p>{profile.job}</p>
            <p>tel. {profile.tel}</p>
            <p>email. {profile.email}</p>
            <img src={profile.imgUrl} alt={profile.name} />
            {console.log(profile.imgUrl)}
          </div>
        ))}
    </div>
  );
}