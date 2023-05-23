import style from "../styles/colleges.module.css";
import Link from "next/link";

export default function ({ name, desc, deadline, amount, link }) {


    return (
        <>

            <div className="flex justify-center my-20">  <div className={`p-4 shadow-lg w-1/2 rounded-xl hover:drop-shadow-2xl bg-white  justify-center  transition   hover:-translate-y-1 hover:scale-110 transition-duration: 300ms;`}>
                <div className="py-4">
                    <Link
                        href={{ pathname: "scholarship/", query: { name: name } }}
                        className=" font-bold text-4xl text-blue-800 p-4 "
                    >{name}</Link></div>
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

            </div>
            </div>
        </>
    )
}