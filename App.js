import { SafeAreaView, Text, StyleSheet } from 'react-native'

import {MovieTops} from './components/MovieTops'

export default function App() {
  return(
    <SafeAreaView style={styles.body}>
      <Text style={styles.titulo}>Explorar</Text>
      <Text style={styles.corpo}>Séries recomendadas</Text>
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor:'#efa5a5',
    borderBottomWidth: 3, // tamanho da borda
    borderBottomColor:  'red' // cor da borda
  },

  body: {
    backgroundColor: '#efa5a5',
  },

  corpo: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
   
  },


})