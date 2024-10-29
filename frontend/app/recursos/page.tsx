import CourseCard from "@/components/elements/curso/CursoActual";


export default function Recursos() {
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
    </div>
    )
}