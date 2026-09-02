"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


/* -- WebGL availability check ---------------------------------------- */
function isWebGLAvailable() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/* -- Rotating Torus Knot mesh ---------------------------------------- */
function RotatingKnot({ isDragging, isMobile, prefersReducedMotion }) {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    if (prefersReducedMotion || isDragging.current) return;
    meshRef.current.rotation.y += delta * 0.45;
    meshRef.current.rotation.x += delta * 0.12;
  });

  const tubularSeg = isMobile ? 80 : 200;
  const radialSeg = isMobile ? 12 : 20;

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.32, tubularSeg, radialSeg]} />
      {/* meshPhysicalMaterial: reliable across all WebGL1/2 drivers,
          gives a metallic-glass look in the pink/purple palette */}
      <meshPhysicalMaterial
        color="#EC4899"
        emissive="#A855F7"
        emissiveIntensity={0.25}
        metalness={0.6}
        roughness={0.15}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

/* -- Full scene ------------------------------------------------------ */
function Scene({ isMobile, prefersReducedMotion }) {
  const isDragging = useRef(false);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color="#EC4899" intensity={4} />
      <pointLight position={[-5, -3, -5]} color="#C084FC" intensity={2} />
      <pointLight position={[0, 4, 2]} color="#ffffff" intensity={0.6} />

      <RotatingKnot
        isDragging={isDragging}
        isMobile={isMobile}
        prefersReducedMotion={prefersReducedMotion}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.75}
        enableDamping
        dampingFactor={0.08}
        onStart={() => { isDragging.current = true; }}
        onEnd={() => { isDragging.current = false; }}
      />
    </>
  );
}

/* -- Error Boundary -------------------------------------------------- */
class Hero3DErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Hero3D] WebGL error caught by boundary:", err.message);
    }
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/* -- Exported component ----------------------------------------------- */
export default function Hero3D() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [webGLOK, setWebGLOK] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    setWebGLOK(isWebGLAvailable());
    setMounted(true);
  }, []);

  if (!mounted || !webGLOK) return null;

  return (
    <Hero3DErrorBoundary>
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        frameloop={isMobile || prefersReducedMotion ? "demand" : "always"}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Scene isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />
      </Canvas>
    </Hero3DErrorBoundary>
  );
}
