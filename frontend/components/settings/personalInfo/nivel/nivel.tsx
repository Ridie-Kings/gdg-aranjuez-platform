import Code from "@/components/icons/code";
import React, { Dispatch, SetStateAction } from "react";

export default function Nivel({
  setSelectedHability,
  selectedHability
}: {
  setSelectedHability: Dispatch<SetStateAction<number | null>>;
  selectedHability: number | null;
}) {
  
  const habilidad = [
    { id: 1, name: "Novato" },
    { id: 2, name: "Principiante" },
    { id: 3, name: "Intermedio" },
    { id: 4, name: "Avanzado" },
    { id: 5, name: "Maestro" }
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-4">
        <Code size="45" /> {/* Icono más grande */}
        <p className="font-display text-4xl text-white">Nivel de Habilidad</p> {/* Texto más grande */}
      </div>

      {/* Botones de Habilidad */}
      <div className="flex gap-6 font-semibold text-lg"> {/* Texto y espacio más grandes */}
        {habilidad.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedHability(option.id)}
            className={`flex items-center justify-center px-5 py-3 border border-customOrange rounded-lg ${
              selectedHability === option.id
                ? "bg-customOrange text-gray-900"
                : "bg-gray-800 text-customOrange"
            } hover:bg-customOrange hover:text-gray-900 transition-colors duration-300 shadow-lg`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}
