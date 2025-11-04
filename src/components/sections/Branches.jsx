"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Branches() {
  const globeRef = useRef(null);
  const { t } = useTranslation("");
  const [globeSize, setGlobeSize] = useState({ width: 1000, height: 1000 });
  const [currentCountry, setCurrentCountry] = useState("Armenia");
  const [markers, setMarkers] = useState([]);

  const countries = [
    { name: "Switzerland", lat: 36.8182, lng: 8.2275 },
    { name: "Austria", lat: 37.5162, lng: 14.5501 },
    { name: "Georgia", lat: 32.3154, lng: 43.3569 },
    { name: "Armenia", lat: 30.0691, lng: 45.0382 },
    { name: "Latvia", lat: 46.8796, lng: 24.6032 },
    { name: "Germany", lat: 41.1657, lng: 10.4515 },
    { name: "Czech Republic", lat: 39.8175, lng: 15.473 },
  ];

  const countryOffsets = {
    Switzerland: { xs: { lat: -2, lng: 4 },sm: { lat: -2, lng: 4 }, md: { lat: -7, lng: 2 }, lg: { lat: 0, lng: 0 } },
    Austria: { xs: { lat: -2, lng: 3 }, sm: { lat: -2, lng: 3 }, md: { lat: -7, lng: 2 }, lg: { lat: 0, lng: 0 } },
    Georgia: { xs: { lat: -3, lng: 4 },sm: { lat: -3, lng: 4 }, md: { lat: -5, lng: 2 }, lg: { lat: 0, lng: 0 } },
    Armenia: { xs: { lat: -3, lng: 5 },sm: { lat: -3, lng: 5 }, md: { lat: -7, lng: 2 }, lg: { lat: 0, lng: 0 } },
    Latvia: { xs: { lat: -2, lng: 5 }, sm: { lat: -2, lng: 5 }, md: { lat: -7, lng: 2 }, lg: { lat: 0, lng: 0 } },
    Germany: { xs: { lat: -5, lng: 4 },sm: { lat: -5, lng: 4 }, md: { lat: -8, lng: 2 }, lg: { lat: 0, lng: 0 } },
    "Czech Republic": { xs: { lat: -5, lng: 4 },sm: { lat: -5, lng: 4 }, md: { lat: -8, lng: 2 }, lg: { lat: 0, lng: 0 } },
  };

  const getAdjustedCoords = (country) => {
    const { width } = globeSize;
    const offsets =
      width < 640
        ? countryOffsets[country.name]?.xs
        :   width < 768 ? countryOffsets[country.name]?.sm :
        width < 1024
        ? countryOffsets[country.name]?.md
        : countryOffsets[country.name]?.lg;

        console.log({width,offsets});
        
    return {
      lat: country.lat + (offsets?.lat || 0),
      lng: country.lng + (offsets?.lng || 0),
    };
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setGlobeSize({ width: 1000, height: 1000 });
      } else if (window.innerWidth >= 768) {
        setGlobeSize({ width: 760, height: 760 });
      } else if (window.innerWidth >= 640) {
        setGlobeSize({ width: 560, height: 560 });
      } else {
        setGlobeSize({ width: 360, height: 360 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCountryClick = (country) => {
    const g = globeRef.current;
    if (!g) return;

    const { lat, lng } = getAdjustedCoords(country);
    setCurrentCountry(country.name);
    setMarkers([{ lat, lng, size: 1, color: "yellow" }]);

    // zoom in closer
    g.pointOfView({ lat, lng, altitude: 1.4 }, 1500);

    // optional: zoom back out after 4 seconds
    // setTimeout(() => {
    //   g.pointOfView({ lat, lng, altitude: 1.2 }, 2000);
    // }, 4000);
  };

  useEffect(() => {
    let pollId = null;
    let initialized = false;

    const tryInit = () => {
      const g = globeRef.current;
      if (!g || typeof g.pointOfView !== "function" || typeof g.controls !== "function") return;
      if (initialized) return;
      initialized = true;

      const armenia = countries.find((c) => c.name === "Armenia");
      const { lat, lng } = getAdjustedCoords(armenia);

      // initial zoomed-out view
      g.pointOfView({ lat, lng, altitude: 1.75 }, 0);

      const controls = g.controls();
      if (controls) {
        controls.autoRotate = false;
        controls.enableZoom = true;
      }

      if (pollId) clearInterval(pollId);
    };

    pollId = setInterval(tryInit, 100);
    return () => pollId && clearInterval(pollId);
  }, []);

  return (
    <div
      id="branches"
      className="relative lg:h-[765px] md:h-[600px] sm:h-[530px] h-[530px] flex justify-center mx-auto text-center py-16 overflow-hidden bg-[#f7f7f7]"
    >
      <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none select-none">
        <img
          src="/images/BRANCHES.png"
          alt=""
          className="lg:w-full lg:h-full w-[100%] h-[100%] md:inline-block hidden"
        />
      </div>

      <div className="container mx-auto text-center relative">
        <h3 className="font-bold sm:text-[50px] text-[30px] text-black mb-6">
          {t("ourBranches")}
        </h3>

        <div className="flex sm:gap-6 gap-2 justify-center flex-wrap mb-8 sm:min-h-[100px] min-h-[120px]">
          {countries.map((country) => (
            <button
              key={country.name}
              onClick={() => handleCountryClick(country)}
              className={`px-3 py-1 text-gray-700 hover:text-green-600 transition cursor-pointer ${
                currentCountry === country.name
                  ? "text-green-600 text-[22px] font-extrabold"
                  : "font-medium"
              }`}
            >
              {t(`countries.${country.name}`)}
            </button>
          ))}
        </div>

        <div
          className="relative mx-auto sm:mt-auto mt-[80px]"
          style={{
            width: `${globeSize.width}px`,
            height: `${globeSize.height}px`,
          }}
        >
          <div className="absolute bg-[#ffffff] lg:top-[456px] md:top-[291px] sm:top-[221px] top-[153px] h-[80px] shadow-[-0px_-20px_18px_#ffffff] w-[100%] z-50"></div>
          <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff29] z-50"></div>

          <Globe
            ref={globeRef}
            globeImageUrl="images/globe.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            width={globeSize.width}
            height={globeSize.height}
            // pointsData={markers}
            // pointLat="lat"
            // pointLng="lng"
            // pointAltitude={0.02}
            // pointColor="color"
            // pointRadius={0.5}
          />
        </div>
      </div>
    </div>
  );
}
