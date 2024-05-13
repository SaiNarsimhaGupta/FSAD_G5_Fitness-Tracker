import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import NutritionTracking from './components/NutritionTracking/NutritionTracking';
import Workouts from './components/Workouts/Workouts'
import GoalSetting from './components/GoalSetting/GoalSetting';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="nutrition" element={<NutritionTracking />} />
            <Route path="goals" element={<GoalSetting />} />
            <Route path="workouts" element={<Workouts/>} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
   
      
        
    
    
  );
}

export default App;
