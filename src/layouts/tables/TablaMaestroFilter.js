import React from 'react';
import MDInput from "components/MDInput";
import './MaestrosFilter.css';

const TablaMaestroFilter = (props) => {

const DropDownChangeHandler=(event)=>{
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
}  
    
  return (
    <div className='maestros-filter'>
      <div className='maestros-filter__control'>
        <label>Filter Name:</label>
        <input type="text"  value={props.filtername} onChange={DropDownChangeHandler} />
        <select  value={props.filtername} onChange={DropDownChangeHandler} >
            <option value="2020"> 2020 </option>
            <option value="2021"> 2021 </option>
            <option value="2022"> 2022 </option>
        </select>

      </div>
    </div>
  );
};

export default TablaMaestroFilter;