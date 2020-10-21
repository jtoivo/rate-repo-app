import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentArea: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 20
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  statsItem: {
    alignItems: 'center'
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  title: {
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 5
  },
  language: {
    alignSelf: 'flex-start',
    padding: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    marginTop: 10
  }
});

const round = (value) => {
  return (value > 1000)
    ? +(value / 1000).toFixed(1) + 'k'
    : value;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Image style={styles.avatarImg} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.contentArea}>
          <Text style={styles.title}>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <View style={styles.language}>
            <Text style={{ color: 'white' }}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statsItem}>
          <Text fontWeight="bold">{round(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statsItem}>
          <Text fontWeight="bold">{round(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statsItem}>
          <Text fontWeight="bold">{round(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statsItem}>
          <Text fontWeight="bold">{round(item.ratingAverage)}</Text>
          <Text>rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;