import React, { useState } from 'react';
import { ActionContext } from './ActionContext';
import { toast } from 'react-toastify';

const ActionProvider = ({children}) => {
    const [activeAction,setActiveAction]=useState([]);

    const handleAction=({card,type})=>
    {
        toast.success(`${type} history of ${card.name} is added to the TimeLine`);
        setActiveAction([...activeAction,{card:card,type:type}]);
    }
    console.log(activeAction);
    const value={activeAction,handleAction};
    return (
        <div>
            <ActionContext.Provider value={value}>
                {children}
            </ActionContext.Provider>
        </div>
    );
};

export default ActionProvider;