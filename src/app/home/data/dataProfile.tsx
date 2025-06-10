import {ProfileDataType} from '@resume/Types/DataProfile';
import {BsFiletypeScss} from 'react-icons/bs';
import {DiVisualstudio} from 'react-icons/di';
import {FaFigma} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';
import {RiReactjsLine} from 'react-icons/ri';
import {
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiCss3,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiNestjs,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiSequelize,
} from 'react-icons/si';
import {TbBrandReactNative} from 'react-icons/tb';

const iconStyle =
  'text-secondary w-10 h-10 max-xl:w-8 max-xl:h-8 max-lg:w-5 max-lg:h-5';

const dataProfile: ProfileDataType = {
  name: 'Nashir Resta Fauzian',
  pictureUrl: '/images/profile-picture-person.png',
  birthday: '26 August 2004',
  location: 'Indonesia, Bandung',
  email: 'nashirresta7@gmail.com',
  phoneNumber: '+6282118578227',
  detail:
    "I am a Back End developer with a passion for creating efficient and scalable applications. I can be a depenable team member, always eager to learn and adapt with new environment. I am still learning to gain more skills and experiences, i'd love to explore something related to Technology or Other fields to improve myself",
  skills: [
    {
      name: 'React Js',
      icon: <RiReactjsLine className={iconStyle} />,
    },
    {
      name: 'Typescript',
      icon: <SiTypescript className={iconStyle} />,
    },
    {
      name: 'Javascript',
      icon: <SiJavascript className={iconStyle} />,
    },
    {
      name: 'HTML',
      icon: <SiHtml5 className={iconStyle} />,
    },
    {
      name: 'CSS',
      icon: <SiCss3 className={iconStyle} />,
    },
    {
      name: 'SCSS',
      icon: <BsFiletypeScss className={iconStyle} />,
    },
    {
      name: 'Next Js',
      icon: <SiNextdotjs className={iconStyle} />,
    },
    {
      name: 'Node Js',
      icon: <SiNodedotjs className={iconStyle} />,
    },
    {
      name: 'Express Js',
      icon: <SiExpress className={iconStyle} />,
    },
    {
      name: 'Sequelize JS',
      icon: <SiSequelize className={iconStyle} />,
    },
    {
      name: 'Nest Js',
      icon: <SiNestjs className={iconStyle} />,
    },
    {
      name: 'Laravel',
      icon: <SiLaravel className={iconStyle} />,
    },
    {
      name: 'Mysql',
      icon: <GrMysql className={iconStyle} />,
    },
    {
      name: 'Mongo DB',
      icon: <SiMongodb className={iconStyle} />,
    },
    {
      name: 'Firebase',
      icon: <SiFirebase className={iconStyle} />,
    },
    {
      name: 'Tailwind Css',
      icon: <SiTailwindcss className={iconStyle} />,
    },
    {
      name: 'Github',
      icon: <SiGithub className={iconStyle} />,
    },
    {
      name: 'Gitlab',
      icon: <SiGitlab className={iconStyle} />,
    },
  ],
  tools: [
    {
      name: 'Visual Studio Code',
      icon: <DiVisualstudio className={iconStyle} />,
    },
  ],
  education: [
    {
      id: 1,
      startYear: 2011,
      endYear: 2017,
      type: 'Elementary School',
      name: 'SDN Setragalih 1, Cangkuang',
    },
    {
      id: 2,
      startYear: 2017,
      endYear: 2020,
      type: 'Junior High School',
      name: 'SMPN 1 Cangkuang',
    },
    {
      id: 3,
      startYear: 2020,
      endYear: 2023,
      type: 'Vocational High School',
      name: 'SMK Yadika Soreang',
      major: 'Software Engineering',
    },
    {
      id: 4,
      startYear: 2023,
      endYear: 2027,
      type: 'Diploma',
      name: 'Telkom University',
      major: 'Software Engineering and Application',
    },
  ],
  awards: [
    {
      id: 1,
      title: 'Junior Programmer',
      description:
        'Certificate of competition as a Junior Programmer in a test with a professional certification body.',
      images: ['/images/lsp-front.jpg', '/images/lsp-back.jpg'],
    },
    {
      id: 2,
      title: 'Programming Industry Class',
      description: 'Implemented and completed the industrial class program',
      images: ['/images/nusantech-1.jpg', '/images/nusantech-2.jpg'],
    },
  ],
  workExperience: [
    {
      id: 1,
      companyName: 'Nusantara Technology',
      startYear: 2021,
      endYear: 2024,
      location: 'Bandung',
      workType: 'Remote',
      iconPath: '/logo/nusantech.png',
      webCompanyPath: 'https://nusantech.com/id',
      experience: [
        {
          id: 1,
          name: 'QA (Quality Assurance)',
          description:
            'Participate to help being a QA on a website called Nusa LMS. Nusa LMS is an education website for learning about technology',
          projects: [],
          startYear: 'Nov 2021 ',
          endYear: 'May 2022',
        },
        {
          id: 2,
          name: 'Teaching Assistant (Nusa Development Program)',
          description:
            'Monitoring students who participate with the NDP program as A Teaching Assistance, for instance teach students who need additional class and assess students assignments.',
          projects: [],
          startYear: 'Nov 2022',
          endYear: 'Nov 2023',
        },
        {
          id: 3,
          name: 'Back End Developer',
          description:
            'Participate to help being a Back end developer in many projects at local or international level',
          startYear: 'Nov 2022',
          endYear: 'Aug 2024',
          projects: [
            {
              id: 1,
              iconPath: '/logo/ndp.png',
              name: 'NDP (Nusa Development Program)',
              startYear: 'Nov 2022',
              endYear: 'May 2022',
              description:
                'NDP (Nusa Development Program) is a website company for providing information about education. And helping any participant to upgrade skills in programming.',
            },
            {
              id: 2,
              iconPath: '/logo/beyond.png',
              name: 'Beyond Run',
              startYear: 'Nov 2022',
              endYear: 'Jul 2024',
              description:
                'Beyond run is a website for virtual and offline running events. Using NodeJs, ExpressJs  and Typescript to develop the website.',
            },
            {
              id: 3,
              iconPath: '/logo/baton.png',
              name: 'Baton Handover System',
              startYear: 'Aug 2023',
              endYear: 'Jun 2024',
              description:
                'Is a website product for handling resignee to resign from the company and will be recap and made as a PDF report. Using NodeJs, ExpressJs, Typescript to develop the website',
            },
            {
              id: 4,
              iconPath: '/logo/jcm.png',
              name: 'JCM (Joint Creaditing Mechanism)',
              startYear: 'Oct 2023',
              endYear: 'May 2024',
              description:
                'Is a website company for sharing information about cooperation between Indonesia and Japan. JCM is an initiative of the Government of Japan that encourages Japanese private organizations to invest in low-carbon development activities in Indonesia through incentives.',
            },
          ],
        },
      ],
    },
  ],
};

export default dataProfile;
