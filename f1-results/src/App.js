import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import "./index.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1o3CgOq_vdSmh3tkkVG-S4y-X79tZlu0esJZ0WBGwzu8",
      simpleSheet: false,
    })
      .then((data) => setData(data.PointsTable))
      .catch((err) => console.warn("ERROR", err));
  }, []);

  console.log(data);

  return (
    <ul>
      {data.elements !== undefined &&
        data.elements.map((items) => (
          <li key={items.Driver}>{items.Driver}</li>
        ))}
    </ul>
  );
}
