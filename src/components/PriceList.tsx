import prices from '../content/prices.json'

const PriceList = () => (
  <section id="prices" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Прайслист</h2>
      <p className="text-[#6b6b6b] mb-14 max-w-xl">
        Ориентировочные цены. Точную стоимость уточняйте по телефону.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-[#e5e0d8]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#fafaf8] border-b border-[#e5e0d8]">
              <th className="text-left px-6 py-4 font-semibold text-[#1a1a1a]">Услуга</th>
              <th className="text-right px-6 py-4 font-semibold text-[#1a1a1a] whitespace-nowrap">Цена</th>
              <th className="text-left px-6 py-4 font-semibold text-[#6b6b6b] hidden sm:table-cell">Примечание</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-[#e5e0d8] last:border-0 transition-colors hover:bg-[#fafaf8] ${
                  idx % 2 === 0 ? '' : 'bg-[#fafaf8]/50'
                }`}
              >
                <td className="px-6 py-4 text-[#1a1a1a]">{row.service}</td>
                <td className="px-6 py-4 text-right font-semibold text-[#c8a96e] whitespace-nowrap">{row.price}</td>
                <td className="px-6 py-4 text-[#6b6b6b] hidden sm:table-cell">{row.notes || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

export default PriceList
