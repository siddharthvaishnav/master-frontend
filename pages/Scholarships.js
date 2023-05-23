import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import CollegeCard from "@/components/college_card";
import style from "../styles/colleges.module.css";
import uni from "../assets/images/High_School-bro.svg";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import gif from "../assets/images/Learning.gif";
import ScholarshipCard from "@/components/scholarship_card";

export default function Scholarship() {
    const [query, setQuery] = useState('');
    const [scholarship, setScholarship] = useState([]);
    const [showAnimation, setShowAnimation] = useState(false);

    const fetchData = async () => {
        const res = await fetch(`http://127.0.0.1:8000/scholarship?`, {
            method: "GET",
        });

        const data = await res.json();
        setScholarship(data);
    };

    useEffect(() => {
        const fetchDataAndAnimate = async () => {
            await fetchData();
            const animationTimeout = setTimeout(() => {
                setShowAnimation(true);
            }, 500);
            return () => {
                clearTimeout(animationTimeout);
            };
        };

        fetchDataAndAnimate();
    }, []);

    return (
        <>
            <Navbar />
            <section className={`bg-white ${style.scholarshipsec}`}>
                <motion.div
                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
                    className="flex justify-center"
                >
                    <div className="my-28 mx-28 px-20 text-blue-800">
                        <motion.p
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
                            className={`text-6xl font-bold my-10 px-10 backdrop-blur-sm`}
                        >
                            SCHOLARSHIPS
                        </motion.p>
                        <form className="flex justify-center h-16">
                            <input
                                type="text"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search College, Course"
                                className={`rounded-lg justify border-2 h-12 transition-all duration-300 transform focus:outline-none focus:border-blue focus:ring-2 ring-blue px-2 hover:border-blue-500 focus:w-96 ${style.expandInput}`}
                            />
                        </form>
                    </div>
                    <div className="h-48 bg">
                        {showAnimation && <Image src={gif} alt="Loading GIF" />}
                    </div>
                </motion.div>
            </section>
            <div>
                <select>
                    <option>
                        GRE
                    </option>
                    <option>
                        TOEFL
                    </option>
                    <option>
                        IELTS
                    </option>
                </select>
            </div>
            <div className="">
                {scholarship.Scholarship &&
                    scholarship.Scholarship.filter((scholarship) => {
                        return query.toLowerCase() === ""
                            ? scholarship
                            : scholarship.name.toLowerCase().includes(query.toLowerCase());
                    }).map((sc) => (
                        <motion.div
                            key={scholarship.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }} // Adjust duration and ease
                        >
                            <ScholarshipCard
                                key={sc.id}
                                name={sc.name}
                                desc={sc.desc}
                                deadline={sc.deadline}
                                amount={sc.amount}
                                link={sc.link}
                            />   </motion.div>
                    ))}
            </div>
            <Footer />
        </>
    );
}
