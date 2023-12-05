"use client"
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,

	NavbarItem,

} from "@nextui-org/navbar";
import React, { useState } from "react";
import { Button} from "@nextui-org/button";
import { Link} from "@nextui-org/link";
import Login_btm from "@/components/layout/login-btm";

export default function Navbar(){

	return (
		<NextUINavbar>
			<NavbarContent>
				<NavbarBrand>
					<Link color="foreground" href="/">
						Logo
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="/">
						吐槽区
					</Link>
				</NavbarItem>
				{/*<NavbarItem isActive>*/}
				{/*	<Link href="#" aria-current="page">*/}
				{/*		二手圈*/}
				{/*	</Link>*/}
				{/*</NavbarItem>*/}
				<NavbarItem>
					<Link color="foreground" href="/coupon">
						优惠券
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
				<Login_btm/>
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
}
