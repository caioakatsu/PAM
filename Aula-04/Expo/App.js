import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Pedro = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "green",
          }}
        >
          Pedro
        </Text>
        <Image
          source={require('./assets/pedro.jpg')}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Mateus 16:18 - Pois também eu te digo que tu és Pedro, e sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela"
      />
    </ScrollView>
  );
}

export default Pedro;




