import { View,StyleSheet,Text,TouchableOpacity, Platform, StatusBar, FlatList,Dimensions} from 'react-native';
import { useRef,useState } from 'react';
import FeedItem from '../../components/FeedItem';

const { height: heightScreen} = Dimensions.get("screen")

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
  const onViewRef = useRef(({ viewableItems }) => {
    if(viewableItems && viewableItems.length > 0){
      setShowItem(feedItem[viewableItems[0].index])
    }
  } )
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
      renderItem={({item})=> <FeedItem data={item} currentvisibleItem={showItem}/>}
      onViewableItemsChanged={onViewRef.current} // toda vez que trocar o item, chama alguma coisa.
      snapToAlignment='center'
      snapToInterval={heightScreen} // qual o tamanho da tela que ele de rolar
      scrollEventThrottle={200}   // quando começar a rolar, ele vai fazer a rolagem automática
      decelerationRate={"fast"} // rolagem automática rápida ou lenta
      viewabilityConfig={{ // configuração se o usuário está vendo algo na tela ou não
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 100 // 0 a 100
        /*
          100 significa que um item deve estar TOTALMENTE VISIVEL na tela ou
          cobrir a tela para conatr como visivel.
        */
      }}
      showsVerticalScrollIndicator={false}
    
    
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