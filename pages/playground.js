"use client";

import { NAVBAR_QUERY } from "@/utils/graphql/graphql";
import React, { useEffect, useState } from "react";


const Playground = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    getNavbarData()
      .then((navbarData) => {
        if (navbarData) {
          setData(navbarData);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching navbar data:", error);
        setLoading(false);
      });
  }, []);
  console.log("Playground data:", data);

  return (
    <pre style={{ whiteSpace: "pre-wrap" }}>
      {loading ? "Loading..." : JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default Playground;
