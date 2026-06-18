import { Heart, Eye, Award, Target } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About MediCare Hospital</h1>
          <p className="text-xl text-gray-600">Compassionate Care, Exceptional Results</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Compassionate Care, Exceptional Results</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                At MediCare Hospital, we are committed to providing world-class healthcare with compassion and excellence. Our advanced technology, experienced doctors, and patient-first approach ensure the best treatment and care for you and your family.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 20 years of experience, more than 500 expert doctors, 500+ hospital beds, and over 50,000 happy patients, we have established ourselves as a leading healthcare provider recognized for excellence, innovation, and patient satisfaction.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop" 
                alt="Medical Team"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="p-8 bg-blue-50 rounded-lg">
              <Heart size={40} className="text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3 text-gray-900">Our Mission</h3>
              <p className="text-gray-700">To deliver high-quality, affordable healthcare with compassion and integrity.</p>
            </div>

            <div className="p-8 bg-blue-50 rounded-lg">
              <Eye size={40} className="text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3 text-gray-900">Our Vision</h3>
              <p className="text-gray-700">To be a leading healthcare provider recognized for excellence, innovation and patient satisfaction.</p>
            </div>

            <div className="p-8 bg-blue-50 rounded-lg">
              <Award size={40} className="text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3 text-gray-900">Our Values</h3>
              <p className="text-gray-700">Compassion, Integrity, Excellence, Teamwork and Innovation are at the heart of everything we do.</p>
            </div>

            <div className="p-8 bg-blue-50 rounded-lg">
              <Target size={40} className="text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3 text-gray-900">Our Commitment</h3>
              <p className="text-gray-700">We are committed to create a healthier community through advanced care and continuous improvement.</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose MediCare?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: '20+ Years Excellence', desc: 'Two decades of trusted healthcare service and innovation.' },
                { title: '500+ Expert Doctors', desc: 'Highly qualified specialists across all major departments.' },
                { title: '50K+ Happy Patients', desc: 'Thousands of satisfied patients with successful outcomes.' },
                { title: '24/7 Emergency Service', desc: 'Round-the-clock emergency care with rapid response.' },
                { title: 'Advanced Technology', desc: 'State-of-the-art medical equipment and facilities.' },
                { title: 'Patient-First Approach', desc: 'Personalized care tailored to your specific needs.' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 py-4">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
