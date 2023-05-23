import React from "react";
import style from "../styles/colleges.module.css";

const Loader = () => {
    return (
        <div className={`${style.loader}`}>
            <div className={`${style.loader__spinner}`}></div>
        </div>
    );
};

export default Loader;