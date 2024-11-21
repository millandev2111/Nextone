'use client'

import {MisionIcon} from "../../assets/icons/mision"
import {VisionIcon} from "../../assets/icons/vision"


function AboutUs () {
    return (
    <div className=" mt-12 mb-20 flex flex-col items-center pl-48 pr-48">
    <div className=" flex flex-col ">
        <h1 className="text-white font-mono text-5xl font-extrabold text-center">Conoce un poco mas sobre este proyecto 🚀</h1>
    <div className="flex gap-10 items-center mt-20">
        <h1 className=" flex text-white text-3xl font-bold items-center gap-2"><MisionIcon className="stroke-violet-700 size-20" /> Mision</h1>
        <p className="text-[#94A1B2] text-lg font-mono  text-justify text-pretty">Nextone se dedica a apoyar y promover el reconocimiento de artistas independientes en Cali, creando una plataforma en línea que actúa como un periódico local para destacar y compartir sus proyectos. Ofrecemos reportajes, información sobre estudios y productores, eventos próximos y oportunidades de inscripción para nuevos proyectos, con el fin de fomentar la colaboración y el crecimiento mutuo entre el talento local.</p>
    </div>
    </div>
    <div className="mt-20">
    <div className="flex gap-10 items-center mt-8">
        <p className="text-[#94A1B2] text-lg font-mono text-justify text-pretty">Convertirse en el punto de encuentro principal para el florecimiento del talento independiente en Cali, estableciendo una red sólida de apoyo entre artistas emergentes y contribuyendo al desarrollo de una escena musical vibrante y colaborativa.</p>
        <h1 className=" flex text-white text-3xl font-bold items-center gap-2"> Vision <VisionIcon className=" stroke-2 stroke-violet-700 size-20" /> </h1>
    </div>
    </div>
    <div className="mt-20 flex flex-col items-center gap-16">
    <h1 className="text-white font-mono text-3xl font-bold text-center">¡Apoya el Talento Musical Emergente en Cali!</h1>
    <a href="#" className="w-[200px] h-[50px] p-4 flex justify-center items-center  rounded-full bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] text-white font-bold text-lg shadow-lg hover:opacity-75" >Pulsa aquí</a>
    </div>
    </div>
    )
}

export default AboutUs