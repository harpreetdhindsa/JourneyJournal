import { StyleSheet } from "react-native";

export const DetailScreenStyles = StyleSheet.create({
  //main safe area background
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  //scroll container
  scrollContainer: {
    paddingBottom: 32,
    backgroundColor: "#F3F4F6",
  },

  //main country card (flag + details together)
  countryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 16,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },

  //flag image
  flagImage: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 12,
  },

  //country name
  countryName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 12,
  },

  //info row (label + value)
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 8,
  },

  //label text
  label: {
    fontWeight: "600",
    color: "#374151",
    fontSize: 15,
  },

  //value text
  value: {
    fontWeight: "500",
    color: "#111827",
    fontSize: 15,
  },

  //journal section
  journalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
});
