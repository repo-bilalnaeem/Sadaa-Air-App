import InputHook from "@/hooks/InputHook";
import React, { Fragment, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";

const CELL_COUNT = 6;

const Verifiaction = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [timer, setTimer] = useState(30);
  const { signIn } = useSignIn();
  const [successfulCreation, setSuccessfulCreation] = useState(false);

  const { top } = useSafeAreaInsets();

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const onRequestReset = async () => {
    try {
      await signIn!.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setSuccessfulCreation(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  const handleResend = async () => {
    try {
      onRequestReset();
      setCanResend(false);
      setTimer(30);
    } catch (error) {
      console.log("Error resending verification code:", error);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
    }
  }, [timer]);

  const formatTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const onReset = async () => {
    try {
      const result = await signIn!.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
      });
      // console.log(result);
      router.push("/reset-password");
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.screen, { paddingTop: top }]}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.headingPrimary}>OTP Verification</Text>
          <Text style={styles.headingSecondary}>
            Enter the verification code we just sent on your email address.
          </Text>
          <View style={styles.inputs}>
            <CodeField
              ref={ref}
              {...props}
              value={code}
              onChangeText={setCode}
              cellCount={CELL_COUNT}
              rootStyle={styles.verifycodes}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Fragment key={index}>
                  <View
                    // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={[styles.not_active, isFocused && styles.active]}
                  >
                    <Text style={styles.cellText}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </View>
                </Fragment>
              )}
            />
          </View>

          <Pressable style={styles.button} onPress={() => onReset()}>
            <Text style={styles.button_text}>Verify</Text>
          </Pressable>

          <View style={styles.resend}>
            <Text style={styles.color_light}>Didn’t receive the code?</Text>
            {timer > 0 ? (
              <Text style={styles.resendDark}>{formatTimer(timer)}</Text>
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <Text style={styles.resendDark}>Resend</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 26,
  },

  headingPrimary: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 40,
    marginBottom: 12,
  },

  headingSecondary: {
    color: "#555",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 26,
    marginBottom: 48,
  },

  inputs: {
    gap: 14,
    marginBottom: 24,
  },

  button: {
    backgroundColor: "#255257",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 24,
  },

  button_text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 16,
  },

  verifycodes: {
    flexDirection: "row",
    marginBottom: 28,
    // marginHorizontal: 10,
  },

  not_active: {
    shadowColor: "#000000b7",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.4,
    elevation: 2,
    backgroundColor: "#FDFDFD",
    width: 64,
    height: 64,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 16,
    borderColor: "#D0D5DD",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 26,
    justifyContent: "center",
    alignItems: "center",
  },

  active: {
    backgroundColor: "#fff",
    borderColor: "#255257",
    borderWidth: 2.2,
    borderRadius: 16,
    marginRight: 16,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 26,
    color: "#101623",
    shadowColor: "#000000b7",

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  cellText: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 26,
    color: "#101623",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  resend: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 29,
  },

  color_light: {
    color: "#717784",
    marginRight: 6,
    fontSize: 15,
  },

  resendDark: {
    fontSize: 15,
    color: "#1E1F22",
    fontWeight: "600",
  },
});

export default Verifiaction;
