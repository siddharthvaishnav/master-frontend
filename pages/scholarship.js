import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import CollegePage from "@/components/college_page";
import { Tab } from "@mui/material";
import Footer from "@/components/Footer"
import Coursetabs from "@/components/course_tabs";
import { data } from "autoprefixer";
import Scholarship from "@/components/scholarship-page";


export default function scholarship() {
    const router = useRouter();
    const [scholarship, setScholarship] = useState();


    const handleFetch = async () => {
        const res = await fetch(
            `http://127.0.0.1:8000/scholarship_name/${router.query.name}`,
            {
                method: "GET",
            }
        );
        const data = await res.json();
        setScholarship(data);
    };
    useEffect(() => {
        handleFetch();
    }, []);
    return (
        <>
            <Navbar />
            <div>
                <Scholarship
                    name={scholarship && scholarship.name}
                    desc={scholarship && scholarship.desc}
                    deadline={scholarship && scholarship.deadline}
                    amount={scholarship && scholarship.amount}
                    link={scholarship && scholarship.link}

                />
            </div>
            <Footer />
        </>
    )
}