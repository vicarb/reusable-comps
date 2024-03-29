import Head from 'next/head';
import Image from 'next/image';
import OurWork from '../OurWork/OurWork';
import ContactSection from '../ContactSection/ContantSection';
export default function Landing() {
  return (
    <>
      <Head>
        <title>Your Digital Business Name</title>
        <meta name="description" content="Landing page for a digital business venture focusing on web and app development and ad management." />
        {/* Add any additional tags for SEO and linking your CSS/JS here */}
      </Head>

      {/* Header Section */}
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <a href="#" className="text-lg font-bold">YourDigitalBusiness</a>
          </div>
          {/* Navigation Menu */}
          <div>
            <a href="#services" className="text-gray-600 hover:text-gray-900 px-4">Services</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900 px-4">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 px-4">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="text-center bg-gray-50 py-20">
          <div className="container mx-auto items-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Crafting Digital Experiences That Drive Results</h1>
            <p className="text-xl text-gray-600 mb-8">Bespoke Website and App Development with Integrated Ad Management to Elevate Your Business.</p>
           
            <a href="#contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg">Get Started</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto py-20">
          {/* Website Development */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <Image
              src="https://picsum.photos/id/1005/200/200" 
              alt="Descriptive Alt Text"
              width={250}  
              height={200} 
            />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Website Development</h3>
              <p className="text-gray-600 mb-5">Custom designs, e-commerce solutions, and responsive websites tailored to your business needs.</p>
              <a href="#contact" className="bg-green-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </div>

            {/* App Development */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <Image
              src="https://picsum.photos/id/1005/200/200" 
              alt="Descriptive Alt Text"
              width={250}  
              height={200} 
            />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">App Development</h3>
              <p className="text-gray-600 mb-5">Creating high-performance iOS and Android apps to engage your customers on the go.</p>
              <a href="#contact" className="bg-green-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </div>

            {/* Ad Management */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <Image
              src="https://picsum.photos/id/1005/200/200" 
              alt="Descriptive Alt Text"
              width={250}  
              height={200} 
            />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ad Management</h3>
              <p className="text-gray-600 mb-5">Strategic ad campaigns that convert viewers into customers and drive business growth.</p>
              <a href="#contact" className="bg-green-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-gray-100 py-20">
          <div className="container mx-auto">

              <OurWork/>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-20">
       
        <ContactSection/>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-8">
          <div className="flex -mx-4">
            <div className="px-4">
              {/* Footer content here, like links or contact information */}
              <p className="text-gray-600 text-sm text-center sm:text-left">© YourDigitalBusiness 2023</p>
            </div>
            {/* Social links */}
            <div className="flex justify-center sm:justify-end px-4">
              {/* Icons and links to your social media */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
