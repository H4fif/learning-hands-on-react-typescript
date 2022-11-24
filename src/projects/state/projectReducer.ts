import { Project } from "../Project";
import {
  DELETE_PROJECTS_FAILURE,
  DELETE_PROJECTS_REQUEST,
  DELETE_PROJECTS_SUCCESS,
  LOAD_PROJECTS_FAILURE,
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS_SUCCESS,
  ProjectActionTypes,
  ProjectState,
  SAVE_PROJECTS_FAILURE,
  SAVE_PROJECTS_REQUEST,
  SAVE_PROJECTS_SUCCESS,
} from "./projectTypes";

export const initialProjectState: ProjectState = {
  projects: [],
  loading: false,
  error: undefined,
  page: 1,
};

export function projectReducer(
  state = initialProjectState,
  action: ProjectActionTypes
) {
  switch (action.type) {
    case LOAD_PROJECTS_REQUEST:
      return { ...state, loading: true, error: "" };
    case LOAD_PROJECTS_SUCCESS:
      let projects: Project[];
      const { page } = action.payload;

      if (page === 1) {
        projects = action.payload.projects;
      } else {
        projects = [...state.projects, ...action.payload.projects];
      }

      return {
        ...state,
        loading: false,
        page,
        projects,
        error: "",
      };
    case LOAD_PROJECTS_FAILURE:
      return { ...state, loading: false, error: action.payload.message };
    case SAVE_PROJECTS_REQUEST:
      return { ...state };
    case SAVE_PROJECTS_SUCCESS:
      if (action.payload.isNew) {
        return {
          ...state,
          projects: [...state.projects, action.payload],
        };
      } else {
        return {
          ...state,
          projects: state.projects.map((project: Project) => {
            return project.id === action.payload.id
              ? Object.assign({}, project, action.payload)
              : project;
          }),
        };
      }
    case SAVE_PROJECTS_FAILURE:
      return { ...state, error: action.payload.message };
    case DELETE_PROJECTS_REQUEST:
      return { ...state };
    case DELETE_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter(
          (project: Project) => project.id !== action.payload.id
        ),
      };
    case DELETE_PROJECTS_FAILURE:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
}
