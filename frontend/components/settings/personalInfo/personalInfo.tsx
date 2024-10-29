"use client";
import Divider from "@/components/elements/divider/divider";
import { useState } from "react";
import Nivel from "./nivel/nivel";
import Personal from "./personal/personal";
import Speciality from "./speciality/speciality";

export default function PersonalInfo() {
  const [selectedHability, setSelectedHability] = useState<number | null>(null);
  const [selectedSpeciality, setSelectedSpeciality] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto p-12 bg-gray-900 borde rounded-xl shadow-lg space-y-10 text-xl">
      {/* Título de sección */}
      <div className="flex items-center gap-4 mb-8">
      </div>
      <Personal /> {/* Información Personal */}
      <Divider />

      <Nivel 
        setSelectedHability={setSelectedHability} 
        selectedHability={selectedHability} 
      />
      <Divider />

      <Speciality 
        setSelectedSpeciality={setSelectedSpeciality} 
        selectedSpeciality={selectedSpeciality} 
      />
    </div>
  );
}
