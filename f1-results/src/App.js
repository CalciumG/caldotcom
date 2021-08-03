import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { Card } from "antd";
import "antd/dist/antd.css";

import "./index.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect((data) => {
    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/1o3CgOq_vdSmh3tkkVG-S4y-X79tZlu0esJZ0WBGwzu8/edit?usp=sharing",
      simpleSheet: false,
    })
      .then((data) => setData(data.PointsTable))
      .catch((err) => console.warn("ERROR", err));
  }, []);

  return (
    <ul>
      {data.elements !== undefined &&
        data.elements.map((items) => (
          <Card
            key={items.Driver}
            title="Default size card"
            style={{ width: 300 }}
          >
            <p>{items.Driver}</p>
            <p>{items.ChampionshipPoints}</p>
            <p>Card content</p>
          </Card>
        ))}
    </ul>
  );
}
