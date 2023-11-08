import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="landing-page">
      <header className="header flex items-center justify-between py-4">
        <Image
          src="/images/logo.png"
          alt="Digital Issue Solvers Logo"
          width={200}
          height={50}
        />
      </header>

      <main className="main max-w-7xl mx-auto pt-12 pb-24">
        <h1 className="text-4xl font-bold text-center mb-8">Digital Issue Solvers</h1>
        <p className="text-2xl text-center mb-12">We Help Businesses Solve Their Digital Problems</p>

        <section className="problem-solution flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-lg leading-relaxed">
              In today's digital world, businesses face a number of challenges,
              from keeping their website secure to managing their social media presence
              to optimizing their website for search engines.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg leading-relaxed">
              That's where we come in. Our team of experts can help you solve all
              of your digital problems, so you can focus on what you do best:
              running your business.
            </p>
          </div>
        </section>

        <section className="benefits mt-12">
          <h2 className="text-3xl font-bold mb-8">Benefits</h2>
          <ul className="list-none">
            <li className="mb-4">
              <i className="fas fa-check mr-2"></i>
              Access to a team of experts who can help you solve all of your digital problems
            </li>
            <li className="mb-4">
              <i className="fas fa-check mr-2"></i>
              A custom solution that meets your specific needs and budget
            </li>
            <li className="mb-4">
              <i className="fas fa-check mr-2"></i>
              Peace of mind knowing that your digital needs are being taken care of
            </li>
          </ul>
        </section>

        <section className="testimonials mt-12">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <p className="text-lg leading-relaxed text-center">
            "Digital Issue Solvers has been a lifesaver for our business. We were
            struggling to keep up with our digital marketing, and our website was
            outdated and insecure. Digital Issue Solvers helped us develop a new
            website and social media marketing strategy, and they now manage our
            cybersecurity for us. We're so grateful for their expertise and support."
            - John Smith, CEO of Acme Corporation
          </p>
        </section>

        <section className="call-to-action mt-12">
          <h2 className="text-3xl font-bold mb-8">Call to Action</h2>
          <p className="text-lg leading-relaxed text-center mb-4">
            Schedule a free consultation today to learn how we can help you solve
            your digital problems.
          </p>
          <a href="#" className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded-md">Schedule Consultation</a>
        </section>
      </main>

      <footer className="footer flex items-center justify-center py-4">
        <p className="text-center">&copy; 2023 Digital Issue Solvers</p>
      </footer>
    </div>
  );
};

export default Landing;
