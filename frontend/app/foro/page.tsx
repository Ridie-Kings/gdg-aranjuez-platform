'use client'
import ForoContent from "@/components/elements/curso/Foro";


export default function Foro() {
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

    return <ForoContent comments={recentComments} />;
}