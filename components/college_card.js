import style from "../styles/colleges.module.css";
import Image from "next/image";
import Year from "../assets/images/two.svg";
import Link from "next/link";
import Small from "../assets/images/small.svg";
import Medium from "../assets/images/medium.svg";
import Large from "../assets/images/large.svg";

function CollegeCard({

  location = "somewhere, USA",
  name = "somewhere university",
  size = 10001,
  acceptance_rate = "-/-",
  graduation_rate = "-/-",
  tuition = "-/-",
  median_earnings = "-/-",
  link = "https://localhost:3000",
}) {
  return (
    <>
      <div className={`drop-shadow-md bg-white ${style.card} justify-center`}>
        <p className=" text-xl text-slate-400">{location}</p>
        <Link
          href={{ pathname: "college/", query: { name: name } }}
          className=" font-bold text-3xl text-cyan "
        >
          {name}
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
            <p className="text-lg text-cyan  ">Median Salary</p>
            <p className="text-2xl text-slate-900 font-bold ">
              ${median_earnings}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollegeCard;
