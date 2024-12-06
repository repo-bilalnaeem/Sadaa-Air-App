import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";

const DepartureDate = () => {
  const [selected, setSelected] = useState("");

  const handleDayPress = (day: any) => {
    setSelected(day.dateString);

    router.dismissTo({
      pathname: "/(authenticated)/(tabs)",
      params: { selectedDate: day.dateString },
    });

    // router.dismiss();
  };

  return (
    <View>
      <CalendarList
        initialScrollIndex={200}
        showsVerticalScrollIndicator={false}
        bounces={false}
        pastScrollRange={1}
        futureScrollRange={1}
        onDayPress={(day) => {
          // setSelected(day.dateString);
          handleDayPress(day);
        }}
        theme={{
          dayTextColor: "black",
          selectedDayBackgroundColor: "#365FF1",
          textDayFontWeight: "500",
          textDayHeaderFontWeight: "400",
          selectedDayTextColor: "white",
          todayTextColor: "white",
          todayBackgroundColor: "#365FF1",
          monthTextColor: "#404040",
          textMonthFontWeight: "400",
          textDayFontSize: 17,
          textMonthFontSize: 15,
        }}
        onVisibleMonthsChange={(months) => {
          // console.log("Visible months changed", months);
        }}
        monthFormat="MMMM"
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            // selectedDotColor: "orange",
          },
        }}
      />
    </View>
  );
};

export default DepartureDate;
