import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [coding, setCoding] = useState(true);
  const [text, setText] = useState("");
  const [list, setList] = useState({});
  const code = () => setCoding(true);
  const daily = () => setCoding(false);
  const onChangeText = (evnet) => setText(evnet);
  const addText = () => {
    if (text === "") {
      return;
    } else {
      const newList = { ...list, [Date.now()]: { text, code: coding } };
      setList(newList);
      saveList(newList);
      setText("");
    }
  };
  const saveList = async (text) => {
    try {
      const jsonValue = JSON.stringify(text);
      await AsyncStorage.setItem("@list", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const text = await AsyncStorage.getItem("@list");
      setList(JSON.parse(text));
      if (value !== null) {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteText = (key) => {
    Alert.alert("Sure to delete?", "Unable to recover after deletion", [
      {
        text: "Cancel",
      },
      {
        text: "Sure",
        style: "destructive",
        onPress: () => {
          const newList = { ...list };
          delete newList[key];
          setList(newList);
          saveList(newList);
        },
      },
    ]);
  };

  useEffect(() => {
    getData();
  }, {});

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.category}>
        <TouchableOpacity onPress={code}>
          <Text
            style={{
              ...styles.categoryBtn,
              color: coding ? "white" : "#3A3D40",
            }}
          >
            Coding
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={daily}>
          <Text
            style={{
              ...styles.categoryBtn,
              color: !coding ? "white" : "#3A3D40",
            }}
          >
            Daily
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={onChangeText}
        onSubmitEditing={addText}
        returnKeyType="done"
        placeholder={coding ? "Record somthing" : "Write whatever you want"}
        style={styles.input}
        value={text}
      ></TextInput>
      <ScrollView>
        {Object.keys(list).map((key) =>
          list[key].code === coding ? (
            <View style={styles.textBox} key={key}>
              <Text style={styles.writtenText}>{list[key].text}</Text>
              <TouchableOpacity
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                onPress={() => deleteText(key)}
              >
                <Feather name="x-circle" size={20} color="#CCCCCC" />
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
  category: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 80,
  },
  categoryBtn: {
    fontSize: 35,
    fontWeight: "600",
  },
  input: {
    //backgroundColor: "transparent",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 25,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  textBox: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "grey",
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  writtenText: {
    color: "white",
  },
});
