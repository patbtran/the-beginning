
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
/*useRef, allows referncing and storing data
useState, allows updating information
forwardref, allows contactpage.jsx to access the drawings from drawingcanvas.jsx
useImperativeHandle, allows control of exactly what functionality the parent component can access
*/


const DrawingCanvas = forwardRef(function DrawingCanvas(props, ref) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [penColor, setPenColor] = useState("#555555");


  // Allows ContactPage to retrieve the drawing as a PNG
  useImperativeHandle(ref, () => ({
    getDrawingBlob: () => {
      return new Promise((resolve) => {
        canvasRef.current.toBlob((blob) => {
          resolve(blob);
        }, "image/png");
      });
    }
  }));


  const getPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    return {
      x: (e.clientX - rect.left) * (e.currentTarget.width / rect.width),
      y: (e.clientY - rect.top) * (e.currentTarget.height / rect.height)
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getPosition(e);

    isDrawing.current = true;
    canvas.setPointerCapture(e.pointerId);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = penColor;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Draw a dot even if the pointer doesn't move
    ctx.lineTo(x + 0.01, y + 0.01);
    ctx.stroke();
  };

  const draw = (e) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getPosition(e);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearDrawing = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
        onLostPointerCapture={stopDrawing}
        className="absolute inset-0 w-full h-full touch-none cursor-crosshair"
      />

      <button
        type="button"
        onClick={clearDrawing}
        className="absolute bottom-2 right-2 bg-[#a9cdea] text-[#333] text-xs px-3 py-1 rounded-md hover:bg-[#8bbbe0]"
      >
        Clear
      </button>
    </>
  );
});

export default DrawingCanvas;
