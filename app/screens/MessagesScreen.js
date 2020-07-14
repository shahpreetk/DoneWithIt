import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Preet Shah",
    description: "Hey, is this item still available?",
    image: require("../assets/preet.jpg"),
  },
  {
    id: 2,
    title: "Preet Shah",
    description: "I'm interested in this item. When will you be able to sent it by?",
    image: require("../assets/preet.jpg"),
  },
];

export default function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={()=>{
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/preet.jpg"),
            },
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
