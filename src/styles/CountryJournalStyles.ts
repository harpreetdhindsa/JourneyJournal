
import { StyleSheet } from "react-native";

export const CountryJournalStyles = StyleSheet.create({
 
  journalContainer: {
    marginTop: 16,
    width: "100%",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  // Journal Title
  journalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1f2937",
    textAlign: "center",
  },

  // Uploaded Photo
  journalImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  // "No Photo" Placeholder Text
  noPhotoText: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 10,
  },

  // TextInput for Notes
  journalNoteInput: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    height: 120,
    marginTop: 10,
    textAlignVertical: "top",
  },

  //journal text
  journalTextView: {
    fontSize: 16,
    color: "#111827",
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 6,
    paddingHorizontal: 2,
    textAlign: "left",
  },

  //footer buttons
  footerButtons: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
  },
});
