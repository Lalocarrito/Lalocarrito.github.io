"use client";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import React, { useEffect, useState } from "react";
import NyanCat from "./nyan-cat";
import { AnimatePresence } from "motion/react";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();
  useEffect(() => {
    if (!isDevToolsOpen) return;
    // console.log(
    //   "%cWhoa, look at you! 🕵️‍♂️\n\n" +
    //     "Peeking under the hood, eh? Just be careful, " +
    //     "you might find some 🐛 bugs that even I didn't know about! 😅\n\n" +
    //     "By the way, did you know the console is a portal to another dimension? 🌌 " +
    //     "Just kidding... or am I? 👽\n\n" +
    //     "Keep exploring, brave soul! 🛠️",
    //   "color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
    // );
    if (typeof console !== "undefined") {
      console.clear();
      console.log(
        "%c¡Vaya, mírate! 🕵️‍♂️\n" +
          "¡Parece que descubriste la consola secreta! 🔍\n" +
          "¿Quieres ver magia? ✨\n" +
          "Escribe %cmi nombre%c y presiona Enter. 🎩🐇",
        //   "Just press the %c'n'%c key and watch the magic happen! 🪄",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
      );

      ["josue", "Josue", "JOSUE"].forEach((name) => {
        // @ts-ignore
        if (Object.hasOwn(window, name)) return;
        Object.defineProperty(window, name, {
          get() {
            console.log(
              "%c✨ ¡Abracadabra! ✨\n\n" +
                "¡Acabas de invocar la magia de Josué! 🧙‍♂️\n" +
                "¿Qué? ¿No te impresiona? Bueno, recuerda: ¡un gran poder conlleva una gran responsabilidad! 💻⚡",

              "color: #FF4500; font-size: 18px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:10px"
            );

            const timer = setTimeout(() => {
              console.log(
                "%cPssttt! 🤫\n\n" +
                  "¿Te gustan los gatos? 😺 Si sí, presiona 'n' en la página y mira qué pasa. 🐱✨",
                "color: #FF69B4; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
              );
              clearTimeout(timer);
            }, 7000);
            return "";
          },
        });
      });
    }
  }, [isDevToolsOpen]);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
