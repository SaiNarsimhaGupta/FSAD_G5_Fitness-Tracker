// Graphs.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

export const BarGraph = ({ data }) => {
  console.log("Barchart",data)
  return (
    <div style={{ marginBottom: '0px' , backgroundColor:"white", borderRadius:"10px"}}>
      <BarChart width={750} height={380} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="date" />
        <YAxis dataKey="currentDuration"/>
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="currentDuration" name="Current Duration" fill="#8884d8" />
        
      </BarChart>
    </div>
  );
};

export const ActivityGraph = ({ data }) => {
  return (
    <div style={{height:"100%", width:"100%"}}>
      <h2>Tracker</h2>
      {/* <LineChart width={100} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="running" name="Running" stroke="#8884d8" />
        <Line type="monotone" dataKey="walking" name="Walking" stroke="#82ca9d" />
        <Line type="monotone" dataKey="swimming" name="Swimming" stroke="#ffc658" />
        <Line type="monotone" dataKey="cycling" name="Cycling" stroke="#ff7300" />
      </LineChart> */}
    </div>
  );
};

const Graphs = ({ stepsData, activityData, data }) => {
  return (
    <div>
      <h3 style={{margin:"0", marginBottom:"10px"}}>{data[0]?.activityName}Tracker</h3>
      <BarGraph data={data} />
      {/* <ActivityGraph data={activityData} /> */}
    </div>
  );
};

export default Graphs;
