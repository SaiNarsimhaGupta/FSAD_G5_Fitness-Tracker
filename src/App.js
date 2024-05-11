import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NutritionTracking from "./components/NutritionTracking/NutritionTracking";
import Workouts from "./components/Workouts/Workouts";
import GoalSetting from "./components/GoalSetting/GoalSetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="nutrition" element={<NutritionTracking />} />
        <Route path="goals" element={<GoalSetting />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
