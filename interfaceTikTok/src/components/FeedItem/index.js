import { View , Text, StyleSheet,Pressable, Dimensions, TouchableOpacity,Platform} from 'react-native';
import {Video} from 'expo-av'
import { useRef, useState,useEffect } from 'react';
import {Ionicons} from '@expo/vector-icons'

const {height: heightScreen} = Dimensions.get("screen") // pegando as dimensões da tela do usuário
export default function FeedItem({data, currentvisibleItem}) {
  const video = useRef(null)
  const [status, setStatus] = useState({})

  useEffect(()=>{
    if(currentvisibleItem?.id === data.id){
      video.current?.playAsync()
    }else{
      video.current?.pauseAsync
    }
  },[currentvisibleItem])

  const handlePlayer = ()=>{
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
    /* 
    estamos verificando se o video já está rodando ou não.

    status.isPlaying ?: aqui estamos perguntando se o video ja estava rodando ou não.

    video.current?.pauseAsync(): se o video estiver rodando, quando clicarmos no video, ele vai pausar.

    video.current?.playAsync(): se o  não estiver rodando, quando clicarmos no video, ele vai rodar.
    */
  }


 return (
   <Pressable onPress={handlePlayer}>

      <View style={[styles.info, {bottom: 100}]}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="heart" size={35} color="#FFF"/>
          <Text style={styles.actionText}>30.3k</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={35} color="#FFF"/>
          <Text style={styles.actionText}>23.3k</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="bookmark" size={35} color="#FFF"/>
          
        </TouchableOpacity>
      </View>

      <Video
      ref={video} // quando acessamos a propriedade video, temos acesso a: pause,player, a tocar o video e etc...
      style={{height: heightScreen, width: "100%" }}
      source={{ uri: data?.video}}
      resizeMode="cover" // controla como uma imagem é redimensionada para se adequar ao espaço disponível quando exibida em um aplicativo
      shouldPlay={false}
      isMuted={false} // não começa o video mutado
      isLooping // video em looping
      onPlaybackStatusUpdate={ status => setStatus(status)} // pega o status do video, se está pausado, tocando e etc...
     />
   </Pressable>
  );
}

const styles = StyleSheet.create({
  info:{
    position: "absolute",
    zIndex: 99,
    padding: 8,
    left: 8
  },
  name:{
    color: "#FFF",
    fontWeight:"bold",
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0, 0.60)',
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 8  
  },
  description:{
    color:"#FFF",
    marginRight: 24,
    textShadowColor: 'rgba(0,0,0, 020)',
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 8  
  },
  actions:{
    position: "absolute",
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === 'android' ? 120 : 170 ,
    gap: 8
  },
  actionText:{
    textAlign: 'center',
    color : "#FFF"
  }
})







// vamos instalar uma biblioteca de video coom o expo:
// Expo-av
// serve para a gente ter os players embutidos no nosso projeto
// com todo controle nativo pra gente

// instalação: npx expo install expo-av 