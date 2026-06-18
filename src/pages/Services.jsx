import ServiceCard from '../components/ServiceCard'
import { Heart, Stethoscope, Pill, Baby, AlertCircle, Microscope } from 'lucide-react'

const allServices = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Advanced care for heart conditions with expert cardiologists and state-of-the-art technology. We provide comprehensive cardiac care including diagnostic testing, interventional procedures, and post-operative care.'
  },
  {
    icon: Stethoscope,
    title: 'Neurology',
    description: 'Comprehensive treatment for brain, spine, and nerve disorders by experienced specialists. Our neurology team is equipped to handle complex neurological conditions with precision and care.'
  },
  {
    icon: Pill,
    title: 'Orthopedics',
    description: 'Expert care for bones, joints, muscles, and sports injuries for a pain-free and active life. We offer both surgical and non-surgical treatment options tailored to your needs.'
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Compassionate care for infants, children, and adolescents by skilled pediatricians. We understand the unique healthcare needs of children at every stage of growth and development.'
  },
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response to critical situations. Our emergency team is trained to handle all types of medical emergencies with efficiency and expertise.'
  },
  {
    icon: Microscope,
    title: 'Diagnostics',
    description: 'Accurate and advanced diagnostic services for early detection and better treatment. We use cutting-edge technology to provide precise diagnoses and support your healthcare journey.'
  }
]

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive Healthcare Services with Advanced Technology</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Makes Our Services Special</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our team consists of highly experienced doctors, nurses, and medical professionals dedicated to your care.'
              },
              {
                title: 'Advanced Technology',
                description: 'We invest in cutting-edge medical equipment and technology to ensure the best diagnostic and treatment outcomes.'
              },
              {
                title: 'Patient-Centric Care',
                description: 'Your health and comfort are our top priority. We provide personalized care tailored to your specific needs.'
              },
              {
                title: 'Comprehensive Care',
                description: 'From prevention and diagnosis to treatment and recovery, we provide complete healthcare solutions.'
              },
              {
                title: '24/7 Availability',
                description: 'Our emergency department is always open and ready to provide immediate care when you need it most.'
              },
              {
                title: 'Affordable Treatment',
                description: 'We believe quality healthcare should be accessible. We offer competitive pricing and flexible payment options.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
