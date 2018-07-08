import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Label from '../components/Label';
import Section from '../components/Section';

class SendMenu extends Component {
  state = {
    text: '',
  };

  closeModal = () =>
    this.props.navigator.dismissModal({
      animationType: 'slide-up',
    });

  // Add function to paste whatever is in the clipboard
  pasteContent = () => null;

  render() {
    return (
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 16,
          }}
        >
          <Button onPress={this.closeModal} title="Cancel" color="#5983FF" accessibilityLabel="Cancel" style={{ fontSize: 18 }} />
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{'Send'}</Text>
          <Image style={{ width: 20, height: 20, marginLeft: 34 }} source={require('../assets/scan-icon-alt.png')} />
        </View>
        <Section
          style={{
            flexDirection: 'row',
            padding: 8,
            alignItems: 'stretch',
            width: '100%',
            borderTopWidth: 1,
            borderTopColor: 'rgba(0,0,0, 0.1)',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0, 0.1)',
          }}
        >
          <Image
            style={{
              width: 48,
              height: 48,
              resizeMode: 'contain',
              borderRadius: 24,
            }}
            source={{ uri: 'https://raw.githubusercontent.com/balance-io/tokens/master/images/ethereum_1.png' }}
          />
          <View style={{ paddingLeft: 8, flexGrow: 1 }}>
            <Label style={{ width: '100%' }}>{'Ethereum'}</Label>
            <Text>{'$5,678'}</Text>
          </View>
          <Image
            style={{
              width: 5,
              height: 12,
              marginRight: 8,
              alignSelf: 'center',
            }}
            source={require('../assets/dropdown-arrow.png')}
          />
        </Section>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          <Image style={{ width: 20, height: 20 }} source={require('../assets/person-icon.png')} />
          <TextInput
            style={{ height: 40, flexGrow: 1, marginLeft: 8 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Address, Name, Phone"
          />
          <TouchableOpacity onPress={this.pasteContent} style={{ backgroundColor: '#A9ADB9', borderRadius: 14, padding: 6 }}>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>{'Paste'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    backgroundColor: '#fff',
  },
});

export default SendMenu;
