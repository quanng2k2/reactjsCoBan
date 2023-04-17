import React from 'react'
import {themmeContext} from "./ExUseContext" ;
import { useContext } from 'react'; 

export default function CompC() {
    const theme = useContext(themmeContext) 
    return (
        <div className={theme}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                At odit laborum aut, hic aspernatur repellendus quasi accusamus culpa.
                Exercitationem quaerat id aperiam. Accusantium harum mollitia repellat inventore,
                dignissimos qui error.</p>
        </div>
    )
}
