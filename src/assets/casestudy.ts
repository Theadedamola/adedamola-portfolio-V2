import { CaseStudyTypes } from '../Types/caseTypes'
import thumbnail1 from '@/assets/thumbnail1.png'
import thumbnail2 from '@/assets/thumbnail2.png'
import shieldImage1 from '@/assets/shieldonboard.png'
import shieldImage2 from '@/assets/shielddashboard.png'
import shieldImage3 from '@/assets/shieldsavings.png'
import shieldImage4 from '@/assets/shieldaccount.png'
import shieldImage5 from '@/assets/shieldkyc.png'

import nodefiImage1 from '@/assets/nodefiuserflow.png'
import nodefiImage2 from '@/assets/nodefionboard.png'
import nodefiImage3 from '@/assets/nodefiinbox.png'
import nodefiImage4 from '@/assets/nodefichannels.png'
import nodefiImage5 from '@/assets/nodefiupdate.png'

export const caseStudy: CaseStudyTypes[] = [
  {
    id: 1,
    thumbnail: thumbnail1,
    name: 'Shield: A design solution for a Traditional bank',
    subtext:
      'Shield, a financial service provider, aims to redesign its digital wallet proposition to cater to a diverse range of clients, including Odogwu’s, Gen-A & Z, artisans, and market women. The current challenge lies in simplifying the onboarding process while allowing for seamless upgrading of wallet tiers.',
    process: [
      {
        heading: 'The Problem',
        content:
          'Shield, a financial service provider, aims to redesign its digital wallet proposition to cater to a diverse range of clients, including Odogwu’s, Gen-A & Z, artisans, and market women. The current challenge lies in simplifying the onboarding process while allowing for seamless upgrading of wallet tiers. Additionally, Shield seeks to promote savings among its customers by enabling easy target setting, simplified saving mechanisms, and rewarding saving behaviors. Furthermore, the organization aims to a...',
      },
      {
        heading: 'Goals',
        content:
          'Simplify Onboarding: Design an intuitive and user-friendly onboarding process that caters to a wide range of clients, from Odogwu’s to Gen-A & Z, artisans, and market women. Ensure that the onboarding process is straightforward, seamless, and accessible to all demographics. Flexible Wallet Tiers: Create a digital wallet proposition that allows for easy upgrading of wallet tiers. Implement a system that enables users to upgrade their wallet tiers on the go, based on their financial needs and preferences. Promote Savings: Develop features within the digital wallet that encourage savings behavior among customers. Enable users to set savings targets easily, implement simplified saving mechanisms, and reward customers for reaching their savings goals. Profile Reactivation: Address the issue of profile inactivity by designing a system that allows customers to reactivate their profiles effortlessly. Ensure that customers can resume using their digital wallets without any hassle if their profiles become inactive. Enhance User Experience: Overall, the project aims to enhance the user experience of Shields digital wallet proposition. This includes improving usability, accessibility, and functionality to ensure a positive and engaging experience for all users across different demographics.',
      },
      {
        heading: 'Role',
        content:
          'I was the sole designer for this project, from research to execution.',
      },
    ],
    solution: [
      {
        heading: 'ONBOARDING',
        content:
          'Designed a simple onboarding where users can simply open an account with their phone number and create a six-digit password, verify their phone number to ensure security. An existing user but just opening the app on a new device will need to provide their phone number and password while already opened account on the same device will just need their 6-digit password or their biometrics.',
        image: shieldImage1,
      },
      {
        heading: 'Dashboard',
        content:
          'The dashboard allows user to see the available balance in their wallet, and also use other features such as, receive and send money, pay bills, buy airtime and data subscription and fund betting accounts. It also has a banner that prompts users to create a savings plan, see their recent transactions and navigate to other sections of the app.',
        image: shieldImage2,
      },
      {
        heading: 'Savings',
        content:
          'The savings feature allows users to set targets for their savings, and also track their progress towards achieving these targets. Users can also set up automatic savings plans, and the app will save a percentage of their wallet balance into a savings account every month. The app also rewards users for saving by giving them badges and other rewards.',
        image: shieldImage3,
      },
      {
        heading: 'History & Account',
        content:
          'A list of transactions performed on your account, it is listed by date and can also be filtered. On your account you can see your profile, change your password and transaction pin, complete your KYC process to upgrade your account tier, reactivate your account and log out from the app. You can also enable biometrics like facial recognition or thumbprint to make easy log in.',
        image: shieldImage4,
      },
      {
        heading: 'KYC',
        content:
          'The KYC feature allows users to upload their identity documents, and also track their progress towards achieving these targets. Users can also set up automatic savings plans, and the app will save a percentage of their wallet balance into a savings account every month. The app also rewards users for saving by giving them badges and other rewards.',
        image: shieldImage5,
      },
      {
        heading: 'Conclusion',
        content:
          'The redesign and implementation of Shields digital wallet proposition achieved the goals of simplifying onboarding, enabling flexible wallet tiers, promoting savings behaviors, addressing profile inactivity, and enhancing user experience. This comprehensive approach has led to increased customer satisfaction, engagement, and retention, showcasing Shields commitment to innovative and customer-centric financial services.',
      },
      {
        heading: 'Next step',
        content:
          'More Usability studies to be carried out and more features to be implemented such as the virtual card feature.',
      },
    ],
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    name: 'Nodefi: A design solution for a Fintech',
    subtext:
      'Opt-in notification for dApps is a decentralized notification protocol that enables users to receive notifications for on-chain or off-chain activities and can tie them to their gmail or discord.',
    process: [
      {
        heading: 'The Problem',
        content:
          'Opt-in notification for dApps is a decentralized notification protocol that enables users to receive notifications for on-chain or off-chain activities and can tie them to their gmail or discord.',
      },
      {
        heading: 'Goals',
        content:
          'To help users in web3 get notifications without entering their wallets itself and also to help user keep track of how their assets are doing in the market by sending direct notification of price pump or liquidity etc. directly to their email or telegram.',
      },
    ],
    solution: [
      {
        heading: 'Userflow',
        content:
          'A flow representing the user movement from connecting wallet to seeing notifications',
        image: nodefiImage1,
      },
      {
        heading: 'Onboarding',
        content:
          'Choose your preferred method to connect your wallet and get started. Scan QR code to from your wallet app for seamless linking',
        image: nodefiImage2,
      },
      {
        heading: 'Inbox',
        content:
          'The inbox for messages from subscribed channels. The channels screen for seeing subscribed channels and can also subscribed to new channels.',
        image: nodefiImage3,
      },
      {
        heading: 'Channels',
        content:
          'Using Quickstep for example, modal to choose what to get notified for and which app linked to get the notification. Updated channel to show subscribed channels and notification pop up to check inbox.',
        image: nodefiImage4,
      },
      {
        heading: 'Inbox Update',
        content: 'Updated inbox and gmail notification interface.',
        image: nodefiImage5,
      },
      {
        heading: 'Conclusion',
        content:
          'The redesign and implementation of Shields digital wallet proposition achieved the goals of simplifying onboarding, enabling flexible wallet tiers, promoting savings behaviors, addressing profile inactivity, and enhancing user experience. This comprehensive approach has led to increased customer satisfaction, engagement, and retention, showcasing Shields commitment to innovative and customer-centric financial services.',
      },
      {
        heading: 'Next step',
        content:
          'More Usability studies to be carried out and more features to be implemented such as the virtual card feature.',
      },
    ],
  },
]
