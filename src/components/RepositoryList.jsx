import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repoNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={repoNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default RepositoryList;