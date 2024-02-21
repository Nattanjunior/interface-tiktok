import { View , Text, StyleSheet} from 'react-native';

export default function FeedItem({data}) {
 return (
   <View>
    <Text style={{color: '#fff'}}>{data.name}</Text>
   </View>
  );
}

const styles = StyleSheet.create({

})