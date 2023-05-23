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
    avg_salary = '0',
    tuition = '0',
    cs_salary = '0',
    datascience_salary = '0',
    MBA_salary = '0',
    CSE_cost = '0',
    MBA_cost = '0',
    datascience_cost = '0',
    country = "None",
    opp_Country = 'None',
    hostelandmeals = 0,
    transportation = 0,
    personal = 0,
    books = 0,

}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const data_cse = [
        { name: country, Cost: (CSE_cost + personal + transportation + books + hostelandmeals) * 2, Salary: cs_salary * 2 },

        { name: (country === 'USA') ? 'India' : 'USA', Cost: 10000 * 2, Salary: 30000 * 2 },]
    const roi_cse = [
        { name: country, ROI: (cs_salary / ((CSE_cost + personal + transportation + books + hostelandmeals) * 2)) * 100 },

        { name: (country === 'USA') ? 'India' : 'USA', ROI: (country === 'USA') ? (30000 / (10000 * 2)) * 100 : (91250 / (73000 * 2)) * 100 },

    ];
    const data_datascience = [
        { name: country, Cost: datascience_cost * 2, Salary: cs_salary },

        { name: (country === 'USA') ? 'India' : 'USA', Cost: 10000 * 2, Salary: 30000 },

    ];
    const roi_datascience = [
        { name: country, ROI: (cs_salary / (datascience_cost * 2)) * 100 },

        { name: (country === 'USA') ? 'India' : 'USA', ROI: (30000 / (10000 * 2)) * 100 },];
    const data_MBA = [
        { name: country, Cost: MBA_cost * 2, Salary: MBA_salary * 2 },

        { name: (country === 'USA') ? 'India' : 'USA', Cost: 24360 * 2, Salary: 26796 * 2 },

    ];
    const roi_MBA = [
        { name: country, ROI: (MBA_salary * 2 / (MBA_cost * 2)) * 100 },

        { name: (country === 'USA') ? 'India' : 'USA', ROI: (26796 * 2 / (24360 * 2)) * 100 },

    ];


    return (

        <div className={`flex  my-10 gap-10 px-24 ${style.tab_card}`}>
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
                                    <p className="text-slate-400 text-2xl font-bold py-10">Cost Analysis</p>
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
                                                {(country === 'USA') ? <>
                                                    <th>USA</th></> : <> <th>India</th></>}
                                                {(country === 'USA') ? <>
                                                    <th>INDIA</th></> : <> <th>USA</th></>}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hostel & Meals</td>
                                                <td>${hostelandmeals}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$1100</td></> : <><td>$20000</td></>}

                                            </tr>

                                            <tr>
                                                <td>Transportation</td>
                                                <td>${transportation}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$3</td></> : <><td>$2180</td></>}
                                            </tr>
                                            <tr>
                                                <td>Student Fees</td>
                                                <td>${CSE_cost}/year</td>
                                                {(country === 'USA') ? <>
                                                    <td>$2000</td></> : <><td>$38000</td></>}
                                            </tr>
                                            <tr>
                                                <td>Textbooks</td>
                                                <td>${books}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$50</td></> : <><td>$1200</td></>}
                                            </tr>
                                            <tr>
                                                <td>Personal Expenses</td>
                                                <td>${personal}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$100</td></> : <><td>$9000</td></>}
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
                                                {(country === 'USA') ? <>
                                                    <th>USA</th></> : <> <th>India</th></>}
                                                {(country === 'USA') ? <>
                                                    <th>INDIA</th></> : <> <th>USA</th></>}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hostel & Meals</td>
                                                <td>{hostelandmeals}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$1100</td></> : <><td>$20000</td></>}

                                            </tr>

                                            <tr>
                                                <td>Transportation</td>
                                                <td>{transportation}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$3</td></> : <><td>$2180</td></>}
                                            </tr>
                                            <tr>
                                                <td>Student Fees</td>
                                                <td>${datascience_cost}/year</td>
                                                {(country === 'USA') ? <>
                                                    <td>$2000</td></> : <><td>$38000</td></>}
                                            </tr>
                                            <tr>
                                                <td>Textbooks</td>
                                                <td>{books}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$50</td></> : <><td>$1200</td></>}
                                            </tr>
                                            <tr>
                                                <td>Personal Expenses</td>
                                                <td>{personal}</td>
                                                {(country === 'USA') ? <>
                                                    <td>$100</td></> : <><td>$9000</td></>}
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