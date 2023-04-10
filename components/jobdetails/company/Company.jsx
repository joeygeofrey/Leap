import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils';


// functional component that renders the details of the company
const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        {/* company logo, and placeholder if no logo exists */}
        <Image 
          source={
            checkImageURL(companyLogo)
              ? {
                  uri: companyLogo,
                }
              : require("../../../assets/images/job.jpg")
          }
          style={styles.logoImage}
        />
      </View>

        {/* job title */}
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      {/* company info */}
      <View style={styles.companyInfoBox}>
        {/* company name */}
        <Text style={styles.companyName}>{companyName} / </Text>
        {/* company location */}
        <View style={styles.locationBox}>
          {/* icon for location */}
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          {/* text for the location */}
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

// export Company component as default
export default Company