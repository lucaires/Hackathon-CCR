import React from "react"

import * as firebase from "firebase"
import _ from 'lodash';

export const pedagioType = "PEDAGIO"
export const stopPointType = "PONTO_DE_PARADA"

// const pedagioModel = {
//   tipo: pedagio,
//   latLog: {
//     log: 1234,
//     lat: 3123
//   },
//   preco: 5.0,
// }
// const stopPointModel = {
//   tipo: stopPoint,
//   medico: {
//     pago: true - false
//   },
//   avaliacao: 1 - 5,
//   conbustivel: {
//     preco: 1 - 5
//   },
//   food: {
//     lanchonete: true - false,
//     cafe_manha: true - false,
//     almoco: true - false
//   },
//   sanitario: {
//     preco: 0,
//     avaliacao: 1 - 5
//   },
//   chuveiro: {
//     preco: 0,
//     avaliacao: 1 - 5
//   },
//   per_noite: {
//     preco: 0,
//     avaliacao: 1 - 5,
//   },
//   borracaria: true - false,
//   mecanico: true - false,
//   seguranca: 1 - 5
// }
 

export function createPoint(pointData) {
    var newPointRef = firebase.database().ref('points').push()
    .then(()=>{
      newPointRef.set({ id: newPointRef.key, ...pointData })
    })
}

export const getPoint = (pointId) => {
  firebase.database().ref('points').child(pointId).on('value', (point) => {
    return point.val()
  })
    .catch((error) => {
      console.log(error)
    });
};

export const turnOffPointRef = (pointId) => {
  firebase.database().ref('points').child(pointId).off()
    .catch((error) => {
      console.log(error)
    });
};

export const getPoints = () => {
  problemasRef.on('value', (snapshortProblemas) => {
    return Object.entries(snapshortProblemas.val())
  });
};