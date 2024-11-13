export interface ExperienceTypes {
    position: string
    duration: string
    summary: string
    skill: string[]
}
export const ExperienceData: ExperienceTypes[] = [
  {
    position: 'Design Engineer at Reycasa',
    duration: 'July 2024-present',
    summary:
      'Led the design direction of company projects, Design and Building the frontend components of clients project such as alongtheway.app, 3rpharmacare etc.',
    skill: ['React', 'UI/UX Design', 'Typescript'],
  },
  {
    position: 'UI/UX Designer at ReferAPro',
    duration: 'Contract Nov 2023',
    summary:
      'Research, ideated and designed a web app SAAS product that focusses on helping business build connections, add their trusted partners and workers to their profile, share their experiences and professional info on their page, have a personal website to share with their prospective clients',
    skill: ['UI/UX Design'],
  },
  {
    position: 'Product Designer at Freelance',
    duration: '2020-July 2024',
    summary:
      'Worked on various projects, including designing a voting web app, church management platform, sales management mobile app and many more',
    skill: ['Interaction design', 'UI/UX Design', 'User Research'],
  },
]
