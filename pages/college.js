import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import CollegePage from "@/components/college_page";
import { Tab } from "@mui/material";
import Footer from "@/components/Footer";
import Coursetabs from "@/components/course_tabs";
import { data } from "autoprefixer";

function College() {
  const router = useRouter();
  const [college, setCollege] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFetch = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/by_name/${router.query.name}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    setCollege(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    if (college) {
      setIsLoaded(true);
    }
  }, [college]);

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="">
          <CollegePage
            location={college && college.location}
            name={college && college.name}
            size={college && college.student_size}
            acceptance_rate={college && college.acceptance_rate}
            graduation_rate="100"
            tuition={college && college.tuition}
            link={college && college.link}
            cost_0_to_30k={college && college.cost_0_to_30k}
            cost_30_to_48k={college && college.cost_30_to_48k}
            cost_48_to_75k={college && college.cost_48_to_75k}
            cost_75_to_110k={college && college.cost_75_to_110k}
            cost_110k_plus={college && college.cost_110k_plus}
            avg_salary={college && college.salary}
            grescore={college && college.grescore}
            logo={college && college.logo}
            toefl={college && college.toefl}
            ielts={college && college.ielts}
            country={college && college.country}
            course={college && college.course}
          />

          <div className="text-2xl">
            <Coursetabs
              avg_salary={college && college.salary}
              tuition={college && college.tuition}
              cs_salary={college && college.cs_salary}
              datascience_salary={college && college.datascience_salary}
              MBA_salary={college && college.MBA_salary}
              CSE_cost={college && college.CSE_cost}
              MBA_cost={college && college.MBA_cost}
              datascience_cost={college && college.DataScience_cost}
              country={college && college.country}
              hostelandmeals={college && college.hostelandmeals}
              transportation={college && college.transportation}
              books={college && college.books}
              personal={college && college.personal}
            />
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default College;
