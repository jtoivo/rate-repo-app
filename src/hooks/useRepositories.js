import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  const fetchRepositories = async () => {

    if (result.loading) {
      setLoading(true);
    }
    else {
      setLoading(false);
      setRepositories(result.data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [result]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;