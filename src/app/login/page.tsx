"use client";
import React, { useState, useEffect } from "react";
import { Button} from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const App: React.FC = () => {
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");

    const handleGetCode = async () => {
        if (!phone) {
            alert("请输入手机号码");
        }

        const response = await fetch("/api/getcode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone }),
        });

        const data = await response.json();

        if (data.status == "123") {
            alert(data.message);
        }
    };

    const handleLogin = async () => {
        if (!phone || !code) {
            alert("请输入手机号码和验证码");
            return;
        }

        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone, code }),
        });

        const data = await response.json();

        // if (data.status == "123") {
            alert(data.message);
        // }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '20%', margin: 'auto', gap: '20px' }}>
            <Input
                type="text"
                label="Phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // style={{ marginBottom: '10px' }}
            />
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{ marginBottom: '10px', justifyContent: 'center', alignItems: 'center',}}>
                <Input
                    type="text"
                    label="Code"
                    placeholder="Enter your code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <Button color="primary" onClick={handleGetCode}>
                    获取验证码
                </Button>
            </div>
            <Button color="primary" onClick={handleLogin}>
                登录
            </Button>
        </div>
    );
};

export default App;
