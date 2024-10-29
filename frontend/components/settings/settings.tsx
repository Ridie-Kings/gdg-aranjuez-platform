import PersonalInfo from "@/components/settings/personalInfo/personalInfo";
import Social from "@/components/settings/social/social";
import SuppAccount from "@/components/settings/suppAccount/suppAccount";

export default function Settings() {
    return (
        <main className="flex flex-col items-center py-12 text-customOrange">
            {/* Encabezado de Perfil */}
            <div className="w-full max-w-5xl flex items-center justify-between mb-10 px-8">
                <h1 className="text-5xl font-bold">Perfil del Desarrollador</h1>
            </div>

            {/* Contenedores de Sección */}
            <div className="w-full max-w-4xl space-y-10">
                {/* Información Personal */}
                <section className="p-10 bg-gray-900 border border-customOrange rounded-xl shadow-xl">
                    <PersonalInfo />
                </section>

                {/* Redes Sociales */}
                <section className="p-10 bg-gray-900 border border-customOrange rounded-xl shadow-xl">
                    <Social />
                </section>

                {/* Zona de Peligro */}
                <section className="p-10 bg-gray-900 border border-customRed rounded-xl shadow-xl">
                    <SuppAccount />
                </section>
            </div>
        </main>
    );
}
