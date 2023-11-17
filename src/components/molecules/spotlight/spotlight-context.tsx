"use client";

import React, { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";

export type Action = { type: "back" } | { type: "next" };

export interface State {
  currentStep: number;
}

export const spotlightContextInitialState: State = {
  currentStep: 1,
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

export const SpotlightContext = createContext<
  | {
      prevStep: () => void;
      nextStep: () => void;
      state: State;
    }
  | undefined
>(undefined);

export function useSpotlightContext() {
  const context = React.useContext(SpotlightContext);

  if (context === undefined) {
    throw new Error("useCheckoutContext must be used within a CheckoutContextProvider");
  }

  return context;
}

interface SpotlightContextProviderProps {
  children: ReactNode;
  initialState: State;
}

export const CheckoutContextProvider = ({ children, initialState }: SpotlightContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const prevStep = () => dispatch({ type: "back" });
  const nextStep = () => dispatch({ type: "next" });

  const value = { prevStep, nextStep, state };

  return <SpotlightContext.Provider value={value}>{children}</SpotlightContext.Provider>;
};

export default CheckoutContextProvider;
