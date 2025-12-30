import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CMU ECE/CS Guide',
  description: 'A student-written guide to ECE and CS courses at Carnegie Mellon University',

  // Use root directory as source
  srcDir: '.',

  // Exclude non-documentation files
  srcExclude: ['CONTRIBUTING', 'PULL_REQUEST_TEMPLATE', 'README.md', 'node_modules/**'],

  // Clean URLs without .html extension
  cleanUrls: true,

  // Base URL for GitHub Pages
  base: '/CMU-ECE-CS-Guide/',

  // Last updated timestamps
  lastUpdated: true,

  // Ignore dead links in existing content (some relative links in markdown files are malformed)
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#c41230' }],
  ],

  themeConfig: {
    // Site title
    siteTitle: 'CMU ECE/CS Guide',

    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CS Core', link: '/cs_core/' },
      { text: 'ECE Core', link: '/ece_core/' },
      { text: 'Math/Science', link: '/math_science_reqs/' },
      { text: 'Electives', link: '/electives/' },
      { text: 'Contributing', link: '/contributing' }
    ],

    // Sidebar configuration
    sidebar: {
      '/cs_core/': [
        {
          text: 'CS Core Courses',
          items: [
            { text: '15-122: Principles of Imperative Computation', link: '/cs_core/15122' },
            { text: '15-150: Principles of Functional Programming', link: '/cs_core/15150' },
            { text: '15-210: Parallel and Sequential Data Structures', link: '/cs_core/15210' },
            { text: '15-251: Great Ideas in Theoretical CS', link: '/cs_core/15251' },
            { text: '15-451: Algorithm Design and Analysis', link: '/cs_core/15451' }
          ]
        }
      ],
      '/ece_core/': [
        {
          text: 'ECE Core Courses',
          items: [
            { text: '18-100: Introduction to ECE', link: '/ece_core/18100' },
            { text: '18-213: Introduction to Computer Systems', link: '/ece_core/18213' },
            { text: '18-220: Electronic Devices and Analog Circuits', link: '/ece_core/18220' },
            { text: '18-240: Structure and Design of Digital Systems', link: '/ece_core/18240' },
            { text: '18-290: Signals and Systems', link: '/ece_core/18290' },
            { text: '18-500: ECE Design Experience', link: '/ece_core/18500' }
          ]
        }
      ],
      '/math_science_reqs/': [
        {
          text: 'Math & Science Requirements',
          items: [
            { text: '18-202: Math Foundations of EE', link: '/math_science_reqs/18202' },
            { text: '21-127: Concepts of Mathematics', link: '/math_science_reqs/21127' },
            { text: '21-241: Matrix Algebra', link: '/math_science_reqs/21241' },
            { text: '21-254: Linear Algebra and Vector Calculus', link: '/math_science_reqs/21254' },
            { text: '21-259: Calculus in Three Dimensions', link: '/math_science_reqs/21259' },
            { text: '21-260: Differential Equations', link: '/math_science_reqs/21260' },
            { text: '36-219: Probability Theory and Random Processes', link: '/math_science_reqs/36219' },
            { text: '36-225: Introduction to Probability Theory', link: '/math_science_reqs/36225' }
          ]
        }
      ],
      '/electives/': [
        {
          text: 'Machine Learning',
          collapsed: false,
          items: [
            { text: '10-601: Introduction to Machine Learning', link: '/electives/10601' },
            { text: '10-605: ML with Large Datasets', link: '/electives/10605' },
            { text: '10-701: Introduction to ML (PhD)', link: '/electives/10701' },
            { text: '11-785: Introduction to Deep Learning', link: '/electives/11785' },
            { text: '18-661: Intro to ML for Engineers', link: '/electives/18661' },
            { text: '18-785: Data Inference and Applied ML', link: '/electives/18785' }
          ]
        },
        {
          text: 'Systems',
          collapsed: true,
          items: [
            { text: '15-410: Operating Systems', link: '/electives/15410' },
            { text: '15-418: Parallel Computer Architecture', link: '/electives/15418' },
            { text: '15-440: Distributed Systems', link: '/electives/15440' },
            { text: '15-445: Database Systems', link: '/electives/15445' },
            { text: '18-344: Computer Systems & HW-SW Interface', link: '/electives/18344' },
            { text: '18-540: Rapid Prototyping of Computer Systems', link: '/electives/18540' },
            { text: '18-740: Modern Computer Architecture', link: '/electives/18740' },
            { text: '18-741: Computer Networks', link: '/electives/18741' },
            { text: '18-742: Computer Architecture and Systems', link: '/electives/18742' },
            { text: '18-746: Storage Systems', link: '/electives/18746' },
            { text: '18-749: Building Reliable Distributed Systems', link: '/electives/18749' },
            { text: '18-763: Systems and Toolchains for AI', link: '/electives/18763' },
            { text: '18-843: Mobile and Pervasive Computing', link: '/electives/18843' },
            { text: '18-847: Data Center Computing', link: '/electives/18847' },
            { text: '18-847F: Cloud and ML Infrastructure', link: '/electives/18847F' }
          ]
        },
        {
          text: 'Computer Vision & Graphics',
          collapsed: true,
          items: [
            { text: '15-462: Computer Graphics', link: '/electives/15462' },
            { text: '16-385: Computer Vision', link: '/electives/16385' },
            { text: '16-720: Computer Vision (Grad)', link: '/electives/16720' },
            { text: '18-793: Image and Video Processing', link: '/electives/18793' },
            { text: '18-794: Pattern Recognition Theory', link: '/electives/18794' }
          ]
        },
        {
          text: 'Robotics',
          collapsed: true,
          items: [
            { text: '16-311: Introduction to Robotics', link: '/electives/16311' },
            { text: '16-384: Robot Kinematics and Dynamics', link: '/electives/16384' },
            { text: '16-664: Self Driving Cars', link: '/electives/16664' },
            { text: '16-745: Optimal Control and RL', link: '/electives/16745' },
            { text: '16-833: Robot Localization and Mapping', link: '/electives/16833' },
            { text: '18-578: Mechatronic Design', link: '/electives/18578' },
            { text: '24-784: Trustworthy Intelligent Autonomy', link: '/electives/24784' }
          ]
        },
        {
          text: 'Hardware & Circuits',
          collapsed: true,
          items: [
            { text: '18-300: Fundamentals of Electromagnetics', link: '/electives/18300' },
            { text: '18-310: Semiconductor Devices', link: '/electives/18310' },
            { text: '18-320: Microelectronic Circuits', link: '/electives/18320' },
            { text: '18-341: Logic Design and Verification', link: '/electives/18341' },
            { text: '18-447: Introduction to Computer Architecture', link: '/electives/18447' },
            { text: '18-623: Analog Integrated Circuit Design', link: '/electives/18623' },
            { text: '18-624: Open-Source FPGA and ASIC Design', link: '/electives/18624' },
            { text: '18-640: HW Arithmetic for ML', link: '/electives/18640' },
            { text: '18-721: Advanced Analog IC Design', link: '/electives/18721' },
            { text: '18-723: RF IC Design', link: '/electives/18723' },
            { text: '18-729: Board-Level RF Systems for IoT', link: '/electives/18729' },
            { text: '18-865: Power Electronics', link: '/electives/18865' }
          ]
        },
        {
          text: 'Security',
          collapsed: true,
          items: [
            { text: '18-330: Introduction to Computer Security', link: '/electives/18330' },
            { text: '18-335: Secure Software Systems', link: '/electives/18335' },
            { text: '18-631: Introduction to Information Security', link: '/electives/18631' }
          ]
        },
        {
          text: 'Software Engineering',
          collapsed: true,
          items: [
            { text: '17-214: Principles of Software Construction', link: '/electives/17214' },
            { text: '17-437: Web Application Development', link: '/electives/17437' },
            { text: '17-480: API Design and Implementation', link: '/electives/17480' },
            { text: '18-652: Foundations of Software Engineering', link: '/electives/18652' },
            { text: '18-656: Functional Programming in Practice', link: '/electives/18656' }
          ]
        },
        {
          text: 'NLP & Language',
          collapsed: true,
          items: [
            { text: '11-411: Natural Language Processing', link: '/electives/11411' },
            { text: '11-642: Search Engines', link: '/electives/11642' },
            { text: '80-180: Nature of Language', link: '/electives/80180' }
          ]
        },
        {
          text: 'Signal Processing',
          collapsed: true,
          items: [
            { text: '11-755: ML and Signal Processing', link: '/electives/11755' },
            { text: '18-491: Digital Signal Processing', link: '/electives/18491' },
            { text: '18-792: Advanced Digital Signal Processing', link: '/electives/18792' },
            { text: '18-898D: Graph Signal Processing', link: '/electives/18898D' }
          ]
        },
        {
          text: 'Networks & Communications',
          collapsed: true,
          items: [
            { text: '18-759: Wireless Networks', link: '/electives/18759' },
            { text: '18-819E: Quantum Communication and Networks', link: '/electives/18819E' }
          ]
        },
        {
          text: 'Control & Embedded',
          collapsed: true,
          items: [
            { text: '15-424: Logical Foundations of Cyber-Physical Systems', link: '/electives/15424' },
            { text: '18-349: Introduction to Embedded Systems', link: '/electives/18349' },
            { text: '18-370: Fundamentals of Control', link: '/electives/18370' },
            { text: '18-747: Low Power Code for IoT', link: '/electives/18747' }
          ]
        },
        {
          text: 'Theory & Math',
          collapsed: true,
          items: [
            { text: '15-455: Undergraduate Complexity Theory', link: '/electives/15455' },
            { text: '18-660: Optimization', link: '/electives/18660' },
            { text: '18-665: Advanced Probability & Statistics', link: '/electives/18665' }
          ]
        },
        {
          text: 'Neuroscience & Bio',
          collapsed: true,
          items: [
            { text: '18-690: Neuroscience for Engineers', link: '/electives/18690' },
            { text: '18-698: Neural Signal Processing', link: '/electives/18698' }
          ]
        },
        {
          text: 'Other',
          collapsed: true,
          items: [
            { text: '18-602: Business Fundamentals', link: '/electives/18602' },
            { text: '18-647: Computational Problem Solving', link: '/electives/18647' },
            { text: '24-104: Intro to Modern Making', link: '/electives/24104' },
            { text: '33-114: Physics of Musical Sound', link: '/electives/33114' },
            { text: '33-120: Science and Science Fiction', link: '/electives/33120' },
            { text: '57-173: Survey of Western Music History', link: '/electives/57173' },
            { text: '80-405: Game Theory', link: '/electives/80405' },
            { text: '82-137: Chinese Calligraphy', link: '/electives/82137' },
            { text: '82-208: Eastern Europe', link: '/electives/82208' },
            { text: '82-279: Anime', link: '/electives/82279' }
          ]
        }
      ]
    },

    // Search configuration (built-in local search)
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CMU-HKN/CMU-ECE-CS-Guide' }
    ],

    // Edit link for contributions
    editLink: {
      pattern: 'https://github.com/CMU-HKN/CMU-ECE-CS-Guide/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    // Footer
    footer: {
      message: 'Written by CMU students, for CMU students.',
      copyright: 'MIT License'
    },

    // Outline configuration
    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  }
})
