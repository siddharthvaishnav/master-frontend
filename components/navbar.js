import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as React from 'react';


function Navbar({ isLoggedin, onLogout }) {
  const router = useRouter();
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const fetchData = async () => {

    const res = await fetch(`http://127.0.0.1:8000/get_colleges`, {
      method: "GET",
    });


    const data = await res.json();
    setColleges(data);

  };

  const onSub = event => {
    event.preventDefault();
    router.push(`/colleges?search=${search}`);
  }
  const onHandleChange = event => {
    const value = event.target.value;
    setSearch(value);
    const filteredSuggestions = colleges.colleges.filter(college =>
      college.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const inputWidthClass = search ? 'w-96' : '';

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <nav >
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li tabIndex="0">
                  <a className="justify-between">
                    Universities
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a href="">USA</a>
                    </li>
                    <li>
                      <a>INDIA</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>about Us</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl" href="/">Master's Next</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/">Home</a>
              </li>
              <li tabIndex="0">
                <a href="/colleges">
                  Universities
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <ul className="menu bg-base-100 rounded-box p-2">
                      <li tabIndex="0">
                        <span>By Country</span>
                        <ul className="rounded-box p-2 bg-base-100">
                          <li>
                            <a href="/college_USA">USA</a>
                          </li>
                          <li>
                            <a href="/college_india">INDIA</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li>
                <a href="compare">Compare</a>
              </li>
              <li>
                <a href="Scholarship">Scholarship</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>

            </ul>
          </div>
          <div className="navbar-end">
            <form onSubmit={onSub} className="flex py-3">
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={search}
                  onChange={onHandleChange}
                  placeholder="Search College, Course"
                  className="rounded-lg border-2 h-12 mx-2 px-2 hover:border-cyan focus:outline-none focus:border-cyan ${inputWidthClass}"
                />
                {search.length > 0 && (
                  <ul
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      background: '#fff',
                      padding: '0.5rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {suggestions.map(college => (
                      <li key={college.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setSearch(college.name.toLowerCase());
                            setSuggestions([]);
                          }}
                          className="text-left w-full py-1 px-2 hover:bg-gray-200"
                        >
                          {college.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button type="submit" className="btn bg-cyan border-none hover:bg-blue-400">
                Search
              </button>
            </form>

          </div>
          <div>
            <a href="login" className="mx-6">Login</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
