'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@heroui/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { Button } from "@heroui/button";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { websiteData } from "@/config/data";
import { Avatar } from "@heroui/avatar";
import ThemeSwitch from './ThemeSwitch';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme();
    const isBranded = theme === 'dark'
    const themeData =  websiteData.elite
    const { services } = themeData;

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}  maxWidth="full" className="py-4" position="static">
            <NavbarBrand>
                <Link href="/" color="background" onClick={() => setIsMenuOpen(false)}>
                    <Avatar src="/elite_logo.webp" />

                    <div>
                        <p className={clsx(
                            "font-mono ml-2 font-bold text-inherit leading-4 uppercase hidden md:block")}>Elite Lawn <br/>& Landscape</p>
                    </div>
                </Link>
            </NavbarBrand>

            {/* Desktop Navigation */}
            <NavbarContent justify="center" className="hidden lg:flex bg-secondary rounded-full px-8">
                {siteConfig.navItems
                .filter(({ label }) => label !== 'Services')
                .map(({ label, href }, idx) => (
                    <NavbarItem key={idx}>
                        <Link href={`${href}`} className="text-background py-4" isBlock>
                            {label}
                        </Link>
                </NavbarItem>
                ))}

                <Dropdown className="bg-background">
                    <NavbarItem>
                        <DropdownTrigger>
                            <Link className="text-background py-4"
                            showAnchorIcon
                            anchorIcon={<IoIosArrowDown />}
                            isBlock>
                                Our Services
                            </Link>
                        </DropdownTrigger>
                    </NavbarItem>

                    <DropdownMenu
                        aria-label="Services menu"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        {services.serviceData.map(({ id, title }) => (
                            <DropdownItem
                                key={id}
                                href={`/pages/${id}`}
                                >
                                {title}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarContent justify="end">
                {/* <ThemeSwitch /> */}

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />

                <Button 
                    as={Link} 
                    color="primary" 
                    isExternal
                    href={siteConfig.company.phone}
                    variant="bordered"
                    // radius="full"
                    className="font-semibold hidden lg:flex"
                >
                    Call Us Today!
                </Button>
            </NavbarContent>
                
            

            {/* Mobile Navigation */}
            <NavbarMenu className="text-center pt-12">
                {siteConfig.navItems
                .filter(({ label }) => label !== 'Services')
                .map(({ label, href }, index) => (
                <NavbarMenuItem key={`${label}-${index}`}>
                    <Link
                        href={href}
                        color="foreground"
                        className="text-xl pb-6"
                        onClick={() => setIsMenuOpen(false)} // 👈 closes the menu
                    >
                    {label}
                    </Link>
                </NavbarMenuItem>
                ))}

                {services.serviceData.map(({ id, title }) => (
                <NavbarMenuItem key={id}>
                    <Link
                        href={`/pages/${id}`}
                        color="foreground"
                        className="text-xl pb-6"
                        onClick={() => setIsMenuOpen(false)} // 👈 closes the menu
                    >
                        {title}
                    </Link>
                </NavbarMenuItem>
                ))}
                <Button 
                    as={Link} 
                    color="primary" 
                    isExternal
                    href={siteConfig.company.lead}
                    variant="bordered"
                    size="lg"
                    // radius="full"
                    className="font-semibold"
                >
                    Request Info
                </Button>
            </NavbarMenu>
        </Navbar>
    );
}

export default Navigation;