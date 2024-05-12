import {
  faRunning,
  faBicycle,
  faWalking,
  faSwimmer,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export const helper = (data) => {
  const summary2 = data.map((activity) => {
    let icon;
    switch (activity.name) {
      case "Running":
        icon = faRunning;
        break;
      case "Cycling":
        icon = faBicycle;
        break;
      case "Walking":
        icon = faWalking;
        break;
      case "Swimming":
        icon = faSwimmer;
        break;
      default:
        icon = "default-icon";
    }

    // Calculate distance in km
    const distanceInKm = `${activity.currentdistance} km`;

    return { icon, title: activity.name, value: distanceInKm };
  });

  return summary2;
};
