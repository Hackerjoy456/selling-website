import { useEffect, useState } from "react";

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-px z-[100] bg-transparent">
            {/* Main beam matching the divider style: transparent -> primary/50 -> transparent */}
            <div
                className="h-full bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_15px_rgba(0,234,255,0.5)]"
                style={{ width: `${scrollProgress * 100}%`, transition: "width 0.1s ease-out" }}
            />
            {/* Secondary blur layer for the glow effect */}
            <div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm pointer-events-none"
                style={{ width: `${scrollProgress * 100}%`, transition: "width 0.1s ease-out" }}
            />
        </div>
    );
}
