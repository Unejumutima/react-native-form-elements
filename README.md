# React Native Form Elements Demo

A complete React Native form application built with Expo that demonstrates all major form elements. When submitted, the form saves data to a local JSON file.

## Form Elements Included

1. **TextInput (Single Line)** - Full Name
2. **TextInput (Email)** - Email with email keyboard
3. **TextInput (Password)** - Password with secure entry
4. **TextInput (Phone)** - Phone number with numeric keyboard
5. **TextInput (Numeric)** - Age with numeric keyboard
6. **TextInput (Multiline)** - Address and Bio text areas
7. **Picker/Dropdown** - Country and Gender selection
8. **DateTimePicker** - Birth date selection
9. **Slider** - Rating (1-5) and Volume (0-100)
10. **Switch** - Newsletter subscription and Terms agreement
11. **Button** - Submit button

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
   - Scan the QR code with Expo Go app (Android/iOS)
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Press `w` for web browser

## How It Works

When you submit the form:
1. All form values are collected into a JSON object
2. The data is saved to a local file in the app's document directory
3. Filename format: `form-submission-[timestamp].json`
4. An alert shows the success message with the filename
5. The file path is logged to the console

## File Location

On Android: Check the app's document directory via device file manager
On iOS: Access through Files app under the app's documents
On Web: Check browser console for the data

## Dependencies

- `expo` - Expo framework
- `react-native` - React Native core
- `@react-native-picker/picker` - Dropdown/Picker component
- `@react-native-community/datetimepicker` - Date picker component
- `@react-native-community/slider` - Slider component
- `expo-file-system` - File system access for saving JSON

## Notes

- No backend required - all data is saved locally
- No file uploads - everything stays on device
- Simple styling for educational purposes
- Password is not saved in plain text (replaced with asterisks)
