import * as React from 'react';
import './UserCard.css'

const UserCard = ({user}) => {
  return (

    <figure className='UserCard'>
        <img className ='image' alt="user" src={user.picture.large} />
    
        <figcaption className='caption'>
            <p className='userName'>{user.name.first} {user.name.last}</p>
            <p className='userEmail'>
                <span className='span'>email:</span> {user.email}</p>
            <p className='userNumber'>
                <span className='span' >phone:</span> {user.cell}</p>
                <p className='userNumber'>
                <span className='span'>City:</span> {user.location.city}</p>
        </figcaption>
    </figure>    
    
  );
};

export default UserCard;
