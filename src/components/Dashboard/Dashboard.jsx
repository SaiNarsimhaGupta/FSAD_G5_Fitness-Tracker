// Dashboard.jsx
import React,{useEffect, useState} from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import ActivityChart from '../ActivityChart/ActivityChart';
import ActivitySummary from '../ActivitySummary/ActivitySummary'; // Import the ActivitySummary component
import { faRunning, faBicycle, faWalking, faSwimmer,faCheck } from '@fortawesome/free-solid-svg-icons'; // Import additional icons
import './Dashboard.css'; // Import CSS for styling
import ActivityLog from '../ActivityLog';
import ActivityLogForm from '../ActivityLogForm';
import Modal from '../Modal/Modal';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Dashboard = () => {
  // Sample data for activity summary
  const totalDistance = 35; // in kilometers
  const totalCalories = 1200; // in kcal
  const averagePace = 5.5; // in minutes per kilometer
const heartRate=110
  // Sample data for line chart and bar chart
  const stepsData = [
    { name: 'Day 1', steps: 5000 },
    { name: 'Day 2', steps: 6000 },
    { name: 'Day 3', steps: 7000 },
    { name: 'Day 4', steps: 8000 },
    { name: 'Day 5', steps: 9000 },
    { name: 'Day 6', steps: 10000 },
    { name: 'Day 7', steps: 11000 },
  ];
  const [data,setData]=useState([])
useEffect(()=>{
  setData([
    {icon:faRunning,title:'Running', value:"6 km"},
    {icon:faBicycle,title:'Cycling', value:"8 km"},
    {icon:faWalking,title:'Walking', value:"3 km"},
    {icon:faSwimmer,title:'Swimming', value:"1 km"}

  ])
},[])
  // Mock data for activities like running, walking, swimming, cycling
  const activityData = [
    { name: 'Day 1', running: 30, walking: 45, swimming: 15, cycling: 60 },
    { name: 'Day 2', running: 45, walking: 60, swimming: 30, cycling: 45 },
    { name: 'Day 3', running: 60, walking: 75, swimming: 45, cycling: 30 },
    { name: 'Day 4', running: 75, walking: 90, swimming: 60, cycling: 15 },
    { name: 'Day 5', running: 90, walking: 105, swimming: 75, cycling: 30 },
    { name: 'Day 6', running: 105, walking: 120, swimming: 90, cycling: 45 },
    { name: 'Day 7', running: 120, walking: 135, swimming: 105, cycling: 60 },
  ];

  const summary=[
    {icon:faRunning,title:'Running', value:"6 km"},
    {icon:faBicycle,title:'Cycling', value:"8 km"},
    {icon:faWalking,title:'Walking', value:"3 km"},
    {icon:faSwimmer,title:'Swimming', value:"1 km"}

  ]
  const [showModal, setShowModal] = useState(false);
  const [loggedActivities, setLoggedActivities] = useState([]);
const [paired,setPaired]=useState(false)

const handle=()=>{
  setData([
    {icon:faRunning,title:'Running', value:"5 km"},
    {icon:faBicycle,title:'Cycling', value:"8 km"},
    {icon:faWalking,title:'Walking', value:"3 km"},
    {icon:faSwimmer,title:'Swimming', value:"1 km"}
  ])
  setPaired(true)
}

  const handleLogActivity = (newActivity) => {
    setLoggedActivities([...loggedActivities, newActivity]);
    setShowModal(false); // Close the modal after logging the activity
  };
  return (
    <>
      <NavBar />
      <div className="dashboard">
        <div className="activity-cards">
          {/* Activity cards and log activity section */}
          <h2>Progress</h2>
          {data.map((item) => (
            <ActivityCard icon={item.icon} title={item.title} value={item.value} />
          ))}
          <div className='activity-log'>
      <h2>Activity Log</h2>

          <button className='activityButton' onClick={() => setShowModal(true)} style={{ width: 'fit-content', marginTop: '20px' }}>
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
          <ActivityChart stepsData={stepsData} activityData={activityData} />
        {paired?
        <div style={{display:'flex'}}>
         <div className="icon-tick">
        <FontAwesomeIcon icon={faCheck} />
      </div>
         <h3>Paired</h3>
         </div>:<button onClick={handle}> Integrate with smart watch</button>} 
        
        </div>
        <div className="activity-summary">
          {/* Activity summary */}
          <ActivitySummary totalDistance={totalDistance} totalCalories={totalCalories} averagePace={averagePace} heartRate={heartRate}/>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
