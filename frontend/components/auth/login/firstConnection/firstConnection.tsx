import Buttons from "@/components/elements/buttons/buttons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Opciones de carrera con iconos y nombres
const careerOptions = [
  { id: 1, name: "Desarrollo Web", icon: "/images/monitor-smartphone.svg" },
  { id: 2, name: "Desarrollo Móvil", icon: "/images/tablet-smartphone.svg" },
  { id: 3, name: "Desarrollo de Videojuegos", icon: "/images/gamepad-2.svg" },
  { id: 4, name: "Ingeniero de IA", icon: "/images/brain.svg" },
  { id: 5, name: "Ciberseguridad", icon: "/images/security-svgrepo-com.svg" },
  { id: 6, name: "Ingeniera de datos", icon: "/images/data-cloud-svgrepo-com.svg" },
];

export default function FirstConnection() {
  const [skillLevel, setSkillLevel] = useState("");
  const [careerStage, setCareerStage] = useState("");
  const [baseLanguage, setBaseLanguage] = useState("JavaScript");
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null); // Estado para la opción de carrera seleccionada

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className="w-full flex flex-col items-center p-8 bg-background text-customOrange"
    >
      {/* Contenedor principal del formulario */}
      <div className="w-2/3 p-8 bg-background/80 backdrop-blur-md border border-customOrange rounded-lg shadow-lg">

        {/* Sección: Nivel de Habilidad Actual */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-customOrange">Nivel de Habilidad Actual</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="skillLevel"
                value="Novice"
                onChange={(e) => setSkillLevel(e.target.value)}
                className="text-customOrange"
              />
              Novato – Estoy empezando a aprender programación.
            </label>
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="skillLevel"
                value="Beginner"
                onChange={(e) => setSkillLevel(e.target.value)}
                className="text-customOrange"
              />
              Principiante – Puedo construir aplicaciones personales muy básicas.
            </label>
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="skillLevel"
                value="Intermediate"
                onChange={(e) => setSkillLevel(e.target.value)}
                className="text-customOrange"
              />
              Intermedio – Me siento cómodo contribuyendo a proyectos en entornos de producción.
            </label>
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="skillLevel"
                value="Advanced"
                onChange={(e) => setSkillLevel(e.target.value)}
                className="text-customOrange"
              />
              Avanzado – Me considero altamente competente en al menos un lenguaje de programación.
            </label>
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="skillLevel"
                value="Master"
                onChange={(e) => setSkillLevel(e.target.value)}
                className="text-customOrange"
              />
              Experto – Siento que he dominado al menos un lenguaje de programación.
            </label>
          </div>
        </div>

        {/* Sección: Etapa de Carrera */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-customOrange">Etapa de Carrera</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="careerStage"
                value="None"
                onChange={(e) => setCareerStage(e.target.value)}
                className="text-customOrange"
              />
              Ninguna – No estoy en la escuela ni programo de manera profesional.
            </label>
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="careerStage"
                value="School"
                onChange={(e) => setCareerStage(e.target.value)}
                className="text-customOrange"
              />
              Estudiante – Estoy en la escuela y aún no trabajo de forma profesional.
            </label>
            <label className="flex items-center gap-2 text-customGray">
              <input
                type="radio"
                name="careerStage"
                value="Professional"
                onChange={(e) => setCareerStage(e.target.value)}
                className="text-customOrange"
              />
              Profesional – Actualmente trabajo de manera profesional como ingeniero de software o manager.
            </label>
          </div>
        </div>

        {/* Sección: Lenguaje de Programación Base */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-customOrange">Lenguaje de Programación Base</h2>
          <select
            value={baseLanguage}
            onChange={(e) => setBaseLanguage(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border border-customOrange rounded-md shadow-[inset_0_0_1px_#FF7518,0_0_5px_#FF7518] appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='24px' height='24px'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.5rem center",
              backgroundSize: "1.5rem",
            }}
          >
            <option value="" disabled selected>Selecciona tu lenguaje de programación base</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
        </div>

        {/* Sección: Opciones de Carrera */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-customOrange">Opciones de Carrera</h2>
          <div className="flex flex-col gap-4">
            {careerOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedCareer(option.id)}
                className={`flex items-center justify-start p-4 border-2 rounded-md ${selectedCareer === option.id
                  ? "bg-customOrange text-white" // Cambia el estilo cuando está seleccionado
                  : "bg-gray-800/60 text-white hover:bg-gray-700"
                  } backdrop-blur-md hover:border-customOrange transition-colors duration-300 shadow-lg`}
              >
                <Image src={option.icon} width={1000} height={1000} alt={option.name} className="w-6 h-6 mr-4" />
                <span className="text-lg">{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Botón de Guardar */}
        <button className="px-6 py-2 bg-customOrange hover:bg-customOrange rounded-md w-full text-white font-semibold">
          <Link href={"/home"} className="text-black">Guardar Preferencias</Link>
        </button>
      </div>
    </motion.div>
  );
}
