// import React from 'react';


const Button = (props) => {
    const handleShowAll=props.handleShowAll
    const {children}=props
    return (
        <div className="text-center" >
        
            <button onClick={()=> handleShowAll(true)} className="btn btn-accent">{children}</button>
           
        </div >
    );
};

export default Button;