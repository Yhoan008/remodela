import { useState, useRef, useEffect } from 'react'

const botReplies = [
  '¡Claro! ¿Qué tipo de remodelación tienes en mente?',
  'Excelente elección. Podemos agendar una visita para tomar medidas sin costo.',
  'Claro, los precios varían según el alcance. ¿Prefieres recibir un presupuesto por correo?',
  'Totalmente. Trabajamos con materiales de primera calidad y entregamos en tiempo récord.',
  '¡Perfecto! Déjanos tu número y un asesor te contacta en menos de 24 horas.',
  'Sí, tenemos planes de financiamiento. Te puedo dar más detalles si gustas.',
  'Nuestro equipo de diseño puede crear una propuesta en 3D para que veas el resultado antes de empezar.',
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! Soy el asistente de Remodela. ¿En qué puedo ayudarte hoy?' },
  ])
  const [input, setInput] = useState('')
  const [writing, setWriting] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend(e) {
    e.preventDefault()
    if (!input.trim() || writing) return
    const userMsg = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }])
    setWriting(true)
    setTimeout(() => {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)]
      setMessages((prev) => [...prev, { role: 'bot', text: reply }])
      setWriting(false)
    }, 1200 + Math.random() * 800)
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className={classNames(
          'fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300',
          open ? 'bg-gray-200 scale-90' : 'bg-gold-500 hover:bg-gold-600 hover:scale-105'
        )}
        aria-label="Abrir chat"
      >
        {open ? (
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        )}
      </button>

      <div
        className={classNames(
          'fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gold-100 overflow-hidden transition-all duration-300 origin-bottom-right',
          open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8 pointer-events-none'
        )}
      >
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Asistente Remodela</p>
              <p className="text-white/70 text-xs">Respuesta inmediata</p>
            </div>
          </div>
        </div>

        <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
          {messages.map((msg, i) => (
            <div key={i} className={classNames('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
              <div
                className={classNames(
                  'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                  msg.role === 'user'
                    ? 'bg-gold-500 text-white rounded-br-md'
                    : 'bg-white text-gray-700 shadow-sm border border-gold-100/50 rounded-bl-md'
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {writing && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-500 text-sm rounded-2xl rounded-bl-md px-4 py-2.5 shadow-sm border border-gold-100/50">
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form onSubmit={handleSend} className="border-t border-gold-100 p-3 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={writing}
            className="flex-1 px-4 py-2.5 text-sm rounded-xl bg-gray-100 border border-transparent focus:outline-none focus:bg-white focus:border-gold-300 transition-all placeholder-gray-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || writing}
            className="w-10 h-10 rounded-xl bg-gold-500 text-white flex items-center justify-center hover:bg-gold-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
