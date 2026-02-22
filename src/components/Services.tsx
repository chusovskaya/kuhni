import services from '../content/services.json'

const icons: Record<number, string> = {
  1: '🔧',
  2: '📐',
  3: '🪨',
  4: '🟫',
  5: '🚿',
  6: '✂️',
  7: '📦',
  8: '💡',
  9: '⚙️',
  10: '🔄',
}

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Услуги</h2>
      <p className="text-[#6b6b6b] mb-14 max-w-xl">
        Полный спектр работ по сборке и установке кухонной мебели в Новороссийске.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <div
            key={s.id}
            className="group p-6 rounded-2xl border border-[#e5e0d8] hover:border-[#c8a96e] hover:shadow-md transition-all duration-200 bg-[#fafaf8]"
          >
            <div className="text-3xl mb-4">{icons[s.id]}</div>
            <h3 className="font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#c8a96e] transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
