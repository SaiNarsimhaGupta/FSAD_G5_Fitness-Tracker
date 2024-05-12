// Dashboard.jsx
import React, { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import ActivityChart from "../ActivityChart/ActivityChart";
import ActivitySummary from "../ActivitySummary/ActivitySummary"; // Import the ActivitySummary component
import {
  faRunning,
  faBicycle,
  faWalking,
  faSwimmer,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"; // Import additional icons
import "./Dashboard.css"; // Import CSS for styling
import ActivityLog from "../ActivityLog";
import ActivityLogForm from "../ActivityLogForm";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { helper } from "../../utils/function";

const Dashboard = () => {
  const [summary, setSummary] = useState([
    { icon: faRunning, title: "Running", value: "6 km" },
    { icon: faBicycle, title: "Cycling", value: "8 km" },
    { icon: faWalking, title: "Walking", value: "3 km" },
    { icon: faSwimmer, title: "Swimming", value: "1 km" },
  ]);

  // useEffect(() => {
  //   fetchSummary("user123");
  // }, []);

  // const fetchSummary = async (userId) => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/ftApiService/getUserDetails?userid=${userId}"
  //     );
  //     const data = await response.text();
  //     const data1= await helper(data.activities)
  //     setSummary(data1);
  //   } catch (error) {
  //     console.error("Error fetching version:", error);
  //   }
  // };

  // Sample data for line chart and bar chart
  const stepsData = [
    { name: "Day 1", steps: 5000 },
    { name: "Day 2", steps: 6000 },
    { name: "Day 3", steps: 7000 },
    { name: "Day 4", steps: 8000 },
    { name: "Day 5", steps: 9000 },
    { name: "Day 6", steps: 10000 },
    { name: "Day 7", steps: 11000 },
  ];

  // Map over the activities and create a new array with the desired format

  const [showModal, setShowModal] = useState(false);
  const [loggedActivities, setLoggedActivities] = useState([]);
  const [paired, setPaired] = useState(false);

  const handle = () => {
    setSummary([
      { icon: faRunning, title: "Running", value: "5 km" },
      { icon: faBicycle, title: "Cycling", value: "8 km" },
      { icon: faWalking, title: "Walking", value: "3 km" },
      { icon: faSwimmer, title: "Swimming", value: "1 km" },
    ]);
    setPaired(true);
  };

  const handleLogActivity = (newActivity) => {
    setLoggedActivities([...loggedActivities, newActivity]);
    setShowModal(false); // Close the modal after logging the activity
  };

  const summar = [
    {
      totalDistance: 35,
      totalCalories: 1200,
      averagePace: 5.5,
      heartRate: 110,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="dashboard">
        <div className="activity-cards">
          {/* Activity cards and log activity section */}
          <h2>Progress</h2>
          {summary.map((item) => (
            <ActivityCard
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
          <div className="activity-log">
            <h2>Activity Log</h2>

            <button
              className="activityButton"
              onClick={() => setShowModal(true)}
              style={{ width: "fit-content", marginTop: "20px" }}
            >
              Log Activity
            </button>
            <ActivityLog activities={loggedActivities} />
          </div>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ActivityLogForm onLogActivity={handleLogActivity} />
          </Modal>
        )}
        <div className="activity-charts">
          {/* Graphs */}
          <ActivityChart stepsData={stepsData} />
          {paired ? (
            <div style={{ display: "flex" }}>
              <div className="icon-tick">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h3>Paired</h3>
            </div>
          ) : (
            <button onClick={handle}> Integrate with smart watch</button>
          )}
        </div>
        <div className="activity-summary">
          {/* Activity summary */}
          <ActivitySummary
            totalDistance={summar[0].totalDistance}
            totalCalories={summar[0].totalCalories}
            averagePace={summar[0].averagePace}
            heartRate={summar[0].heartRate}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
