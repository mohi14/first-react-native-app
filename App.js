import { View, Text, StyleSheet } from "react-native"
import CoreComponents from "./CoreComponents/CoreComponents";


export default function App() {

  // return <CoreComponents />
  return <View style={styles.container}>
    <Text>StyleSheet API</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60
  }
})

