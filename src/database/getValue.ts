import AsyncStorage from "@react-native-async-storage/async-storage";

export const getValue = async (kay: string) => {
    try {
        const value = await AsyncStorage.getItem(kay);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (e) {
        alert("Erro ao obter valores para as chaves.");
    }
};
