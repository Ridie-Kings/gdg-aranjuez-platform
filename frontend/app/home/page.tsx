'use client';
import CourseCard from "@/components/elements/curso/CursoActual";
import ForoContent from "@/components/elements/curso/Foro";
import { useProtectedRoute } from "@/hooks/useProtectedRoutes";


export default function Home() {
  const { isLoading } = useProtectedRoute(true);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const recentComments = [
    {
      id: "1",
      user: {
        name: "allan_coc",
        avatar: "/avatars/user1.png"
      },
      content: "Para entender la recursividad, primero tengo que entender la recursividad",
      replies: 1,
      timeAgo: "1 minuto",
      topic: "Producto de números consecutivos de Fibonacci"
    },
    {
      id: "2",
      user: {
        name: "mati-mate",
        avatar: "/avatars/user2.png"
      },
      content: "¿Cómo puedo recorrer una Array en JavaScript?",
      replies: 0,
      timeAgo: "18 minutos",
      topic: "Arrays en JavaScript"
    }
  ];

  return (
    <div className="">
      <CourseCard 
        level="Beginner"
        title="Full Stack Engineering with JavaScript"
        description="Aprende a hacer aplicaciones web con React lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende a hacer aplicaciones web con React lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende a hacer aplicaciones web con React lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        skills={[
          { name: "React", award: "Zombie de oro" },
          { name: "JavaScript", award: "Esqueleto de plata" },
        ]} 
        image="/images/subject.webp"
      />
      <ForoContent comments={recentComments} />
    </div>
  );
}
