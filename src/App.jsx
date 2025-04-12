// React Native solution 
import React from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const downloadUrl = "https://sfile.mobi/8XjYsTr1oQD";
  
  const handleDownload = async () => {
    // Check if the URL can be opened
    const canOpen = await Linking.canOpenURL(downloadUrl);
    
    if (canOpen) {
      // Open URL in external browser
      await Linking.openURL(downloadUrl);
    } else {
      console.error('Cannot open URL');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Your WebView content */}
      <WebView 
        source={{ uri: 'your-app-content-url' }}
        style={{ flex: 1 }}
      />
      
      {/* Download button that uses external browser */}
      <TouchableOpacity
        onPress={handleDownload}
        style={{
          backgroundColor: '#3b82f6',
          padding: 15,
          margin: 20,
          borderRadius: 10,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>
          Download Ailok TV versaun foun
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;