import { View,StyleSheet,Text,TouchableOpacity, Platform, StatusBar} from 'react-native';

export default function Home() {
 return (
   <View style={styles.container}>

    <View style={styles.labels}>
      <TouchableOpacity>
        <Text style={[styles.labelText, {color:"#DDD"}]}>Seguindo</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={[styles.labelText, {color:"#FFF"}]}>Pra Você</Text>
        <View style={styles.indicator}></View>
      </TouchableOpacity>

    </View>
     
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#000"
    },
    labels:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      position: "absolute",
      top: 6,
      left: 0,
      right: 0,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 55,
      zIndex: 99
    },
    labelText:{
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 4
    },
    indicator:{
      backgroundColor: "#FFF",
      width: 32,
      height: 2,
      alignSelf: "center"
    }
})