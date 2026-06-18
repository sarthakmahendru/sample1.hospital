export default function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-blue-600 mb-2">{value}</p>
      <p className="text-xl text-gray-700 font-semibold flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        {label}
      </p>
    </div>
  )
}
