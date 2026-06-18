import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', department: '', message: '' })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're Here to Help You</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="emergency">Emergency</option>
                    <option value="diagnostics">Diagnostics</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 mb-4"
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+123 456 7890</p>
                    <p className="text-gray-600 text-sm">Available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@medicarehospital.com</p>
                    <p className="text-gray-600 text-sm">We reply within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Healthcare Street,</p>
                    <p className="text-gray-600">Medicity, NY 10001, USA</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601592345061!3d40.71312657138067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3a93d49%3A0xb89d5754fb644578!2s123%20Healthcare%20Street%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1630000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Hospital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-red-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Medical Emergency?</h2>
          <p className="text-xl mb-8">We are 24/7 ready to help you. Call our emergency hotline immediately.</p>
          <a href="tel:+1234567890" className="inline-block bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
            📞 +123 456 7890
          </a>
        </div>
      </section>
    </div>
  )
}
