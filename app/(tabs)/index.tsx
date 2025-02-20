import {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";

export default function App() {

  const [size, setSize] = useState(10);


  return (
    <View style={styles.container}>
      <Image
      source={require("C:/Users/paulo/Documents/Workspaces/App+Gerador+Senhas/gerador/src/assets/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>
      
      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#FF0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>





    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
  }
});