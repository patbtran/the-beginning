
import { useEffect } from "react";

function CursorSparkles() {
  useEffect(() => {
    let lastStar = 0;
    const stars = new Set();

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const createStar = (e) => {
      if (e.pointerType !== "mouse" || reducedMotion.matches) return;

      // Controls how frequently stars appear
      if (Date.now() - lastStar < 25) return;
      lastStar = Date.now();

      const star = document.createElement("span");

      // Star colors and sizes
      const colors = ["#c4b5f5", "#ffffff", "#f4c9e8", "#ae9cde"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 13 + 5;

      star.textContent = "✦";
      star.setAttribute("aria-hidden", "true");

      Object.assign(star.style, {
        position: "fixed",
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        fontSize: `${size}px`,
        color: color,
        pointerEvents: "none",
        zIndex: "9999",
        lineHeight: "1",
        textShadow: `0 0 7px ${color}`,
      });

      document.body.appendChild(star);
      stars.add(star);

      // Rotate, shrink, and fade
      const animation = star.animate(
        [
          {
            transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
            opacity: 1,
          },
          {
            transform: "translate(-50%, -50%) rotate(90deg) scale(0)",
            opacity: 0,
          },
        ],
        {
          duration: 700,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      // Remove the star after its animation finishes
      animation.onfinish = () => {
        star.remove();
        stars.delete(star);
      };
    };

    window.addEventListener("pointermove", createStar);

    return () => {
      window.removeEventListener("pointermove", createStar);
      stars.forEach((star) => star.remove());
      stars.clear();
    };
  }, []);

  return null;
}

export default CursorSparkles;
