import UserCard from '../UserCard/UserCard';
import './styles.css';

export const UserCardGrid = ({ users }) => {
  return ( 
  <div className="grid">
    {users?.map((user,index) => (
      <UserCard user={user} key={index}/>
    ))}
  </div>
  )
};

export default UserCardGrid;
