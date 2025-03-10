import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { Colors } from "../../constants/color/Colors";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import KeyBoardAvoid from "../../components/KeyBoardAvoid/KeyBoardAvoid";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig/FirebaseConfig";

const dimensions = Dimensions.get("window");

const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const navigation = useNavigation();

  const onSignUpPressed = async (data) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (user) {
        navigation.replace("home");
      }
    } catch (error) {
      alert(`Sign up failed: ${error.message}`);
    }
  };

  return (
    <KeyBoardAvoid>
      <View style={styles.container}>
        <View style={styles.appLogoContainer}>
          <Image
            style={styles.taskManagerLogo}
            source={require("../../assets/app-logo/task-manager-logo.jpg")}
          />
          <Text variant="headlineMedium">Task Manager</Text>
        </View>

        <Text variant="bodyLarge" style={styles.subHeading}>
          Welcome to Task Manager, Let's make your Todo's
        </Text>

        <View style={styles.inputContainer}>
          <View style={styles.usernameContainer}>
            <CustomInput
              name="username"
              label="Enter Username"
              control={control}
              rules={{ required: "Username is required" }}
            />
          </View>

          <View style={styles.emailContainer}>
            <CustomInput
              name="email"
              label="Enter Email Address"
              control={control}
              rules={{ required: "Email is required" }}
            />
          </View>

          <View style={styles.passwordContainer}>
            <CustomInput
              label="Enter Password"
              name="password"
              control={control}
              secureTextEntry={true}
              rules={{ required: "Password is required" }}
            />
          </View>
        </View>

        <CustomButton
          title="Sign up"
          color={Colors.primary}
          style={styles.buttonStyle}
          onPress={handleSubmit(onSignUpPressed)}
        />

        <View style={styles.signUpContainer}>
          <Text variant="bodyLarge">Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text variant="bodyLarge" style={styles.signUpText}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyBoardAvoid>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: dimensions.width,
    paddingTop: 150,
    backgroundColor: Colors.secondary,
  },
  appLogoContainer: {
    alignItems: "center",
    rowGap: 10,
  },
  taskManagerLogo: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 10,
  },
  subHeading: {
    marginTop: 100,
    textAlign: "justify",
    width: 300,
    marginLeft: 50,
  },
  inputContainer: {
    width: 400,
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "center",
    rowGap: 40,
  },
  emailContainer: {
    rowGap: 10,
  },
  passwordContainer: {
    rowGap: 10,
  },
  buttonStyle: {
    width: 400,
    alignSelf: "center",
    marginTop: 40,
    padding: 5,
  },

  signUpText: {
    color: Colors.linkColor,
    borderBottomWidth: 1,
    borderBottomColor: Colors.linkColor,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
