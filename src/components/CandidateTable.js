import React from 'react'
import CandidateRow from './CandidateRow'

class CandidateTable extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data:[],
            sortInfo:{
                key:null,
                isAscending:true,
            }
        }
    }
        

        getData = ()=> {
            fetch('http://personio-fe-test.herokuapp.com/api/v2/candidates')
            .then(response => response.json())
            .then(obj => {
                this.setState({
                    data: obj.data
                })
                    
            });
        }
     
        componentDidMount = () => {
            this.getData()
        }
            

        setSortInfo = (colName) => {
            let isAscending = true;
            if (this.state.sortInfo.key===colName && this.state.sortInfo.isAscending){
                isAscending = false;
            }

            this.setState({
                sortInfo:{
                    ...this.state.sortInfo,
                    key:colName,
                    isAscending: isAscending
                }
            })
        }

    render(){

        const sortedData = [...this.state.data]
        const sortedColumn = this.state.sortInfo.key;
        const isAscending = this.state.sortInfo.isAscending;
        console.log(sortedColumn);
        
        if (sortedColumn!==null){

            sortedData.sort((a, b) => {
                if (a[sortedColumn] < b[sortedColumn]) {
                //   return -1;
                return isAscending ? -1 : 1;
                }
                if (a[sortedColumn] > b[sortedColumn]) {
                //   return 1;
                  return isAscending ? 1 : -1;
                }
                return 0;
              });
        }

        const candidateRows = []
        sortedData.forEach(candidate => {
            candidateRows.push(<CandidateRow candidate = {candidate} key={candidate.id}/>)        
        });

        
        return  (
            <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Years of Experience
                    <button onClick={()=>this.setSortInfo("year_of_experience")}></button>
                    </th>
                    <th>Position Applied 
                        <button onClick={()=>this.setSortInfo("position_applied")}></button>
                    </th>
                    <th>Application Date
                    <button onClick={()=>this.setSortInfo("application_date")}></button>
                    </th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {candidateRows}
            </tbody>
        </table>
    
        )

    }

    }


export default CandidateTable