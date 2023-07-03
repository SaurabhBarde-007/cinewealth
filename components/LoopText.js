"use client";
import React, { useState, useEffect } from "react";
function LoopText() {
    const [items] = useState([
        { title: "short term" },
        { title: "high returns" },
    ]);

    const [index, setIndex] = useState(0);
    const [flickerTitle, setFlickerTitle] = useState({});

    useEffect(() => {
        const fadeIn = () => {
            let timer = setTimeout(() => {
                setFlickerTitle({
                    display: "inline",
                    opacity: "1",
                    transition: "opacity 1s",
                });
                stationary();
            }, 0);
            return () => {
                clearTimeout(timer);
            };
        };
        const stationary = () => {
            let timer = setTimeout(() => {
                setFlickerTitle({
                    display: "inline",
                    opacity: "1",
                });
                fadeOut();
            }, 1500);
            return () => {
                clearTimeout(timer);
            };
        };
        const fadeOut = () => {
            let timer = setTimeout(() => {
                setFlickerTitle({
                    display: "inline",
                    opacity: "0",
                    transition: "opacity 1s",
                });
                updateTitle();
            }, 1500);
            return () => {
                clearTimeout(timer);
            };
        };
        const updateTitle = () => {
            let timer = setTimeout(() => {
                setIndex((state) => (state + 1) % items.length);
                fadeIn();
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        };
        fadeIn();
    }, []);
    return <div style={flickerTitle} className="text-[#3c53ff] monu">{items[index].title}</div>;
}

export default LoopText;
