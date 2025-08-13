export const metadata = {
  title: 'About Us',
}

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-8">
            About Your Brand
          </h1>
          <p className="text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            We are your trusted local [service] experts, serving [city] and surrounding areas for over [X] years.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-20">
          
          {/* Mission */}
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-8">Our Mission</h2>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              To provide fast, reliable, and professional [service] solutions to our community. 
              We understand that [service] emergencies can happen at any time, which is why we're 
              available 24/7 to help you when you need us most.
            </p>
          </div>
          
          {/* Why Choose Us */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-12 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Licensed and insured professionals</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Same-day service available</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Transparent, upfront pricing</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">100% satisfaction guarantee</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-1a1 1 0 00-1-1H9a1 1 0 00-1 1v1a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Local family-owned business</h3>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div className="bg-neutral-50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-8">Service Areas</h2>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              We proudly serve [City] and the surrounding communities including [Area 1], 
              [Area 2], and [Area 3]. If you're unsure whether we service your area, 
              give us a call and we'll let you know!
            </p>
            <div className="mt-8">
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (123) 456-7890
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}