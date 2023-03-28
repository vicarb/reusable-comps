import Children from "../Children/Children";
import React, { ReactNode } from 'react';

interface ContentProps {
    children: ReactNode;
  }

const Content = ({ children }: ContentProps) => {
    return (
      <div className="w-full h-full flex-grow flex-shrink-0 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Title of the Page
                </h2>
              </div>
              <div className="mt-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Content;
