import React from 'react';
import Xenia from '../assets/xenia.png';
import Editorial from '../assets/editorial.png';
import RebuildHub from '../assets/rebuild-hub.png';
import Tradenza from '../assets/tradenza.png';
import Devconnector from '../assets/Devconnector.png';

export default function Projects() {
  return (
    <div className=" bg-slate-50 relative overflow-hidden" id="projects">
      <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
        <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
          Projects
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((proj) => {
            return (
              <div className="p-4 shadow-md space-y-4 bg-white">
                <div className="h-32 overflow-hidden border-b relative">
                  <img alt="" src={proj.img} className="w-full absolute left-0 my-auto "></img>
                </div>
                <div className="text-2xl text-cyan-500">{proj.title}</div>
                <div className="h-20 overflow-y-auto text-gray-400 font-light text-xs">
                  {proj.details}
                </div>
                <div className="flex justify-end space-x-4 items-center opacity-40">
                  {proj.links.map((link) => {
                    return (
                      <a
                        href={link.link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="h-5 cursor-pointer text-2xl text-gray-500 flex items-center"
                      >
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Devconnector",
    details: "Social and academic websites to connect the developers working in different sectors and allow developers to share insights and working experience on different projects.",
    img: Devconnector,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: "https://devconnector21.netlify.app/"
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: "https://github.com/gauravshinde1816/devconnector_client",
      },
    ]
  },
  {
    title: 'Xenia Website',
    details: "Worked along with team of 6 developers for creating a Website for Annual Flagship event Xenia.  The platform recorded a footfall of 6000+ registration.",
    img: Xenia,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://pcsbxenia.com/',
      },
    ],
  },
  {
    title: 'Rebuild Hub',
    details:
      'A web app that will bridge the gap between waste donors and waste collectors and will have a huge positive impact on collection of recyclable waste.',
    img: RebuildHub,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://rebuild-hub.netlify.app/',
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/Rebuild-Hub',
      },
    ],
  },
  {
    title: 'IT Logger',
    img: "https://raw.githubusercontent.com/gauravshinde1816/IT-LOGGER/master/IT_Logger.gif",
    details: "IT logger is an application that basically helps to keep track of all important operations and tasks in the company.  You can add, delete and update the task. Also, you can assign specific technician to complete that task.",
    links: [
     
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/pictdebsoc/the_editorial',
      },
    ],
  },
  {
    title: 'GitHub Finder',
    details: 'GitHub Finderis an application which list down GitHub accounts for required search keyword.',
    img: "https://raw.githubusercontent.com/gauravshinde1816/github-finder/master/github_finder_2.png",
    links: [
     
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/gauravshinde1816/github-finder',
      },
    ],
  },
];
