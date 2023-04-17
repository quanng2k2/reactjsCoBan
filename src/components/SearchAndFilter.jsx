import React, { useState } from 'react';

function SearchAndFilter() {
  let [filter , setFilter] = useState('') ;
  let [data , setData] = useState ([
    {name : 'voi' , kg : 300} ,
    {name : 'Hổ' , kg : 150} ,
    {name : 'Chó' , kg : 20} ,
    {name : 'Mèo' , kg : 10} ,
    {name : 'Cá' , kg : 1} ,
    {name : 'Ngựa' , kg : 200} , 
  ]) ;

  let handleFilterChange = (event) => {
    setFilter(event.target.value) ;
  } ;

  let filteredData = data.filter(
    (item) => item.name.toLowerCase().indexOf(filter.toLowerCase() ) !== -1 
  ) ;

  return (
    <div>
      <input type='text' value={filter} onChange={handleFilterChange}/> 
      <>
        {filteredData.map((item,index) => (
          <p key={index}>{item.name} {item.kg} kg.</p>  
        ))}
      </>
    </div>
  );
}

export default SearchAndFilter;