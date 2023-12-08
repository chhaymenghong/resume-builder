import { SideProjectList } from "./sideProjectList/SideProjectList";

export const ResumeBottomSection: React.FC = () => {
  return (
    <div className="resume-bottom-section">
      <div className="main-title dash-outline" contentEditable>
        SIDE PROJECTS
      </div>
      <SideProjectList />
    </div>
  );
};
