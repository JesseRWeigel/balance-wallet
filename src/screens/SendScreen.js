import React, { Component } from 'react';
import { KeyboardAvoidingView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import ContactRow from '../components/ContactRow';
import SendMenu from '../components/SendMenu';

class SendScreen extends Component {
  state = {
    contactsDisplayed: false,
    cryptoInput: '',
    fiatInput: '',
  };
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true,
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <SendMenu navigator={this.props.navigator} />
        {this.state.contactsDisplayed ? (
          <SectionList
            renderItem={({ item, index, section }) => (
              <ContactRow key={index} index={index} image={item.image} initials={item.initials} name={item.name} text={item.text} color={item.color} />
            )}
            renderSectionHeader={({ section: { title } }) => <Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.54)', paddingLeft: 8 }}>{title}</Text>}
            sections={sections}
            keyExtractor={(item, index) => item + index}
          />
        ) : (
          <View>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{
                  marginLeft: 8,
                  height: 40,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  flexGrow: 1,
                }}
                onChangeText={cryptoInput => this.setState({ cryptoInput })}
                value={this.state.cryptoInput}
                placeholder="0"
                keyboardType="numeric"
              />
              <Text>{'ETH'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{
                  marginLeft: 8,
                  height: 40,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  flexGrow: 1,
                }}
                onChangeText={fiatInput => this.setState({ fiatInput })}
                value={this.state.fiatInput}
                placeholder="0.00"
                keyboardType="numeric"
              />
              <Text>{'USD'}</Text>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f7f8fa',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

// Test data for contacts
// Real data will probably come from phone contacts
// Maybe use this: https://github.com/rt2zz/react-native-contacts
const sections = [
  {
    title: '',
    data: [
      {
        name: 'Richard Burton',
        image: '',
        text: '@ricburton',
        initials: 'RB',
        color: '#C95050',
      },
      {
        name: 'Bill Murray',
        image: 'http://fillmurray.com/60/60',
        text: '@dontcrossthestreams',
      },
      {
        name: 'Nick Cage',
        image: 'http://www.placecage.com/40/40',
        text: '@putthebunnyback',
      },
    ],
  },
  {
    title: 'A',
    data: [
      {
        name: 'Mike Jones',
        image: '',
        text: '(281) 330-8004',
        initials: 'RB',
        color: '#F2BB3A',
      },
      {
        name: 'Jane Doe',
        image: '',
        text: '(555) 555-5555',
        initials: 'JD',
        color: '#C95050',
      },
      {
        name: 'Jane Doe',
        image: '',
        text: '(555) 555-5555',
        initials: 'JD',
        color: '#F2BB3A',
      },
    ],
  },
  {
    title: 'B',
    data: [
      {
        name: 'Jane Doe',
        image: '',
        text: '(555) 555-5555',
        initials: 'JD',
        color: '#C95050',
      },
      {
        name: 'Jane Doe',
        image: '',
        text: '(555) 555-5555',
        initials: 'JD',
        color: '#F2BB3A',
      },
      {
        name: 'Jane Doe',
        image: '',
        text: '(555) 555-5555',
        initials: 'JD',
        color: '#C95050',
      },
    ],
  },
];

export default SendScreen;
