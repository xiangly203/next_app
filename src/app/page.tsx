import React from "react";
import Post from "@/components/layout/post";
import {Pagination} from "@nextui-org/pagination";

export default function APP(){
    return (
        <div className="flex flex-col items-center justify-between min-h-screen p-8">
            <section className="flex-grow flex items-center mb-auto">
                <Post/>
            </section>
            <Pagination total={10} initialPage={1} className="mt-8"/>
        </div>
    );
}
