import React from "react"

import {database} from "firebase"
import _ from 'lodash';

export const pedagioType = "PEDAGIO"
export const stopPointType = "PONTO_DE_PARADA"
export const medicalType = "ACAO_MEDICA"
export const packageType = "PACKAGE"

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
//     almoco: true - false,
//     janta: true - false
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
  var newPointRef = database().ref('points').push()
  database().ref("points/"+newPointRef.key).set({ id: newPointRef.key, ...pointData })
    .catch((error) => {
      console.log(error)
    });
}

export const getPoint = (pointId) => {
  database().ref('points').child(pointId).on('value', (point) => {
    return point.val()
  })
};
export const getPoints = (callback) => {
  database().ref('points').on('value', (point) => {
     callback(_.values(point.val()))
  });
};

export const turnOffPointRef = (pointId) => {
  database().ref('points').child(pointId).off()
};
export const turnOffPointsRef = () => {
  database().ref('points').off()
};
