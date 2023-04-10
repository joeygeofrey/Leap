import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { icons } from "../../../constants";
import styles from "./footer.style";

// define footer
const Footer = ({ url }) => {

  // render view for footer component
  return (
    <View style={styles.container}>
      {/* like button */}
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      {/* apply for job button - link */}
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  );
};

// export footer component as default
export default Footer;
