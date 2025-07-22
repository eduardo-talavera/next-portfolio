'use client';

import { Project, projects } from "@/utils/constants";
import React, { createContext, ReactNode, useContext, useReducer } from "react";


type GlobalState = {
  projects: Project[]
  currentProject: Project | null
  showProject: boolean
}

type GlobalAction = 
  | { type: "OPEN_PROJECT"; payload: Project }
  | { type: "CLOSE_PROJECT" }


export  type GlobalStateContextType = {
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
  openProject: (project: Project) => void;
  closeProject: () => void;
}


const initialState: GlobalState = {
  projects: projects,
  currentProject: projects[0],
  showProject: false
}

const globalStateReducer = (state: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case 'OPEN_PROJECT':
      return {
        ...state,
        showProject: true,
        currentProject: action.payload
      };

    case 'CLOSE_PROJECT':
      return {
        ...state,
        showProject: false
      }  
  
    default:
      return state;
  }
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined)


export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  const openProject = (project: Project) => {
    dispatch({ type: 'OPEN_PROJECT', payload: project })
  }

  const closeProject =  () => {
    dispatch({ type: 'CLOSE_PROJECT' });
  }

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        dispatch,
        openProject,
        closeProject
      }}
    >
      { children }
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used with a GlobalStateProvider');
  }

  return context;
}