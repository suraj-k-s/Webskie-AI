"use client"

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function MobileSidebar() {

    const [isMounted, setIsMounted] = useState<boolean>(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return;

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant='ghost' size='icon' className="md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className="bg-[#111827]" >
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}