import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Label from '../components/Label';
import Section from '../components/Section';

class ContactRow extends Component {
  render() {
    const {
      index, image, initials, name, text, color,
    } = this.props;
    const initialsBackground = { backgroundColor: color };
    return (
      <Section key={index} style={styles.row}>
        {image ? (
          <Image style={styles.avatar} source={{ uri: image }} />
        ) : (
          <View style={[styles.noAvatar, initialsBackground]}>
            <Text style={styles.initials}>{initials}</Text>
          </View>
        )}
        <View style={{ paddingLeft: 8, flexGrow: 1 }}>
          <Label>{name}</Label>
          <Text style={{ color: 'rgba(0,0,0,0.54)' }}>{text}</Text>
        </View>
      </Section>
    );
  }
}

// TODO: Add prop types

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'stretch',
    width: '100%',
  },
  avatar: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    borderRadius: 24,
  },
  noAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: { color: '#fff', fontSize: 18, fontWeight: '600' },
});

export default ContactRow;
