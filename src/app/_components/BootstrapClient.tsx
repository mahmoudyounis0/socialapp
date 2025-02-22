"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap loaded");
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap:", err);
      });
  }, []);

  return null; 
}
