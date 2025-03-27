// src/components/LiveCamera.tsx
import { useRef, useEffect } from "react";
import { io } from "socket.io-client";

interface LiveCameraProps {
  socketUrl: string; // URL server backend, misalnya http://localhost:3000
  width?: number; // Lebar canvas
  height?: number; // Tinggi canvas
}

const LiveCamera: React.FC<LiveCameraProps> = ({
  socketUrl,
  width = 520,
  height = 400,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const socket = io(socketUrl);

    socket.on("camera_frames", (data: { image: string }) => {
      if (canvasRef.current && data.image) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          const img = new Image();
          img.onload = () => {
            ctx.clearRect(
              0,
              0,
              canvasRef.current!.width,
              canvasRef.current!.height
            );
            ctx.drawImage(
              img,
              0,
              0,
              canvasRef.current!.width,
              canvasRef.current!.height
            );
          };
          img.src = "data:image/jpeg;base64," + data.image;
        }
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [socketUrl]);

  return (
    <div className="flex-1 self-stretch relative bg-white dark:bg-[#1f0059] rounded-md border border-[#e6e6e6] dark:border-transparent">
      {/* <div className="absolute left-[160px] lg:top-[276px] md:top-[218px] text-black dark:text-white text-4xl font-medium font-['Roboto'] leading-snug">
              Live Camera
            </div> */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-full"
      />
    </div>
  );
};

export default LiveCamera;
