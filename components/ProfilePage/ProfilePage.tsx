import React from 'react';
import Profile from '../Profile/Profile';

const ProfilePage = () => {
  const userData = {
    username: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown USA',
    phone: '(555) 555-1234',
    image: 'https://picsum.photos/id/1005/200/200'
  };

  return (
    <div>
      <Profile {...userData} />
    </div>
  );
};

export default ProfilePage;
