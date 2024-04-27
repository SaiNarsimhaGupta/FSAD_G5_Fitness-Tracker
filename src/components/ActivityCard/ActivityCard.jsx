// ActivityCard.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Modal from '../Modal/Modal'; // Import the Modal component
import './ActivityCard.css'; // Import CSS for styling

const ActivityCard = ({ icon, title, value }) => {
  const [showPopup, setShowPopup] = useState(false);

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
      case 'facebook':
        url = 'https://www.facebook.com/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/';
        break;
      case 'twitter':
        url = 'https://twitter.com/';
        break;
      default:
        url = '';
    }
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleIconKeyPress = (event, platform) => {
    if (event.key === 'Enter') {
      handleShare(platform);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
console.log('hello')
  return (
    <div className="activity-card">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{value}</p>
        {showPopup && (
          <Modal onClose={handlePopupClose}>
            <h2>Congratulations!</h2>
            <p>You've reached your Milestone!</p>
            <div className="social-icons">
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
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
