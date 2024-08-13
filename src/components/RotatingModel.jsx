import React, { useRef, useState, useEffect, useCallback } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingModel = ({ children, onReset }) => {
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [resetInProgress, setResetInProgress] = useState(false);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setPreviousMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y,
    };

    const deltaRotation = {
      x: deltaMove.y * 0.005,
      y: deltaMove.x * 0.005,
    };

    setRotation((prevRotation) => ({
      x: prevRotation.x + deltaRotation.x,
      y: prevRotation.y + deltaRotation.y,
    }));

    setPreviousMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const resetRotation = useCallback(() => {
    return new Promise((resolve) => {
      setTargetRotation({ x: 0, y: 0 });
      setResetInProgress(true);

      const checkResetCompletion = () => {
        if (!resetInProgress) {
          resolve();
        } else {
          requestAnimationFrame(checkResetCompletion); // Continue checking until reset is complete
        }
      };

      requestAnimationFrame(checkResetCompletion);
    });
  }, [resetInProgress]);

  useEffect(() => {
    if (onReset) {
      onReset(resetRotation);
    }
  }, [onReset, resetRotation]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, previousMousePosition]);

  useFrame(() => {
    if (groupRef.current) {
      if (resetInProgress) {
        const damping = 0.1; // Adjust for smoother or faster transition
        setRotation((prevRotation) => {
          const newRotation = {
            x: prevRotation.x + (targetRotation.x - prevRotation.x) * damping,
            y: prevRotation.y + (targetRotation.y - prevRotation.y) * damping,
          };

          groupRef.current.rotation.x = newRotation.x;
          groupRef.current.rotation.y = newRotation.y;

          if (
            Math.abs(newRotation.x - targetRotation.x) < 0.001 &&
            Math.abs(newRotation.y - targetRotation.y) < 0.001
          ) {
            setResetInProgress(false);
            return targetRotation;
          }

          return newRotation;
        });
      } else {
        groupRef.current.rotation.x = rotation.x;
        groupRef.current.rotation.y = rotation.y;
      }
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default RotatingModel;
