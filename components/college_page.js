import style from "../styles/colleges.module.css";
import Image from "next/image";
import Year from "../assets/images/two.svg";
import Link from "next/link";
import Small from "../assets/images/small.svg";
import Medium from "../assets/images/medium.svg";
import Large from "../assets/images/large.svg";
import general from "../assets/images/general.jpg"
import loc from "../assets/images/location.png"
import extlink from "../assets/images/external-link.png"
import stanford from "../assets/images/stanford_university.png"
import * as React from 'react';





function CollegePage({
  location = "somewhere, USA",
  name = "somewhere university",
  size = 10001,
  acceptance_rate = "100",
  graduation_rate = "100",
  tuition = "Not Available",
  avg_salary = "0",
  link = "https://google.com",
  cost_0_to_30k = 0,
  cost_30_to_48k = 0,
  cost_48_to_75k = 0,
  cost_75_to_110k = 0,
  cost_110k_plus = 0,
  course = '',
  grescore = '0',
  logo = general,
  toefl = 0,
  ielts = 0,
  country = 'USA',
  gate = 0,
  cat = 0,

}) {


  return (
    <>
      <section className={`  ${style.section_card}`}>
        <div className="flex gap-40 ">
          <div className={`p-10  ${style.section_card_college_div}`}>
            <div className="flex gap-4 py-3" >
              <Image src={loc} className="w-10 h-10" alt="location" />
              <p className=" text-3xl text-slate-100">{location}</p></div>

            <p className="text-6xl font-bold text-white">{name}</p>

            <div className="flex gap-3 py-3">
              <Link href={`https://${link}`} className="text-3xl text-slate-100 hover:underline">
                {link}
              </Link>
              <Image src={extlink} className="w-8 h-8" alt="link" />
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-8 justify-start align-center my-4">
              <div className="text-center">
                <Image src={Year} className="w-16 h-16 " alt="image" />
                <p className="text-slate-600 text-2xl">Year</p>
              </div>
              <>
                {size < 5000 ? (
                  <>
                    <div className="text-center">
                      <Image src={Small} className="w-16 h-16" alt="image" />
                      <p className="text-slate-600">{size}</p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {size > 5000 && size < 10000 ? (
                  <>
                    <div className="text-center">
                      <Image src={Medium} className="w-16 h-16" alt="image" />
                      <p className="text-slate-600 text-2xl">{size}</p>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {size > 10000 ? (
                  <>
                    <div className="text-center">
                      <Image src={Large} className="w-16 h-16" alt="image" />
                      <p className="text-slate-600 text-2xl">{size}</p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            </div>
          </div>

          <Image src={stanford} className="h-96 w-96 my-16 rounded-3xl" alt="image" />
        </div>
      </section >
      <div className="my-10 flex justify-center gap-12">
        <div className={`drop-shadow-md bg-white ${style.page_card}`}>
          <p className=" text-xl text-slate-400">{location}</p>

          <p className="text-3xl text-cyan">{name}</p>
          <Link href={`https://${link}`} className="text-3xl text-slate-400">
            {link}
          </Link>
          <div className="grid grid-rows-1 grid-flow-col gap-8 justify-start align-center my-4">
            <div className="text-center">
              <Image src={Year} className="w-10 h-10" alt="image" />
              <p className="text-slate-400">Year</p>
            </div>
            <>
              {size < 5000 ? (
                <>
                  <div className="text-center">
                    <Image src={Small} className="w-10 h-10" alt="image" />
                    <p className="text-slate-400">{size}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {size > 5000 && size < 10000 ? (
                <>
                  <div className="text-center">
                    <Image src={Medium} className="w-10 h-10" alt="image" />
                    <p className="text-slate-400">{size}</p>
                  </div>
                </>
              ) : (
                <></>
              )}

              {size > 10000 ? (
                <>
                  <div className="text-center">
                    <Image src={Large} className="w-10 h-10" alt="image" />
                    <p className="text-slate-400">{size}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          </div>
          <div className={`${style.divider}`} />
          <div
            className={`my-4 grid grid-cols-2 grid-flow-row gap-4 justify-start align-center`}
          >
            <div>
              <p className="text-lg text-cyan  ">Graduation Rate</p>
              <p className="text-2xl text-slate-900 font-bold ">
                {graduation_rate}%
              </p>
            </div>
            <div>
              <p className="text-lg text-cyan  ">Acceptance Rate</p>
              <p className="text-2xl text-slate-900 font-bold ">
                {acceptance_rate}%
              </p>
            </div>
            <div>
              <p className="text-lg text-cyan  ">Average Annual Cost</p>
              <p className="text-2xl text-slate-900 font-bold ">${tuition}</p>
            </div>
            <div>
              <p className="text-lg text-cyan  ">Average Salary</p>
              <p className="text-2xl text-slate-900 font-bold ">
                ${avg_salary}
              </p>
            </div>
          </div>
          <div className={`my-4 ${style.divider}`} />
          <p className="text-2xl text-slate-400">Avg. Annual Cost</p>
          <p className="text-3xl  text-cyan font-bold ">${tuition}</p>
          <div className="my-4 overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Family Income</th>
                  <th>Average Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$0-$30000</td>
                  <td>${cost_0_to_30k}</td>
                </tr>
                <tr>
                  <td>$30000-$48000</td>
                  <td>${cost_30_to_48k}</td>
                </tr>
                <tr>
                  <td>$48000-$75000</td>
                  <td>${cost_48_to_75k}</td>
                </tr>
                <tr>
                  <td>$75000-$110000</td>
                  <td>${cost_75_to_110k}</td>
                </tr>
                <tr>
                  <td>$110000+</td>
                  <td>${cost_110k_plus}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div className={`my-4 ${style.divider}`} />


              <p className="text-slate-400 text-2xl font-bold">
                Courses
              </p>
            </div>
            {country == 'USA' ? (
              <>
                <div>
                  <div className={`my-4 ${style.divider}`} />


                  <p className="text-slate-400 text-2xl font-bold">
                    Admitted Profile
                  </p>
                  <div className="flex p-6 mx-10 justify-center gap-20">
                    <div className="grid grid-cols-1 grid-flow-row gap-4 justify-start align-center ">
                      <a href="https://www.ets.org/toefl.html" className="text-xl hover:underline text-cyan mx-4"> TOEFL</a>
                      <div className="radial-progress bg-cyan text-primary-content border-4 border-cyan text-lg" style={{ "--value": (toefl / 120) * 100, "--thickness": "6px" }}>{toefl}</div>
                    </div>
                    <div className="grid grid-cols-1 grid-flow-row gap-4 justify-start align-center ">
                      <a href="https://www.ielts.org/" className="text-xl hover:underline text-cyan mx-4"> IELTS</a>
                      <div className="radial-progress bg-cyan text-primary-content border-4 border-cyan text-lg" style={{ "--value": ielts * 10, "--thickness": "6px" }}>{ielts}</div>
                    </div>
                    <div className="grid grid-cols-1 grid-flow-row gap-4 justify-start align-center ">
                      <a href="https://www.ets.org/gre.html" className="text-xl hover:underline text-cyan mx-4"> GRE</a>
                      <div className="radial-progress bg-cyan text-primary-content border-4 border-cyan text-lg" style={{ "--value": (grescore / 340) * 100, "--thickness": "6px" }}>{grescore}</div>
                    </div>
                  </div>
                </div></>
            ) : <> <div>
              <div className={`my-4 ${style.divider}`} />


              <p className="text-slate-400 text-2xl font-bold">
                Admitted Profile
              </p>
              <div className="flex p-6 mx-10 justify-center gap-20">
                <div className="grid grid-cols-1 grid-flow-row gap-4 justify-start align-center ">
                  <a href="https://gate.iitk.ac.in/" className="text-xl hover:underline text-cyan mx-4"> GATE</a>
                  <div className="radial-progress bg-cyan text-primary-content border-4 border-cyan text-lg" style={{ "--value": (toefl / 120) * 100, "--thickness": "6px" }}>{gate}</div>
                </div>
                <div className="grid grid-cols-1 grid-flow-row gap-4 justify-start align-center ">
                  <a href="https://iimcat.ac.in/per/g01/pub/756/ASM/WebPortal/1/index.html?756@@1@@1" className="text-xl hover:underline text-cyan mx-4"> CAT</a>
                  <div className="radial-progress bg-cyan text-primary-content border-4 border-cyan text-lg" style={{ "--value": ielts * 10, "--thickness": "6px" }}>{cat}</div>
                </div>

              </div>
            </div></>}


          </div>

        </div>

      </div>
    </>
  );
}

export default CollegePage;
