export default function Gracias() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-6">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">¡Gracias por tu mensaje!</h1>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Me pondré en contacto contigo lo antes posible.
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all"
      >
        Volver al Inicio
      </a>
    </div>
  );
}