import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 5 },
    { name: "Friend #2", age: 13 },
    { name: "Friend #3", age: 11 },
    { name: "Friend #4", age: 14 },
    { name: "Friend #5", age: 17 },
    { name: "Friend #6", age: 10 },
    { name: "Friend #7", age: 19 },
    { name: "Friend #8", age: 11 },
    { name: "Friend #9", age: 15 }
  ];

  // Precisa de 2 props: data e renderItem
  // Usar keyextractor para preencher as keys
  // horizontal -> Lista fica horizontal
  // showsHorizontalScrollIndicator -> barra de scroll abaixo
  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
