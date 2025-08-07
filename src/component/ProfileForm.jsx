import { use, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProfileForm({ profileList, setProfileList }) {
  const formRef = useRef(null);
  const name = useRef(null);
  const team = useRef(null);
  const job = useRef(null);
  const phone = useRef(null);
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
    }else if (!phone.current.value) {
      alert("전화번호를 입력해주세요.");
      phone.current.focus();
    }else if (!email.current.value) {
      alert("이메일을 입력해주세요.");
      email.current.focus();
    }else if (!image1.current.checked && !image2.current.checked) {
      alert("이미지를 선택해주세요.");
    }else {
      const formData = new FormData(formRef.current);
      setProfileList([
        ...profileList,
        formData,
      ]);
      return navigate('/ProfileList');
    }
  };

  return (
    <form ref={formRef} onSubmit={submitHandler} actions="./profileLayout">
      <div>
        <h1>프로필 카드 만들기</h1>
        <div>
          <h2>정보를 입력해주세요.</h2>
          <p>Name <input type="text" placeholder="ex) 신은총" name="name" ref={name}></input></p>
          <p>Team <input type="text" placeholder="ex) PARADOX" name="team" ref={team}></input></p>
          <p>Job <input type="text" placeholder="ex) Full Stack Developer" name="job" ref={job}></input></p>
          <p>Phone <input type="text" placeholder="ex) 010-1234-5678" name="phone" ref={phone}></input></p>
          <p>Email <input type="text" placeholder="ex) example@example.com" name="email" ref={email}></input></p>
          <p>Image <input type="radio" name="imgUrl" value="/assets/PARADOX_default.png" id="Default" ref={image1}></input><label htmlFor="Default">Default</label>
          <input type="radio" name="imgUrl" value="/assets/PARADOX_reverse.png" id="Reverse" ref={image2}></input><label htmlFor="Reverse">Reverse</label></p>
          <button type="submit" onClick={submitHandler}>등록하기</button>
        </div>
      </div>
    </form>
  );
}