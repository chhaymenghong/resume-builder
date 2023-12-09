import { DecorateWithRemoveAction } from "../../../../components";

interface ISideProjectOptionProp {
    sideProject: {
        key: number;
        sideProjectName: string;
        description: string;
    }
    onRemove: VoidFunction
}

export const SideProject: React.FC<ISideProjectOptionProp> = ({sideProject, onRemove}) => {
    return (
        <DecorateWithRemoveAction
        label="Remove Side Project"
        action={() => onRemove()}
      >
        <div className="experience dash-outline mb-2">
          <div
            contentEditable
            className="primary-color text-[14px] font-bold"
          >
            {sideProject.sideProjectName}
          </div>
          <div contentEditable className="description mt-[2px]">
            {sideProject.description}
          </div>
        </div>
      </DecorateWithRemoveAction>
    );
}