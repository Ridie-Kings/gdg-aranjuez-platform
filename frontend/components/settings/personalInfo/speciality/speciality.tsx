import SuiteCase from "@/components/icons/suitCase";
import React, { Dispatch, SetStateAction } from "react";

export default function Speciality({
  setSelectedSpeciality,
  selectedSpeciality
}: {
  setSelectedSpeciality: Dispatch<SetStateAction<number | null>>;
  selectedSpeciality: number | null;
}) {
  
  const speciality = [
    { id: 1, name: "Desarrollo Web" },
    { id: 2, name: "Desarrollo Móvil" },
    { id: 3, name: "Desarrollo de Videojuegos" },
    { id: 4, name: "Ingeniería de IA" }
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-4">
        <SuiteCase size="45" /> {/* Icono más grande */}
        <p className="font-display text-4xl text-white">Especialización</p> {/* Texto más grande */}
      </div>

      {/* Botones de Especialización */}
      <div className="grid grid-cols-2 gap-6">
        {speciality.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedSpeciality(option.id)}
            className={`flex items-center justify-center px-5 py-3 border border-customOrange rounded-lg font-semibold text-lg ${
              selectedSpeciality === option.id
                ? "bg-customOrange text-gray-900" // Color de fondo cuando está seleccionado
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

