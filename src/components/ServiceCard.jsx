import { ChevronRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 group">
      <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition duration-300">
        <Icon size={28} className="text-blue-600 group-hover:text-white transition duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
        Learn More <ChevronRight size={18} />
      </a>
    </div>
  )
}
