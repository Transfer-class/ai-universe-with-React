// import React from 'react';

import { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Card = () => {
    const [data, setData] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [uniqueId,setUniqueId]=useState(null)
    const [singleData,setSingleData]=useState({})
    console.log(uniqueId);
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await response.json()
            // console.log(data.data.tools);
            setData(data.data.tools)
        }
        loadData()
    }, [])

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(response=>response.json())
            .then(data =>setSingleData(data.data))
    },[uniqueId])

    const handleShowAll = (booleanValue) => setShowAll(booleanValue)


    // console.log(data);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-2 ">
                {
                    data.slice(0, (showAll ? 12 : 4)).map(singleData => {
                        // console.log(singleData);
                        return <SingleData
                            singleData={singleData}
                            setUniqueId={setUniqueId}
                            key={singleData.id}></SingleData>
                    })
                }
            </div>
            {
                !showAll && (
                    <Button handleShowAll={handleShowAll}>Show All</Button>
                )
            }
            <Modal singleData={singleData}></Modal>

        </>
    );
};

export default Card;