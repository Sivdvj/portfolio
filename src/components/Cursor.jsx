import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    document.addEventListener("mousemove", handleMove);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    const hoverables = document.querySelectorAll("a, button, .project-card");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
        cursor.style.opacity = "0.5";

        ring.style.width = "60px";
        ring.style.height = "60px";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.opacity = "1";

        ring.style.width = "36px";
        ring.style.height = "36px";
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div id="cursor" className="cursor" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  );
}
