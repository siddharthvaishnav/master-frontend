import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from "../styles/colleges.module.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({
    college1_name = '',
    college1_cse_fees = 0,
    college1_cse_placement = 0,
    college1_datascience_fees = 0,
    college1_datascience_placement = 0,
    college1_mba_fees = 0,
    college1_mba_placement = 0,
    college1_country = 0,
    college1_hostelandmeals = 0,
    college1_transportation = 0,
    college1_personal = 0,
    college1_books = 0,
    college2_name = '',
    college2_cse_fees = 0,
    college2_cse_placement = 0,
    college2_datascience_fees = 0,
    college2_datascience_placement = 0,
    college2_mba_fees = 0,
    college2_mba_placement = 0,
    college2_hostelandmeals = 0,
    college2_transportation = 0,
    college2_personal = 0,
    college2_books = 0,
    college2_country = 0,

}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const data_cse = [
        { name: college1_name, Cost: (college1_cse_fees + college1_personal + college1_transportation + college1_books + college1_hostelandmeals) * 2, Salary: college1_cse_placement * 2 },

        { name: college2_name, Cost: (college2_cse_fees + college2_personal + college2_transportation + college2_books + college2_hostelandmeals) * 2, Salary: college2_cse_placement * 2 }]
    const roi_cse = [
        { name: college1_name, ROI: (college1_cse_placement / ((college1_cse_fees + college1_personal + college1_transportation + college1_books + college1_hostelandmeals) * 2)) * 100 },

        { name: college2_name, ROI: (college2_cse_placement / ((college2_cse_fees + college2_personal + college2_transportation + college2_books + college2_hostelandmeals) * 2)) * 100 },

    ];
    const data_datascience = [
        { name: college1_name, Cost: (college1_datascience_fees + college1_personal + college1_transportation + college1_books + college1_hostelandmeals) * 2, Salary: college1_datascience_placement * 2 },

        { name: college2_name, Cost: (college2_datascience_fees + college2_personal + college2_transportation + college2_books + college2_hostelandmeals) * 2, Salary: college2_datascience_placement * 2 }

    ];
    const roi_datascience = [
        { name: college1_name, ROI: (college1_datascience_placement / ((college1_datascience_fees + college1_personal + college1_transportation + college1_books + college1_hostelandmeals) * 2)) * 100 },

        { name: college2_name, ROI: (college2_datascience_placement / ((college2_datascience_fees + college2_personal + college2_transportation + college2_books + college2_hostelandmeals) * 2)) * 100 },

    ];
    const data_MBA = [
        { name: college1_name, Cost: (college1_mba_fees + college1_personal + college1_transportation + college1_books + college1_hostelandmeals) * 2, Salary: college1_mba_placement * 2 },

        { name: college2_name, Cost: (college2_mba_fees + college2_personal + college2_transportation + college2_books + college2_hostelandmeals) * 2, Salary: college2_mba_placement * 2 }

    ];
    const roi_MBA = [
        { name: college1_name, ROI: (college1_mba_placement / ((college1_mba_fees + college1_personal + college1_transportation + college1_books + college1_hostelandmeals) * 2)) * 100 },

        { name: college2_name, ROI: (college2_mba_placement / ((college2_mba_fees + college2_personal + college2_transportation + college2_books + college2_hostelandmeals) * 2)) * 100 },

    ];


    return (

        <div className={`flex  my-10 gap-10 px-24  justify-center ${style.compare_tab_card}`}>
            <div className={`drop-shadow-md bg-white ${style.page_card}`}>
                <p className='text-4xl py-5 font-bold text-slate-400'>Analysis</p>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                            <Tab label="MS(CSE)" {...a11yProps(0)} sx={{ fontSize: '18px' }} />
                            <Tab label="MS(Data Science)" {...a11yProps(1)} sx={{ fontSize: '18px' }} />
                            <Tab label="MBA" {...a11yProps(2)} sx={{ fontSize: '18px', }} />
                        </Tabs>
                    </Box>
                    <p className='italic text-lg text-slate-400'>Note:cost is calculated for two years</p>
                    <TabPanel value={value} index={0}>
                        <div className="gap-5 justify-center">

                            <div className='flex gap-20'>

                                <div >
                                    <p className="text-slate-400 text-2xl font-bold py-10">Cost Analysis ${college1_hostelandmeals}</p>
                                    <BarChart
                                        width={400}
                                        height={300}
                                        data={data_cse}

                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Cost" fill="#8884d8" />
                                        <Bar dataKey="Salary" fill="#82ca9d" />
                                    </BarChart>

                                </div>
                                <div>
                                    <table className="table w-full">
                                        {/* head */}
                                        <thead><tr><th className='italic text-slate-400'>note:calcualtion is done for per year</th><th></th><th></th></tr>
                                            <tr>
                                                <th>Fees Components</th>

                                                <th>{college1_name}</th>
                                                <th>{college2_name}</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hostel & Meals</td>
                                                <td>${college1_hostelandmeals}</td>

                                                <td>${college2_hostelandmeals}</td>

                                            </tr>

                                            <tr>
                                                <td>Transportation</td>
                                                <td>${college1_transportation}</td>

                                                <td>${college2_transportation}</td>
                                            </tr>
                                            <tr>
                                                <td>Student Fees</td>
                                                <td>${college1_cse_fees}</td>

                                                <td>${college2_cse_fees}</td>
                                            </tr>
                                            <tr>
                                                <td>Textbooks</td>
                                                <td>${college1_books}</td>

                                                <td>${college2_books}</td>
                                            </tr>
                                            <tr>
                                                <td>Personal Expenses</td>

                                                <td>${college1_personal}</td>

                                                <td>${college2_personal}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-400 text-2xl font-bold">ROI</p>

                                <BarChart
                                    width={400}
                                    height={300}
                                    data={roi_cse}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />

                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="ROI" fill="#8884d8" />

                                </BarChart>

                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="gap-5 justify-center">

                            <div className='flex gap-20'>

                                <div >
                                    <p className="text-slate-400 text-2xl font-bold">Cost Analysis</p>
                                    <BarChart
                                        width={400}
                                        height={300}
                                        data={data_datascience}

                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Cost" fill="#8884d8" />
                                        <Bar dataKey="Salary" fill="#82ca9d" />
                                    </BarChart>
                                </div>
                                <div>
                                    <table className="table w-full">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Fees Components</th>

                                                <th>{college1_name}</th>
                                                <th>{college2_name}</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hostel & Meals</td>
                                                <td>${college1_hostelandmeals}</td>

                                                <td>${college2_hostelandmeals}</td>

                                            </tr>

                                            <tr>
                                                <td>Transportation</td>
                                                <td>${college1_transportation}</td>

                                                <td>${college2_transportation}</td>
                                            </tr>
                                            <tr>
                                                <td>Student Fees</td>
                                                <td>${college1_cse_fees}</td>

                                                <td>${college2_cse_fees}</td>
                                            </tr>
                                            <tr>
                                                <td>Textbooks</td>
                                                <td>${college1_books}</td>

                                                <td>${college2_books}</td>
                                            </tr>
                                            <tr>
                                                <td>Personal Expenses</td>

                                                <td>${college1_personal}</td>

                                                <td>${college2_personal}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-400 text-2xl font-bold">ROI</p>

                                <BarChart
                                    width={300}
                                    height={300}
                                    data={roi_datascience}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="ROI" fill="#8884d8" />

                                </BarChart>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="flex gap-5 justify-center">
                            <div className=''>
                                <p className="text-slate-400 text-2xl font-bold">Cost Analysis</p>
                                <BarChart
                                    width={400}
                                    height={300}
                                    data={data_MBA}

                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Cost" fill="#8884d8" />
                                    <Bar dataKey="Salary" fill="#82ca9d" />
                                </BarChart>
                            </div>

                            <div>
                                <p className="text-slate-400 text-2xl font-bold">ROI</p>
                                <p className="text-slate-400 text-sm "><strong>Note:</strong>ROI is calculated for 2 years income</p>

                                <BarChart
                                    width={300}
                                    height={300}
                                    data={roi_MBA}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="ROI" fill="#8884d8" />

                                </BarChart>
                            </div>
                        </div>
                    </TabPanel>
                </Box >
            </div>
            <div>

            </div>
        </div>
    );
}