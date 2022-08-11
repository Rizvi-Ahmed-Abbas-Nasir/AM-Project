import './Userinfo.css'

function UserInfo({ user }) {
  return (
    <div className='UserName'>
      <p>{user.username}</p>
    </div>
  );
}

export default UserInfo;
