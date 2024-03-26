import { View, Text, StyleSheet , Image} from 'react-native'

export function MovieTops() {
  return(
    <View style={styles.container}>
      <Text style={styles.name}>nhjk</Text>
      <Text style={[styles.name, styles.nameFilme]}></Text>
      <View style={styles.linha}>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/download.jpg')}/>
        
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  imagem: {
    height:800,
    whidt: 100, 
    

  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})