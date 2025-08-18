'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@heroui/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { ServiceData } from "./ServicesData";
import { IoIosArrowDown } from "react-icons/io";
import XButton from "./XButton";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} position="static" maxWidth="full" className="bg-white">
            <NavbarBrand>
                <Link href="/" color="foreground" onClick={() => setIsMenuOpen(false)}>
                    <Image
                        src="/APW_logo3.jpg"
                        alt="Company Logo"
                        width={100}
                        radius="none"
                    />
                <div>
                    {/* <p className="font-bold text-inherit text-xl">{siteConfig.name}</p> */}
                </div>
                </Link>
            </NavbarBrand>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {/* Desktop Navigation */}
            <NavbarContent justify="end" className="hidden sm:flex">
                {siteConfig.navItems.map(({ label, href }) => (
                <NavbarItem key={label}>
                    <Link href={href} color="foreground" isBlock>
                    {label}
                    </Link>
                </NavbarItem>
                ))}

                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Link color="foreground" 
                            showAnchorIcon
                            anchorIcon={<IoIosArrowDown />}
                            isBlock>
                                Services
                            </Link>
                        </DropdownTrigger>
                    </NavbarItem>

                    <DropdownMenu
                        aria-label="Services menu"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        {ServiceData.map(({id, title}) => (
                            <DropdownItem
                                key={id}
                                href={`/services/${id}`}
                                >
                                {title}
                                </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>

                <XButton 
                    color='secondary' 
                    radius='md' 
                    size='md' 
                />
            </NavbarContent>

            {/* Mobile Navigation */}
            <NavbarMenu className="text-center pt-24">
                {siteConfig.navItems.map(({ label, href }, index) => (
                <NavbarMenuItem key={`${label}-${index}`}>
                    <Link
                    href={href}
                    color="foreground"
                    className="text-2xl pb-10"
                    onClick={() => setIsMenuOpen(false)} // 👈 closes the menu
                    >
                    {label}
                    </Link>
                </NavbarMenuItem>
                ))}
                <XButton 
                    color='secondary' 
                    radius='md' 
                    size='md' 
                />
            </NavbarMenu>
        </Navbar>
    );
}

export default Navigation;