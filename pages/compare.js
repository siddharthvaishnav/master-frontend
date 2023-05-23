import Link from "next/link";
import Navbar from "@/components/navbar";
import Comparision from "@/components/Comparison_tab";
import style from "../styles/colleges.module.css";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';


export default function Compare() {
    const [college1, setCollege1] = useState(null);
    const [college2, setCollege2] = useState(null);
    const [colleges, setColleges] = useState([]);
    const [submitted, setSubmitted] = useState(false);


    const handleCompareClick = () => {

        setSubmitted(true);

    };

    const fetchData = async () => {
        const res = await fetch(`http://127.0.0.1:8000/get_colleges`, {
            method: "GET",
        });

        const data = await res.json();
        setColleges(data.colleges);
    };



    const handleCollege1Change = (event) => {
        const selectedCollege = colleges.find(
            (college) => college.name === event.target.value
        );
        setCollege1(selectedCollege);

    };

    const handleCollege2Change = (event) => {
        const selectedCollege = colleges.find(
            (college) => college.name === event.target.value
        );
        setCollege2(selectedCollege);

    };
    const handleResetClick = () => {

        setSubmitted(false);
    };



    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Navbar />

            <section className={`bg-blue-950 ml-40 mt-10 rounded-xl shadow-2xl w-5/6 text-center text-white ${style.fadeIn}`}>
                <p className="py-10 text-5xl text-center font-bold text-slate-300">COMPARE</p>
                <div>
                    <div className={`grid grid-cols-2 gap-1 ${style.slideIn}`}>
                        <div><div>
                            <label htmlFor="college1" className="font-bold">College 1</label></div>
                            <div className="py-3">
                                <select id="college1 " onChange={handleCollege1Change} className="text-blue-950 h-10 rounded-lg px-5 ">
                                    <option value="">Select a college</option>
                                    {colleges.map((college) => (
                                        <option key={college.id} value={college.name}>
                                            {college.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="gap-2">
                            <div>
                                <label htmlFor="college2" className="font-bold ">College 2</label></div>
                            <div className="py-3">
                                <select id="college2" onChange={handleCollege2Change} className=" college-input text-blue-950 h-10 px-5 rounded-lg ">
                                    <option value="">Select a college</option>
                                    {colleges.map((college) => (
                                        <option className="text-blue-950" key={college.id} value={college.name}>
                                            {college.name}
                                        </option>
                                    ))}
                                </select></div>
                        </div>
                    </div>
                    <div className={`flex flex-row justify-center items-center py-6 mt-8 ${style.fadeInUp}`}>
                        <button className="bg-cyan shadow-sm hover:shadow-2xl transition-all transition-duration-300ms ease-in-out hover:-translate-y-2  hover:scale-110 hover:bg-white hover:text-cyan border-cyan border-2 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleCompareClick}>
                            Compare
                        </button>
                        <button className="bg-cyan shadow-sm hover:shadow-2xl transition-all transition-duration-300ms ease-in-out hover:-translate-y-2  hover:scale-110 hover:bg-white hover:text-cyan border-cyan border-2 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleResetClick}>
                            Reset
                        </button>
                    </div>
                </div>
            </section>

            {(submitted && college1 && college2) ? <>{college1 && college2 && (
                <div className="py-6 justify-center">
                    <div className="flex  justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="py-6 justify-center"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex gap-20 justify-center"
                            >
                                <h1 className="text-4xl font-bold text-slate-500">{college1.name}</h1>
                                <h1 className="text-4xl font-bold text-slate-500">{college2.name}</h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Comparision

                                    college1_name={college1.name}
                                    college1_cse_fees={college1.CSE_cost}
                                    college1_cse_placement={college1.cs_salary}
                                    college1_datascience_fees={college1.DataScience_cost}
                                    college1_datascience_placement={college1.datascience_salary}
                                    college1_mba_fees={college1.MBA_cost}
                                    college1_mba_placement={college1.MBA_salary}
                                    college1_country={college1.country}
                                    college1_hostelandmeals={college1.hostelmeals}
                                    college1_transportation={college1.transportation}
                                    college1_personal={college1.personal}
                                    college1_books={college1.books}
                                    college2_name={college2.name}
                                    college2_cse_fees={college2.CSE_cost}
                                    college2_cse_placement={college2.cs_salary}
                                    college2_datascience_fees={college2.DataScience_cost}
                                    college2_datascience_placement={college2.datascience_salary}
                                    college2_mba_fees={college2.MBA_cost}
                                    college2_mba_placement={college2.MBA_salary}
                                    college2_hostelandmeals={college2.hostelmeals}
                                    college2_transportation={college2.transportation}
                                    college2_personal={college2.personal}
                                    college2_books={college2.books}
                                    college2_country={college2.country}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            )}</> : <><p className="text-9xl flex justify-center font-bold text-slate-600">Please Select University</p></>}

        </>
    );
}
