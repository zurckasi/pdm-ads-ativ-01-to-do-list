
import {useContext, useState} from "react";
import {TextInput, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import {Box} from "native-base";
import {setValue} from "../../../database/setValue";
import {TasksContext} from "../../../screens/Home";
import Icon from "react-native-vector-icons/Feather";
import {getAllTask} from "../../../services/getAllTask";


export const TodoInput = () => {
    const [text, setText] = useState("");
    const tasksContext = useContext(TasksContext);

    const handleAddNewTask = async () => {
        if (text != "") {
            const task = {
                title: text,
                status: false,
            };
            if (!tasksContext?.tasks?.includes(text)) {
                const kay = text as string;
                await setValue({kay, value:task});
                setText("");
                getAllTask(tasksContext?.setTasks);
            } else {
                alert("Tarefa já existe!");
            }
        }
    };

    return (
        <Box style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Adicionar nova"
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                value={text}
                selectionColor="#666666"
                onSubmitEditing={() => handleAddNewTask()}
                onChangeText={(valor) => setText(valor)}
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={() => handleAddNewTask()}
            >
                <Icon name="chevron-right" size={25} color="#B2B2B2" />
            </TouchableOpacity>
        </Box>
    );
};
