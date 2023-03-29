import React from 'react';

type PostProps = {
  title: string;
  body: string;
  author: string;
  date: string;
};

const Post: React.FC<PostProps> = ({ title, body, author, date }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold mb-4 sm:mt-10">{title}</h2>
      <p className="text-gray-700 text-2xl mb-4 mx-40">{body}</p>
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-lg">{author}</p>
        <p className="text-gray-600 text-lg">{date}</p>
      </div>
    </div>
  );
};

export default Post;
