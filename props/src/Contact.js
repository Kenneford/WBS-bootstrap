import React from 'react';

export default function Contact(props) {
  return (
    <div>
      <p>Address: {props.address}</p>
      <p>Email: {props.email}</p>
      <p>Phone number: {props.phone}</p>
    </div>
    
  )
}
