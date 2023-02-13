import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateValue = async (kay:string,value:any) => {
    try {
        await AsyncStorage.setItem(kay, JSON.stringify(value));
    } catch (error) {
        alert("Erro ao atualizar valor.");
    }
}