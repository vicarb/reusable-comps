import React from 'react';

interface ProfileProps {
  username: string;
  email: string;
  address: string;
  phone: string;
  image: string;
}

const Profile: React.FC<ProfileProps> = ({ username, email, address, phone, image }) => {
  return (
    <div className="bg-emerald-100 py-10">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-10 py-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
                <img className="object-cover w-full h-full" src={image} alt="Profile" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Hello, {username}</h1>
            </div>
            <p className="text-gray-700 mb-4"><span className="font-bold">Email:</span> {email}</p>
            <p className="text-gray-700 mb-4"><span className="font-bold">Address:</span> {address}</p>
            <p className="text-gray-700 mb-4"><span className="font-bold">Phone:</span> {phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
