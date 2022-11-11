import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const steps = [
    {
      element: ".step-1",
      intro:
        "This is where you should turn your attention to after a successful login",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".step-2",
      intro: "Click here to start searching for flights!",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
  ];

  return (
    <div>
      <Steps enabled={true} steps={steps} initialStep={0} />
      <div className="card step-1" style={{ height: "60vh" }}>
        <div className="card-body">
          <h5 className="card-title display-1">
            {" "}
            “Wherever you go becomes a part of you somehow”
          </h5>
          <p className="card-text display-6">Anita Desai</p>
          <button
            type="button"
            className="btn btn-primary step-2"
            onClick={() => navigate("/book")}
          >
            BOOK NOW!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
