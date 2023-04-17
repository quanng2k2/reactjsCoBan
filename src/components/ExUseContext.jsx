import React, { useState, createContext } from 'react' ;
import CompB from './CompB';

// tạo ngữ cảnh 
export const themmeContext = createContext() ;
export default function ExUseContext() {
    const [theme , setTheme] = useState("light") ;

    // useContext là 1 hook
    // ExUseContext => CompB => CompC  
    const handleChangeStyle = () => {
        setTheme(theme === "light" ? "dark" : "light") ; 
    } ;

  return (
    // truyền dữ liệu provider
    <themmeContext.Provider value = {theme}>
    <div className='container'>
        <h2>
            Hello Mọi !!!
        </h2>
        <button onClick={handleChangeStyle}>Change Style</button>
        <CompB propsTheme= {theme}/> 
    </div>
    </themmeContext.Provider> 
  );
}
