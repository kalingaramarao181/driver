import { IoStarSharp } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./index.css";

const Feedback = () => {
  let data;
  let analyticsData;
  const feedbacks = [
    {
      user: {
        userName: "Kalinga Ramarao",
        userPhoto:
          "https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-avatar-profile-man-png-image_13026634.png",
      },
      review:
        "Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.",
      rating: "4.5",
      stars: 5,
      drivingFeedback: "Good",
    },
    {
      user: {
        userName: "Manoj Kumar",
        userPhoto:
          "https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-avatar-profile-man-png-image_13026634.png",
      },
      review:
        "Excellent service: Great service is appreciated, but excellent service deserves to be celebrated. Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.",
      rating: "4.5",
      stars: 2,
      drivingFeedback: "Avarage",
    },
    {
      user: {
        userName: "Suresh Attada",
        userPhoto:
          "https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-avatar-profile-man-png-image_13026634.png",
      },
      review:
        "Above and beyond: Great service is appreciated, but excellent service deserves to be celebrated. Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.",
      rating: "4.5",
      stars: 4,
      drivingFeedback: "Good",
    },
    {
      user: {
        userName: "Kalinga Ramarao",
        userPhoto:
          "https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-avatar-profile-man-png-image_13026634.png",
      },
      review:
        "Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.",
      rating: "4.5",
      stars: 5,
      drivingFeedback: "Good",
    },
    {
      user: {
        userName: "Manoj Kumar",
        userPhoto:
          "https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-avatar-profile-man-png-image_13026634.png",
      },
      review:
        "Excellent service: Great service is appreciated, but excellent service deserves to be celebrated.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.",
      rating: "4.5",
      stars: 2,
      drivingFeedback: "Avarage",
    },
    {
      user: {
        userName: "Suresh Attada",
        userPhoto:
          "https://png.pngtree.com/png-clipart/20231001/original/pngtree-3d-illustration-avatar-profile-man-png-image_13026634.png",
      },
      review:
        "Above and beyond: For drivers who go beyond expectations. Expert navigation: A driver who is an expert at navigating.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.Neat and tidy: A clean car is always appreciated. Great amenities: A driver who has great amenities.",
      rating: "4.5",
      stars: 4,
      drivingFeedback: "Good",
    },
  ];

  data = [
    { reviewUser: "Exlent", reviews: 6 },
    { reviewUser: "Good", reviews: 5 },
    { reviewUser: "B Avarage", reviews: 4 },
    { reviewUser: "Below Avarage", reviews: 3 },
    { reviewUser: "Poor", reviews: 2 },
  ];

  analyticsData = [
    { reviewUser: "Exlent", reviews: 6 },
    { reviewUser: "Good", reviews: 5 },
    { reviewUser: "Avarage", reviews: 4 },
    { reviewUser: "Below Avarage", reviews: 3 },
    { reviewUser: "Poor", reviews: 2 },
  ];

  const generateStars = (starCount) => {
    const filledStars = [...Array(starCount)].map(() => (
      <IoStarSharp className="filled-star" />
    ));

    const emptyStars = [...Array(5 - starCount)].map(() => (
      <IoStarSharp className="empty-star" />
    ));
    return (
      <>
        {filledStars}
        {emptyStars}
      </>
    );
  };

  const colors = [
    "#F331AC",
    "#31ECF3",
    "#F39931",
    "#51F927",
    "#8E3BF3",
    "#F43F3F",
    "#F47038",
    "#F4B838",
    "#C1F438",
    "#38F49C",
    "#3898F4",
    "#7038F4",
    "#F23B66",
  ];

  return (
    <div className="feedback-main-container">
      <div className="feedback-cards">
        <div className="feedback-card">
          <h1>4.1</h1>
          <h1>{generateStars(5)}</h1>
          <p>Based on 24 Reviews</p>
        </div>
        <div className="feedback-card-1">
          {
            <BarChart
              width={560}
              height={350}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="reviewUser" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar barSize={40} dataKey="reviews" fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          }
          {
            <ResponsiveContainer width="70%" height={300}>
              <PieChart>
                <Pie
                  cx="70%"
                  cy="40%"
                  data={data}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="35%"
                  outerRadius="50%"
                  dataKey="reviews"
                >
                  {data.map((each, index) => (
                    <Cell
                    fontSize={"5px"}
                      name={each.reviewUser}
                      fill={colors[colors.length - 1 - index]}
                      key={index}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  iconType="circle"
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
              </PieChart>
            </ResponsiveContainer>
          }
        </div>
      </div>
      <div className="feedbacks-card">
        {feedbacks.map((eachFeedback, index) => (
          <div className="feedbacks-container" key={index}>
            <div className="feedback-profile-container">
              <img
                alt="Profile"
                className="feedback-profile"
                src={eachFeedback.user.userPhoto}
              />
              <div>
                <p className="feedback-username">
                  {eachFeedback.user.userName}
                </p>
                {generateStars(eachFeedback.stars)}
              </div>
            </div>
            <p className="feedback-review">{eachFeedback.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
