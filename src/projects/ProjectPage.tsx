import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";
import ProjectDetail from "./ProjectDetail";

function ProjectPage({}: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);

    projectAPI
      .find(id)
      .then((data: Project) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e: TypeError) => {
        setError(e.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

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

        {project && <ProjectDetail project={project} />}
      </>
    </div>
  );
}

export default ProjectPage;
