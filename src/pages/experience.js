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
    position: 'Software Engineering Intern',
    company: 'Altair',
    details: [
      'Implemented Golang  Threads with Cron Job scheduling and assessed the performance of the application by creating multiple concurrent jobs.',
      'Developed SAO(Software Asset Optimization)Plugin which will consume the data coming from the backend(MongoDB + Spring Boot API + Kafka queues) and create visualization out of it based on the configuration files.',
      'Worked on creaing automated environment where chart visualizations can be downloaded in batch and saved on the local machine with an appropriate hierarchy level.',
      'Worked on  creating vendor status maps for License Monitor using react-simple-maps.',
      ' Migrated existing Spring Boot  backend services to  Golang which significantly reduced the API latency  by 60% and also reduced the final build size by 10 times.',
      'React.js,Node.js,Cypress,Chart.js,React-Maps,Postman,Spring Boot,Docker',
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
    date: 'Dec 21 - Jan 21',
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
