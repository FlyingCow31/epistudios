import { useState } from "react";

export const useCooldownTimer = (countdownItem: string) => {
    const [isCooldown, setIsCooldown] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const startCooldownTimer = (cooldownUntil: number) => {
        setIsCooldown(true);

        const interval = setInterval(() => {
            const remaining = cooldownUntil - Date.now();
            const seconds = Math.ceil(remaining / 1000);

            if (remaining <= 0) {
                clearInterval(interval);
                setIsCooldown(false);
                setSecondsLeft(0);
                localStorage.removeItem(countdownItem);
                return;
            }

            setSecondsLeft(seconds);
        }, 1000);
    };

    return { isCooldown, setIsCooldown, secondsLeft, startCooldownTimer };
};