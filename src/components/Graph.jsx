import { ResponsiveAreaBump } from "@nivo/bump";
import { useState } from "react";
import { useEffect } from "react";
import data from "./data.json";

const Graph = () => {
  const [filmData, setFilmData] = useState([]);
  const directorData = {};
  const directorDataArray = [];

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => {
        setFilmData(data);
      });
  }, []);

  if (filmData.length) {
    filmData.forEach(({ director, release_date }) => {
      console.log("hi");
      directorData[director]
        ? directorData[director].push(release_date)
        : (directorData[director] = [release_date]);
    });
    for (let director in directorData) {
      directorData[director].sort();
      let coordArray = [];
      console.log(directorData[director]);
      for (let i = 1986; i <= 2016; i++) {
        if (directorData[director].includes(i.toString())) {
          coordArray.push({ x: i, y: Math.random() });
        } else {
          coordArray.push({ x: i, y: 0.1 });
        }
      }
      directorDataArray.push({ id: director, data: coordArray });
    }
  }

  return (
    <main>
      <ResponsiveAreaBump
        data={directorDataArray}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={40}
        align="end"
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 2,
            spacing: 20,
          },
        ]}
        fill={[
          {
            match: {
              id: "Gorō Miyazaki",
            },
            id: "dots",
          },
          {
            match: {
              id: "Yoshifumi Kondō",
            },
            id: "lines",
          },
        ]}
        startLabel="id"
        axisTop={{
          tickSize: 1,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
      />
    </main>
  );
};

export default Graph;
