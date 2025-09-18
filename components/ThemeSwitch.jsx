"use client";

import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Switch } from "@heroui/switch";
import clsx from "clsx";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";

export default function ThemeSwitch({ className }) {
    const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();
    const isLight = theme === "light" || isSSR;

    const toggleTheme = () => {
        setTheme(isLight ? "dark" : "light");
    };

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