"use client";
import React, { useState, useEffect } from "react";
import { Button} from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useForm, SubmitHandler } from "react-hook-form"
import {signIn, useSession} from "next-auth/react";
// import * as yup from "yup"
type LoginForm = {
    phone: string
    code: string
}
export default function APP(){
    const { data: session, status } = useSession()
    const [isGetCode, setIsGetCode] = React.useState(false);
    const [countDown, setCountDown] = React.useState(60);

    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm<LoginForm>()
    const onSubmit = async (data: LoginForm) => {
        await signIn("credentials", {data, callbackUrl: "/"})
    }
    const handleGetCode = async () => {
        const phone = getValues("phone");
        const res = await fetch("api-web/getCode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"phone": phone}),
        });
        if (res.ok){
            const data = await res.json();
            // if (data.status == "1") {
            //     alert(data.message);
            // }
            setIsGetCode(true)
            let timer = setInterval(() => {
                setCountDown((prevCountDown) => {
                    if (prevCountDown <= 1) {
                        clearInterval(timer);
                        setIsGetCode(false);
                        return 60;
                    } else {
                        return prevCountDown - 1;
                    }
                });
            }, 1000);
        }

    };
    if (status === "authenticated"){
        return (
            <div>不能重复登录</div>
        )
    }
        return (
            <form className="block mx-auto max-w-xs"
                  onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("phone", {
                        required: "请输入手机号",
                        // pattern: {
                        //     value: /^1\d{10}$/,
                        //     message: "手机号码必须以1开头，总共有11位数字",
                        // },
                    })}
                    type="text"
                    label="手机号"
                    variant="underlined"
                    className="my-2"
                />
                {errors.phone?.type === "required" && (
                    <p role="alert">请输入手机号</p>
                )}
                <Input
                    {...register("code",
                        {required: "请输入验证码",
                            // pattern: {
                            //     value: /^\d{6}$/,
                            //     message: "验证码必须是6位数字",}
                            })}
                    type="text"
                    label="验证码"
                    variant="underlined"
                    className="my-2"
                    endContent={isGetCode ?
                        <Button
                            radius="sm"
                            color="primary"
                        >{countDown} S</Button> :
                        <Button color="primary"
                                radius="sm"
                            onClick={handleGetCode}>
                        获取验证码
                        </Button>

                    }
                />
                {errors.code?.type === "required" && (
                    <p role="alert">请输入验证码</p>
                )}
                <Button color="primary"
                        radius="sm"
                        type="submit"
                        className="w-full">
                    登录
                </Button>
            </form>
        );
};