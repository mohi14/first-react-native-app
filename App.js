import { View, Text, StyleSheet } from "react-native"
import CoreComponents from "./CoreComponents/CoreComponents";


export default function App() {

  // return <CoreComponents />
  return <View style={styles.container}>
    <View style={[styles.box, styles.lightblueBg]}>
      <Text>Lightblue box</Text>
    </View>
    <View style={[styles.box, styles.lightGreenBg]}>
      <Text>Lightgreen box</Text>
    </View>

  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60
  },
  box: {
    width: 100,
    height: 100,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  }
})

