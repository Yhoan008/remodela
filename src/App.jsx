import remodel1 from './assets/remodel1.webp'
import remodel3 from './assets/remodel3.webp'
import remodel4 from './assets/remodel4.webp'
import remodel5 from './assets/remodel5.webp'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-white text-dark">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gold-500 tracking-tight">Remodela</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#inicio" className="hover:text-gold-500 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-gold-500 transition-colors">Servicios</a>
            <a href="#galeria" className="hover:text-gold-500 transition-colors">Galería</a>
            <a href="#nosotros" className="hover:text-gold-500 transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-gold-500 transition-colors">Contacto</a>
          </div>
          <a href="#contacto" className="hidden md:inline-block bg-gold-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/25">
            Cotizar Ahora
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gold-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-gold-500 font-semibold text-sm tracking-[0.2em] uppercase mb-6">
              Expertos en Remodelación
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-dark leading-[1.1] tracking-tight mb-6">
              Transformamos tus espacios en{' '}
              <span className="text-gold-500">lugares extraordinarios</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Más de 15 años transformando hogares y negocios con diseño, calidad y compromiso. 
              Hacemos realidad el espacio que siempre soñaste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-block bg-gold-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-600 transition-all shadow-xl shadow-gold-500/30 text-center">
                Solicita tu Presupuesto
              </a>
              <a href="#servicios" className="inline-block border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-full text-base font-semibold hover:bg-gold-50 transition-all text-center">
                Ver Servicios
              </a>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gold-100">
            {[
              ['15+', 'Años de Experiencia'],
              ['500+', 'Proyectos Completados'],
              ['98%', 'Clientes Satisfechos'],
              ['50+', 'Expertos en Equipo'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-bold text-gold-500">{num}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-semibold text-sm tracking-[0.2em] uppercase">Nuestros Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-4">Todo lo que necesitas para tu proyecto</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Soluciones integrales de diseño y construcción para hogares y empresas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Remodelación Interior',
                desc: 'Cocinas, baños, salas y recámaras con acabados de lujo y diseño personalizado.',
                icon: (
                  <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
              },
              {
                title: 'Construcción',
                desc: 'Desde cimientos hasta acabados, construimos tu hogar o local comercial con los más altos estándares.',
                icon: (
                  <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
              },
              {
                title: 'Diseño de Interiores',
                desc: 'Conceptos creativos que reflejan tu estilo, optimizando cada metro cuadrado con elegancia.',
                icon: (
                  <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>
                ),
              },
              {
                title: 'Remodelación Exterior',
                desc: 'Fachadas, terrazas, jardines y áreas comunes que realzan la primera impresión de tu propiedad.',
                icon: (
                  <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                ),
              },
              {
                title: 'Acabados de Lujo',
                desc: 'Mármol, maderas finas, iluminación y detalles que marcan la diferencia en cada espacio.',
                icon: (
                  <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                ),
              },
              {
                title: 'Mantenimiento',
                desc: 'Reparaciones, pintura, plomería y electricidad. Mantenemos tu inmueble en óptimas condiciones.',
                icon: (
                  <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14.408.033.817.11 1.214.2 1.073.254 1.79 1.113 2.083 2.159.145.524.167 1.073.112 1.592M8.48 6.795l1.035-1.256c.318-.386.744-.628 1.213-.765M8.48 6.795 7.25 4.848M8.48 6.795 4.708 9.268M8.48 6.795 5.657 3.972" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div key={s.title} className="group p-8 rounded-2xl border border-gold-100 bg-white hover:bg-gradient-to-br hover:from-gold-50 hover:to-white hover:border-gold-300 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-100 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-24 md:py-32 bg-gradient-to-b from-white to-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-semibold text-sm tracking-[0.2em] uppercase">Nuestro Trabajo</span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-4">Proyectos que hablan por sí solos</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Cada proyecto refleja nuestra pasión por el diseño y la calidad.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: remodel1,
                title: 'Remodelación Interior',
                subtitle: 'Cocina Integral',
                desc: 'Transformamos esta cocina tradicional en un espacio moderno y funcional. Se retiraron muros divisorios para integrarla con el comedor, se instalaron gabinetes de madera de nogal con herrajes ocultos, encimera de cuarzo blanco, y una isla central con acabado en mármol. La iluminación LED empotrada realza cada detalle, creando un ambiente cálido y sofisticado.',
                detalles: ['Gabinetería de nogal macizo', 'Encimera de cuarzo blanco', 'Electrodomésticos integrados', 'Iluminación LED direccionable'],
              },
              {
                img: remodel3,
                title: 'Acabados de Lujo',
                subtitle: 'Baño Principal',
                desc: 'Suite de baño con estilo contemporáneo y acabados premium. Instalamos mármol travertino en pisos y muros, lavabo doble sobre encimera de mármol, grifería dorada satinada, y una cabina de ducha con regadera tipo lluvia y muro de azulejo artesanal. El espejo retroiluminado y las repisas flotantes completan el diseño.',
                detalles: ['Mármol travertino en paredes', 'Grifería dorada satinada', 'Ducha tipo lluvia', 'Espejo con iluminación LED'],
              },
              {
                img: remodel4,
                title: 'Diseño de Interiores',
                subtitle: 'Sala Estar',
                desc: 'Rediseñamos esta sala de estar con un concepto abierto y orgánico. Se utilizó una paleta neutra con acentos en tonos tierra, muebles a la medida con tapicería de lino, y una celosía decorativa de madera que divide ambientes sin perder la amplitud. Los acabados en yeso texturizado y la iluminación indirecta generan una atmósfera serena y acogedora.',
                detalles: ['Mobiliario a la medida', 'Celosía decorativa de madera', 'Paleta neutra con acentos tierra', 'Iluminación indirecta'],
              },
              {
                img: remodel5,
                title: 'Remodelación Exterior',
                subtitle: 'Terraza & Jardín',
                desc: 'Convertimos un patio subutilizado en una terraza contemporánea para entretenimiento al aire libre. Se instaló un deck de madera sintética antiderrapante, pérgola de aluminio con lamas ajustables, jardineras de concreto con especies nativas de bajo mantenimiento, y una cocineta empotrada con parrilla y barra desayunadora.',
                detalles: ['Deck de madera sintética', 'Pérgola con lamas ajustables', 'Jardineras con especies nativas', 'Cocineta empotrada'],
              },
            ].map((item) => (
              <div key={item.title} className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold-100/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold text-gold-500 tracking-[0.15em] uppercase">{item.subtitle}</span>
                  <h3 className="text-2xl font-bold text-dark mt-1 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.detalles.map((d) => (
                      <span key={d} className="inline-block px-3 py-1.5 bg-gold-50 text-gold-700 text-xs font-medium rounded-full border border-gold-200/50">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why us */}
      <section id="nosotros" className="py-24 md:py-32 bg-gradient-to-b from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 font-semibold text-sm tracking-[0.2em] uppercase">Por qué elegirnos</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">Calidad que se ve, compromiso que se siente</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                En Remodela cada proyecto es único. Trabajamos mano a mano contigo para entender tus necesidades, 
                respetar tu presupuesto y superar tus expectativas. Utilizamos materiales de primera calidad y 
                contamos con un equipo de profesionales apasionados por su trabajo.
              </p>
              <div className="space-y-4">
                {[
                  ['Materiales Premium', 'Trabajamos solo con proveedores certificados y materiales de la más alta calidad.'],
                  ['Diseño Personalizado', 'Creamos conceptos únicos adaptados a tu estilo de vida y preferencias.'],
                  ['Cumplimiento Garantizado', 'Entregamos todos nuestros proyectos en el tiempo y presupuesto acordado.'],
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{t}</h4>
                      <p className="text-sm text-gray-500">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gold-200 to-gold-400 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-white/80">R</div>
                    <div className="mt-4 text-white/60 font-semibold tracking-widest text-sm uppercase">Remodela</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gold-100">
                <div className="text-gold-500 text-3xl font-bold">98%</div>
                <div className="text-sm text-gray-500">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contacto" className="py-24 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold-400 font-semibold text-sm tracking-[0.2em] uppercase">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">¿Listo para transformar tu espacio?</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10">
            Cuéntanos sobre tu proyecto y te enviaremos una cotización personalizada sin compromiso.
          </p>
          <div className="max-w-lg mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors" />
                <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors" />
              </div>
              <input type="tel" placeholder="Teléfono" className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors" />
              <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={3} className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none" />
              <button type="submit" className="w-full bg-gold-500 text-dark font-bold px-8 py-4 rounded-xl hover:bg-gold-400 transition-all text-lg">
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
              Av. Reforma 256, CDMX
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              +52 55 1234 5678
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              hola@remodela.mx
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-gold-500 font-bold text-lg">Remodela</span>
          <p className="text-gray-500 text-sm">© 2026 Remodela. Todos los derechos reservados.</p>
        </div>
      </footer>
      <Chatbot />
    </div>
  )
}

export default App
