import React, { Component } from 'react';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';
import Label from '../components/Label';
import Section from '../components/Section';
import SendMenu from '../components/SendMenu';

class SendScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true,
  };

  closeModal = () =>
    this.props.navigator.dismissModal({
      animationType: 'slide-up',
    });

  render() {
    return (
      <View style={styles.container}>
        <SendMenu navigator={this.props.navigator} />
        <SectionList
          renderItem={({ item, index, section }) => (
            <Section
              key={index}
              style={{
                flexDirection: 'row',
                padding: 8,
                alignItems: 'stretch',
                width: '100%',
              }}
            >
              {item.image ? (
                <Image
                  style={{
                    width: 48,
                    height: 48,
                    resizeMode: 'contain',
                    borderRadius: 24,
                  }}
                  source={{ uri: item.image }}
                />
              ) : (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: item.color,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>{item.initials}</Text>
                </View>
              )}
              <View style={{ paddingLeft: 8, flexGrow: 1 }}>
                <Label>{item.name}</Label>
                <Text style={{ color: 'rgba(0,0,0,0.54)' }}>{item.text}</Text>
              </View>
            </Section>
          )}
          renderSectionHeader={({ section: { title } }) => <Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.54)', paddingLeft: 8 }}>{title}</Text>}
          sections={sections}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#F7F8FA',
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
