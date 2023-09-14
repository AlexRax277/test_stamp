import React, { useEffect, useState } from "react";

const Issuance = ({ product_idx, cb }) => {
    const [ctrlPressed, setCtrlPressed] = useState(false);
    const [altPressed, setAltPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Control") {
                setCtrlPressed(true);
            }
            if (e.key === "Alt") {
                setAltPressed(true);
            }
        };

        const handleKeyUp = (e) => {
            if (e.key === "Control") {
                setCtrlPressed(false);
            }
            if (e.key === "Alt") {
                setAltPressed(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    useEffect(() => {
        if (ctrlPressed || altPressed) {
            cb(true);
        } else {
            cb(false);
        }
    }, [ctrlPressed, altPressed, cb]);

    return (
        <div>
            {ctrlPressed || altPressed ? (
                <p>Продукт {product_idx} выдан</p>
            ) : (
                <p>Ошибка! Продукт недоступен</p>
            )}
        </div>
    );
};

export default Issuance;
