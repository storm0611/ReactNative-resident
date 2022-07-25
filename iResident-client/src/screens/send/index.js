import React, { useState } from "react";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, Button, Alert } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import DocumentPicker from 'react-native-document-picker'
import color from "../../utils/color";

const ProofScreen = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileSelect = async (event) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      this.setFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single file picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  const onSubmit = data => {
    data.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("content", content);
    axios.post('http://10.10.13.36:4001/api/upload', {
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    }).then((res) => {
      alert('ok: ' + res.str);
      setContent("");
      setTitle("");
      setFile(null);
    }).catch((err) => {
      alert(err)
      setContent("");
      setTitle("");
      setFile(null);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput
        name='title'
        placeholder="Title here ..."
        activeOutlineColor={color.primary}
        style={styles.title}
        mode="outlined"
        onChangeText={(text) => {
          setTitle(text);
        }}
        value={title}
      />
      <Text>Content:</Text>
      <TextInput
        name='content'
        placeholder="Content here ..."
        activeOutlineColor={color.primary}
        style={styles.content}
        mode="outlined"
        onChangeText={(text) => {
          setContent(text);
        }}
        value={content}
      />
      <Button style={styles.btn} title="Choose file..." onPress={handleFileSelect} />
      <Button style={styles.btn} title="Submit" onPress={onSubmit} />
    </View>
  );
};

export default ProofScreen;


