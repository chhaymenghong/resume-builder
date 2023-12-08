import { Button } from "@nextui-org/react";
import { PropsWithChildren, useState } from "react";
import { FaPlus } from "react-icons/fa";

interface IDecorateWithActionsProp {
    label: string;
    action: VoidFunction,
    listOfClassName?: string[]
}
export const DecorateWithAddAction: React.FC<IDecorateWithActionsProp & PropsWithChildren> = ({label, listOfClassName = [], action, children}) => {
    const [isAddButtonVisible, setAddButtonVisibility] = useState(false);
    return (
            <div  
                onMouseEnter={() => setAddButtonVisibility(true)}
                onMouseLeave={() => setAddButtonVisibility(false)}
                className="relative">
                
                {children}
                <Button onClick={action} className={`mr-1 absolute -right-0 ${isAddButtonVisible ? '' : 'hidden'} ${listOfClassName.join(' ')}`} color="primary" aria-label="Add">
                    <FaPlus /> {label}
                </Button>
            </div>
        );
}