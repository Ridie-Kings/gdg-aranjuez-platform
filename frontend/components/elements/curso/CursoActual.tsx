import Image from 'next/image';
import Link from 'next/link';

interface Skill {
    name: string;
    award: string;
}

interface CourseCardProps {
    level: string;
    title: string;
    description: string;
    image: string;
    skills: Skill[];
}

export default function CourseCard({level, title, description, image, skills}:CourseCardProps) {
    return (
        <div className="border-2 border-customOrange rounded-xl flex justify-center items-center m-14 p-6 bg-gray-900/50 backdrop-blur-sm hover:shadow-[0_0_15px_#FF7518] transition-all duration-300 group">
            <div className="relative overflow-hidden rounded-lg">
                <Image 
                    src={image} 
                    alt={title} 
                    width={300} 
                    height={300}
                    className="group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className='ml-8 text-white flex flex-col justify-between flex-1'>
                <div>
                    <span className='text-customOrange text-sm font-medium uppercase tracking-wider'>{level}</span>
                    <h1 className='text-4xl font-bold mt-2 text-shadow-glow'>{title}</h1>
                    <p className='text-customGray mt-4 leading-relaxed'>{description}</p>
                </div>
                <div>
                    <p className='text-sm font-medium text-white mt-4'>Skills que vas a aprender:</p>
                    <div className='flex justify-between items-center'>
                        <ul className='flex gap-6'>
                            {skills.map(skill => (
                                <li className='flex items-center gap-2 text-customGray' key={skill.name}>
                                    <span className="w-2 h-2 bg-customOrange rounded-full"></span>
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-customOrange">{skill.award}</span>
                                </li>
                            ))}
                        </ul>
                        <Link 
                            href='/trucos'
                            className='bg-customOrange text-black px-6 py-3 rounded-lg font-bold hover:bg-orange-500 transition-colors duration-300 transform hover:scale-105'
                        >
                            Comenzar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}