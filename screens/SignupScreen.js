import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { authenticate } from '../utils/auth';

function SignupScreen() {

  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const SingUpHandler = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await authenticate("signUp", email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Error", "Error Creating a user");
      setIsLoading(false);
    }

  }

  if (isLoading) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <View style={styles.container}>
    <AuthContent onAuthenticate={SingUpHandler} />
  </View>
}

export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
})