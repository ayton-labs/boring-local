export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
            Ollie&apos;s Fast Emergency<br />
            <span className="text-emerald-600">[Service] in [City]</span>
          </h1>
          <div className="space-y-4 text-xl text-neutral-600 mb-8">
            <p>24/7 Emergency Response</p>
            <p>Licensed & Insured Professionals</p>
            <p>Same-Day Service Available</p>
          </div>
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now: (123) 456-7890
          </a>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-6">Popular Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Professional services you can count on, available when you need them most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">[Service 1]</h3>
              <p className="text-neutral-600 leading-relaxed">
                Description of service 1 goes here.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">[Service 2]</h3>
              <p className="text-neutral-600 leading-relaxed">
                Description of service 2 goes here.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">[Service 3]</h3>
              <p className="text-neutral-600 leading-relaxed">
                Description of service 3 goes here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
