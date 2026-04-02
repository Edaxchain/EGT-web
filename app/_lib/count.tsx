"use client"; 

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
    value: string | number; // รองรับทั้ง "-15.00" และ -15
    duration?: number;
    className?: string;
}

export default function CountUpNumber({ value, duration = 2, className }: CountUpNumberProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState("0");

    const stringValue = String(value).replace(/,/g, "");
    const numericValue = parseFloat(stringValue) || 0;
    const suffix = stringValue.replace(/[0-9,.-]+/g, "");
    const decimalMatches = stringValue.match(/\.(\d+)/);
    const decimalPlaces = decimalMatches ? decimalMatches[1].length : 0;

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, numericValue, {
                duration: duration,
                ease: [0.22, 1, 0.36, 1],
                onUpdate(latest) {
                    const formatted = latest.toLocaleString("en-US", {
                        minimumFractionDigits: decimalPlaces,
                        maximumFractionDigits: decimalPlaces,
                    });
                    setDisplayValue(formatted + suffix);
                },
            });
            return () => controls.stop();
        }
    }, [isInView, numericValue, duration, suffix, decimalPlaces]);

    return (
        <span ref={ref} className={className}>
            {displayValue}
        </span>
    );
}