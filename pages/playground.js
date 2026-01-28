"use client";

import { NAVBAR_QUERY } from "@/utils/graphql";
import React, { useEffect, useState } from "react";

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;



const Playground = () => {
  const [navbarData, setNavbarData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNavbarData() {
      const res = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: NAVBAR_QUERY }),
      });

      const json = await res.json();
      if (json.errors) throw new Error(JSON.stringify(json.errors));

      const logoNode =
        json.data?.headerSettings?.navbarLogo?.navbarLogo?.node ?? null;

      return {
        topBarText: json.data?.headerSettings?.topBar?.topBarText ?? "",
        logo: logoNode
          ? { url: logoNode.sourceUrl, alt: logoNode.altText || "Logo" }
          : null,
        menuItems: json.data?.menu?.menuItems?.nodes ?? [],
      };
    }

    getNavbarData()
      .then((data) => setNavbarData(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  console.log("Navbar Data:", navbarData);

  return <div>playground</div>;
};

export default Playground;
