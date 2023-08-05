import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"FORJANDO TRAYECTORIA FUSIONANDO INNOVACIÓN Y TECNOLOGÍA CON PASIÓN DESDE 2019 "}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Soy un apasionado ingeniero mecatrónico a punto de culminar mi formación académica. Mi travesía comenzó con los fundamentos en la universidad, pero mi ambición me llevó a explorar más allá por mi cuenta. He llevado mis habilidades al siguiente nivel, desarrollando un sistema de órdenes de producción para la empresa de mi padre y expandiendo mi influencia como programador freelance en plataformas como Workana. Mi capacidad para comunicarme en inglés, francés y español fortalece mi alcance en un mundo diverso y global." />

                        <AnimatedBody
                            delay={0.1}
                            text="Mi compromiso con la innovación trasciende la profesión. Sueño con dejar un legado significativo, impulsando el progreso humano y liderando avances en tecnología y robótica. Siempre estoy dispuesto a aprender y mantenerme actualizado con las últimas tendencias tecnológicas. Actualmente, me sumerjo en proyectos emocionantes que espero compartir pronto. Sin embargo, mi pasión por la creación y la excelencia me mantiene receptivo a nuevas oportunidades y colaboraciones que continúen impulsando soluciones vanguardistas."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Te invito a que nos unamos en este apasionante recorrido, donde creamos un impacto perdurable en la esfera tecnológica. Juntos, estamos allanando el camino hacia un futuro emocionante y lleno de posibilidades, mientras seguimos explorando los límites de la innovación."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
