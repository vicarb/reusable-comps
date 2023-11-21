import React from 'react';

interface ChildrenLayoutProps {
  header: string;
  subheader: string;
}

const ChildrenLayout: React.FC<ChildrenLayoutProps> = ({
  header,
  subheader,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-gray-800 text-center py-4">{header}</h2>
      <p className="text-xl text-gray-500 text-center mt-2 px-6">{subheader}</p>
    </div>
  );
};

export default ChildrenLayout;
