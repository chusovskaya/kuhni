const Footer = () => (
  <footer className="bg-[#1a1a1a] text-white/50 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
      <span>Сборка Мебели Новороссийск</span>
      <span>© {new Date().getFullYear()}</span>
    </div>
  </footer>
)

export default Footer
