import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Senha Gerada!</Text>
            </View>    
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(24,24,24,0.6)",
        alignItems: "center",
        justifyContent: "center",
    },
    content:{
        width: "80%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 8,
    }	
})