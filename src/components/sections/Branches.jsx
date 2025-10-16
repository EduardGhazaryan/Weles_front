"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Branches() {
  const globeRef = useRef();

  const countries = [
    { name: "Switzerland", lat: 46.8182, lng: 8.2275 },
    { name: "Austria", lat: 47.5162, lng: 14.5501 },
    { name: "Georgia", lat: 42.3154, lng: 43.3569 },
    { name: "Armenia", lat: 40.0691, lng: 45.0382 },
    { name: "Latvia", lat: 56.8796, lng: 24.6032 },
    { name: "Germany", lat: 51.1657, lng: 10.4515 },
    { name: "Czech Republic", lat: 49.8175, lng: 15.473 },
  ];

  const handleCountryClick = (country) => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: country.lat, lng: country.lng, altitude: 1.5 },
        1200
      );
    }
  };

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    // 1️⃣ Disable all interactions
    // const controls = globe.controls();
    // controls.enableZoom = false;
    // controls.enablePan = false;
    // controls.enableRotate = false;

    // // 2️⃣ Apply a clipping plane to cut the bottom half
    // const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0); // cut below equator
    // globe.globeMaterial().clippingPlanes = [plane];
    // globe.globeMaterial().clipShadows = true;
    // globe.globeMaterial().needsUpdate = true;

    // 3️⃣ Set fixed camera to top view
    console.log("------------------")
    globeRef.current.pointOfView({ lat: 40.0691, lng: 45.0382, altitude: 1.5 },
        1200);
  }, [globeRef.current]);

  return (
    <div id="branches" className="container mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-6">Our Branches</h3>


      <div className="flex gap-6 justify-center flex-wrap mb-8">
        {countries.map((c) => (
          <button
            key={c.name}
            onClick={() => handleCountryClick(c)}
            className="px-3 py-1 text-gray-700 hover:text-green-600 font-medium transition"
          >
            {c.name}
          </button>
        ))}
      </div>

     
      <div className="relative mx-auto w-[700px] h-[700px] ">
        <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff29] z-50"></div>
        <Globe
          ref={globeRef}
          globeImageUrl="images/globe.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          width={700}
          height={700}
        />
        <div className="absolute w-full h-[50%] bottom-0 left-0 bg-[#fff] z-50"></div>
   
        {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" /> */}
      </div>
    </div>
  );
}
