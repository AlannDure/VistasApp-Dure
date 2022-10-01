import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    alignItems: "center",
  },
  headerContainer: {},
  name: {
    fontSize: 16,
    fontFamily: "OpensansBold",
    color: "#000000",
    marginBottom: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  quantity: {
    fontSize: 14,
    fontFamily: "Opensans",
    color: "#000000",
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "OpensansBold",
  },
});
