import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function CustomChart(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <LineChart
        width="1000"
        height="600"
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          name="Love for TS"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{r: 8}}
        />
        <Line
          name="Bugs in Code"
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

export default CustomChart;
