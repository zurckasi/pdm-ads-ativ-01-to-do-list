import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAll = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        return keys;
    } catch (error) {
        alert("Erro ao obter tarefas.");
    }
};
