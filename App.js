import { Image, Text, View } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    <Text>
      <Text style={{ color: "white" }}>Hello</Text> World!
    </Text>
    <Image source={logoImg} style={{
      width: 300, height: 300
    }} />
    <Image source={{ uri: 'https://picsum.photos/200' }} style={{
      width: 300, height: 300
    }} />
  </View>
}

