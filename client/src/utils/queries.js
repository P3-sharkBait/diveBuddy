import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      username
      email
      password
      logs {
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
      }
    }
  }
`;

