interface BorderBeamProps {
    duration?: number;
    delay?: number;
    size?: number; // length of the beam
    colorFrom?: string;
    colorTo?: string;
}

export function BorderBeam({
    duration = 4,
    delay = 0,
    size = 300,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
}: BorderBeamProps) {
    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--delay": delay,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                } as React.CSSProperties
            }
            className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:calc(var(--delay)*1s)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
        />
    );
}
