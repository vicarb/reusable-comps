export default function ContactSection() {
    return (
      <section id="contact" className="container mx-auto py-20 bg-gray-50 shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Start Your Project</h2>
          <p className="text-gray-600 mb-8">Ready to get started? Contact us now for a free quote.</p>
        </div>
  
        <form className="w-full max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-sm">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="email@example.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
  