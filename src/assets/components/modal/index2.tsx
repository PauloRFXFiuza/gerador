import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada!</Text>
            </View>    
            
            <Pressable style={styles.innerPassword}>
                <Text style={styles.text}>Senha Fictícia</Text>
            </Pressable>

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
        width: "85%",
        backgroundColor: "#FFF",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "000",
        marginBottom: 24,
    },
    innerPassword:{
        width: "85%",
        backgroundColor: "#FFF",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 24,
    },
    text:{
        fontSize: 18,
        color: "#000",
    }	
})