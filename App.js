import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';

export default function App() {
  const [calcData, setCalcData] = useState({ num: "0", result: null });
  const docalc = () =>{
    if(isNaN(calcData.num)){
      setCalcData({...calcData,result:'Invalid Number'})
      return;
    }
    const num = calcData.num
    const sqr = num*num;
    setCalcData({...calcData,result:`Result of ${num} : ${sqr}`})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>hi! this is calculator app</Text>

      <TextInput 
        value={calcData.num}
        keyboardType='numeric'
        placeholder='Enter number'
        style={styles.input}
        onChangeText={(data) => setCalcData({ ...calcData, num: data })}/>
        <Button title = "Find sqaure" onPress ={docalc}/>
        <Text>{calcData.result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27d310fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: 200,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
  }
});
