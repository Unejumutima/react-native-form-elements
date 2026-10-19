import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Switch,
  Alert,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import * as FileSystem from 'expo-file-system';

export default function App() {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [website, setWebsite] = useState('');
  const [search, setSearch] = useState('');
  const [username, setUsername] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  
  
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  
  
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  
  
  const [birthDate, setBirthDate] = useState(new Date(2000, 0, 1));
  const [appointmentTime, setAppointmentTime] = useState(new Date());
  const [eventDate, setEventDate] = useState(new Date());
  
  
  const [rating, setRating] = useState(3);
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(70);
  const [temperature, setTemperature] = useState(20);
  const [satisfaction, setSatisfaction] = useState(5);
  

  const [favoriteColor, setFavoriteColor] = useState('');
  
  
  const [hobbies, setHobbies] = useState({
    reading: false,
    sports: false,
    music: false,
    travel: false,
    cooking: false,
    gaming: false,
  });
  
  
  const [interests, setInterests] = useState({
    technology: false,
    art: false,
    science: false,
    business: false,
  });
  
 
  const [skills, setSkills] = useState({
    javascript: false,
    python: false,
    java: false,
    csharp: false,
  });
  
  
  const [quantity, setQuantity] = useState(1);
  
  
  const [priority, setPriority] = useState('medium');
  
  
  const [fileType, setFileType] = useState('');
  
 
  const [contactMethod, setContactMethod] = useState('');

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setAppointmentTime(selectedTime);
    }
  };

  const handleEventDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setEventDate(selectedDate);
    }
  };

  const toggleHobby = (hobby) => {
    setHobbies(prev => ({
      ...prev,
      [hobby]: !prev[hobby]
    }));
  };

  const toggleInterest = (interest) => {
    setInterests(prev => ({
      ...prev,
      [interest]: !prev[interest]
    }));
  };

  const toggleSkill = (skill) => {
    setSkills(prev => ({
      ...prev,
      [skill]: !prev[skill]
    }));
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleSubmit = async () => {
    const formData = {
     
      fullName,
      email,
      password: '***hidden***',
      confirmPassword: '***hidden***',
      phone,
      address,
      bio,
      age,
      website,
      search,
      username,
      zipCode,
      city,
      
     
      country,
      gender,
      education,
      employmentStatus,
      maritalStatus,
      
      
      subscribeNewsletter,
      agreeTerms,
      notifications,
      darkMode,
      twoFactorAuth,
      
      birthDate: birthDate.toISOString(),
      appointmentTime: appointmentTime.toLocaleTimeString(),
      eventDate: eventDate.toISOString(),
      
      
      rating,
      volume,
      brightness,
      temperature,
      satisfaction,
      
      
      favoriteColor,
      contactMethod,
      
      
      hobbies,
      interests,
      
     
      skills,
      
  
      quantity,
      
     
      priority,
      

      fileType,
      
      submittedAt: new Date().toISOString(),
    };

    try {
      const jsonData = JSON.stringify(formData, null, 2);
      const fileName = `form-submission-${Date.now()}.json`;
      const filePath = `${FileSystem.documentDirectory}${fileName}`;
      
      await FileSystem.writeAsStringAsync(filePath, jsonData);
      
      Alert.alert(
        'Success!',
        `Form submitted successfully!\n\nData saved to:\n${fileName}`,
        [{ text: 'OK' }]
      );
      
      console.log('Form data saved to:', filePath);
      console.log('Form data:', formData);
    } catch (error) {
      Alert.alert('Error', 'Failed to save form data: ' + error.message);
      console.error('Error saving form:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Complete Form Elements Demo</Text>
        <Text style={styles.subtitle}>All Form Input Types</Text>
        
        {/* SECTION 1: TEXT INPUTS */}
        <Text style={styles.sectionTitle}>📝 Text Input Fields</Text>
        
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
        />

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Choose a username"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Website URL:</Text>
        <TextInput
          style={styles.input}
          value={website}
          onChangeText={setWebsite}
          placeholder="https://example.com"
          keyboardType="url"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Zip Code:</Text>
        <TextInput
          style={styles.input}
          value={zipCode}
          onChangeText={setZipCode}
          placeholder="Enter zip code"
          keyboardType="numeric"
        />

        <Text style={styles.label}>City:</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
          placeholder="Enter your city"
        />

        <Text style={styles.label}>Search:</Text>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
        />

        <Text style={styles.label}>Address (Multiline):</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter your full address"
          multiline
          numberOfLines={3}
        />

        <Text style={styles.label}>Bio (Large Text Area):</Text>
        <TextInput
          style={[styles.input, styles.textAreaLarge]}
          value={bio}
          onChangeText={setBio}
          placeholder="Tell us about yourself..."
          multiline
          numberOfLines={5}
        />

        {/* SECTION 2: DROPDOWNS/PICKERS */}
        <Text style={styles.sectionTitle}>📋 Dropdown Selectors</Text>

        <Text style={styles.label}>Country:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={country}
            onValueChange={setCountry}
            style={styles.picker}
          >
            <Picker.Item label="Select a country" value="" />
            <Picker.Item label="United States" value="us" />
            <Picker.Item label="United Kingdom" value="uk" />
            <Picker.Item label="Canada" value="ca" />
            <Picker.Item label="Australia" value="au" />
            <Picker.Item label="Germany" value="de" />
            <Picker.Item label="France" value="fr" />
            <Picker.Item label="Japan" value="jp" />
            <Picker.Item label="India" value="in" />
            <Picker.Item label="Brazil" value="br" />
          </Picker>
        </View>

        <Text style={styles.label}>Gender:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={setGender}
            style={styles.picker}
          >
            <Picker.Item label="Select gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Non-binary" value="nonbinary" />
            <Picker.Item label="Prefer not to say" value="prefer-not-to-say" />
          </Picker>
        </View>

        <Text style={styles.label}>Education Level:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={education}
            onValueChange={setEducation}
            style={styles.picker}
          >
            <Picker.Item label="Select education level" value="" />
            <Picker.Item label="High School" value="highschool" />
            <Picker.Item label="Associate Degree" value="associate" />
            <Picker.Item label="Bachelor's Degree" value="bachelor" />
            <Picker.Item label="Master's Degree" value="master" />
            <Picker.Item label="Doctorate" value="doctorate" />
          </Picker>
        </View>

        <Text style={styles.label}>Employment Status:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={employmentStatus}
            onValueChange={setEmploymentStatus}
            style={styles.picker}
          >
            <Picker.Item label="Select employment status" value="" />
            <Picker.Item label="Employed Full-time" value="fulltime" />
            <Picker.Item label="Employed Part-time" value="parttime" />
            <Picker.Item label="Self-employed" value="selfemployed" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Unemployed" value="unemployed" />
            <Picker.Item label="Retired" value="retired" />
          </Picker>
        </View>

        <Text style={styles.label}>Marital Status:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={maritalStatus}
            onValueChange={setMaritalStatus}
            style={styles.picker}
          >
            <Picker.Item label="Select marital status" value="" />
            <Picker.Item label="Single" value="single" />
            <Picker.Item label="Married" value="married" />
            <Picker.Item label="Divorced" value="divorced" />
            <Picker.Item label="Widowed" value="widowed" />
          </Picker>
        </View>

        <Text style={styles.label}>File Type Preference:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={fileType}
            onValueChange={setFileType}
            style={styles.picker}
          >
            <Picker.Item label="Select file type" value="" />
            <Picker.Item label="PDF Document" value="pdf" />
            <Picker.Item label="Word Document" value="docx" />
            <Picker.Item label="Excel Spreadsheet" value="xlsx" />
            <Picker.Item label="PowerPoint" value="pptx" />
            <Picker.Item label="Text File" value="txt" />
            <Picker.Item label="Image (PNG)" value="png" />
            <Picker.Item label="Image (JPEG)" value="jpg" />
          </Picker>
        </View>

        {/* SECTION 3: DATE & TIME PICKERS */}
        <Text style={styles.sectionTitle}>📅 Date & Time Pickers</Text>

        <Text style={styles.label}>Birth Date:</Text>
        <View style={styles.datePickerWrapper}>
          <DateTimePicker
            value={birthDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'compact' : 'default'}
            onChange={handleDateChange}
            maximumDate={new Date()}
            style={styles.datePicker}
          />
        </View>

        <Text style={styles.label}>Appointment Time:</Text>
        <View style={styles.datePickerWrapper}>
          <DateTimePicker
            value={appointmentTime}
            mode="time"
            display={Platform.OS === 'ios' ? 'compact' : 'default'}
            onChange={handleTimeChange}
            style={styles.datePicker}
          />
        </View>

        <Text style={styles.label}>Event Date:</Text>
        <View style={styles.datePickerWrapper}>
          <DateTimePicker
            value={eventDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'compact' : 'default'}
            onChange={handleEventDateChange}
            minimumDate={new Date()}
            style={styles.datePicker}
          />
        </View>

        {/* SECTION 4: RADIO BUTTONS */}
        <Text style={styles.sectionTitle}>🔘 Radio Buttons (Single Choice)</Text>

        <Text style={styles.label}>Favorite Color:</Text>
        <View style={styles.radioGroup}>
          {['Red', 'Blue', 'Green', 'Yellow', 'Purple'].map((color) => (
            <TouchableOpacity
              key={color}
              style={styles.radioButton}
              onPress={() => setFavoriteColor(color)}
            >
              <View style={styles.radioCircle}>
                {favoriteColor === color && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioText}>{color}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Preferred Contact Method:</Text>
        <View style={styles.radioGroup}>
          {[
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'SMS', value: 'sms' },
            { label: 'Mail', value: 'mail' },
          ].map((method) => (
            <TouchableOpacity
              key={method.value}
              style={styles.radioButton}
              onPress={() => setContactMethod(method.value)}
            >
              <View style={styles.radioCircle}>
                {contactMethod === method.value && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioText}>{method.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Priority Level:</Text>
        <View style={styles.radioGroup}>
          {[
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
            { label: 'Urgent', value: 'urgent' },
          ].map((level) => (
            <TouchableOpacity
              key={level.value}
              style={styles.radioButton}
              onPress={() => setPriority(level.value)}
            >
              <View style={styles.radioCircle}>
                {priority === level.value && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioText}>{level.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* SECTION 5: CHECKBOXES */}
        <Text style={styles.sectionTitle}>☑️ Checkboxes (Multiple Choice)</Text>

        <Text style={styles.label}>Select Your Hobbies:</Text>
        <View style={styles.checkboxGroup}>
          {Object.keys(hobbies).map((hobby) => (
            <TouchableOpacity
              key={hobby}
              style={styles.checkboxButton}
              onPress={() => toggleHobby(hobby)}
            >
              <View style={styles.checkbox}>
                {hobbies[hobby] && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>
                {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Select Your Interests:</Text>
        <View style={styles.checkboxGroup}>
          {Object.keys(interests).map((interest) => (
            <TouchableOpacity
              key={interest}
              style={styles.checkboxButton}
              onPress={() => toggleInterest(interest)}
            >
              <View style={styles.checkbox}>
                {interests[interest] && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>
                {interest.charAt(0).toUpperCase() + interest.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* SECTION 6: TOGGLE BUTTONS */}
        <Text style={styles.sectionTitle}>🔲 Toggle Buttons (Skills)</Text>

        <Text style={styles.label}>Programming Skills:</Text>
        <View style={styles.toggleGroup}>
          {Object.keys(skills).map((skill) => (
            <TouchableOpacity
              key={skill}
              style={[
                styles.toggleButton,
                skills[skill] && styles.toggleButtonActive
              ]}
              onPress={() => toggleSkill(skill)}
            >
              <Text style={[
                styles.toggleButtonText,
                skills[skill] && styles.toggleButtonTextActive
              ]}>
                {skill.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* SECTION 7: SLIDERS */}
        <Text style={styles.sectionTitle}>🎚️ Sliders</Text>

        <Text style={styles.label}>
          Rating (1-5): {rating.toFixed(1)} ⭐
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={0.5}
          value={rating}
          onValueChange={setRating}
          minimumTrackTintColor="#FFD700"
          maximumTrackTintColor="#d3d3d3"
        />

        <Text style={styles.label}>
          Volume Level: {Math.round(volume)}% 🔊
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={volume}
          onValueChange={setVolume}
          minimumTrackTintColor="#2196F3"
          maximumTrackTintColor="#d3d3d3"
        />

        <Text style={styles.label}>
          Brightness: {Math.round(brightness)}% 💡
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={5}
          value={brightness}
          onValueChange={setBrightness}
          minimumTrackTintColor="#FFA500"
          maximumTrackTintColor="#d3d3d3"
        />

        <Text style={styles.label}>
          Temperature: {Math.round(temperature)}°C 🌡️
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={-10}
          maximumValue={40}
          step={1}
          value={temperature}
          onValueChange={setTemperature}
          minimumTrackTintColor="#FF5722"
          maximumTrackTintColor="#03A9F4"
        />

        <Text style={styles.label}>
          Satisfaction Level: {Math.round(satisfaction)}/10 😊
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={satisfaction}
          onValueChange={setSatisfaction}
          minimumTrackTintColor="#4CAF50"
          maximumTrackTintColor="#d3d3d3"
        />

        {/* SECTION 8: NUMBER INPUT WITH CONTROLS */}
        <Text style={styles.sectionTitle}>🔢 Number Controls</Text>

        <Text style={styles.label}>Quantity:</Text>
        <View style={styles.numberControl}>
          <TouchableOpacity 
            style={styles.numberButton}
            onPress={decrementQuantity}
          >
            <Text style={styles.numberButtonText}>-</Text>
          </TouchableOpacity>
          <View style={styles.numberDisplay}>
            <Text style={styles.numberValue}>{quantity}</Text>
          </View>
          <TouchableOpacity 
            style={styles.numberButton}
            onPress={incrementQuantity}
          >
            <Text style={styles.numberButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* SECTION 9: SWITCHES/TOGGLES */}
        <Text style={styles.sectionTitle}>🔄 Switches & Toggles</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Subscribe to Newsletter:</Text>
          <Switch
            value={subscribeNewsletter}
            onValueChange={setSubscribeNewsletter}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={subscribeNewsletter ? "#2196F3" : "#f4f3f4"}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Agree to Terms & Conditions:</Text>
          <Switch
            value={agreeTerms}
            onValueChange={setAgreeTerms}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={agreeTerms ? "#2196F3" : "#f4f3f4"}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Enable Notifications:</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notifications ? "#4CAF50" : "#f4f3f4"}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Dark Mode:</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#767577", true: "#555" }}
            thumbColor={darkMode ? "#FFF" : "#f4f3f4"}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Two-Factor Authentication:</Text>
          <Switch
            value={twoFactorAuth}
            onValueChange={setTwoFactorAuth}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={twoFactorAuth ? "#FF9800" : "#f4f3f4"}
          />
        </View>

        {/* SUBMIT BUTTON */}
        <View style={styles.buttonContainer}>
          <Button
            title="Submit Form"
            onPress={handleSubmit}
            color="#4CAF50"
          />
        </View>

        <View style={styles.spacer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
  },
  textArea: {
    height: 60,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#000',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  checkboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  checkmark: {
    fontSize: 14,
  },
  toggleButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    marginBottom: 10,
  },
  toggleButtonActive: {
    backgroundColor: '#ddd',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  numberControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  numberButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberDisplay: {
    marginHorizontal: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  spacer: {
    height: 30,
  },
});
