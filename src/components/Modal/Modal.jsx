// import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const { image_link, description, integration, features } = props.singleData
    // console.log(image_link);



    return (
        <div>
            {/* The button to open modal */}


            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                        <figure><img className="w-full h-64" src={image_link && image_link[0]}alt="Album" /></figure>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Modal;