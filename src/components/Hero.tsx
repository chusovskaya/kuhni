import hero from "../content/hero.json";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0 bg-[#1a1a1a]">
      <img
        src="/hero.jpg"
        alt="Кухня"
        className="w-full h-full object-cover opacity-40"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
        {hero.headline}
      </h1>
      <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
        {hero.subtext}
      </p>
      <a
        href="#contacts"
        className="inline-block bg-[#c8a96e] hover:bg-[#a8894e] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-sm tracking-wide"
      >
        {hero.cta}
      </a>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-white/50 text-xs tracking-widest uppercase">
        Листать
      </span>
      <div className="w-px h-8 bg-white/30 animate-pulse" />
    </div>
  </section>
);

export default Hero;
