import { useParams } from "react-router-dom";

export const ProjectComponent = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Welcome to the Project</h1>
      <p>Project ID: {projectId}</p>
    </div>
  );
};
export default ProjectComponent;
