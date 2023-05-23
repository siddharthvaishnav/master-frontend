// next
import Link from "next/link";

// components
import Image from "next/image";
import Navbar from "@/components/navbar";
import CollegeCard from "@/components/college_card";
import uni from "../assets/images/High_School-bro.svg";
// stylesheet
import style from "../styles/colleges.module.css";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

function Colleges() {
  const router = useRouter();
  const [colleges, setColleges] = useState([]);

  const [query, setQuery] = useState(router.query.search || "");
  console.log(query)


  const fetchData = async () => {

    const res = await fetch(`http://127.0.0.1:8000/get_colleges?query=USA`, {
      method: "GET",
    });


    const data = await res.json();
    setColleges(data);

  };
  const onSubmit = event => {
    event.preventDefault();

    fetchData();

  }
  const onhandleChange = event => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    fetchData(query);
  }, []);

  return (
    <>
      <Navbar />
      <section >
        <div className=" w-full my-10 rounded-xl  px-50" ><p className="text-blue-950 text-8xl text-center font-bold"> Universities of USA</p></div>

        <div className="justify-center    bg-slate-600 bg-clip-content w-full  rounded-full ">
          <div className="flex justify-center">
            <Image src={uni} alt="uni" className="w-5/6 mx-24 h-96 " />
          </div >
          <form className=" flex justify-center h-16  ">
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search College,Course" className=" rounded-lg justify  border-2 h-12    px-2 hover:border-cyan  focus:w-96 focus:outline-none focus:border-cyan  " />


          </form>

        </div>
      </section >
      <div
        className={`flex justify-center align-center  ${style.cardContainer}`}
      >
        <div className="container grid grid-cols-2 grid-flow-row gap-6">

          {colleges &&
            colleges.colleges &&
            colleges.colleges.filter((college) => {

              return query.toLowerCase() === '' ? college : (college.name.toLowerCase() && college.name.toLowerCase().includes(query))
            }).map((college) => (
              <>
                <CollegeCard


                  location={college.location}
                  name={college.name}
                  size={college.student_size}
                  acceptance_rate={college.acceptance_rate}
                  graduation_rate="100"
                  tuition={college.tuition}
                  link={college.link}

                />
              </>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Colleges;
