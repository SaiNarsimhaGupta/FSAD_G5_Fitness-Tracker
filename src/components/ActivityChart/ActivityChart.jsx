// Graphs.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const BarGraph = ({ data }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Step Tracker</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="steps" name="Steps" fill="#8884d8" />
        
      </BarChart>
    </div>
  );
};

const ActivityGraph = ({ data }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Activity Tracker</h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="running" name="Running" stroke="#8884d8" />
        <Line type="monotone" dataKey="walking" name="Walking" stroke="#82ca9d" />
        <Line type="monotone" dataKey="swimming" name="Swimming" stroke="#ffc658" />
        <Line type="monotone" dataKey="cycling" name="Cycling" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

const Graphs = ({ stepsData, activityData }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
      <BarGraph data={stepsData} />
      <ActivityGraph data={activityData} />
    </div>
  );
};

export default Graphs;
