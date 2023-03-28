import React from 'react';

interface ChildrenHeaderProps {
  title: string;
  subtitle: string;
}

const ChildrenHeader: React.FC<ChildrenHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default ChildrenHeader;
