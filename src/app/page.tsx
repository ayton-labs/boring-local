export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Fast Emergency [Service] in [City]
        </h1>
        <ul className="text-lg mb-8 space-y-2">
          <li>✓ 24/7 Emergency Response</li>
          <li>✓ Licensed & Insured Professionals</li>
          <li>✓ Same-Day Service Available</li>
        </ul>
        <a 
          href="tel:+1234567890" 
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors"
        >
          Call Now: (123) 456-7890
        </a>
      </section>

      {/* Popular Services Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">[Service 1]</h3>
            <p className="text-gray-600">Description of service 1 goes here.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">[Service 2]</h3>
            <p className="text-gray-600">Description of service 2 goes here.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">[Service 3]</h3>
            <p className="text-gray-600">Description of service 3 goes here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
