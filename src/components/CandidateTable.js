import React from 'react'
import CandidateRow from './CandidateRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

class CandidateTable extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data:[],
            sortInfo:{
                "year_of_experience":"default",
                "position_applied":"default",
                "application_date":"default"
            },
            columnToSort:null, 
            shouldSort: false 
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
            let nextSortDirection = "default";

            if (colName ===this.state.columnToSort){
                
                const currDirection = this.state.sortInfo[colName]
                if (currDirection === "default"){
                    nextSortDirection = "ascending";
                } 
                if (currDirection==="ascending"){
                    nextSortDirection = "descending"
                }

            } 
        
            this.setState({
                sortInfo:{
                    ...this.state.sortInfo,
                    [colName]:nextSortDirection
                },
                columnToSort: colName,
                shouldSort: true
            })
        }

    render(){

        const dataToSort = [...this.state.data]
        const columnToSort= this.state.columnToSort;
        const sortDirection = this.state.sortInfo[columnToSort];
        const shouldSort = this.state.shouldSort;
        
        if (shouldSort){  //Ensure we do not sort on every render
            console.log('Now we are sorting!!');
            dataToSort.sort((a, b) => {
                if (a[columnToSort] < b[columnToSort]) {
                    if (sortDirection === "ascending") {
                        
                        return  -1;
                        } else if (sortDirection === "descending") {
                            return 1;
                        } else {
                            //'default' direction
                            return a;
                        }
 
                } else if (a[columnToSort] > b[columnToSort]){
                    if (sortDirection === "ascending") {
                        
                        return  1;
                        } else if (sortDirection === "descending") {
                            return -1;
                        } else {
                            //for 'default' direction
                            return a;
                        }
                } else {
                    return 0;
                }
        })
    }
    const candidateRows = []
        dataToSort.forEach(candidate => {
            candidateRows.push(<CandidateRow candidate = {candidate} key={candidate.id}/>)        
        });
        
        //TODO - Refactor this -  make it more modular
        const sortIconUp = <FontAwesomeIcon icon = {faSortUp}/>
        const sortIconDown = <FontAwesomeIcon icon = {faSortDown}/>

        let year_of_experience_icon, position_applied_icon, application_date_icon;
        year_of_experience_icon = position_applied_icon = application_date_icon = <FontAwesomeIcon icon = {faSort}/>

        if (columnToSort === "year_of_experience") {
            if (this.state.sortInfo[columnToSort]==="ascending") {
                year_of_experience_icon = sortIconUp
            } else if (this.state.sortInfo[columnToSort]==="descending") {
                year_of_experience_icon = sortIconDown
            }
        }

        if (columnToSort === "position_applied") {
            if (this.state.sortInfo[columnToSort]==="ascending") {
                position_applied_icon = sortIconUp
            } else if (this.state.sortInfo[columnToSort]==="descending") {
                position_applied_icon = sortIconDown
            }
        }

        if (columnToSort === "application_date") {
            if (this.state.sortInfo[columnToSort]==="ascending") {
                application_date_icon = sortIconUp
            } else if (this.state.sortInfo[columnToSort]==="descending") {
                application_date_icon = sortIconDown
            }
        }

        return  (
            <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Years of Experience
                    <button class="sort-button" onClick={()=>this.setSortInfo("year_of_experience")}>
                         {year_of_experience_icon}
                    </button>
                    </th>
                    <th>Position Applied 
                        <button class="sort-button" onClick={()=>this.setSortInfo("position_applied")}>
                            {position_applied_icon}
                        </button>
                    </th>
                    <th>Application Date
                    <button class="sort-button" onClick={()=>this.setSortInfo("application_date")}>
                        {application_date_icon}
                    </button>
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