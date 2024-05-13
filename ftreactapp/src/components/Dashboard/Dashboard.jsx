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
  faBowlRice,
} from "@fortawesome/free-solid-svg-icons"; // Import additional icons
import "./Dashboard.css"; // Import CSS for styling
import ActivityLog from "../ActivityLog";
import ActivityLogForm from "../ActivityLogForm";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pie, Cell, PieChart, Tooltip } from "recharts";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from "react-bootstrap/Table";

const Dashboard = () => {
  // Sample data for activity summary
  const totalDistance = 35; // in kilometers
  const totalCalories = 1200; // in kcal
  const averagePace = 5.5; // in minutes per kilometer
  const heartRate = 110;
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
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      { icon: faRunning, title: "Running", id:101, value: "6 km" },
      { icon: faBicycle, title: "Cycling",id:102, value: "8 km" },
      { icon: faWalking, title: "Walking",id:103, value: "3 km" },
      { icon: faSwimmer, title: "Swimming",id:104, value: "1 km" },
    ]);
  }, []);
  // Mock data for activities like running, walking, swimming, cycling
  const activityData = [
    { name: "Day 1", running: 30, walking: 45, swimming: 15, cycling: 60 },
    { name: "Day 2", running: 45, walking: 60, swimming: 30, cycling: 45 },
    { name: "Day 3", running: 60, walking: 75, swimming: 45, cycling: 30 },
    { name: "Day 4", running: 75, walking: 90, swimming: 60, cycling: 15 },
    { name: "Day 5", running: 90, walking: 105, swimming: 75, cycling: 30 },
    { name: "Day 6", running: 105, walking: 120, swimming: 90, cycling: 45 },
    { name: "Day 7", running: 120, walking: 135, swimming: 105, cycling: 60 },
  ];

  const summary = [
    { icon: faRunning, title: "Running", value: "6 km" },
    { icon: faBicycle, title: "Cycling", value: "8 km" },
    { icon: faWalking, title: "Walking", value: "3 km" },
    { icon: faSwimmer, title: "Swimming", value: "1 km" },
  ];



  const COLORS = ["#0088FE", "#FF8042"];

  const [showModal, setShowModal] = useState(false);
  const [loggedActivities, setLoggedActivities] = useState([]);
  const [paired, setPaired] = useState(false);

  const handle = () => {
    setData([
      { icon: faRunning, title: "Running", id:101, store:runningActivityList  },
      { icon: faBicycle, title: "Cycling", id:102, store:cyclingActivityList },
      { icon: faWalking, title: "Walking", id:103, store:walkingActivityList },
      { icon: faSwimmer, title: "Swimming", id:104, store:swimmingActivityList },
    ]);
    setPaired(true);
  };

  const handleLogActivity = (newActivity) => {
    setLoggedActivities([...loggedActivities, newActivity]);
    setShowModal(false); // Close the modal after logging the activity
  };

  const [goalsPop, setGoalsPop] = useState(false);
  const [intakePop, setIntakePop] = useState(false);
  const [activeId, setActiveId] = useState(101);

  // -------------------------------

  const [userDetails, setUserDetails] = useState();
  const [selectedFood, setSelectedFood] = useState(null);
  const [eatenWeight, setEatenWeight] = useState("");
  const [consumedItems, setConsumedItems] = useState([]);
  const [totalCaloriesIntake, setTotalCaloriesIntake] = useState(0);

  const [runningDistance, setRunningDistance] = useState("");
  const [cyclingDistance, setCyclingDistance] = useState("");
  const [walkingDistance, setWalkingDistance] = useState("");
  const [swimmingDistance, setSwimmingDistance] = useState("");

   const [runningActivityList, setRunningActivityList] = useState([]);
  const [cyclingActivityList, setCyclingActivityList] = useState([]);
  const [walkingActivityList, setWalkingActivityList] = useState([]);
  const [swimmingActivityList, setSwimmingActivityList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  const foodItems = [
    { name: "rice", calories: 100 },
    { name: "idle", calories: 80 },
    { name: "roti", calories: 120 },
    { name: "milkshake", calories: 150 },
  ];
  const [summarydata, setSummaryData] = useState([
    { name: "Total Calories Burned", value: 70 },
    { name: "Total Calories Intake", value: 30 },
  ]);

  // ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const fetchData = async () => {
    const postData = {
      "name": "manohar1245",
      "email": "manohar1245@gamil.com",
      "password": "sai@123",
      "role": "user",
      "height": 165,
      "weight": 50
    }
    try {
      // Fetch data from the API
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData
),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("data", data);
      setUserDetails(data);
      // Update state with response data
      // setResponseData(data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };

  const fetchActivityData = async () => {
    try {
      // Fetch data from the API
      const response = await fetch(
        `http://localhost:8080/activity/activitiesByUserId?userId=${userDetails.userId}`,
        {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('accessToken')
        },
      }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Activitydata", data);
      setCompleteList(data);
      setRunningActivityList(getActivityList(101,data));
      setCyclingActivityList(getActivityList(102,data))
      setWalkingActivityList(getActivityList(103,data))
      setSwimmingActivityList(getActivityList(104,data))
      console.log("runningActivityList", runningActivityList)

      // setUserDetails(data);
      // Update state with response data
      // setResponseData(data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchActivityData();
  }, []);

  function getActivityList(activityId, data) {
    return data.filter(activity => activity.activityId === activityId);
  }

  //-----------

  function calculateBMI(weight, height) {
    // Convert height from centimeters to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
  }

  const calculateCalories = () => {
    // Perform calculation based on selectedFood and weight
    // For now, let's assume it's a dummy function

    return selectedFood ? (selectedFood.calories * eatenWeight) / 100 : 0;
  };

  function sumCurrentDuration(list) {
    // console.log("sdfghjk",list)
     return list.reduce((total, activity) => total + activity.currentDuration, 0);
}

  const handleIntakeSubmit = () => {
    if (selectedFood && eatenWeight) {
      const calories = calculateCalories();
      // Update consumed items
      const newItem = {
        id: consumedItems.length + 1, // Generate a unique ID (you may use a better method)
        food: selectedFood.name,
        eatenWeight: eatenWeight,
        calories: calories,
      };
      setConsumedItems([...consumedItems, newItem]);
      // Reset form fields
      setSelectedFood(null);
      setEatenWeight("");
    }
  };

  useEffect(()=>{
    const getTotalConsumedCalories = () => {
      let totalCalories = 0;
      consumedItems.forEach((item) => {
        totalCalories += item.calories;
      });
      return totalCalories;
    };

    setTotalCaloriesIntake(getTotalConsumedCalories());
    const totalCaloriesIntake = getTotalConsumedCalories();
    const updatedSummaryData = [
      { name: "Total Calories Burned", value: 70 },
      { name: "Total Calories Intake", value: totalCaloriesIntake },
    ];
  
    setSummaryData(updatedSummaryData);

  },[consumedItems])

  const handleGoalsSubmit = async () => {
    const postData = {
      userId: userDetails.userId,
      dtoList: [
        {
          activityId: "101",
          activityName: "Running",
          goalDuration: "60",
          goalDistance: runningDistance,
        },
        {
          activityId: "102",
          activityName: "Cycling",
          goalDuration: "60",
          goalDistance: cyclingDistance,
        },
        {
          activityId: "103",
          activityName: "Walking",
          goalDuration: "60",
          goalDistance: walkingDistance,
        },
        {
          activityId: "104",
          activityName: "Swimming",
          goalDuration: "60",
          goalDistance: swimmingDistance,
        },
      ],
    };

    try {
      const response = await fetch(' http://localhost:8080/activity/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Request successful');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNutritionSubmit = (userDetails) => {
    const postData = {
      userId: userDetails?.userId,
      nutrition: consumedItems,
    };

    // Make the POST request
    fetch("http://localhost:8080/nutrition/nutrition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': sessionStorage.getItem('accessToken')
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setIntakePop(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(()=>{
    fetch(`http://localhost:8080/nutrition/nutrition`)
      .then((response) => response.json())
      .then((data) => setConsumedItems(data))
      .catch((error) => console.error("Error fetching food items:", error));

  },[intakePop])

  return (
    <>
      <NavBar />
      <div
        className=""
        style={{
          height: "20vh !important",
          width: "100vw",
          margin: "1vh 2vw",
          padding: "10px",
          borderRadius: "1rem",
          backgroundColor: "",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "2vw" }}>
          <h2>Health Matrix:</h2>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            <span style={{ color: "#000" }}>Total Calories Burned</span>/{" "}
            <span style={{ color: "#000" }}>Total Calories Intake</span> :
            100/{totalCaloriesIntake}
          </p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            <span style={{ color: "#000" }}>Body Mass Index</span> :
            {calculateBMI(userDetails?.weight, userDetails?.height).toFixed(2)}
          </p>
        </div>

        <div style={{ height: "20vh", width: "20vw", backgroundColor: "" }}>
          {summarydata&&<PieChart width={250} height={150}>
            <Pie
              data={summarydata}
              dataKey="value"
              cx={120}
              cy={65}
              innerRadius={30}
              outerRadius={60}
              fill="#8884d8"
              // label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>}
        </div>
        <div style={{ height: "20vh", width: "20vw", backgroundColor: "" }}>
          <p className="" style={{ fontSize: "20px" }}>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>100</span>{" "}
            more Calories to achieve Target
          </p>
          <Button
            onClick={() => {
              setGoalsPop(true);
            }}
          >
            Set Target
          </Button>
          {goalsPop && (
            <Modal
              onClose={() => {
                setGoalsPop(false);
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  width: "27.4vw",
                  borderEndEndRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  Set Targets
                </p>
                {/* <DropdownButton
                id="dropdown-basic-button"
                title="Select Activity"
              >
                <Dropdown.Item href="#/action-1">Playing</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Swimming</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Playing</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Playing</Dropdown.Item>
              </DropdownButton> */}

                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text>Add Running Distance</InputGroup.Text>
                  <Form.Control aria-label="in km" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text>Add Clycling Distance</InputGroup.Text>
                  <Form.Control aria-label="in km" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text>Add Walking Distance</InputGroup.Text>
                  <Form.Control aria-label="in km" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text>Add Swimming Distance</InputGroup.Text>
                  <Form.Control aria-label="in km" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <Button
                  variant="secondary"
                  onClick={handleGoalsSubmit}
                >
                  Submit
                </Button>
              </div>
            </Modal>
          )}
        </div>

        <div
          style={{
            height: "20vh",
            width: "20vw",
            backgroundColor: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              height: "5vh",
              margin: "",
              width: "15vw",
              backgroundColor: "#6DC5D1",
            }}
            onClick={() => {
              setIntakePop(true);
            }}
          >
            Add Calories Consumed
            <FontAwesomeIcon
              icon={faBowlRice}
              style={{ marginLeft: "20px", scale: "1.4" }}
            ></FontAwesomeIcon>
          </button>

          {intakePop && (
            <Modal
              onClose={() => {
                setIntakePop(false);
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  width: "27.4vw",
                  borderEndEndRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                {/* <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Set Targets
              </p> */}
                <DropdownButton
                  id="dropdown-basic-button"
                  title={selectedFood ? selectedFood.name : "Select Food Item"}
                  className="mt-3"
                >
                  {foodItems.map((item) => (
                    <Dropdown.Item
                      key={item.name}
                      onClick={() => setSelectedFood(item)}
                    >
                      {item.name}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>

                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text>Add Weight in Grams</InputGroup.Text>
                  <Form.Control
                    type="number"
                    aria-label="in grm"
                    value={eatenWeight}
                    onChange={(e) => setEatenWeight(e.target.value)}
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <Button variant="secondary" onClick={()=>handleNutritionSubmit(userDetails)}>
                  Add Item
                </Button>

                <Table striped bordered hover className="mt-3">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Food Item</th>
                      <th>weight</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consumedItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.food}</td>
                        <td>{item.weight} g</td>
                        <td>{item.calories} kcal</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Modal>
          )}
        </div>
        {/* <Pie width={400} height={400} data={summarydata}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie data={summarydata} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
      </div>
      <div className="dashboard">
        <div className="activity-cards" style={{ height: "60vh" }}>
          {/* Activity cards and log activity section */}
          <h3 style={{ margin: "0", marginBottom: "10px" }}>Progress</h3>
          <div className="activitycontainer">
            {data.map((item, index) => (
              <ActivityCard
                icon={item.icon}
                title={item.title}
                data={getActivityList(item.id,completeList)}
                value={sumCurrentDuration(getActivityList(item.id,completeList) || 0)}
                onClick={()=>{console.log("clicked");setActiveId(item.id)}}
                setActiveId={setActiveId}
                id={item.id}
                activeId={activeId}
                userDetails={userDetails}
                fetchActivityData={fetchActivityData}
              />
            ))}
          </div>

          {/* <div className='activity-log'>
           <h2>Activity Log</h2>

          <button className='activityButton' onClick={() => setShowModal(true)} style={{ width: 'fit-content', marginTop: '20px' }}>
            Log Activity
          </button>
        <ActivityLog activities={loggedActivities} />
        </div> */}
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ActivityLogForm onLogActivity={handleLogActivity} />
          </Modal>
        )}
        <div
          className="activity-charts"
          style={{ height: "60vh", padding: "0" }}
        >
          <ActivityChart stepsData={stepsData} activityData={activityData} data={getActivityList(activeId,completeList)}/>
        </div>
        <div
          className="activity-summary"
          style={{ height: "60vh", padding: "0" }}
        >
          <ActivitySummary
            totalDistance={totalDistance}
            totalCalories={totalCalories}
            averagePace={averagePace}
            heartRate={heartRate}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
