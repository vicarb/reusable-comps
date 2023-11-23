import Image from 'next/image';

export default function OurWork() {
  // Dummy data for portfolio items
  const portfolioItems = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/id/1018/1000/600",
      title: "Project Title 1",
      description: "Brief description of Project 1"
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/id/1015/1000/600",
      title: "Project Title 2",
      description: "Brief description of Project 2"
    },
    // Add more items as needed
  ];

  return (
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <div key={item.id} className="shadow-lg rounded-lg overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="responsive"
                width={1000}
                height={600}
                objectFit="cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
