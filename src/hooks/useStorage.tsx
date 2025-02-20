import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    // Buscar os itens salvos
interface StorageHook {
    getItem: (key: string) => Promise<string[]>;
    saveItem: (key: string, value: string) => Promise<void>;
    removeItem: (key: string, item: string) => Promise<string[]>;
}

const getItem = async (key: string): Promise<string[]> => {
    try {
        const passwords = await AsyncStorage.getItem(key);
        return passwords ? JSON.parse(passwords) : [];
    } catch (error) {
        console.log("Erro ao buscar", error);
        return [];
    }
};
  
  // Salvar um item no storage
const saveItem: StorageHook['saveItem'] = async (key: string, value: string): Promise<void> => {
    try {
        let passwords = await getItem(key);

        passwords.push(value);

        await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
        console.log("ERRO AO SALVAR ", error);
    }
}
  
  
  // Remover algo do storage
interface RemoveItem {
    (key: string, item: string): Promise<string[]>;
}

const removeItem: RemoveItem = async (key: string, item: string): Promise<string[]> => {
    try {
        let passwords = await getItem(key);

        let myPasswords = passwords.filter((password) => {
            return (password !== item);
        });

        await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
        return myPasswords;

    } catch (error) {
        console.log("ERROR AO DELETAR ", error);
        return [];
    }
};
  
  
  return {
    getItem,
    saveItem,
    removeItem,
  }
  
}

export default useStorage;