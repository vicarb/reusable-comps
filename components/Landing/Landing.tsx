import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Image
            src="/your-logo.png"
            alt="Digital Issue Solvers Logo"
            width={200}
            height={50}
          />
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="hero flex flex-col md:flex-row w-full items-center">
          <div className="hero-content md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Issue Solvers</h1>
            <p className="text-2xl text-gray-600 mb-8">Simplify your digital journey with our expert solutions.</p>
            <a href="#" className="bg-blue-500 text-white rounded-lg py-2 px-6 inline-block text-lg font-semibold hover:bg-blue-600 transition duration-300">Get Started</a>
          </div>

          <div className="md:w-1/2 mb-4">
            <Image
              src="/hero-image.jpg"
              alt="Hero Image"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-md"
            />
          </div>
        </section>

        <section className="problem-solution flex flex-col md:flex-row w-full mt-12">
          <div className="w-full md:w-1/2 bg-gray-200 p-4 rounded-md mb-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Problem</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today's digital world, businesses face a myriad of challenges, from maintaining website security and managing social media presence to optimizing search engine rankings.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-blue-200 p-4 rounded-md mb-4">
            <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-lg text-white leading-relaxed">
              Our team of experts is here to alleviate your digital burdens. We provide comprehensive solutions tailored to your specific needs and budget, ensuring your digital presence thrives.
            </p>
          </div>
        </section>

        <section className="benefits mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Benefits</h2>
          <ul className="list-none flex flex-col items-center">
            <li className="mb-4 bg-gray-200 p-4 rounded-md flex items-center">
              <Image
                src="/check-icon.png"
                alt="Check Icon"
                width={24}
                height={24}
              />
              <p className="text-lg text-gray-600 leading-relaxed ml-2">Expert Guidance: Access a team of seasoned professionals who understand your digital challenges and can provide tailored solutions.</p>
            </li>
            <li className="mb-4 bg-blue-200 p-4 rounded-md flex items-center">
              <Image
                src="/check-icon.png"
                alt="Check Icon"
                width={24}
                height={24}
              />
              <p className="text-lg text-white leading-relaxed ml-2">Custom Solutions: We don't believe in one-size-fits-all approaches. We craft solutions that align with your unique business goals and budget.</p>
            </li>
            <li className="mb-4 bg-gray-200 p-4 rounded-md flex items-center">
              <Image
                src="/check-icon.png"
                alt="Check Icon"
                width={24}
                height={24}
              />
              <p className="text-lg text-gray-600 leading-relaxed ml-2">Peace of Mind: Focus on running your business while our experts handle your digital needs, ensuring your online presence flourishes.</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2023 Digital Issue Solvers
        </div>
      </footer>
    </div>
  );
};

export default Landing;
