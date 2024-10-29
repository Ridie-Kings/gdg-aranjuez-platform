import Skull from "@/components/icons/skull";

export default function Personal() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Skull size="45" /> {/* Aumentado tamaño del icono */}
        <p className="font-display text-4xl text-white">Información Personal</p> {/* Aumentado tamaño del texto */}
      </div>

      {/* Formulario */}
      <div className="grid grid-cols-2 gap-8"> {/* Aumentado el espacio entre columnas */}
        
        {/* Correo Electrónico */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-xl text-customOrange">Correo Electrónico</label> {/* Aumentado tamaño del texto */}
          <input
            type="email"
            className="font-medium border border-2 border-customOrange px-4 py-3 rounded-lg bg-gray-800 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow duration-300"
            placeholder="tu@email.com"
          />
        </div>

        {/* Nombre de Usuario */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-xl text-customOrange">Nombre de Usuario</label>
          <input
            type="text"
            className="font-medium border border-2 border-customOrange px-4 py-3 rounded-lg bg-gray-800 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow duration-300"
            placeholder="CoderEspectral"
          />
        </div>

        {/* Nombre Completo */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-xl text-customOrange">Nombre Completo</label>
          <input
            type="text"
            className="font-medium border border-2 border-customOrange px-4 py-3 rounded-lg bg-gray-800 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow duration-300"
            placeholder="Tu nombre completo"
          />
        </div>

        {/* Lenguaje Favorito */}
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-xl text-customOrange">Lenguaje Favorito</label>
          <select
            className="font-medium text-lg text-white border border-2 border-customOrange px-4 py-3 rounded-lg bg-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow duration-300"
          >
            <option>JavaScript</option>
            <option>Java</option>
            <option>C++</option>
            <option>Python</option>
          </select>
        </div>
      </div>
    </>
  );
}
