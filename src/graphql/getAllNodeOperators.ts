import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_ALL_NODE_OPERATORS = gql`
  query AllNodeOperators {
    allNodeOperators {
      id
      location
      nodes
      cpu
      ram
      network
      storage
      category
      name
      yearsOfExperience
      email
      website
      social
      description
    }
  }
`;
