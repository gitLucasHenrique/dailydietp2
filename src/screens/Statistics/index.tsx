import { StyleSheet } from "react-native";
import { SafeAreaView, Text } from "react-native";

export function Statistics(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                statistics
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a70d0d',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });