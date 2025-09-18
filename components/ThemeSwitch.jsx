"use client";

import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Switch } from "@heroui/switch";
import clsx from "clsx";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { useEffect, useState } from "react";

export default function ThemeSwitch({ className }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();
    const isLight = theme === "light" || isSSR;

    const toggleTheme = () => {
        setTheme(isLight ? "dark" : "light");
    };

    if (!mounted) return null;
    
    return (
        <div>
            <Switch
                isSelected={!isLight}
                onChange={toggleTheme}
                className={clsx(
                    "transition-opacity hover:opacity-80 cursor-pointer mx-auto flex",
                    className
                )}
                color="primary"
                size="lg"
                thumbIcon={({isSelected, className}) =>
                    isSelected ? <PiNumberCircleTwoFill className={className} /> : <PiNumberCircleOneFill className={className} />
                }/>
                <p className="hidden md:block font-bold text-sm">
                    {theme === 'light' ? 'Unbranded' : 'Branded'}
                </p>
        </div>
        
    );
}