interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
    return (
        <span className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-70 animate-[glitch-anim-1_2.5s_infinite_linear_alternate-reverse] translate-x-[2px]"
                aria-hidden="true"
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-70 animate-[glitch-anim-2_3s_infinite_linear_alternate-reverse] -translate-x-[2px]"
                aria-hidden="true"
            >
                {text}
            </span>
        </span>
    );
}
