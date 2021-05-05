import React, { useState } from 'react';

import Userdata from './components/Userdata/Userdata';
import Menu from './components/Menu/Menu'

import GraphUp from './assets/graph-up.svg'

import  { 
  Table
 } from 'react-bootstrap';

import './App.css'

const App = () => {

  const [column, setColumn] = useState({
    first_column: true,
    second_column: true,
    third_column: true,
    fourth_column: true,
    fifth_column: true,
    sixth_column: true,
    seventh_column: true,
    eighth_column: true,
  });

  const [lines, setLines] = useState()
  
  const UserData: any = Userdata;

    return (
      <>
        <Table className="MainTable" striped responsive borderless hover variant="light" size="md">
          <thead>
            <tr style={{color: '#057f82'}} >
              { column.first_column === true ? <th>N° Cliente</th> : null }
              { column.second_column === true ?   <th>Cliente</th> : null }
              { column.third_column === true ? <th>QTD. Chargeback</th> : null }
              { column.fourth_column === true ? <th>Valor Chargeback</th> : null }
              { column.fifth_column === true ? <th>QTD. Vendas</th> : null }
              { column.sixth_column === true ? <th>Valor Total</th> : null }
              { column.seventh_column === true ? <th>% Chargeback</th> : null }
              { column.eighth_column === true ? <th>% Total Chargeback</th> : null }
              <th> 
                <Menu column={column} setColumn={setColumn} setLines={setLines} lines={lines} /> 
              </th>
            </tr>
          </thead>
          <tbody>
            {
              UserData.slice(0, lines).map((data: any) => (
                <tr>
                  {column.first_column === true ? <td> {data.customer_id} </td> : null}
                  {column.second_column === true ? <td> {data.customer_name} </td> : null}
                  {column.third_column === true ? <td> {data.chargeback_quantity} </td> : null}
                  {column.fourth_column === true ? <td>R$ {data.chargeback_amount} </td> : null}
                  {column.fifth_column === true ? <td> {data.sales_quantity} </td> : null}
                  {column.sixth_column === true ? <td>R${data.total_amount.replace('.', ',')}</td> : null}
                  {column.seventh_column === true ? <td style={{color: '#f23249'}} ><img alt="" src={GraphUp} /> {data.chargeback_percentage}%</td> : null}
                  {column.eighth_column === true ? <td style={{color: '#f23249'}} ><img alt="" src={GraphUp} /> {data.total_chargeback_percentage}%</td> : null}
                </tr>
              ))
            }
          </tbody>
        </Table>
    </>
    );
}

export default App;
