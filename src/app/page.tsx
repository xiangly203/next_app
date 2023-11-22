// app/page.tsx
// "use client"
// import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo";

const App: React.FC = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

      <div>
          <h1>Main page</h1>
      </div>);
}

export default App;
