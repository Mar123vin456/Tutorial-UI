"use client";

import React, { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";

export type Action = { type: "back" } | { type: "next" };

export interface State {
  currentStep: number;
  maxStep: number;
}

export const tutorialContextInitialState: State = {
  currentStep: 1,
  maxStep: 6,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "back":
      if (state.currentStep > 0) {
        return {
          ...state,
          currentStep: state.currentStep - 1,
        };
      }
      return {
        ...state,
      };

    case "next":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    default:
      return state;
  }
};

export const TutorialContext = createContext<
  | {
      prevStep: () => void;
      nextStep: () => void;
      state: State;
    }
  | undefined
>(undefined);

export function useTutorialContext() {
  const context = React.useContext(TutorialContext);

  if (context === undefined) {
    throw new Error("useCheckoutContext must be used within a CheckoutContextProvider");
  }

  return context;
}

interface TutorialContextProviderProps {
  children: ReactNode;
  initialState: State;
}

export const TutorialContextProvider = ({ children, initialState }: TutorialContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const prevStep = () => dispatch({ type: "back" });
  const nextStep = () => dispatch({ type: "next" });

  const value = { prevStep, nextStep, state };

  return <TutorialContext.Provider value={value}>{children}</TutorialContext.Provider>;
};

export default TutorialContextProvider;
