import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [column, setColumn] = useState([])
  const [records, setRecords] = useState([])
  const [alphaValue, setAlphaValue] = useState(null)
  const [betaValue, setBetaValue] = useState(null)
  const [charlieValue, setCharlieValue] = useState(null)

  useEffect(() =>{
    fetch('https://mulahtableassessment.netlify.app/data.json')
      .then(res => res.json())
      .then(data => {
        setColumn(Object.keys(data.indexes[0]))
        setRecords(data.indexes)

        const sumA5A20 = parseInt(data.indexes[4].Value) + parseInt(data.indexes[19].Value)
        setAlphaValue(sumA5A20)

        const divideA15A7 = parseInt(data.indexes[14].Value) / parseInt(data.indexes[6].Value)
        setBetaValue(divideA15A7)

        const productA13A12 = parseInt(data.indexes[12].Value) * parseInt(data.indexes[11].Value)
        setCharlieValue(productA13A12)
      })
  }, [])

  return (
    <div className="App">
      <h2 className="my-3">Simple Assessment: Table Output & Processing (Wan Ahmad)</h2>
      <h5 className="mt-5">Table 1</h5>
      <div className="container-xxl my-5">

        <table className="table">
          <thead>
            <tr>
              {column.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              records.map((record, i) => (
                <tr key={i}>
                  <td>{record.Index}</td>
                  <td>{record.Value}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <h5 className="mt-5">Table 2</h5>
      <div className="container-xxl my-3">
        <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alpha</td>
                <td>{alphaValue}</td>
              </tr>
              <tr>
                <td>Beta</td>
                <td>{betaValue}</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>{charlieValue}</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
