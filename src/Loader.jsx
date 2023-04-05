import React, {useEffect, useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./Navbar.jsx";

function Loader(props) {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
    return (
        <div>
            {
                loading ?
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <ClipLoader className="border-4" color={"green"} loading={loading} size={35} aria-label="Loading Spinner" data-testid="loader"/>
                    </div>
                    :
                <Navbar/>
            }
        </div>
    );
}

export default Loader;