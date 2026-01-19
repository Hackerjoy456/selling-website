import { useRef, useState, MouseEvent } from "react";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    sensitivity?: number; // Lower is more sensitive. Default 20.
    maxTilt?: number; // Max degrees. Default 15.
}

export function TiltCard({ children, className = "", sensitivity = 20, maxTilt = 15 }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (e.clientX - centerX) / sensitivity;
        const y = (e.clientY - centerY) / sensitivity;

        // Clamp values
        const rotateX = Math.max(Math.min(-y, maxTilt), -maxTilt);
        const rotateY = Math.max(Math.min(x, maxTilt), -maxTilt);

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    const handleMouseEnter = () => {
        // Optional: Add logic here if needed
    };

    return (
        <div
            ref={ref}
            className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
                transformStyle: "preserve-3d",
            }}
        >
            {children}
        </div>
    );
}
