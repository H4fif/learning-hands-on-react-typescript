import type { Action } from "redux";
import type { ThunkAction } from "redux-thunk";
import { Project } from "../Project";
import { projectAPI } from "../projectAPI";
import {
  LOAD_PROJECTS_FAILURE,
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS_SUCCESS,
  ProjectState,
  SAVE_PROJECTS_FAILURE,
  SAVE_PROJECTS_REQUEST,
  SAVE_PROJECTS_SUCCESS,
} from "./projectTypes";

export function loadProjects(
  page: number
): ThunkAction<void, ProjectState, null, Action<string>> {
  return (dispatch: any) => {
    dispatch({ type: LOAD_PROJECTS_REQUEST });

    return projectAPI
      .get(page)
      .then((data: any) => {
        dispatch({
          type: LOAD_PROJECTS_SUCCESS,
          payload: { projects: data, page },
        });
      })
      .catch((error: TypeError) => {
        dispatch({ type: LOAD_PROJECTS_FAILURE, payload: error });
      });
  };
}

export function saveProject(
  project: Project
): ThunkAction<void, ProjectState, null, Action<string>> {
  return (dispatch: any) => {
    dispatch({ type: SAVE_PROJECTS_REQUEST });

    return projectAPI
      .put(project)
      .then((data: any) => {
        dispatch({ type: SAVE_PROJECTS_SUCCESS, payload: data });
      })
      .catch((error: TypeError) => {
        dispatch({ type: SAVE_PROJECTS_FAILURE, payload: error });
      });
  };
}
