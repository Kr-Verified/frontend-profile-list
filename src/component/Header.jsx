import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header">
      <header>
          <h1>Profile Card List</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Profile/ProfileList">Card List</Link>
        <Link to="/Profile/ProfileForm">Make Card</Link>
      </nav>
    </div>
  )
}