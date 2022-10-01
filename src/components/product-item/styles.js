import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    height: 120,
  },
  item: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "OpensansBold",
    fontSize: 18,
  },
  price: {
    fontFamily: "OpensansBold",
    fontSize: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detail: {
    fontFamily: "Opensans",
    fontSize: 14,
  },
});
