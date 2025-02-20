import React from 'react';
import {Text, StyleSheet, Pressable } from 'react-native';

interface PasswordItemProps {
  data: string;
  removePassword: () => void;
}

export default function PasswordItem({ data, removePassword }: PasswordItemProps) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text>{data}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    padding: 14,
    width: "100%",
    marginBottom: 14,
  }
});
