import React from "react";
import { View, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CommonToolbar from "../../components/commontoolbar";
import ItemGuest from "../../components/itemguest";
import { myGuestsList } from "../../utils/const";
import styles from "./styles";
import string from "../../utils/string";
import color from "../../utils/color";
import FabButton from "../../components/fabbutton";
import Routes from "../../router/routes";

export default MyGuestsScreen = ({ navigation }) => {
  const renderGuestItem = (props) => {
    return <ItemGuest {...props} />;
  };
  const handleBackClick = () => {
    navigation.goBack();
  };
  const handleAddClick=()=>{
    navigation.navigate(Routes.AddGuest)
  }
  return (
    <GestureHandlerRootView style={styles.ghrContainer}>
      <CommonToolbar
        leftIcon={"arrow-back"}
        title={string.myguest}
        onBackClick={handleBackClick}
      />
      <View style={styles.vContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
          keyExtractor={(_item, index) => `guest ${index}`}
          data={myGuestsList}
          contentContainerStyle={styles.flContainer}
          renderItem={renderGuestItem}
        />
      </View>
      <FabButton onAddClick={handleAddClick}/>
    </GestureHandlerRootView>
  );
};
