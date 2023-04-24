import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.parentElement}>
      <View>
        <Text style={styles.headerText}>Hello, Shea Lewis</Text>
        <Text style={styles.bodyText}>Well come to your Home</Text>
      </View>
      <View style={styles.mainCard}>
        <View style={styles.mainCardLeft}>
          <Text style={[styles.mainCardText, styles.mainCardTextColor]}>
            Cloudy
          </Text>
        </View>
        <View>
          <Text style={[styles.mainCardTextColor, styles.dateText]}>
            10 January 2022
          </Text>
          <Text style={[styles.mainCardTextColor, styles.degreeText]}>27°</Text>
        </View>
      </View>
      <View style={styles.bodyCardsHeader}>
        <Text style={styles.yourRooms}>Your Rooms</Text>
        <View style={styles.add}>
          <Text style={styles.addText}>+ Add</Text>
        </View>
      </View>
      <View>
        <View style={[styles.cardCommon, styles.firstCard]}>
          <Text style={[styles.cardHeaderCommon]}>Living Room</Text>
          <Text>7 Devices</Text>
        </View>
        <View style={[styles.cardCommon, styles.secondCard]}>
          <Text style={[styles.cardHeaderCommon]}>Bed Room</Text>
          <Text>5 Devices</Text>
        </View>
        <View style={[styles.cardCommon, styles.thirdCard]}>
          <Text style={[styles.cardHeaderCommon]}>Bath Room</Text>
          <Text>4 Devices</Text>
        </View>
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
    margin: 30,
  },
  headerText: {
    fontWeight: "600",
    marginBottom: 10,
    fontSize: 30,
  },
  bodyText: {
    fontWeight: "400",
    fontSize: 15,
  },
  mainCardTextColor: {
    color: "#fff",
  },
  mainCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    padding: 30,
    backgroundColor: "#2785d3",
    borderRadius: 15,
  },
  mainCardText: {
    fontSize: 18,
    fontWeight: "500",
    marginRight: 50,
  },
  mainCardLeft: {
    borderRightWidth: 1,
    borderColor: "lightgrey",
  },
  mainCardRight: {},
  dateText: {
    fontWeight: "500",
    marginBottom: 17,
  },
  degreeText: {
    fontWeight: "700",
    fontSize: 50,
  },
  bodyCardsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  yourRooms: {
    fontSize: 23,
    fontWeight: "600",
  },
  add: {
    padding: 8,
    backgroundColor: "#c6f0e5",
    borderRadius: 10,
  },
  addText: {
    color: "#56b69d",
  },
  cardCommon: {
    padding: 20,
    color: "#fff",
    borderRadius: 15,
    marginVertical: 10,
  },
  cardHeaderCommon: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  firstCard: {
    backgroundColor: "#eadae7",
  },
  secondCard: {
    backgroundColor: "#e6f2ff",
  },
  thirdCard: {
    backgroundColor: "#f8fbec",
  },
});
