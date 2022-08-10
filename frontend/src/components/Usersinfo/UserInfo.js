import './Userinfo.css'

function UserInfo({ user }) {
  return (
    <div className='UserName'>
      <h1>{user.username}</h1>
    </div>
  );
}

export default UserInfo;
