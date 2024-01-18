import { useState } from 'react';
import { Image, Text, View, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  const [isModalShow, setIsModalShow] = useState(false)
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    {/* <Text>
      <Text style={{ color: "white" }}>Hello</Text> World!
    </Text>
    <Image source={logoImg} style={{
      width: 300, height: 300
    }} />
    <Image source={{ uri: 'https://picsum.photos/300' }} style={{
      width: 300, height: 300
    }} /> */}
    {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
      <Text>Image Text</Text>
    </ImageBackground> */}
    {/* <ScrollView >
      <Image source={logoImg} style={{ width: 300, height: 300 }} />

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
        quasi aliquam eligendi, placeat qui corporis!
      </Text>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
    </ScrollView> */}

    {/* <Button title='Press' onPress={() => console.log("Button pressed!")} color="midnightblue" disabled /> */}

    {/* <Pressable onPress={() => console.log("Image pressed")}>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
    </Pressable> */}
    {/* <Pressable onPress={() => console.log("Text pressed")}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
        quasi aliquam eligendi, placeat qui corporis!
      </Text>
    </Pressable> */}

    {/* --modal-- */}
    {/* animationType = 'none','slide', 'fade' 
      presentationStyle='fullscreen' , 'formSheet', 'pageSheet' --> only effect in ios not android
      
      */}

    {/* <Button title='Press' color="midnightblue" onPress={() => setIsModalShow(true)} />
    <Modal visible={isModalShow} onRequestClose={() => setIsModalShow(false)} animationType='slide' presentationStyle='pageSheet'>

      <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
        <Text>Modal Content</Text>
        <Button title='Close' color="midnightblue" onPress={() => setIsModalShow(false)} />
      </View>
    </Modal> */}
    {/* --status bar-- */}
    {/* <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden={false} /> */}
    {/* backgroundColor has no effect on ios but on android, */}

    {/* --activity indicator-- aka loader*/}
    {/* <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="large" color='midnightblue' />
    <ActivityIndicator size="large" color='midnightblue' animating={false} /> */}


  </View>
}

