import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  // === Main Container ===
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6", // soft neutral background
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  // === Centered Layout for Loader
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },

  // === Search Bar ===
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },

  // Country Card
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // Flag Image
  flag: {
    width: 80,
    height: 50,
    borderRadius: 6,
    marginRight: 14,
    borderWidth: 1,
    borderColor:"#f9fafb"
  },

  // Country Name
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  //Country Details 
  details: {
    fontSize: 14,
    color: "#4B5563",
  },
});

//header style 
export const headerStyles = {
  headerStyle: {
    backgroundColor: "#F3F4F6", 
  },
  headerTintColor: "#000", 
  headerTitleStyle: {
    fontWeight: "700",
    fontSize: 20,
  },
};
