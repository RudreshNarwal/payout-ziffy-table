import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    FilteringState,
    IntegratedFiltering,
    SortingState,
    IntegratedSorting,
    RowDetailState
  } from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableFilterRow,
  TableFixedColumns,
  DragDropProvider,
  TableRowDetail,
  TableColumnReordering,
} from '@devexpress/dx-react-grid-material-ui';
import { Steps, Button, message } from 'antd';

const Step = Steps.Step;
const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//     tableStriped: {
//       '& tbody tr:nth-of-type(odd)': {
//         backgroundColor: '#edf2f9',
//       },
//     },
//   });
  
//   const TableComponentBase = ({ classes, ...restProps }) => (
//     <VirtualTable.Table
//       {...restProps}
//       class={classes.tableStriped}
//     />
//   );
  
//   export const TableComponent = withStyles(styles, { name: 'TableComponent' })(TableComponentBase);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      current: 0, 
      status: [],
      columns: [
        { name: 'Property_Detail', title: 'Property Detail' },
        { name: 'Modal', title: 'Modal' },
        { name: 'Fixed_Payable', title: 'Fixed Payable' },
        { name: 'Commision', title: 'Commision Payable(in %)' },
        { name: 'Cost', title: 'Cost of Room' },
        { name: 'Occupancy', title: 'Occupancy' },
        { name: 'Total', title: 'Total Rent' },
        { name: 'Society', title: 'Society Maintenance' },
        { name: 'Total_pay', title: 'Total Payout' },
        { name: 'Monthly', title: 'Monthly Due Date' },
        { name: 'Open', title: 'Open Service Tickets' },
        // { name: 'Status', title: 'Status' },
      ],
      rows: [
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
          {Property_Detail: 'GGN  -  512   Essel Tower Rohit singh chauhan', Modal: 'Minimum Assurance', Fixed_Payable: 'Rs 20001', Commision: '10%', Cost: 'view', Occupancy: '19/23', Total: '23123', Society: '300', Total_pay: '64443', Monthly:'15th', Open:'4', Status: 'stepper'},
      ],
      tableColumnExtensions: [
        { columnName: 'Property_Detail', width: 175, wordWrapEnabled: true  },
        { columnName: 'Modal', width: 180, wordWrapEnabled: true  },
        { columnName: 'Fixed_Payable', width: 120, wordWrapEnabled: true  },
        { columnName: 'Cost', width: 130, wordWrapEnabled: true  },
        { columnName: 'Commision', width: 130, wordWrapEnabled: true  },
        { columnName: 'Occupancy', width: 130, wordWrapEnabled: true  },
        { columnName: 'Total', width: 130, wordWrapEnabled: true  },
        { columnName: 'Society', width: 140, wordWrapEnabled: true  },
        { columnName: 'Total_pay', width: 100, wordWrapEnabled: true  },
        { columnName: 'Monthly', width: 130, wordWrapEnabled: true  },
        { columnName: 'Open', width: 130, wordWrapEnabled: true  },
        // { columnName: 'Status', width: 130, wordWrapEnabled: true  },

      ],
      leftColumns: ['Property_Detail'],
      columnOrder: ['Property_Detail', 'Modal', 'Fixed_Payable', 'Cost', 'Commision', 'Occupancy', 'Total', 'Society', 'Total_pay', 'Monthly', 'Open'],
    };
    this.changeColumnOrder = this.changeColumnOrder.bind(this);
  }

  changeColumnOrder(newOrder) {
    this.setState({ columnOrder: newOrder });
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  // componentDidMount(row){
  //   //  let arr = [{current: '', status:''}]
  //   //  let roww = [...row, arr];
  //   //  this.setState({
  //   //      rows: roww
  //   //  })
    
  //   console.log(this.state.rows[1]);
  //   console.log('',this.state.rows[row]);
    
  // }

  render() {
    const {
      rows, columns, tableColumnExtensions,
      leftColumns, rightColumns, columnOrder, status, current 
        } = this.state;

      const RowDetail = ({ row }) => (
       
       <div>

         {this.state.status!=='error' ? (   
                <div style={{width: '12rem'}}>
                <Steps current={current} status={status} >
                  {steps.map(item => <Step key={item.title} />)}
                </Steps>
                
                <div className="steps-action">
                  {
                    current < steps.length - 1
                    && <Button type="primary" onClick={() => this.next()}>Next</Button>
                  }
                  {
                    current === 1
                    && (
                    <div style={{display : 'inline-block'}}> 
                      <Button type="primary" onClick={() => { this.next(); 
                          message.success('Processing complete!');
                          this.setState({
                              current: 2
                              })}}> Mark Paid</Button>
                      <Button type="primary" style={{margin: '0px 0px 0px 10px'}} onClick={() => { 
                          message.success('Rejected');
                          this.setState({
                              status: 'error',
                              })}}> 
                          Reject</Button> 
                      </div>
                                
                    )
                  }
                  {/* {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => {message.success('Processing complete!'); this.setState({
                        current: 2
                    })}}>Done</Button>
                  } */}
                </div>
        </div>  ):(<div style={{width: '12rem'}}>
                      <Steps current={current} status={status} >
                        {steps.map(item => <Step key={item.title} />)}
                      </Steps>
                        <p style={{color: 'red', margin: '2rem 0px 0px 8rem'}}>Rejected</p>
                        </div>
                        )}
        </div>
      );
    
    return (

      <Paper style={{ margin: '40px 36px 36px 36px', position: 'relative' }}>
        <Grid
          rows={rows}
          columns={columns}
        >
         <SortingState
            defaultSorting={[]}
          />
          <IntegratedSorting />
           <DragDropProvider />

          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />

          <RowDetailState
            defaultExpandedRowIds={[]}
          />

          <VirtualTable
            columnExtensions={tableColumnExtensions}
            //tableComponent={TableComponent}
          />
          
          <TableColumnReordering
            order={columnOrder}
            onOrderChange={this.changeColumnOrder}
          />

          <TableHeaderRow showSortingControls />

          <TableRowDetail
            contentComponent={RowDetail}
          />

          <TableFilterRow />

          <TableFixedColumns
            leftColumns={leftColumns}
            rightColumns={rightColumns}
          />
        
        </Grid>
      </Paper>
    );
  }
}