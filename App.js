import React from "react";
import ReactDOM from "react-dom/client";

/**
 * - Header Component
 *   - Logo Component
 *   - Navbar Component
 * - Main Body Component
 *   - Main Restobar Container
 *     - Restaurant Card Container
 * - Footer Component
 *   - Copyrights
 *   - Links
 */

const root = ReactDOM.createRoot(document.getElementById("root")); // Root element mapping
const ForNestComponent = function () {
  return (
    <h3 className="component3">
      This is h3 component <sub>sub of the h3 component</sub>
    </h3>
  );
};
const HeadingComponent = () => (
  <div className="container">
    <h1 className="component">This is h1 functional component!</h1>
    <h2 className="component2">This is h2 functional component</h2>
    <ForNestComponent />
  </div>
);

root.render(<HeadingComponent />);
