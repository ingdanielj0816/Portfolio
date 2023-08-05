import Link from "next/link";
//import { spaceGrotesk } from "../fonts/spaceGrotesk";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />
            <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                <div
                    className={`flex flex-col items-start justify-center relative w-full sm:items-center lg:max-w-[1440px] `}
                    //className={`flex flex-col items-start justify-center ${spaceGrotesk.className} relative w-full sm:items-center lg:max-w-[1440px] `}
                >
                    <AnimatedWords
                        title={"contacto"}
                        style={
                            "flex max-w-[400px] flex-col items-start text-left text-[100px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[450px]"
                        }
                    />
                </div>

                <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                        <AnimatedBody
                            text={
                                "Tienes alguna pregunta, escribeme y estaremos en contacto"
                            }
                            className={
                                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                            }
                        />
                        <Link
                            href="mailto:danielj0816@outlook.com?subject=Propuesta%20portafolio%20&amp;body=Hola%2C%20Ingeniero%20me%20gustaría%20contactarte,%20muchas%20gracias%20buen%20dia."
                            target="_blank"
                            aria-label="Enviame un correo"
                            className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        >
                            <AnimatedBody text={"Enviame un correo"} className={""} />
                        </Link>
                    </div>

                    <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
                        <Link
                            href="https://github.com/ingdanielj0816"
                            target="_blank"
                            aria-label="Ver Perfil de GitHub"
                        >
                            <AnimatedTitle
                                text={"GITHUB"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://www.workana.com/freelancer/23f948cf0949254822efd7cbdd355752"
                            target="_blank"
                            aria-label="Ver perfil freelance en workana"
                        >
                            <AnimatedTitle
                                text={"Workana"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>

                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
