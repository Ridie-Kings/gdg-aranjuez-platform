"use client";

import { useState } from "react";

export default function ProfilePage() {
  const userData = {
    name: "AllanTyson",
    title: "Allan Mersil Bucup",
    level: 13,
    experience: 2800,
    totalExperience: 5000,
    favoriteLanguage: "JavaScript",
    completedExercises: 45,
    totalExercises: 100,
    unlockedAchievements: 12,
    currentStreak: 7,
    recentActivities: [
      { title: "Algoritmo Completado", description: "Resolviste el ejercicio 'Ordenamiento Fantasmal'", timeAgo: "Hace 2 horas", points: 50 },
      { title: "Logro Desbloqueado", description: "¡Conseguiste 'Invocador de Código'!", timeAgo: "Hace 1 día", points: 100 },
      { title: "Reto Diario", description: "Completaste el reto 'Laberinto del Código Maldito'", timeAgo: "Hace 2 días", points: 75 },
    ]
  };

  return (
    <div className="flex justify-center p-8 text-default text-white">
      <div className="w-full max-w-4xl p-10 bg-gray-900 border border-customOrange rounded-lg shadow-lg">
        {/* Contenedor de perfil */}
        <div className="border-b border-customOrange pb-6 mb-6">
          <h1 className="text-3xl font-bold">{userData.name}</h1>
          <p className="text-gray-400 text-lg">{userData.title}</p>
          <p className="mt-4 text-2xl font-semibold">Nivel {userData.level}</p>
          <div className="w-full bg-gray-700 rounded-full h-3 mt-2 mb-4">
            <div
              className="bg-customOrange h-3 rounded-full"
              style={{ width: `${(userData.experience / userData.totalExperience) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400">
            {userData.experience}/{userData.totalExperience} EP
          </p>
          <p className="mt-2 text-lg"> Lenguaje favorito: <span className="text-customOrange">{userData.favoriteLanguage}</span></p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-3 gap-6 text-center mb-8">
          <div className="border border-customOrange rounded-md p-5">
            <p className="text-2xl font-bold">{userData.completedExercises}/{userData.totalExercises}</p>
            <p className="text-base">Ejercicios Completados</p>
          </div>
          <div className="border border-customOrange rounded-md p-5">
            <p className="text-2xl font-bold">{userData.unlockedAchievements}</p>
            <p className="text-base">Logros Desbloqueados</p>
          </div>
          <div className="border border-customOrange rounded-md p-5">
            <p className="text-2xl font-bold">{userData.currentStreak} días</p>
            <p className="text-base">Racha Actual</p>
          </div>
        </div>

        {/* Actividad Reciente */}
        <div className="border border-customOrange rounded-md p-6">
          <h2 className="text-2xl font-bold mb-4">Actividad Reciente</h2>
          {userData.recentActivities.map((activity, index) => (
            <div key={index} className="border-b border-gray-700 pb-4 mb-4 last:border-none last:pb-0 last:mb-0">
              <p className="text-xl font-semibold text-customOrange">{activity.title}</p>
              <p className="text-gray-400">{activity.description}</p>
              <div className="flex justify-between items-center mt-2 text-base text-gray-500">
                <span>{activity.timeAgo}</span>
                <span className="text-customOrange">+{activity.points} EP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
