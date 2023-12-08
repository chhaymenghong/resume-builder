import { DecorateWithAddAction } from "../../../components";
import { useListItems } from "../../../hooks";
import { isEven, isOdd } from "../../../utils";
import { SideProject } from "./sideProject/SideProject";

const sampleData = {
  key: 0,
  sideProjectName: "Foreverbloomkh.com",
  description: `Designed and built an entire e-commerce shopping platform
    from scratch which includes a consumer-facing Single Page
    Application (SPA), an inventory management system for
    employees, and a serverless backend using Firebase Ecosystem, Angular, Stripe for accepting
    payment, Twilio, Sendgrid, Discord and other technologies`,
};

export const SideProjectList: React.FC = () => {
  const {
    items: sideProjects,
    onRemoveItem: onRemoveSideProject,
    onAddItem: onAddSideProject,
  } = useListItems([sampleData]);

  const leftSideContentUI = sideProjects
    .filter(isEven)
    .map(sideProject => {
      return (
        <SideProject
          sideProject={sideProject}
          onRemove={() => onRemoveSideProject(sideProject)}
        />
      );
    });
  const rightSideContentUI = sideProjects
    .filter(isOdd)
    .map(sideProject => {
      return (
        <SideProject
          sideProject={sideProject}
          onRemove={() => onRemoveSideProject(sideProject)}
        />
      );
    });
  return (
    <DecorateWithAddAction
      label="Add Education"
      action={() => onAddSideProject(sampleData)}>
      <div className="side-project-content -mb-[10px]">
        <div className="left-container">{leftSideContentUI}</div>
        <div className="right-side-project-section">{rightSideContentUI}</div>
      </div>
    </DecorateWithAddAction>
  );
};
