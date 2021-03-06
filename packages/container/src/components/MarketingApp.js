import React, { useRef, useEffect } from "react";
import { mount as marketingMount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = marketingMount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathName }) => {
          if (history.location.pathname !== nextPathName) {
            history.push(nextPathName);
          }
        },
      });
      history.listen(onParentNavigate)
    }
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
