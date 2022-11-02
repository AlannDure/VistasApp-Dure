import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "../../components/index";
import { colors } from "../../constants/themes";
import { styles } from "./styles";
import { signIn, signUp } from "../../store/actions/auth.actions";
import { UPDATED_FORM, onInputChange, onFocusOut } from "../../utils/forms";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const title = isLogin ? "Login" : "Register";
  const message = isLogin ? "Sign up here!" : "Back to login!";
  const messageAction = isLogin ? "Login" : "Register";

  const onHandleSubmit = () => {
    dispatch( isLogin ? signIn(formState.email.value, formState.password.value) : signUp(formState.email.value, formState.password.value));
  };
  const onHandleChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };
  const onHandleBlur = (value,type) =>{
    onInputChange(type, value, dispatchFormState, formState);

  }
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          style={styles.input}
          label="Email"
          placeholder="Email"
          value={formState.email.value}
          placeholderTextColor={"#808080"}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text, "email")}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
        />
        <Input
          style={styles.input}
          label="Password"
          placeholderTextColor={"#808080"}
          value={formState.password.value}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text, "password")}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
        />
        <Button
          title={messageAction}
          color={colors.primary}
          onPress={onHandleSubmit}
          disabled={!formState.isFormValid}
        />
        <View style={styles.prompt}>
          <TouchableOpacity
            style={styles.promptButton}
            onPress={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
