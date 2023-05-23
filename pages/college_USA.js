// next
import Link from "next/link";
import Image from "next/image";
// components
import Navbar from "@/components/navbar";
import CollegeCard from "@/components/college_card";

// stylesheet
import style from "../styles/colleges.module.css";
// images
import uni from "../assets/images/High_School-bro.svg";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Colleges() {
  const router = useRouter();
  const [colleges, setColleges] = useState([]);
  const [query, setQuery] = useState(router.query.search || "");

  const fetchData = async () => {
    const res = await fetch(`http://127.0.0.1:8000/get_colleges?query=USA`, {
      method: "GET",
    });

    const data = await res.json();
    setColleges(data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const onhandleChange = (event) => {
    setQuery(event.target.value);
  };
  console.log(colleges.colleges)
  useEffect(() => {
    fetchData(query);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="bg-grey"
      >
        <div className="bg-grey">
          <Navbar />
          <section>
            <div className="w-full my-10 rounded-xl px-50">
              <p className="text-blue-950 text-8xl text-center font-bold">
                {" "}
                Universities of USA
              </p>
            </div>

            <div className="justify-center bg-slate-600 bg-clip-content w-full rounded-full">
              <div className="flex justify-center">
                <Image src={uni} alt="uni" className="w-5/6 mx-24 h-96" />
              </div>
              <form className="flex justify-center h-16">
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search College, Course"
                  className={`rounded-lg justify border-2 h-12 transition-all duration-300 transform focus:outline-none focus:border-cyan focus:ring-2 ring-cyan px-2 hover:border-cyan focus:w-96 ${style.expandInput}`}
                />
              </form>
            </div>
          </section>

          <div
            className={`flex justify-center align-center ${style.cardContainer}`}
          >
            <div className="container grid grid-cols-2 grid-flow-row gap-6">
              {colleges &&
                colleges.colleges &&
                colleges.colleges
                  .filter((college) => {
                    return query.toLowerCase() === ""
                      ? college
                      : college.name.toLowerCase().includes(query.toLowerCase());
                  })
                  .map((college) => (
                    <motion.div
                      key={college.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }} // Adjust duration and ease
                    >
                      <CollegeCard
                        location={college.location}
                        name={college.name}
                        size={college.student_size}
                        acceptance_rate={college.acceptance_rate}
                        graduation_rate="100"
                        tuition={college.tuition}
                        link={college.link}
                      />
                    </motion.div>
                  ))}
            </div>
          </div>

          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default Colleges;
