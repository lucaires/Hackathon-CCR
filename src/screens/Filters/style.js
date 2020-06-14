import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  categorias: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 7,
  },
  filterInfra: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 7,
  },
  filterManu: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 7,
  },
  item: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 110,
    width: 110,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",

    textAlign: "center",
  },

  selectedItems: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#218080",
    height: 110,
    width: 110,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",

    textAlign: "center",
  },

  itemTitle: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 13,
  },
  classification: {
    marginBottom: 20,
  },
  rating: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#218080",
    color: "#fff",
  },
  toggleSwitch: {
    padding: 10,
    alignSelf: "flex-start",
  },
});

export default styles;
