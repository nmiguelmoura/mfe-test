import React, { useRef, useEffect } from "react";
import { mount as authMount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = authMount(ref.current, {
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

export default AuthApp;
