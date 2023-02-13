import {Text} from "native-base";
import {useContext} from "react";
import {TasksContext} from "../../../screens/Home";

export const TaskNumber = () => {
    const tasksContext = useContext(TasksContext);
    return (
        <>
            <Text fontWeight="490" color={"warmGray.100"} fontSize="md">
                Existem <Text bold>{tasksContext?.tasks?.length} tarefas para você.</Text>
            </Text>
        </>
    );
};
