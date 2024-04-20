import React from 'react';

import Sorceo from '../assets/Sorceo_logo.png';
import Folioset from '../assets/Folioset.png';

export default function Experience() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-500 pb-4 mb-16">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-4 gap-4 md:order-2">
              <div
                className="w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer"
                onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
              >
                <img
                  className="max-h-full max-w-full rounded-md"
                  src={
                    exp.img ||
                    'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="md:col-span-3 space-y-4 my-auto">
                <a href={exp.companyUrl} target="_blank"  className="text-lg md:text-2xl text-cyan-500">
                  {exp.company}
                </a>
                <div className="md:flex justify-between">
                  <div className="text-xl text-slate-500 ">{exp.position}</div>
                  <div className=" text-slate-400">{exp.date}</div>
                </div>
                <div className=" text-gray-700 font-extralight text-sm">
                  <ul className="list-disc">
                    {exp.details.map((detail, index) => {
                      if (index === exp.details.length - 1) {
                        console.log(detail);
                        return (
                          <div className="mt-1.5 flex flex-wrap">
                            {detail.split(',').map((d) => (
                              <span class=" mt-1.5 bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                                {d}
                              </span>
                            ))}
                          </div>
                        );
                      }
                      return <li>{detail}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Software Engineer',
    company: 'DeepIntent',
    details: [
      'Spring Boot,GraphQL,React.js'
    ],
    date: 'April 2024 - Present',
    img: 'https://mma.prnewswire.com/media/1165827/DeepIntent_Logo.jpg?p=facebook',
    companyUrl: 'https://www.deepintent.com/',
  },
  {
    position: 'Associate Software Engineer',
    company: 'IDeaS Revenue Optimization Solution',
    details: [
      'Worked on Revenue Optimization Platform G3',
      'Spring Boot,Docker,Vaadin'
    ],
    date: 'July 2023 - March 2024',
    img: 'https://roomkeypms.com/wp-content/uploads/2019/01/IDeaS-A-Sas-Company-Logo.png',
    companyUrl: 'https://ideas.com/',
  },
  {
    position: 'Software Engineering Intern',
    company: 'Altair',
    details: [
      'Collaborated with the team of 6 developers to develop the new  golang backend service for software called SAO(Software Asset Optimization).',
      'Migrated existing Spring Boot  backend services to  Golang which significantly reduced the API latency  by 60% and also reduced the final build size by 10 times.',
      'Implemented Golang  Threads with Cron Job scheduling and assessed the performance of the application by creating multiple concurrent jobs.',
      'Learned about Docker based deployment strategy and implemented it in the SAO (Software Asset Optimization) project which significantly reduced the efforts of deploying the application in production environment.',
      'Worked on creaing automated environment where chart visualizations can be downloaded in batch and saved on the local machine with an appropriate hierarchy level.',
      'Worked on  creating vendor status maps for License Monitor using react-simple-maps.',
     ' Authored new system design architecture for health monitoring systems which should be implemented in the existing product like SAO (Software Asset Optimization) and DSUA (Desktop Surveillance Usage Analytics).',
      'Golang,React.js,Node.js,Cypress,Chart.js,React-Maps,Postman,Spring Boot,Docker',
    ],
    date: 'Feb 2022 - June 2023',
    img: 'https://www.oracle.com/oce/press/assets/CONTE5A2A714E4DD487A92751F67B999CDC8/native/og-social-altair-logo.jpg',
    companyUrl: 'https://www.altair.com/',
  },
  {
    position: 'Software Engineering Intern',
    company: 'Persistent System',
    details: [
      'Worked on building a Career Development Framework.',
      'Worked on building Single Page Applications using Angular Framework and its integration with backend Spring API.',
      'Implemented Lazy Loading improve reload and response time of the response.',
      'Angular,ThreeJS,Angular Material',
    ],
    date: 'Dec 21 - Jan 22',
    img: 'https://www.persistent.com/wp-content/uploads/2021/04/Logo-variants-Primary-vertical.jpg',
    companyUrl: 'https://www.persistent.com/',
  },

  {
    position: 'Full Stack Developer Intern',
    company: 'Sorceo Technologies Pvt. Ltd.',
    details: [
      'Built a Vendor Management System and Auction Platform.',
      'The Platform automated the activities performed between Customers and Vendors.',
      " Tackled some real world problems by using advance React JS and Redux concepts. The platform is built to help top MNC's in the world.",
      'React.js,Node.js,Express.js,MongoDB',
    ],
    date: 'Aug 21 - Oct 21',
    img: Sorceo,
    companyUrl: 'http://www.sorceotech.com/',
  },


  {
    position: 'Software Development Intern',
    company: 'Folioset',
    details: [
      'Worked on backend API for CRUD operations , Paginations , Authentication.',
      'Worked on integration of backend API with frontend interface which uses ReactJS , Redux',
      'React.js,Node.js,Express.js,MongoDB',
    ],
    date: 'July 21 - Sept 21',
    img: Folioset,
    companyUrl: 'http://www.folioset.com/',
  },
];
