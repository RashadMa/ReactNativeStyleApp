import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.parentElement}>
      <View style={styles.parentInput}>
        <TextInput style={styles.txtInput} placeholder="Friday, 15 Dec" />
      </View>
      <View>
        <Text style={styles.h1Text}>Learn</Text>
        <Text style={styles.bodyText}>Coose the part of the body</Text>
      </View>
      <View style={[styles.cardCommon, styles.firstCard]}>
        <Text style={styles.cardHeader}>Head & Face</Text>
        <Text style={styles.cardBody}>11 disease</Text>
      </View>
      <View style={[styles.cardCommon, styles.secondCard]}>
        <Text style={styles.cardHeader}>Back & Neck</Text>
        <Text style={styles.cardBody}>9 disease</Text>
      </View>
      <View style={[styles.cardCommon, styles.thirdCard]}>
        <Text style={styles.cardHeader}>Elbow & Shoulders</Text>
        <Text style={styles.cardBody}>12 disease</Text>
      </View>
      <View style={[styles.cardCommon, styles.fourthCard]}>
        <Text style={styles.cardHeader}>Hand & Arm</Text>
        <Text style={styles.cardBody}>2 disease</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  parentElement: {
    margin: 20,
  },
  txtInput: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ddd",
  },
  parentInput: {
    marginVertical: 30,
  },
  h1Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 40,
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 40,
  },
  firstCard: {
    backgroundColor: "tomato",
    borderColor: "tomato",
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  cardBody: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "300",
    color: "lightgray",
  },
  cardCommon: {
    padding: 20,
    color: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
  },
  secondCard: {
    backgroundColor: "#8dc3ba",
    borderColor: "#8dc3ba",
  },
  thirdCard: {
    backgroundColor: "#f2982d",
    borderColor: "#f2982d",
  },
  fourthCard: {
    backgroundColor: "#327388",
    borderColor: "#327388",
  },
});
