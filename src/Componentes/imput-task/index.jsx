import { View, TextInput, Button } from "react-native";

import { styles } from "./styles";

const ImputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  task,
  onHandlerCreateTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Agregar una nueva tarea"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="black"
        selectionColor="#D4D7ED"
        placeholderTextColor="#585d5d"
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandlerChangeText}
        value={task}
      />
      <Button
        disabled={task.length === 0}
        title="Crear"
        color="#e06f72"
        onPress={onHandlerCreateTask}
      />
    </View>
  );
};

export default ImputTask;
