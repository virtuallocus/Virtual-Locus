"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function LaunchCelebration() {
    useEffect(() => {
        const isCelebrationEnabled = typeof window !== 'undefined' && localStorage.getItem('showLaunchCelebration') === 'true';
        const celebrationTimeStr = typeof window !== 'undefined' ? localStorage.getItem('launchCelebrationTime') : null;

        if (isCelebrationEnabled && celebrationTimeStr) {
            const celebrationStartTime = parseInt(celebrationTimeStr, 10);
            const duration = 30 * 1000; // 30 seconds
            const now = Date.now();

            // Check if 30 seconds have passed already to avoid re-triggering across sessions
            if (now - celebrationStartTime < duration) {
                const end = celebrationStartTime + duration;

                const frame = () => {
                    const timeLeft = end - Date.now();

                    if (timeLeft <= 0) {
                        localStorage.removeItem('showLaunchCelebration');
                        localStorage.removeItem('launchCelebrationTime');
                        return;
                    }

                    // Fire some confetti from both sides
                    confetti({
                        particleCount: 2,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: ['#56B2C7', '#87D1DC', '#FFFFFF']
                    });
                    confetti({
                        particleCount: 2,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: ['#56B2C7', '#87D1DC', '#FFFFFF']
                    });

                    requestAnimationFrame(frame);
                };

                frame();
            } else {
                // Celebration duration already passed
                localStorage.removeItem('showLaunchCelebration');
                localStorage.removeItem('launchCelebrationTime');
            }
        }
    }, []);

    return null;
}
