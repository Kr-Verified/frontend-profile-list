import ProfileCard from "./ProfileCard";

export default function ProfileList({ profileList, setProfileList }) {

  return (
    <div>
      <h1>프로필 카드 목록</h1>
      {profileList.map((profile, index) => (
          <ProfileCard key={index} profileList={profileList} setProfileList={setProfileList} profile={profile} index={index} />
        ))}
    </div>
  );
}