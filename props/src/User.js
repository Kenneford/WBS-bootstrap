import React from 'react';
import Contact from './Contact';

export default function User({user}) {
  return (
    <div>
      <img src={user.picture} alt="name" />
      <p>Name : {user.name}</p>
      <p>ID : {user.id}</p>
      <p>Age : {user.age}</p>
      <Contact address={user.address} email={user.email} phone={user.phone} />
      <p>About: {user.about}</p>
    </div>
  )
}
