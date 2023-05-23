// assets
import Logo from "../assets/images/home_page.svg";

// next imports
import Image from "next/image";
import Link from "next/link";


import styles from "../styles/colleges.module.css";
// components
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleNavigation = () => {
    setIsLoading(true);
    router.push("/colleges");
  }

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className={`hero-content flex-col lg:flex-row-reverse`}>
          <Image src={Logo} alt="image" className={`${styles.heroAnimation}`} />
          <div>
            <h1 className={`text-8xl font-bold ${styles.typingEffect}`}>
              Master's Next
            </h1>
            <p className="text-xl py-6">
              One stop solution for the master's degree
            </p>
            <button
              className="btn bg-cyan border-none hover:bg-blue-400"
              onClick={handleNavigation}
            >
              {isLoading ? <Loader /> : "Browse Colleges"}
            </button>
          </div>
          <span className={`${styles.cursor}`}></span>
        </div>
      </div>



      <Footer />
    </>
  );
}
