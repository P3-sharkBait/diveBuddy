import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      username
      email
      password
      logs {
        _id
        diveNumber
        location
        dateTime
        breathingMixture
        tankType
        tankCapacity
        startPressure
        endPressure
        ballast
        extraEquipment
        suit
        WeatherCond
        airTemp
        waterType
        underwaterVisibility
        waterTemp
        waterCond
        surfaceInt
        nextSurfaceInt
        previousEndLetter
        maxDepth
        nextDepth
        residualNitrogenTime
        actualDiveTime
        pressureUsed
        SAC
        pressureAtDepth
        EndingLetterGroup
        TotalNitrogenTime
        NextResidualNitrogenTime
        NewStartingLetterGroup
        NextMaxDiveTime        
      }
    }
  }
`;

export const QUERY_ME = gql`
  query Me($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      logs {
        _id
        diveNumber
        location
        dateTime
        breathingMixture
        tankType
        tankCapacity
        startPressure
        endPressure
        ballast
        extraEquipment
        suit
        WeatherCond
        airTemp
        waterType
        underwaterVisibility
        waterTemp
        waterCond
        surfaceInt
        nextSurfaceInt
        previousEndLetter
        maxDepth
        nextDepth
        residualNitrogenTime
        actualDiveTime
        pressureUsed
        SAC
        pressureAtDepth
        EndingLetterGroup
        TotalNitrogenTime
        NextResidualNitrogenTime
        NewStartingLetterGroup
        NextMaxDiveTime
      }
      friends {
        username
        logs {
          _id
          diveNumber
          location
          dateTime
          breathingMixture
          tankType
          tankCapacity
          startPressure
          endPressure
          ballast
          extraEquipment
          suit
          WeatherCond
          airTemp
          waterType
          underwaterVisibility
          waterTemp
          waterCond
          surfaceInt
          nextSurfaceInt
          previousEndLetter
          maxDepth
          nextDepth
          residualNitrogenTime
          actualDiveTime
          pressureUsed
          SAC
          pressureAtDepth
          EndingLetterGroup
          TotalNitrogenTime
          NextResidualNitrogenTime
          NewStartingLetterGroup
          NextMaxDiveTime
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
