import { useContext, useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { authenticate } from '../utils/auth';

function LoginScreen() {


  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);


  const SingInHandler = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await authenticate("signInWithPassword", email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Error", "Email or password is incorrect");
      setIsLoading(false);

    }
  }


  if (isLoading) {
    return <LoadingOverlay message="Login..." />;
  }


  return <>
    <View style={styles.container}>
      <AuthContent isLogin onAuthenticate={SingInHandler} />
    </View>
  </>
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
})
