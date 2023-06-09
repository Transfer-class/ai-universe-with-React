// import React from 'react';

const SingleData = (props) => {
    // console.log(props);
    const {id, image, features, published_in, name } = props.singleData
    const {setUniqueId}=props
    // console.log(setUniqueId);
   
    return (
        <div className='text-4xl '>
            <div className="card w-full h-[32rem]  bg-base-100 shadow-2xl ">
                <figure><img className="w-11/12 h-auto md:h-[209px] rounded-xl" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">Features</h2>
                    <div>
                        {
                            features.map((feature, index) =>

                                <p className="text-base">
                                    {index + 1}. {feature}</p>

                            )

                        }
                    </div>
                    <div className="md:absolute bottom-6 w-4/5 mx-auto">
                        <hr className="border-2 border-info my-2" />

                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div className="flex justify-between">
                            <div className="flex mt-1">
                                <span className="mr-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                                </span>
                                <p className="text-base">{published_in}</p>
                            </div>
                            <div>
                                <label htmlFor="my-modal-5">
                                    <svg onClick={()=>setUniqueId(id)}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </label>

                            </div>
                        </div>
                    </div>

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleData;