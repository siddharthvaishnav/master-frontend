import style from "../styles/colleges.module.css";
import Link from "next/link";

export default function scholarships({ name, desc, deadline, amount, link }) {


    return (
        <>

            <div className="flex justify-center my-20">  <div className={`p-4 shadow-lg w-1/2 rounded-xl  bg-white  justify-center  `}>
                <div className="py-4 text-5xl font-bold text-blue-800">
                    {name}</div>
                <div className="p-4 text-slate-500">
                    <p className="text-2xl font-semibold  text-slate-800">
                        Description:
                    </p>
                    <p className="pt-4 text-xl">
                        {desc}

                    </p>
                </div>
                <div className="p-4 text-slate-500">
                    <p className="text-2xl font-semibold text-slate-800 ">
                        Deadline:
                    </p>
                    <p className=" text-xl">
                        {deadline}
                    </p>
                </div>
                <div className="px-4 text-slate-500">
                    <p className="text-2xl font-semibold text-slate-800">
                        Amount:
                    </p>
                    {amount == 100 ? (<>
                        <p>
                            Fully Funded
                        </p>
                    </>) : (
                        <>
                            <p>${amount}</p>
                        </>)

                    }
                </div>
                <div className="p-4 mt-2">
                    <p className="text-2xl font-semibold text-slate-800">
                        Application:
                    </p>
                    <button className="text-xl shadow-xl hover:shadow-inner  transition-all transition-duration-300ms ease-in-out hover:translate-y-2  hover:scale-95 text-white rounded-lg bg-blue-800 p-3"> <Link href={`https://${link}`}  >
                        Apply Now

                    </Link></button>
                </div>

            </div>
            </div>
        </>
    )
}