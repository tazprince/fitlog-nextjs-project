"use client";
import React, { createContext, useState } from "react";

export const FitLogContext = createContext();

export const FitLogProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const addToPlan = (workout) => {
    setPlan((currentPlan) => {
      //jodi already add thake
      const alreadyExist = currentPlan.some((item) => item.id === workout.id);
      if (alreadyExist) {
        return currentPlan;
      }
      return [...currentPlan, workout];
    });
  };

  //Remove workout section
  const removeFromPlan = (id) => {
    setPlan((currentPlan) => currentPlan.filter((item) => item.id !== id));
  };

  //for saveitems

  const addToSaved = (workout) => {
    setSaved((currentSaved) => {
      const alreadyExists = currentSaved.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  //remove save workout
  const removeFromSaved = (id) => {
    setSaved((currentSaved) => currentSaved.filter((item) => item.id !== id));
  };

  const shareData = {
    plan,
    saved,
    addToPlan,
    removeFromPlan,
    addToSaved,
    removeFromSaved,
  };

  return (
    <FitLogContext.Provider value={shareData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogContext;
