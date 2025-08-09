import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameId = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, Math.min(window.innerHeight, 800));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.6, 1.2, 8),
      new THREE.OctahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshLambertMaterial({ color: 0x0EA5E9, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0x10B981, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0xF59E0B, transparent: true, opacity: 0.8 }),
    ];

    const meshes: THREE.Mesh[] = [];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.003 + index * 0.001;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      
      camera.aspect = window.innerWidth / Math.min(window.innerHeight, 800);
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, Math.min(window.innerHeight, 800));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div ref={mountRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi...I'm Shaik Azimunnisa
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A paspassionate coder and creator
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <a 
              href="mailto:shaikazimunnisa432@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="#projects"
              className="px-8 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero3D;