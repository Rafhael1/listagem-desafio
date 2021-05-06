import React, { useState } from 'react';

import Userdata from './components/Userdata/Userdata';
import Menu from './components/Menu/Menu'
import  { 
  Table
} from 'react-bootstrap';

import GraphUp from './assets/graph-up.svg'

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
        <Table className="MainTable"  responsive borderless hover variant="light" size="md">
           <thead>
            <tr style={{color: '#057f82'}} >
              <th className={ column.first_column === true ? '' : 'hide'} >N° Cliente</th>
              <th className={ column.second_column === true ? '' : 'hide'} >Cliente</th>
              <th className={ column.third_column === true ? '' : 'hide'} >QTD. Chargeback</th>
              <th className={ column.fourth_column === true ? '' : 'hide'} >Valor Chargeback</th>
              <th className={ column.fifth_column === true ? '' : 'hide'} >QTD. Vendas</th>
              <th className={ column.sixth_column === true ? '' : 'hide'} >Valor Total</th>
              <th className={ column.seventh_column === true ? '' : 'hide'} >% Chargeback</th>
              <th className={ column.eighth_column === true ? '' : 'hide'} >% Total Chargeback</th>
              <th> 
                <Menu column={column} setColumn={setColumn} setLines={setLines} lines={lines} /> 
              </th>
            </tr>
          </thead>
          <tbody>
            {
              UserData.slice(0, lines).map((data: any) => (
                <tr>
                  <td className={column.first_column === true ? '' : 'hide'} > {data.customer_id} </td>
                  <td className={column.second_column === true ? '' : 'hide'} > {data.customer_name} </td>
                  <td className={column.third_column === true ? '' : 'hide'} > {data.chargeback_quantity} </td>
                  <td className={column.fourth_column === true ? '' : 'hide'} > R$ {data.chargeback_amount} </td>
                  <td className={column.fifth_column === true ? '' : 'hide'} > {data.sales_quantity} </td>
                  <td className={column.sixth_column === true ? '' : 'hide'} > R${data.total_amount.replace('.', ',')} </td>
                  <td className={column.seventh_column === true ? '' : 'hide'} style={{color: '#f23249'}} > <img alt="" src={GraphUp} /> {data.chargeback_percentage}% </td>
                  <td className={column.eighth_column === true ? '' : 'hide'}  style={{color: '#f23249'}} > <img alt="" src={GraphUp} /> {data.total_chargeback_percentage}% </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </>
    );
}

export default App;
