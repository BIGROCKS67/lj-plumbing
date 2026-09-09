"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { siteConfig } from "@/data/site";

export function CoverageMap() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;

    let map: LeafletMap | undefined;
    let cancelled = false;
    let resizeTimer: number | undefined;
    let cleanup: (() => void) | undefined;

    void import("leaflet").then((mod) => {
      if (cancelled || !el.current) return;

      const L = mod.default;
      const { lat, lng, radiusM, label } = siteConfig.coverage;

      map = L.map(el.current, {
        center: [lat, lng],
        zoom: 9,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 18,
      }).addTo(map);

      const circle = L.circle([lat, lng], {
        radius: radiusM,
        color: "#2eb5e8",
        weight: 2,
        fillColor: "#2eb5e8",
        fillOpacity: 0.18,
        interactive: false,
      }).addTo(map);

      const pin = L.divIcon({
        className: "lj-map-pin",
        html: `<span class="lj-map-pin-dot" aria-hidden="true"></span><span class="lj-map-pin-label">Adderbury</span>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      L.marker([lat, lng], { icon: pin, title: label, alt: label }).addTo(map);
      map.fitBounds(circle.getBounds(), { padding: [32, 32], maxZoom: 10 });

      resizeTimer = window.setTimeout(() => {
        map?.invalidateSize();
        map?.fitBounds(circle.getBounds(), { padding: [32, 32], maxZoom: 10 });
      }, 250);

      map.on("click", () => map?.scrollWheelZoom.enable());
      map.on("mouseout", () => map?.scrollWheelZoom.disable());

      const onResize = () => map?.invalidateSize();
      window.addEventListener("resize", onResize);

      cleanup = () => {
        window.removeEventListener("resize", onResize);
      };
    });

    return () => {
      cancelled = true;
      if (resizeTimer) window.clearTimeout(resizeTimer);
      cleanup?.();
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={el}
      className="lj-coverage-map h-[22rem] w-full bg-paper sm:h-[28rem] lg:h-[36rem]"
      role="img"
      aria-label="Map showing L J Plumbing and Heating Services based in Adderbury, with a coverage circle across Banbury and the surrounding counties."
    />
  );
}
