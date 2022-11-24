import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../state";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";
import { loadProjects } from "./state/projectActions";
import { ProjectState } from "./state/projectTypes";

function ProjectsPage() {
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  const {
    loading,
    projects,
    error,
    page: currentPage,
  } = useSelector((appState: AppState) => appState.projectState);

  const handleMoreClick = () => {
    dispatch(loadProjects(currentPage + 1));
  };

  useEffect(() => {
    dispatch(loadProjects(1));
  }, [dispatch]);

  return (
    <>
      <h1>Projects</h1>

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse"></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}

      <ProjectList projects={projects} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
