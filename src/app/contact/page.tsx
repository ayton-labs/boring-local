'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submission:', formData)
    // Here you would typically send the data to your backend
    alert('Form submitted! Check the console.')
    setFormData({ name: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-8">
            Contact Us
          </h1>
          <p className="text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Ready to get started? Contact us today for fast, professional service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-xl text-neutral-900 mb-3">Phone</h3>
                    <p className="text-2xl">
                      <a 
                        href="tel:+1234567890" 
                        className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl text-neutral-900 mb-3">Address</h3>
                    <div className="text-lg text-neutral-600 space-y-1">
                      <p className="font-medium text-neutral-900">[Your Business Name]</p>
                      <p>[Address Line 1]</p>
                      <p>[City, State ZIP]</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl text-neutral-900 mb-3">Hours</h3>
                    <div className="text-lg text-neutral-600 space-y-1">
                      <p><span className="font-medium text-neutral-900">Mon-Fri:</span> 8:00 AM - 6:00 PM</p>
                      <p><span className="font-medium text-neutral-900">Sat:</span> 9:00 AM - 4:00 PM</p>
                      <p><span className="font-medium text-neutral-900">Sun:</span> Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <h3 className="font-bold text-2xl text-neutral-900 mb-4">Emergency Service</h3>
                <p className="text-lg text-neutral-600 mb-6">
                  Need immediate assistance? We're available 24/7 for emergencies.
                </p>
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Emergency Line
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-neutral-100">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium text-neutral-900 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-neutral-200 rounded-2xl text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-neutral-50 focus:bg-white"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-medium text-neutral-900 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-neutral-200 rounded-2xl text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-neutral-50 focus:bg-white"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium text-neutral-900 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-neutral-200 rounded-2xl text-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-neutral-50 focus:bg-white resize-none"
                    placeholder="Tell us about your project or ask any questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}