import React, { useRef, useEffect } from "react";
import { mount as marketingMount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    if(ref.current) {
      marketingMount(ref.current)
    }
  }, [])

  return <div ref={ref}></div>;
};

export default MarketingApp;
