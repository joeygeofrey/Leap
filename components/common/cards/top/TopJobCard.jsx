// import libs and components
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './topjobcard.style';
import { checkImageURL } from '../../../../utils';

// define TopJobCard component
const TopJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      {/* render the logo image */}
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={checkImageURL(item.employer_logo)
            ? { uri: item.employer_logo }
            : require("../../../../assets/images/job.jpg")
          }
          resizeMode='contain'
          style={styles.logoImage}
        />
      {/* render company name and job info */}
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_city}, {item.job_state}</Text>
      </View>
    </TouchableOpacity>
  )
}

// export TopJobCard component as default
export default TopJobCard;