import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const DepartureDate = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelect = (day: any) => {
    setSelectedDate(day.dateString);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Calendar
        onDayPress={handleDateSelect}
        theme={{
          arrowColor: "#0064D2",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "400",
          textMonthFontWeight: "600",
          textDayHeaderFontWeight: "300",
        }}
        markedDates={{
          [selectedDate]: { selected: true, color: "#2584e9" },
        }}
      />
    </SafeAreaView>
  );
};

export default DepartureDate;
