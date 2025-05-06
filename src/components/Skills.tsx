
const Skills = ()=> {
    return (
        <section className="h-dvh w-[80%] mx-auto flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-[#22d3ee] font-bold text-4xl fade-in-up bt-line">Mis Habilidades</h1>
                <p className="text-gray-300 mt-9 fade-in-up">Tengo un domino sobre multiples tecnologías y herramientas para crear soluciones eficientes y modernas.</p>
            </div>
            <div className="mt-10 flex gap-5 px-5 py-1 border-purple-300 rounded-md border-2">
                <button className="text-purple-200">Stacks Completos</button>
                <button className="text-purple-200">Tecnologías</button>
                <button className="text-purple-200">Liderazgo</button>
            </div>
        </section>
    )
};

export default Skills;