import { useParams, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function ProfileModify({ profileList, setProfileList }) {

  const { id } = useParams();
  const targetProfile = profileList[id];

  const formRef = useRef(null);
  const name = useRef(null);
  const team = useRef(null);
  const job = useRef(null);
  const tel = useRef(null);
  const email = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name.current.value) {
      alert("이름을 입력해주세요.");
      name.current.focus();
    }else if (!team.current.value) {
      alert("팀을 입력해주세요.");
      team.current.focus();
    }else if (!job.current.value) {
      alert("직책을 입력해주세요.");
      job.current.focus();
    }else if (!tel.current.value) {
      alert("전화번호를 입력해주세요.");
      tel.current.focus();
    }else if (!email.current.value) {
      alert("이메일을 입력해주세요.");
      email.current.focus();
    }else if (!image1.current.checked && !image2.current.checked) {
      alert("이미지를 선택해주세요.");
    }else {
      const formDataObject = {
        name: name.current.value,
        team: team.current.value,
        job: job.current.value,
        tel: tel.current.value,
        email: email.current.value,
        imgUrl: image1.current.checked ? "/assets/PARADOX_reverse.png" : "/assets/PARADOX_default.png"
      };
      const temp = [...profileList];
      temp[id] = formDataObject;
      setProfileList(temp);
      return navigate('/Profile/ProfileList');
    }
  };

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <div>
        <h1>프로필 카드 만들기</h1>
        <div>
          <h2>정보를 입력해주세요.</h2>
          <p>Name <input type="text" placeholder="ex) 신은총" name="name" ref={name} defaultValue={targetProfile.name}></input></p>
          <p>Team <input type="text" placeholder="ex) PARADOX" name="team" ref={team} defaultValue={targetProfile.team}></input></p>
          <p>Job <input type="text" placeholder="ex) Full Stack Developer" name="job" ref={job} defaultValue={targetProfile.job}></input></p>
          <p>Phone <input type="text" placeholder="ex) 010-1234-5678" name="tel" ref={tel} defaultValue={targetProfile.tel}></input></p>
          <p>Email <input type="text" placeholder="ex) example@example.com" name="email" ref={email} defaultValue={targetProfile.email}></input></p>
          {console.log(targetProfile.imgUrl)}
          <p>Image <input type="radio" name="imgUrl" value="/assets/PARADOX_default.png" id="Default" ref={image1} defaultChecked={targetProfile.imgUrl === "./assets/PARADOX_default.png"}></input><label htmlFor="Default">Default</label>
          <input type="radio" name="imgUrl" value="/assets/PARADOX_reverse.png" id="Reverse" ref={image2} defaultChecked={targetProfile.imgUrl === "./assets/PARADOX_reverse.png"}></input><label htmlFor="Reverse">Reverse</label></p>
          <button type="submit" onClick={submitHandler}>수정완료</button>
        </div>
      </div>
    </form>
  );
}