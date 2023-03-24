import React from "react";
import "./CustomSelect.css";
export default function CustomSelect(props) {
   const {options}=props;
  return (
    <div class="select">
      <select onChange={(e)=>{props.onChange(e.target.value)}}>
        <option value={options[0]} selected>{options[0]}</option>
        {options.map((data,i)=>{
            if(i!=0)
             return <option value={data}>{data}</option>
        })}
      </select>
    </div>
  );
}
