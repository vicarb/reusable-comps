import React from 'react';

const Children = () => {
  const mockData = [
    {
      id: 1,
      name: 'Child 1',
      age: 5,
      gender: 'Male',
      interests: ['Reading', 'Drawing'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Child 2',
      age: 8,
      gender: 'Female',
      interests: ['Dancing', 'Singing'],
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      name: 'Child 3',
      age: 6,
      gender: 'Male',
      interests: ['Swimming', 'Playing soccer'],
      description: 'Nulla facilisi. Sed efficitur nulla sit amet augue porttitor, non interdum nibh dapibus.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {mockData.map((child) => (
        <div
          key={child.id}
          className="p-4 border-2 border-gray-200 rounded-lg shadow-md"
        >
          <h2 className="text-lg font-medium">{child.name}</h2>
          <p className="text-gray-500 mt-1">
            Age: {child.age} | Gender: {child.gender}
          </p>
          <div className="flex items-center mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p className="text-gray-500">{child.interests.join(', ')}</p>
          </div>
          <p className="mt-3">{child.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Children;
