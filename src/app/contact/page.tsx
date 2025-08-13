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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-xl">
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                  (123) 456-7890
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg">Address</h3>
              <p>[Your Business Name]</p>
              <p>[Address Line 1]</p>
              <p>[City, State ZIP]</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg">Hours</h3>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
              <p>Sun: Emergency Only</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Emergency Service</h3>
            <p className="mb-4">Need immediate assistance? We're available 24/7 for emergencies.</p>
            <a 
              href="tel:+1234567890" 
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              Call Emergency Line
            </a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}