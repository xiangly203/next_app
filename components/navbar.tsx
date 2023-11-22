"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
// import { Kbd } from "@nextui-org/kbd";
// import { Link } from "@nextui-org/link";
// import { Input } from "@nextui-org/input";
//
// import { link as linkStyles } from "@nextui-org/theme";
//
// import { siteConfig } from "../config/site";
// import NextLink from "next/link";
// import clsx from "clsx";
//
// import { ThemeSwitch } from "./theme-switch";
// import {
// 	TwitterIcon,
// 	GithubIcon,
// 	DiscordIcon,
// 	HeartFilledIcon,
// 	SearchIcon,
// } from "./icons";
//
// import { Logo } from "./icons";
// import React, {useState} from "react";
//
// export const Navbar = () => {
//
// 	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//
// 	const menuItems: string[] = [
// 		"Profile",
// 		"Dashboard",
// 		"Activity",
// 		"Analytics",
// 		"System",
// 		"Deployments",
// 		"My Settings",
// 		"Team Settings",
// 		"Help & Feedback",
// 		"Log Out",
// 	];
//
// 	const searchInput = (
// 		<Input
// 			aria-label="Search"
// 			classNames={{
// 				inputWrapper: "bg-default-100",
// 				input: "text-sm",
// 			}}
// 			endContent={
// 				<Kbd className="hidden lg:inline-block" keys={["command"]}>
// 					K
// 				</Kbd>
// 			}
// 			labelPlacement="outside"
// 			placeholder="Search..."
// 			startContent={
// 				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
// 			}
// 			type="search"
// 		/>
// 	);
//
// 	return (
// 		<NextUINavbar maxWidth="xl" position="sticky" onMenuOpenChange={setIsMenuOpen}>
// 			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
// 				<NavbarMenuToggle
// 					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
// 					className="sm:hidden"
// 				/>
// 				<NavbarBrand as="li" className="gap-3 max-w-fit">
// 					<NextLink className="flex justify-start items-center gap-1" href="/">
// 						<Logo />
// 						<p className="font-bold text-inherit">ACME</p>
// 					</NextLink>
// 				</NavbarBrand>
// 				<ul className="hidden lg:flex gap-4 justify-start ml-2">
// 					{siteConfig.navItems.map((item) => (
// 						<NavbarItem key={item.href}>
// 							<NextLink
// 								className={clsx(
// 									linkStyles({ color: "foreground" }),
// 									"data-[active=true]:text-primary data-[active=true]:font-medium"
// 								)}
// 								color="foreground"
// 								href={item.href}
// 							>
// 								{item.label}
// 							</NextLink>
// 						</NavbarItem>
// 					))}
// 				</ul>
// 			</NavbarContent>
//
// 			<NavbarContent
// 				className="hidden sm:flex basis-1/5 sm:basis-full"
// 				justify="end"
// 			>
// 				<NavbarItem className="hidden sm:flex gap-2">
// 					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
// 						<TwitterIcon className="text-default-500" />
// 					</Link>
// 					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
// 						<DiscordIcon className="text-default-500" />
// 					</Link>
// 					<Link isExternal href={siteConfig.links.github} aria-label="Github">
// 						<GithubIcon className="text-default-500" />
// 					</Link>
// 					<ThemeSwitch />
// 				</NavbarItem>
// 				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
// 				<NavbarItem className="hidden md:flex">
// 					<Button
//             isExternal
// 						as={Link}
// 						className="text-sm font-normal text-default-600 bg-default-100"
// 						href={siteConfig.links.sponsor}
// 						startContent={<HeartFilledIcon className="text-danger" />}
// 						variant="flat"
// 					>
// 						Sponsor
// 					</Button>
// 				</NavbarItem>
// 			</NavbarContent>
//
// 			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
// 				<Link isExternal href={siteConfig.links.github} aria-label="Github">
// 					<GithubIcon className="text-default-500" />
// 				</Link>
// 				<ThemeSwitch />
// 				<NavbarMenuToggle />
// 			</NavbarContent>
// 			<NavbarMenu>
// 				{menuItems.map((item, index) => (
// 					<NavbarMenuItem key={`${item}-${index}`}>
// 						<Link
// 							color={
// 								index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
// 							}
// 							className="w-full"
// 							href="#"
// 							size="lg"
// 						>
// 							{item}
// 						</Link>
// 					</NavbarMenuItem>
// 				))}
// 			</NavbarMenu>
//
// 		</NextUINavbar>
// 	);
// };
// app/page.tsx
// "use client"
import React, { useState } from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo";
import { Link, Button} from "@nextui-org/react";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const menuItems: string[] = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	return (
		<NextUINavbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				{/*<NavbarBrand>*/}
				{/*    <AcmeLogo />*/}
				{/*    <p className="font-bold text-inherit">ACME</p>*/}
				{/*</NavbarBrand>*/}
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="/login" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
							}
							className="w-full"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	);
}

export default Navbar;
