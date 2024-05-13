// ActivityCard.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Modal from "../Modal/Modal"; // Import the Modal component
import "./ActivityCard.css"; // Import CSS for styling
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const ActivityCard = ({
  icon,
  title,
  data,
  value,
  setActiveId,
  id,
  activeId,
  userDetails,
  fetchActivityData
}) => {
  const [showPopup, setShowPopup] = useState(false);

  console.log(title, data);

  useEffect(() => {
    if (parseFloat(value) === 5) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [value]); // Update the effect to watch for changes in 'value'

  const handleShare = (platform) => {
    let url;
    switch (platform) {
      case "facebook":
        url = "https://www.facebook.com/";
        break;
      case "instagram":
        url = "https://www.instagram.com/";
        break;
      case "twitter":
        url = "https://twitter.com/";
        break;
      default:
        url = "";
    }
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleIconKeyPress = (event, platform) => {
    if (event.key === "Enter") {
      handleShare(platform);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  const handlePopupOpen = () => {
    setShowPopup(true);
  };
  console.log("hello");

  const [distance, setDistance] = useState(0);

  const handleSubmit = () => {
    // Prepare the data for the POST request
    const postData = {
      userId: userDetails?.userId, // Update with the actual user ID
      activityId: activeId, // Update with the actual activity ID
      currentDuration: 0, // Update with the actual duration if applicable
      currentDistance: parseFloat(distance), // Use the distance entered in the form
    };

    // Make the POST request here
    fetch("http://localhost:8080/activity/setActivityProgress", {
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
        // Handle successful response
        // For example, close the modal
        fetchActivityData();
        setShowPopup(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors if needed
      });
      fetchActivityData();

  };

  useEffect(()=>{
    fetchActivityData();
  },[showPopup])

  return (
    <div
      className={`activity-card-summary ${
        activeId === id ? "activeColor" : ""
      }`}
      onClick={() => {
        setActiveId(id);
      }}
    >
      <div className="icon" style={{ width: "2vw" }}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="details">
        <h3 className="mt-3" style={{ fontSize: "14px" }}>
          {title}
        </h3>
        <p>{value}</p>
        {showPopup && (
          <Modal onClose={handlePopupClose}>
            <div
              style={{
                backgroundColor: "white",
                width: "27.4vw",
                borderEndEndRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Add Progress for {title}
              </p>
              <InputGroup className="mb-3 mt-3">
                <InputGroup.Text>Add Distance</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  aria-label="in km"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>

              <Button variant="secondary" onClick={handleSubmit}>
                Submit
              </Button>

              {/* <DropdownButton
                id="dropdown-basic-button"
                title="Select Activity"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton> */}

              {/* <div className="social-icons">
              <FontAwesomeIcon
                icon={faFacebook}
                onClick={() => handleShare('facebook')}
                onKeyPress={(e) => handleIconKeyPress(e, 'facebook')}
                tabIndex="0"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                onClick={() => handleShare('instagram')}
                onKeyPress={(e) => handleIconKeyPress(e, 'instagram')}
                tabIndex="0"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                onClick={() => handleShare('twitter')}
                onKeyPress={(e) => handleIconKeyPress(e, 'twitter')}
                tabIndex="0"
              />
            </div> */}
            </div>
          </Modal>
        )}
      </div>
      <div
        style={{
          backgroundColor: "",
          height: "2vh",
          width: "8vw",
          marginLeft: "auto",
        }}
      >
        <ProgressBar
          variant="success"
          now={(value / data[0]?.goalDistance) * 100}
        />
      </div>
      <div className="icon" style={{ marginLeft: "10px" }}>
        <FontAwesomeIcon icon={faPlusCircle} onClick={handlePopupOpen} />
      </div>
    </div>
  );
};

export default ActivityCard;
