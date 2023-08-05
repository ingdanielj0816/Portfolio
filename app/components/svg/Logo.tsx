import React from "react";
import Image from "next/image";

interface LogoProps {
    width?: number;
    height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 150, height = 150 }) => {
    return (
        <Image
            className={`w-${width} h-${height}`}
            src="/projects/logor1.png"
            alt="Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;
