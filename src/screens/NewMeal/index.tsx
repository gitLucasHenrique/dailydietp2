import { SafeAreaView, StyleSheet, Text } from "react-native";

export function NewMeal(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                new meal
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