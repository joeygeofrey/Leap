// import libs and components
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

// array of job types
const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

// welcome component
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  // use router
  const router = useRouter();
  // set active job type
  const [activeJobType, setActiveJobType] = useState('Full-time');
  
  // render view with user name, welcome message, search input bar, search button, and job types
  return (
    // container for user name and welcome message
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi Joey</Text>
        <Text style={styles.welcomeMessage}>Find your next adventure!</Text>
      </View>
      
      {/* Container for search input and search button */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What do you love to do?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* container for job types */}
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

// export welcome component as default
export default Welcome;