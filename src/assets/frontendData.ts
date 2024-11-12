import { FrontendTypes } from '../Types/frontendTypes'
import atwImage from '@/assets/atwImage.png'
import reycasaImage from '@/assets/reycasaImg.png'

export const frontendData: FrontendTypes[] = [
  {
    id: 1,
    thumbnail: atwImage,
    name: 'Along the way: An inclusive dating app',
    subtext:
      'Along the way is an inclusive dating app for people with disabilities and people without disabilities. It is a platform that allows everyone to find love and companionship.',
    website: 'https://alongtheway.app',
    github: '',
    process: [
      {
        heading: 'Project Overview',
        content:
          'AlongTheWay is an online dating platform designed to foster genuine connections among diverse users, including individuals with disabilities. The app provides an inclusive environment, offering accessibility-focused features to ensure all users can engage comfortably. Unique to AlongTheWay, when two people with disabilities match, the app prompts them to attend optional counseling sessions, provided in a physical setting to support personalized interaction and additional guidance. This project placed a high priority on safety, accessibility, and a visually appealing, user-friendly design. My role as a Frontend Engineer and Design Engineer involved leading the design process and developing the frontend, implementing accessibility, security, and usability features tailored to all users.',
      },
      {
        heading: 'Problem statement',
        content:
          'Many dating platforms are not inclusive or accessible enough for individuals with disabilities, often lacking both necessary accessibility accommodations and tailored guidance to support them in forming meaningful connections. Additionally, users on most dating platforms can feel vulnerable due to safety concerns or overwhelmed by poorly designed interfaces. AlongTheWay addresses these gaps by prioritizing a highly accessible and secure design that caters to all users, fostering a safer and more welcoming environment.',
      },
      {
        heading: 'Project Goals',
        content: `Accessible User Experience: Design a user interface that includes screen reader compatibility, color contrast optimization, and easy navigation, ensuring individuals with disabilities can engage with the app comfortably.

Enhanced Safety Features: Implement secure user authentication, profile verification, and privacy-first features to protect user data and ensure safe interactions.

Usable and Aesthetic Design: Create an interface that’s both visually appealing and easy to use, balancing style and functionality to enhance user engagement.

Customized Experience for Users with Disabilities: Introduce unique features for users with disabilities, such as prompt counseling suggestions to support meaningful connections and guidance.

`,
      },
    ],
    solution: [
      {
        heading: 'Research, UI/UX Design, and Accessibility',
        content:
          'The design process for AlongTheWay began with extensive research, including competitive analysis and user interviews with individuals with disabilities, to identify key accessibility needs for a dating platform. This research guided the design of core features such as screen reader compatibility, color contrast options, and keyboard-friendly navigation. The interface was crafted to be both modern and intuitive, with a neutral color palette and clean layouts that allow users to focus on the app’s core functionalities without distractions. Accessibility was prioritized through features like making sure theres enough contrast and ensure screen reader compatibility across the app. The design also incorporated a unique counseling prompt feature for users with disabilities, providing them additional support in the matching process.',
      },
      {
        heading: 'Frontend Development',
        content:
          'The frontend was developed with React and TypeScript, chosen for their efficiency in building reusable components and managing complex interactions. Framer Motion was integrated to add smooth animations that guide users through the interface, enhancing the visual experience without detracting from usability or accessibility. Using a modular component structure, we built accessible and responsive elements such as forms, modals, and cards that handle different user flows seamlessly. The final result is a robust and accessible platform that offers a secure, engaging, and inclusive experience for all users.',
      },
      {
        heading: 'Results',
        content:
          'The app was well-received for its accessibility and ease of use, with positive feedback from users who appreciated its inclusive design. Key metrics from user testing showed increased user satisfaction in navigation, especially among users with disabilities. Security features contributed to high levels of user trust, and the counseling prompt was highlighted as a beneficial tool for users with disabilities seeking meaningful connections.',
      },
      {
        heading: 'Conclusion',
        content:
          'AlongTheWay reflects a commitment to inclusivity, security, and a refined user experience, offering a unique platform where users can build authentic connections comfortably and confidently.',
      },
    ],
  },
  {
    id: 2,
    thumbnail: reycasaImage,
    name: 'Reycasa: A tech agency website',
    subtext:
      'Reycasa is a tech agency specializing in UI/UX design, web development, app development, and IT management etc that helps businesses with their digital needs.',
    website: 'https://reycasatech.com/',
    github: '',
    process: [
      {
        heading: 'Project Overview',
        content:
          'Reycasa is a tech agency specializing in UI/UX design, web development, app development, and IT management. The project goal was to create a website that reflects the agency’s expertise, showcases its portfolio, and provides a seamless way for clients to explore services, learn about the team, and reach out. As the Lead Frontend Engineer and Designer, I managed the design and development of the site, creating an experience that combines professionalism with a clean, modern aesthetic to build credibility and attract potential clients.',
      },
      {
        heading: 'Problem statement',
        content:
          'For tech agencies like Reycasa, establishing a digital presence is crucial for showcasing their capabilities and attracting new clients. However, many agency websites lack clarity, intuitive navigation, or effective ways to highlight specific services and previous work. Additionally, agencies need a structured way to maintain engagement, such as through a blog or portfolio, to demonstrate expertise and success stories. Reycasa’s website needed to clearly present its services, highlight its team’s strengths, and offer a user-friendly interface that communicates professionalism and trustworthiness.',
      },
      {
        heading: 'Project Goals',
        content: `Showcase Expertise and Services: Design clear, engaging pages to present Reycasa’s core services and illustrate their value through an accessible layout.

Engage Users with a Professional Aesthetic: Create a visually appealing, intuitive design that reflects Reycasa’s commitment to quality and positions the agency as a trustworthy partner.

Highlight Team and Portfolio: Build dedicated sections to feature Reycasa’s team members and portfolio, allowing potential clients to connect with the people behind the projects and see past successes.

Encourage Client Interaction: Provide straightforward ways for users to contact the agency, including a contact form, and engage through the blog page with relevant content.`,
      },
    ],
    solution: [
      {
        heading: 'Research, UI/UX Design, and Accessibility',
        content:
          'The design process began with research, including a competitive analysis of other tech agency websites to determine effective layouts and engagement strategies. This informed a structured design plan with a focus on the Landing Page, Services, Portfolio, Our Team, Blog, and Contact Us pages. We aimed for a clean, professional aesthetic with a neutral color scheme and subtle accent colors to highlight calls-to-action (CTAs). The Landing Page was crafted to engage visitors immediately with prominent service highlights and easy navigation to key sections. Across the site, consistent iconography and a cohesive layout reinforce brand identity, while each service and team member has a dedicated card for clarity and ease of access. Each page was designed responsively, accommodating both mobile and desktop devices with optimized layout adjustments and readability.',
      },
      {
        heading: 'Frontend Development and Key Features',
        content:
          'The frontend of Reycasa was built with React and TypeScript for a component-driven, maintainable structure, with Framer Motion added to animate transitions and interactions. This tech stack allowed us to develop modular, reusable components for the service descriptions, team member profiles, and blog previews. The animations provided smooth transitions that visually guide users from one section to another, enhancing engagement without sacrificing load speed. Components like service cards, portfolio showcases, and team bios were designed to be responsive and dynamic, ensuring optimal performance across devices. Each page was crafted with intuitive navigation, from the eye-catching hero section on the Landing Page to the detailed service descriptions on the Services Page and visual project highlights on the Portfolio Page. The Blog page presents industry insights and updates from Reycasa, designed to enhance engagement and SEO performance by encouraging users to explore relevant content. On the Contact Us page, a simple form allows users to quickly reach out, fostering direct communication. To further optimize the site’s functionality, we applied SEO best practices and made use of Framer Motion’s animation capabilities to balance aesthetic appeal with a focus on accessibility and user experience.',
      },
      {
        heading: 'Conclusion',
        content:
          'Reycasa’s website successfully reflects the agency’s professionalism and expertise, offering an accessible and visually engaging experience that appeals to potential clients. With its intuitive navigation, seamless animations, and clear service breakdowns, the site positions Reycasa as a reliable partner in tech solutions. User feedback has been positive, highlighting the clarity of service descriptions, the appeal of the portfolio, and the informative blog section, which fosters engagement and demonstrates industry knowledge. The responsive, accessible design has ensured a smooth experience across devices, while initial SEO optimizations have improved the site’s visibility. Overall, Reycasa’s digital presence now effectively communicates its value, supporting the agency’s growth and client outreach efforts.',
      },
    ],
  },
]
