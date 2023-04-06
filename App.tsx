import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Metrics } from "./Metrics";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { useState, useEffect } from "react";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>BA Food</Text>
    </View>
  );
};
type PortionProp = {
  count: number;
  onCountChange: (count: number) => void;
};

const Portion = (props: PortionProp) => {
  const { count = 1, onCountChange } = props;

  return (
    <View style={styles.portion}>
      <Text style={styles.portiontitle}>Porsiyon</Text>
      <TouchableOpacity
        onPress={() => onCountChange(count + 1)}
        activeOpacity={0.7}
        style={styles.plus}
      >
        <AntDesign name="plus" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity
        onPress={() => onCountChange(Math.max(count - 1, 1))}
        activeOpacity={0.7}
        style={styles.minus}
      >
        <AntDesign name="minus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};
type OnionCheckProp = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

const OnionCheck = (props: OnionCheckProp) => {
  const { checked, onCheckedChange } = props;

  return (
    <View style={styles.onioncheck}>
      <Text style={styles.oniontitle}>Soğan olsun mu?</Text>
      <View style={styles.checkbox}>
        <CheckBox checked={checked} onPress={() => onCheckedChange(!checked)} />
      </View>
    </View>
  );
};

type NoteProp = {
  note: string;
  onNoteChange: (note: string) => void;
};

const Note = (props: NoteProp) => {
  const { note, onNoteChange } = props;
  return (
    <View style={styles.note}>
      <Text style={styles.notetitle}>Not</Text>
      <TextInput
        value={note}
        onChangeText={onNoteChange}
        placeholder="Notunuzu giriniz"
        style={styles.input}
      />
    </View>
  );
};

type OrderProp = {
  _onpress: () => void;
};

const Order = (props: OrderProp) => {
  const { _onpress } = props;
  return (
    <View style={styles.order}>
      <TouchableOpacity
        onPress={_onpress}
        activeOpacity={0.9}
        style={styles.orderbutton}
      >
        <Text style={styles.ordertext}>Sipariş Ver</Text>
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  const [count, setCount] = useState(1);
  const [checked, setChecked] = useState(false);
  const [note, setNote] = useState("");

  const _onpress = () => {
    console.warn(
      count +
        " Porsiyon dürüm " +
        (checked ? "Soğanlı" : "Soğansız") +
        " siparişi " +
        note +
        " notuyla sipariş edildi"
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <Portion count={count} onCountChange={setCount} />
      <OnionCheck checked={checked} onCheckedChange={setChecked} />
      <Note note={note} onNoteChange={setNote} />
      <Order _onpress={_onpress} />
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    height: Metrics.measureHeight(60),
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  title: {
    top: Metrics.measureHeight(10),
    fontSize: 20,
    color: "white",
  },
  portion: {
    top: Metrics.measureHeight(60),
    height: Metrics.measureHeight(60),
    width: "100%",
    backgroundColor: "#e5e5e5",

    justifyContent: "center",
  },
  portiontitle: {
    fontSize: 30,
    color: "#14213d",
    left: Metrics.measureWidth(15),
  },
  plus: {
    position: "absolute",
    height: Metrics.measureHeight(22),
    width: Metrics.measureWidth(30),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    right: Metrics.measureWidth(15),
  },
  count: {
    position: "absolute",
    fontSize: 23,
    fontWeight: "bold",
    color: "#14213d",
    right: Metrics.measureWidth(55),
  },
  minus: {
    position: "absolute",
    height: Metrics.measureHeight(22),
    width: Metrics.measureWidth(30),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    right: Metrics.measureWidth(75),
  },
  onioncheck: {
    top: Metrics.measureHeight(120),
    height: Metrics.measureHeight(60),
    width: "100%",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
  },
  oniontitle: {
    fontSize: 25,
    color: "#14213d",
    left: Metrics.measureWidth(15),
  },
  checkbox: {
    position: "absolute",
    right: Metrics.measureWidth(15),
  },
  note: {
    top: Metrics.measureHeight(180),
    height: Metrics.measureHeight(60),
    width: "100%",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
  },
  notetitle: {
    fontSize: 25,
    color: "#14213d",
    left: Metrics.measureWidth(15),
  },
  input: {
    position: "absolute",
    right: Metrics.measureWidth(15),
    fontSize: 20,
    color: "#14213d",
    width: Metrics.measureWidth(200),
    height: Metrics.measureHeight(30),
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "center",
  },
  order: {
    top: Metrics.measureHeight(360),
    height: Metrics.measureHeight(60),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  orderbutton: {
    position: "absolute",
    height: Metrics.measureHeight(40),
    width: Metrics.measureWidth(200),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    bottom: Metrics.measureHeight(10),
  },
  ordertext: {
    fontSize: 20,
    color: "white",
  },
});
