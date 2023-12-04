"use client";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import React from "react";
import {signOut, useSession} from "next-auth/react";

export default function Login_btm() {
    const { status } = useSession()
    // const name = session?.user?.name
    if (status === "authenticated") {
        return (
            <>
                <Link href={'/profile'} className="whitespace-nowrap">
                    你好
                </Link>
                <Button as={Link} color="danger"
                        variant="flat"
                        onClick={() => signOut()}>
                    注销
                </Button>
            </>
        );
    }
    return (
        <>
            <Button as={Link} color="primary"
                    href="/login" variant="flat">
                登录
            </Button>
        </>
    );
}