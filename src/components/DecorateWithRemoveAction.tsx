import { Button } from "@nextui-org/react";
import { PropsWithChildren, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface IDecorateWithActionProp {
    label: string;
    action:  VoidFunction
}
export const DecorateWithRemoveAction: React.FC<IDecorateWithActionProp & PropsWithChildren> = ({label, action, children}) => {
    const [isButtonVisible, setButtonVisible] = useState(false);
    return (
            <div  
                onMouseEnter={() => setButtonVisible(true)}
                onMouseLeave={() => setButtonVisible(false)}
                className="relative">
                
                {children}
                <Button onClick={action} className={`mr-1 absolute top-0 right-0 ${isButtonVisible ? '' : 'hidden'}`} color="danger" aria-label="Delete">
                    <FaTrash /> {label}
                </Button>
            </div>
        );
}