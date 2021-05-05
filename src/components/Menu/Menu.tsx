import React from 'react'

import  { 
    Form,
    DropdownButton,
    Dropdown,
   } from 'react-bootstrap';
  

const Menu = ({column, setColumn, setLines, lines}: any) => {
      return (
    <div style={{textAlign: 'center'}}>
        <DropdownButton flip variant="outline-info" id="dropdown-basic-button" title="Filtrar">
         <Dropdown.Header>Linhas por pagina</Dropdown.Header>
            <Dropdown.Item onClick={() => setLines()} active={!lines ? true : false} >
               Padrão
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setLines(50)} active={lines ? true : false} >
                50 Linhas
            </Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Header>Colunas</Dropdown.Header>
         <div className="MenuCheckboxForm" >
         <Form.Check 
            checked={column.first_column}
            type="checkbox"
            label={'N° Cliente'}
            onClick={() => column.first_column === true ? setColumn({...column, first_column: false}) : setColumn({...column, first_column: true})}
         />
         <Form.Check             
            id={'custom-checkbox'}
            checked={column.second_column}
            type="checkbox"
            label={'Cliente'}
            onClick={() => column.second_column === true ? setColumn({...column, second_column: false}) : setColumn({...column, second_column: true})}
         />
         <Form.Check 

            checked={column.third_column}
            type="checkbox"
            label={'QTD. Chargeback'}
            onClick={() => column.third_column === true ? setColumn({...column, third_column: false}) : setColumn({...column, third_column: true})}
         />
         <Form.Check 
            checked={column.fourth_column}
            type="checkbox"
            label={'Valor Chargeback'}
            onClick={() => column.fourth_column === true ? setColumn({...column, fourth_column: false}) : setColumn({...column, fourth_column: true})}
         />
         <Form.Check 
            checked={column.fifth_column}
            type="checkbox"
            label={'QTD. Vendas'}
            onClick={() => column.fifth_column === true ? setColumn({...column, fifth_column: false}) : setColumn({...column, fifth_column: true})}
         />
         <Form.Check 
            checked={column.sixth_column}
            type="checkbox"
            label={'Valor Total'}
            onClick={() => column.sixth_column === true ? setColumn({...column, sixth_column: false}) : setColumn({...column, sixth_column: true})}
         />
         <Form.Check 
            checked={column.seventh_column}
            type="checkbox"
            label={'% Chargeback'}
            onClick={() => column.seventh_column === true ? setColumn({...column, seventh_column: false}) : setColumn({...column, seventh_column: true})}
         />
         <Form.Check 
            checked={column.eighth_column}
            type="checkbox"
            label={'% Total Chargeback'}
            onClick={() => column.eighth_column === true ? setColumn({...column, eighth_column: false}) : setColumn({...column, eighth_column: true})}
         />
         </div>
        </DropdownButton>
    </div>
      )
}

export default Menu;