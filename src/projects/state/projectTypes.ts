import { Project } from "../Project";

export const LOAD_PROJECTS_REQUEST = "LOAD_PROJECTS_REQUEST";
export const LOAD_PROJECTS_SUCCESS = "LOAD_PROJECTS_SUCCESS";
export const LOAD_PROJECTS_FAILURE = "LOAD_PROJECTS_FAILURE";
export const SAVE_PROJECTS_REQUEST = "SAVE_PROJECTS_REQUEST";
export const SAVE_PROJECTS_SUCCESS = "SAVE_PROJECTS_SUCCESS";
export const SAVE_PROJECTS_FAILURE = "SAVE_PROJECTS_FAILURE";
export const DELETE_PROJECTS_REQUEST = "DELETE_PROJECTS_REQUEST";
export const DELETE_PROJECTS_SUCCESS = "DELETE_PROJECTS_SUCCESS";
export const DELETE_PROJECTS_FAILURE = "DELETE_PROJECTS_FAILURE";

interface LoadProjectRequest {
  type: typeof LOAD_PROJECTS_REQUEST;
}

interface LoadProjectSuccess {
  type: typeof LOAD_PROJECTS_SUCCESS;
  payload: { projects: Project[]; page: number };
}

interface LoadProjectFailure {
  type: typeof LOAD_PROJECTS_FAILURE;
  payload: { message: string };
}

interface SaveProjectRequest {
  type: typeof SAVE_PROJECTS_REQUEST;
}

interface SaveProjectSuccess {
  type: typeof SAVE_PROJECTS_SUCCESS;
  payload: Project;
}

interface SaveProjectFailure {
  type: typeof SAVE_PROJECTS_FAILURE;
  payload: { message: string };
}

interface DeleteProjectRequest {
  type: typeof DELETE_PROJECTS_REQUEST;
}

interface DeleteProjectSuccess {
  type: typeof DELETE_PROJECTS_SUCCESS;
  payload: Project;
}

interface DeleteProjectFailure {
  type: typeof DELETE_PROJECTS_FAILURE;
  payload: { message: string };
}

export type ProjectActionTypes =
  | LoadProjectRequest
  | LoadProjectSuccess
  | LoadProjectFailure
  | SaveProjectRequest
  | SaveProjectSuccess
  | SaveProjectFailure
  | DeleteProjectRequest
  | DeleteProjectSuccess
  | DeleteProjectFailure;

export interface ProjectState {
  loading: boolean;
  projects: Project[];
  error?: string;
  page: number;
}
