import React from 'react';
import { useParams } from 'react-router-dom';

const PagesPromotionForm= () => {
    const { id } = userParams();

    return (
    <div>
        FORM
        {id && <div>id: {id}</div>}    
    </div> 
        
    );  
}

export default PagesPromotionForm;