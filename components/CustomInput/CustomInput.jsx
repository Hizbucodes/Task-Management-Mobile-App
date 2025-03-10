import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

const CustomInput = ({
  control,
  name,
  placeholder,
  label,
  secureTextEntry,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={styles.container}>
            <TextInput
              mode="outlined"
              label={label}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              style={styles.input}
            />
          </View>
          {error && (
            <Text style={styles.errorText}>{error && error.message}</Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    borderRadius: 20,
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
  },
});
