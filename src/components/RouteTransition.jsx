import React from "react";
import { useLocation } from "react-router-dom";

export default function RouteTransition({ children }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="route-anim">
      {children}
    </div>
  );
}
