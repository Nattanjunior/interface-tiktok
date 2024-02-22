import { View,StyleSheet,Text,TouchableOpacity, Platform, StatusBar, FlatList} from 'react-native';
import { useRef,useState } from 'react';
import FeedItem from '../../components/FeedItem';
export default function Home() {

  const feedItem = [
    {
      id: 1,
      video: 'https://i.imgur.com/Cnz1CPK.mp4',
      name: '@sujeitoprogramador',
      description: 'Criando o ShortDev do zero com RN'
    },
    {
      id: 2,
      video: 'https://i.imgur.com/E0tK2bY.mp4',
      name: '@henriquesilva',
      description: 'Fala turma, estou aprendendo React Native com sujeito programador'
    },
    {
      id: 3,
      video: 'https://i.imgur.com/mPFvFyX.mp4',
      name: '@sujeitoprogramador',
      description: 'Aprendendo a trabalhar com Drag and Drop no React Native'
    }
  ]

  const [showItem, setShowItem] = useState(feedItem[0])
  const onViewRef = useRef(({viewbleItems})=>{
    if(viewbleItems && viewbleItems.length > 0){
      setShowItem(feedItem[viewbleItems[0].index])
    }
  })
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


    <FlatList 
      data={feedItem}
      renderItem={({item})=> <FeedItem data={item} visibleItem={showItem}/>}
      onViewableItemsChanged={onViewRef.current} // toda vez que triacr o item, chama alguma coisa.
    />
     
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