// import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
//   mutation Login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//         email
//         password
//         logs {
//           diveNumber
//           location
//           dateTime
//           breathingMixture
//           tankType
//           tankCapacity
//           startPressure
//           endPressure
//           ballast
//           extraEquipment
//           suit
//           WeatherCond
//           airTemp
//           waterType
//           underwaterVisibility
//           waterTemp
//           waterCond
//           surfaceInt
//           nextSurfaceInt
//           previousEndLetter
//           maxDepth
//           nextDepth
//           residualNitrogenTime
//           actualDiveTime
//         }
//         friends
//       }
//     }
//   }
// `;
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
        }
        friends {
          username
        }
      }
    }
  }
`;


// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//         email
//         password
//         logs {
//           diveNumber
//           location
//           dateTime
//           breathingMixture
//           tankType
//           tankCapacity
//           startPressure
//           endPressure
//           ballast
//           extraEquipment
//           suit
//           WeatherCond
//           airTemp
//           waterType
//           underwaterVisibility
//           waterTemp
//           waterCond
//           surfaceInt
//           nextSurfaceInt
//           previousEndLetter
//           maxDepth
//           nextDepth
//           residualNitrogenTime
//           actualDiveTime
//         }
//         friends
//       }
//     }
//   }
// `;


// export const ADD_LOG = gql`
//   mutation addLog($username: String!, $diveNumber: Int!, $location: String,   $dateTime: String, $breathingMixture: String, $tankType: String, $tankCapacity: Int, $startPressure: Int, $endPressure: Int, $ballast: String, $extraEquipment: String, $suit: String, $weatherCond: String, $airTemp: Int, $waterType: String, $underwaterVisibility: Int, $waterTemp: Int, $waterCond: String, $surfaceInt: Int, $nextSurfaceInt: Int, $previousEndLetter: String, $maxDepth: Int, $nextDepth: Int, $residualNitrogenTime: Int, $actualDiveTime: Int) {
//     addLog(username: $username, diveNumber: $diveNumber, location: $location, dateTime: $dateTime, breathingMixture: $breathingMixture, tankType: $tankType, tankCapacity: $tankCapacity, startPressure: $startPressure, endPressure: $endPressure, ballast: $ballast, extraEquipment: $extraEquipment, suit: $suit, WeatherCond: $weatherCond, airTemp: $airTemp, waterType: $waterType, underwaterVisibility: $underwaterVisibility, waterTemp: $waterTemp, waterCond: $waterCond, surfaceInt: $surfaceInt, nextSurfaceInt: $nextSurfaceInt, previousEndLetter: $previousEndLetter, maxDepth: $maxDepth, nextDepth: $nextDepth, residualNitrogenTime: $residualNitrogenTime, actualDiveTime: $actualDiveTime) {
//       _id
//       username
//       email
//       password
//       logs {
//         diveNumber
//         location
//         dateTime
//         breathingMixture
//         tankType
//         tankCapacity
//         startPressure
//         endPressure
//         ballast
//         extraEquipment
//         suit
//         WeatherCond
//         airTemp
//         waterType
//         underwaterVisibility
//         waterTemp
//         waterCond
//         surfaceInt
//         nextSurfaceInt
//         previousEndLetter
//         maxDepth
//         nextDepth
//         residualNitrogenTime
//         actualDiveTime
//       }
//       friends
//     }
//   }
// `;

export const ADD_LOG = gql`
  mutation addLog($username: String!, $diveNumber: Int!, $location: String, $dateTime: String, $breathingMixture: String, $tankType: String, $tankCapacity: Int, $startPressure: Int, $endPressure: Int, $ballast: Int, $extraEquipment: String, $suit: String, $weatherCond: String, $airTemp: Int, $waterType: String, $underwaterVisibility: Int, $waterTemp: Int, $waterCond: String, $surfaceInt: Int, $nextSurfaceInt: Int, $previousEndLetter: String, $maxDepth: Int, $nextDepth: Int, $residualNitrogenTime: Int, $actualDiveTime: Int) {
    addLog(username: $username, diveNumber: $diveNumber, location: $location, dateTime: $dateTime, breathingMixture: $breathingMixture, tankType: $tankType, tankCapacity: $tankCapacity, startPressure: $startPressure, endPressure: $endPressure, ballast: $ballast, extraEquipment: $extraEquipment, suit: $suit, WeatherCond: $weatherCond, airTemp: $airTemp, waterType: $waterType, underwaterVisibility: $underwaterVisibility, waterTemp: $waterTemp, waterCond: $waterCond, surfaceInt: $surfaceInt, nextSurfaceInt: $nextSurfaceInt, previousEndLetter: $previousEndLetter, maxDepth: $maxDepth, nextDepth: $nextDepth, residualNitrogenTime: $residualNitrogenTime, actualDiveTime: $actualDiveTime) {
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


// export const REMOVE_USER = gql`
//   mutation removeUser($email: String!, $password: String!) {
//     removeUser(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//         email
//         password
//         logs {
//           diveNumber
//           location
//           dateTime
//           breathingMixture
//           tankType
//           tankCapacity
//           startPressure
//           endPressure
//           ballast
//           extraEquipment
//           suit
//           WeatherCond
//           airTemp
//           waterType
//           underwaterVisibility
//           waterTemp
//           waterCond
//           surfaceInt
//           nextSurfaceInt
//           previousEndLetter
//           maxDepth
//           nextDepth
//           residualNitrogenTime
//           actualDiveTime
//         }
//         friends
//       }
//     }
//   }
// `;

// export const REMOVE_LOG = gql`
//   mutation removeLog($email: String!, $password: String!, $diveNumber: Int!) {
//     removeLog(email: $email, password: $password, diveNumber: $diveNumber) {
//       token
//       user {
//         _id
//         username
//         email
//         password
//         logs {
//           diveNumber
//           location
//           dateTime
//           breathingMixture
//           tankType
//           tankCapacity
//           startPressure
//           endPressure
//           ballast
//           extraEquipment
//           suit
//           WeatherCond
//           airTemp
//           waterType
//           underwaterVisibility
//           waterTemp
//           waterCond
//           surfaceInt
//           nextSurfaceInt
//           previousEndLetter
//           maxDepth
//           nextDepth
//           residualNitrogenTime
//           actualDiveTime
//        }
//        friends
//       }
//     }
//   }
// `;