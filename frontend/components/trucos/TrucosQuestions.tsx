'use client'
import { useState } from "react";
import Ghost from '../icons/ghost';
import Skull from '../icons/skull';
import Brain from '../icons/brain';
import Toast from "../elements/alertNotif/Toast";

interface Questions {
    id: number;
    description: string;
    answer: string;
    hint: string;
    points: number;
    isCompleted: boolean;
}

const questions: Questions[] = [
    {
        id: 1,
        description: "El atributo ________ se utiliza para definir estilos en línea en HTML.",
        answer: "style",
        hint: "Está relacionado con el CSS",
        points: 10,
        isCompleted: false
    },
    {
        id: 2,
        description: "React usa un ________ virtual para mejorar el rendimiento.",
        answer: "DOM",
        hint: "Document Object Model",
        points: 15,
        isCompleted: false
    },
    {
        id: 3,
        description: "________ es un entorno de ejecución de Javascript construido en el motor V8 de chrome.",
        answer: "nodejs",
        hint: "Server-side JavaScript",
        points: 20,
        isCompleted: false
    },
    {
        id: 4,
        description: "________ se utiliza para estilar clases en línea en HTML.",
        answer: "tailwind",
        hint: "Es un framework de CSS (se escribe sin CSS)",
        points: 25,
        isCompleted: false
    },
    {
        id: 5,
        description: "El hook ________ se utiliza para mejorar el rendimiento en React.",
        answer: "useMemo",
        hint: "Es un hook que se utiliza para memorizar valores",
        points: 30,
        isCompleted: false
    },
]

export default function TrucosQuestions() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answer, setAnswer] = useState<string[]>(Array(questions.length).fill(""))
    const [showHint, setShowHint] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0)
    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [showToast, setShowToast] = useState<boolean>(false)
    const [toastType, setToastType] = useState<'success' | 'error'>('success')

    const triggerToast = (type: 'success' | 'error') => {
        setToastType(type)
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 3000)
    }

    const handleAnswer = (value: string) => {
        const newAnswers = [...answer]
        newAnswers[currentQuestion] = value
        setAnswer(newAnswers)
    }

    const checkAnswer = () => {
        const currentAnswer = answer[currentQuestion]
        const isCorrect = currentAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()

        if (isCorrect) {
            setScore(score + questions[currentQuestion].points)
            setIsComplete(true)
            triggerToast("success")
        } else {
            triggerToast("error")
        }
    }

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setIsComplete(false)
            setShowHint(false)
        }
    }

    return (
        <main className="h-screen p-6 max-w-3xl mx-auto">
            <div className="max-w-2xl mx-auto space-y-8 ">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
                        <Ghost className="floating" size="40" />
                        <span className="text-white text-shadow-glow">Trucos Malditos</span>
                    </h1>
                    <p className="text-sm text-customGray">Completa las palabras que faltan para seguir avanzando</p>
                </div>
            </div>

            <div className="border border-customOrange rounded-lg p-4 shadow-[0_0_15px_rgba(255,117,24,0.2)] mt-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <Skull size="20" className="text-primary"/>
                        <span className="text-lg mx-2 text-white font-semibold">Puntuación: </span>
                    </div>
                    <span className="text-2xl font-bold text-customOrange">{score}</span>
                </div>
            </div>

            <div className="border border-customOrange rounded-lg p-4 shadow-[0_0_15px_rgba(255,117,24,0.2)] mt-8">
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-customGray">
                            Pregunta {currentQuestion + 1} de {questions.length}
                        </span>
                        <span className="text-sm text-customOrange font-bold">
                            +{questions[currentQuestion].points} puntos
                        </span>
                    </div>
                </div>

            <p className="text-lg text-white py-4">{isComplete ? questions[currentQuestion].description.replace("________", questions[currentQuestion].answer) : questions[currentQuestion].description}</p>

            <div className="space-y-4">
                <input 
                    type="text"
                    placeholder="Escribe tu respuesta..."
                    value={answer[currentQuestion]}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="bg-transparent border border-customOrange rounded p-2 placeholder:text-white text-white w-full"
                    />

                {
                    showHint && (
                        <p className="text-sm text-gray-400">💡 Pista: {questions[currentQuestion].hint}</p>
                    )
                }

                    <div className="flex gap-3">
                        <button
                            onClick={() => setShowHint(!showHint)}
                            className="flex flex-1 justify-center items-center text-white border border-customOrange px-4 py-2 rounded hover:bg-purple transition-colors duration-200"
                            >
                            <Brain size="15" className="mr-2"/>
                            {showHint ? "Ocultar Pista" : "Mostrar Pista"}
                        </button>
                        <button
                            onClick={isComplete ? nextQuestion : checkAnswer}
                            className="flex flex-1 bg-customOrange text-black px-4 py-2 rounded justify-center items-center font-bold"
                            >
                            {isComplete ? "Siguiente" : "Comprobar"}
                        </button>
                    </div>
                </div>
            </div>
            {showToast && <Toast type={toastType} />}
        </main>
    )
}