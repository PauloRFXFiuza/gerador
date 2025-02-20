import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                
                <Text style={styles.title}>Senha Gerada!</Text>
                
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>Senha Fictícia</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>

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
        width: "90%",
        backgroundColor: "#0e0e0e",
        padding: 14,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 24,
    },
    text:{
        fontSize: 18,
        color: "#FFF",
        textAlign: "center",

    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonText:{
        color: "#392de9",
        fontSize: 16,
    },
    buttonSave:{
        backgroundColor: "#392de9",
        borderRadius: 8,
    },
    buttonSaveText:{
        color: "#FFF",
        fontWeight: "bold",
    },
})