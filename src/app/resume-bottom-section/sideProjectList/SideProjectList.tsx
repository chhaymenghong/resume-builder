import { DecorateWithAddAction } from "../../../components";
import { useAppData, useListItems } from "../../../hooks";
import { isEven, isOdd } from "../../../utils";
import { SideProject } from "./sideProject/SideProject";

export const SideProjectList: React.FC = () => {
  const { resumeData } = useAppData();
  const {
    items: sideProjects,
    onRemoveItem: onRemoveSideProject,
    onAddItem: onAddSideProject,
  } = useListItems(resumeData.sideProjectMetaData.sideProjects);

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
      action={() => onAddSideProject(resumeData.sideProjectMetaData.placeholder)}>
      <div className="side-project-content -mb-[10px]">
        <div className="left-container">{leftSideContentUI}</div>
        <div className="right-side-project-section">{rightSideContentUI}</div>
      </div>
    </DecorateWithAddAction>
  );
};
