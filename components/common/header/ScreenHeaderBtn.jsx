// import libs and components
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './screenheader.style';

// ScreenHeaderBtn component
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  // return touchable opacity with an enclosed image
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

// export ScreenHeaderBtn component
export default ScreenHeaderBtn;