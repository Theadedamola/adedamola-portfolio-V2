import { CaseStudyTypes } from '../Types/caseTypes'

import walletwiseThumbnail from '@/assets/walletwise/walletwise-thumbnail.png'
import walletwise1 from '@/assets/walletwise/walletwise-1.png'
import walletwise2 from '@/assets/walletwise/walletwise-2.png'
import walletwise3 from '@/assets/walletwise/walletwise-3.png'
import walletwise4 from '@/assets/walletwise/walletwise-4.png'
import walletwise5 from '@/assets/walletwise/walletwise-5.png'

import referaproThumbnail from '@/assets/referapro/referapro-thumbnail.png'
import referapro1 from '@/assets/referapro/referapro-1.png'
import referapro2 from '@/assets/referapro/referapro-2.png'
import referapro3 from '@/assets/referapro/referapro-3.png'
import referapro4 from '@/assets/referapro/referapro-4.png'
import referapro5 from '@/assets/referapro/referapro-5.png'
import referapro6 from '@/assets/referapro/referapro-6.png'
import referapro7 from '@/assets/referapro/referapro-7.png'
import referapro8 from '@/assets/referapro/referapro-8.png'

import bigMerchantThumb from '@/assets/bigMerchant/bigMerchant-thumbnail.png'
import bigMerchant1 from '@/assets/bigMerchant/bigMerchant-1.png'
import bigMerchant2 from '@/assets/bigMerchant/bigMerchant-2.png'
import bigMerchant3 from '@/assets/bigMerchant/bigMerchant-3.png'
import bigMerchant4 from '@/assets/bigMerchant/bigMerchant-4.png'
import bigMerchant5 from '@/assets/bigMerchant/bigMerchant-5.png'

import vendorizeThumb from '@/assets/vendorize/thumbnail.png'
import vendorize1 from '@/assets/vendorize/home.png'
import vendorize2 from '@/assets/vendorize/bookVendor.png'
import vendorize3 from '@/assets/vendorize/payment.png'
import vendorize4 from '@/assets/vendorize/vendorDashboard.png'
import vendorize5 from '@/assets/vendorize/submit-review.png'
import vendorize6 from '@/assets/vendorize/vendorComment.png'

export const caseStudy: CaseStudyTypes[] = [
  {
    id: 1,
    thumbnail: vendorizeThumb,
    name: 'Vendorize: An e-commerce for vendors',
    subtext:
      'Vendorize is a mobile marketplace connecting event organizers with service vendors (caterers, photographers, etc.). The app streamlines vendor discovery, booking, payment, and post-event feedback—serving two distinct user types with tailored workflows.',
    process: [
      {
        heading: 'The Problem',
        content:
          'Event organizers and vendors currently face a fragmented, inefficient experience organizers struggle to discover and book reliable vendors, while vendors waste time managing inquiries across multiple channels without a centralized system for availability and payments.',
      },
      {
        heading: 'Goals',
        content: `Create distinct yet intuitive interfaces for both user types.

Streamline vendor discovery with smart filtering.

Simplify the booking and confirmation process.

Enable seamless payment integration.

Facilitate transparent post-event reviews.`,
      },
      {
        heading: 'Role',
        content:
          'I was the sole designer for this project, from research to execution.',
      },
    ],
    solution: [
      {
        heading: 'Organizer (Vendor Search)',
        content: `
Layout:
Home Screen: Search bar (prominent), category chips (horizontal scroll), vendor cards (image + rating/price).
Filters Screen: Modal overlay with collapsible sections (category, price, availability).
Vendor Profile: Tabbed view (About/Reviews/FAQ), sticky "Book Now" CTA.

Usability:
- Prioritized discoverability with bold search and visual categories
- Filters reduce overwhelm by letting users refine before scrolling
- Profile tabs segment dense info (reviews vs. pricing) to avoid clutter

User Flow: Home → Search → Filters → Profile → (Exit or Book)`,
        image: vendorize1,
      },
      {
        heading: 'Book Vendor',
        content: `
Layout:
- Form: Minimal fields (date picker, dropdowns)
- Summary Screen: Card-like recap with edit links next to each field

Usability:
- Editability in the summary prevents backtracking

User Flow: Profile → Booking Form → Summary → Payment`,
        image: vendorize2,
      },
      {
        heading: 'Payment',
        content: `
Layout:
- Payment Screen: Card form with auto-formatting (e.g., "1234 → 1234 5678")
- Confirmation Screen: Large checkmark, receipt PDF option, "Message Vendor" CTA
- Tracking Screen: Timeline (Pending → Confirmed) with vendor contact button

Usability:
- Default saved cards speed up repeat bookings
- Post-payment CTAs guide next steps (Tracking or browse more)
- Timeline reduces anxiety by visualizing next steps

User Flow: Payment → Confirmation → Tracking/Home`,
        image: vendorize3,
      },
      {
        heading: 'Vendor Dashboard',
        content: `
Layout:
- Calendar View: Month view with color-coded slots (green = available)
- Date Overview: Shows booked dates and blocked dates
- Availability Editor: Options to block single days or recurring weekly slots

Usability:
- Visual calendar mimics familiar paper planners
- Bulk editing saves time for recurring schedules

User Flow: Availability → Calendar → Edit → Save`,
        image: vendorize4,
      },
      {
        heading: 'Service Confirmation',
        content: `
Layout:
- Organizer Review: Star rating + photo upload + feedback
- Vendor Response: Public reply field beneath organizer's review

Usability:
- Photo uploads build trust through service verification
- Two-sided review system encourages professionalism

User Flow: Post-event notification → Review → (Vendor reply)`,
        image: vendorize5,
      },
      {
        heading: '',
        content: ``,
        image: vendorize6,
      },
      {
        heading: 'Conclusion',
        content:
          'The Vendorize project successfully transformed a fragmented event planning process into a streamlined, user-centric marketplace. By addressing core pain points through tailored interfaces for organizers and vendors, the design delivers: Efficiency through smart search filters and booking automation, Trust via transparent reviews and secure payments, Control with real-time availability management. This solution demonstrates how thoughtful UX/UI design can create value for both sides of a marketplace—proving that complex, multi-user platforms can remain intuitive and actionable. The project highlights the importance of balancing distinct user needs while maintaining system-wide cohesion—a principle applicable to any service-driven product.',
      },
    ],
  },
  {
    id: 2,
    thumbnail: walletwiseThumbnail,
    name: 'Walletwise: Fintech App',
    subtext:
      'Walletwise is designed to streamline and simplify daily financial tasks, providing users with a unified platform to handle transfers, bill payments, purchases, and more.',
    process: [
      {
        heading: 'The Problem',
        content:
          'Managing daily financial transactions can be complex and time-consuming, especially when dealing with multiple types of payments, transfers, and bills. Many users face difficulties juggling multiple apps or payment methods, which can lead to missed payments, account confusion, or extra fees. Additionally, staying on top of essential bills like electricity, airtime, data, and subscriptions requires organisation and convenience that traditional banking apps often lack. Users need a streamlined, all-in-one solution that simplifies transactions and provides an intuitive experience for managing finances without added stress or unnecessary complexity.',
      },
      {
        heading: 'Goals',
        content: `Unified Transaction Management: Create a mobile app that allows users to complete essential financial tasks—such as transfers, deposits, and withdrawals—within one convenient platform, eliminating the need for multiple apps.

Comprehensive Bill Payment Solution: Offer users the ability to pay for various services, including electricity, data, airtime, cable, and flight bookings, in one place to save time and ensure nothing is overlooked.

User-Friendly Interface: Design a straightforward, intuitive interface that makes completing transactions fast and error-free, catering to users of all experience levels.

Secure Payment Processing: Ensure all transactions are secure, with robust measures to protect users' data and funds, building trust and encouraging consistent app use.

Versatile and Accessible Options: Include support for diverse payment methods and transaction types, such as gift card purchases and cable subscriptions, to meet users' everyday financial needs comprehensively.`,
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
          'The onboarding process for Walletwise is crafted to be engaging and secure, guiding users smoothly into the app’s functionality. It begins with a quick Splash Screen featuring the Walletwise logo, followed by a series of Product Description screens that introduce key features like bill payments, transfers, and bookings, highlighting the convenience of an all-in-one financial platform. Next, users are directed to the Sign-Up Screen to create an account, after which they proceed to Verify Email, adding an essential layer of security. They then Set a Secret PIN, ensuring that their transactions are secure and private. To personalize the experience, users can choose from a selection of Customized Avatars and create a Unique Name Tag that will identify them during transactions. This onboarding flow ensures a seamless, secure setup that lets users make Walletwise their own from the start.',
        image: walletwise1,
      },
      {
        heading: 'Dashboard',
        content:
          'The Dashboard in Walletwise provides users with an at-a-glance view of their Account Balance, giving them immediate insight into their available funds. It also includes Quick Action Buttons for frequently used services, allowing users to access essential transactions—such as transfers, bill payments, and deposits—with a single tap, saving time and enhancing ease of use. In the Services section, users can explore a comprehensive list of all available services, including Airtime, Data, Cable, Electricity, Flights, Gift Cards, and more. This organized view ensures that users can find and initiate any transaction they need quickly and efficiently, all from one central hub. Together, the dashboard and services section simplify financial management, making Walletwise a reliable and convenient tool for daily transactions.',
        image: walletwise2,
      },
      {
        heading: 'Send Money',
        content:
          'The Send Money feature in Walletwise offers flexible options for transferring funds, catering to both traditional banking needs and peer-to-peer app transactions. Users can send money to external accounts, including traditional banks and other financial platforms, ensuring compatibility with a wide range of financial institutions. Additionally, for users within the Walletwise app, transfers are simplified with the use of Unique User Tags, allowing instant and secure transfers to other app users. This dual functionality makes sending money versatile, fast, and convenient, enhancing the app’s value as a comprehensive financial tool.',
        image: walletwise3,
      },
      {
        heading: 'Services & Bills',
        content:
          'Dedicated interfaces for each specific service, ensuring a streamlined and tailored experience. Each screen—whether for Airtime, Data, Cable, Electricity, Flight Bookings, or Gift Cards is organised to display relevant options and payment details, making it easy for users to complete transactions quickly. For bills, users can select their service provider, view pricing options, and enter account details or reference numbers, ensuring accuracy in every payment. These screens simplify complex bill payments and service transactions by offering intuitive layouts that guide users step-by-step, reinforcing Walletwise as a user-friendly solution for all essential financial tasks.',
        image: walletwise4,
      },
      {
        heading: 'Profile, History & Notifications',
        content:
          'The Profile screen in Walletwise allows users to view and update their personal information, manage account settings, and customize their experience, such as adjusting security preferences and changing their unique user tag. The Transaction History screen provides a detailed list of all transactions completed by the user, with each entry displaying the transaction type, amount, and date. Users can click on any transaction to view additional details, including recipient information, payment method, and status, offering complete transparency and record-keeping for financial activities. The Notification screen keeps users informed with a list of real-time updates and alerts, such as transaction confirmations, promotional offers, and security notices. This section helps users stay up-to-date on their account activity and any important changes, supporting a secure and engaging app experience.',
        image: walletwise5,
      },
      {
        heading: 'Conclusion',
        content:
          'Walletwise is designed to streamline and simplify daily financial tasks, providing users with a unified platform to handle transfers, bill payments, purchases, and more. By integrating essential services from utility bills to airtime and flight bookings the app reduces the need for multiple platforms, enhancing convenience and efficiency. With secure features like peer-to-peer transfers using unique user tags, customisable profiles, and real-time notifications, Walletwise creates a personalised and secure environment that empowers users to manage their finances confidently. As Walletwise prepares to launch, it aims to become an indispensable tool for effortless, all-in-one financial management, meeting the diverse needs of today’s mobile users.',
      },
    ],
  },
  {
    id: 3,
    thumbnail: referaproThumbnail,
    name: 'ReferAPro',
    subtext:
      'This project aims to simplify referral management, increase visibility, and build stronger client relationships by providing professionals with a platform that showcases both their skills and their trusted network.',
    process: [
      {
        heading: 'The Problem',
        content:
          'For professionals and freelancers, reputation and trust are essential in building strong networks and securing reliable work. However, many professionals struggle to manage and share their network of trusted referrals effectively, often relying on outdated methods like word-of-mouth or scattered contact lists. This can lead to missed opportunities, as clients seeking services often have difficulty finding the right professionals or workers they can rely on through referrals. Without a central platform for showcasing skills, experience, and trusted connections, it can be challenging for professionals to highlight the value they bring and easily refer clients to trusted colleagues.',
      },
      {
        heading: 'Goals',
        content: `Create a Professional Hub: Develop a web app that provides professionals with a personalised, shareable landing page where they can present their skills, experience, education, and contact information in an organised and visually appealing way.

Centralised Referral Management: Enable users to build and maintain a trusted referral list of other professionals, workers, or artisans, allowing them to organise their network in one convenient place.

Efficient Referral Sharing: Allow users to share their entire referral list with clients or send specific profiles of trusted workers to clients as individual referrals, making it easier to recommend reliable professionals.

Enhanced Client Confidence: Build features that let professionals easily showcase their network of trusted referrals to clients, helping build credibility and making clients feel confident in choosing the referred professionals.

Network Growth and Collaboration: Provide professionals with tools to connect with others, share referrals, and expand their network, fostering collaboration and professional growth.`,
      },
    ],
    solution: [
      {
        heading: 'Onboarding',
        content:
          'The onboarding process for Refer A Pro is designed to be straightforward and efficient, ensuring users can quickly get started. It begins with simple log-in and sign-up options to streamline access. After signing up, users are prompted to choose their Account Type, selecting either Professional or Individual. This selection customizes the experience based on the user’s needs: Professionals can set up their profile, showcase their skills, and build a referral network, while Individuals can browse referrals and connect with trusted professionals. This onboarding flow sets the foundation for a tailored experience, allowing users to make the most of Refer A Pro from the start.',
        image: referapro8,
      },
      {
        heading: 'Dashboard',
        content:
          'The dashboard in Refer A Pro provides users with a clear overview of their professional network and activity. It displays Analytics on referrals, profile views, partnerships, and reviews, giving users a comprehensive understanding of their profile’s impact and engagement. A monthly activity Chart visualizes growth and trends, helping users track their professional outreach over time. Users can also preview their profile, including a shareable link for easy distribution to clients and colleagues. Additionally, the dashboard provides a snapshot of the user’s Partners List and client or partner Reviews, offering a quick reference to their trusted network and the feedback they’ve received. This dashboard setup is designed to support user growth, engagement, and credibility in an intuitive, data-driven format.',
        image: referapro7,
      },
      {
        heading: 'Referrals',
        content:
          'The Referrals section provides a  list of all referrals, clearly divided into Received and Sent categories. Each referral entry includes the name of the Partner or Client, along with the Status of the referral (e.g., pending, connected) for quick tracking. A Send Referral button opens a modal, allowing users to easily recommend trusted professionals to clients or partners. This streamlined referral management helps users maintain and grow their network effectively, ensuring easy access to trusted connections.',
        image: referapro6,
      },
      {
        heading: 'Partners',
        content:
          'The Partners section showcases a complete list of professionals within the user’s trusted network. To make navigation easier, users can filter partners by Location or Profession, helping them quickly find relevant contacts based on client needs. Each partner entry has a Send Referral button, allowing users to instantly share a partner’s profile with clients as a referral. Users can also expand their network by adding new partners, building a strong, diverse list of professionals they trust. This section fosters quick, reliable referrals and ensures that users have an organized, accessible network of colleagues across various fields and locations.',
        image: referapro5,
      },
      {
        heading: 'Messages',
        content:
          'The Messages section offers a straightforward in-app chat feature, enabling seamless communication between users, their partners, and clients. This chat function allows users to discuss referrals, provide updates, and coordinate services directly within the platform, eliminating the need to switch to external messaging tools. With clear, organised conversations, users can maintain professional interactions, respond to inquiries quickly, and build stronger relationships with their network, all from a single, centralised app.',
        image: referapro4,
      },
      {
        heading: 'Reviews',
        content:
          'The Reviews section provides a comprehensive list of both received and sent reviews, enabling users to manage and view feedback across their network. Each review entry includes the name and profession of the partner, giving context to the endorsement and helping build trust with potential clients. Additionally, a Like or Endorsement Count shows the number of people who have endorsed or reacted positively to each review, enhancing credibility and visibility for well-regarded professionals. This feature allows users to showcase positive feedback and endorsements, strengthening their professional reputation and trustworthiness within their network.',
        image: referapro3,
      },
      {
        heading: 'Profile settings and setup',
        content:
          'The Profile Settings section enables users to manage their account details, offering options to update display information, adjust account settings, manage security preferences (such as password updates), and handle subscription details. This area ensures users have full control over their account and privacy. In Profile Setup, users can build and personalise their professional profile by adding essential information, including Experience, Education, Certifications, and Personal Details. This setup allows users to present a complete and professional profile that highlights their qualifications and expertise, making it easier for clients and partners to assess their skills and reliability. Together, these sections provide users with a robust platform for managing both their account and their professional presentation.',
        image: referapro2,
      },
      {
        heading: 'Customised Landing page',
        content:
          'The Customised Professional Landing Page serves as a personalised digital portfolio where users can showcase their professional profile in an engaging, shareable format. This page includes sections for Personal Details, Education, Certifications, and Experience, providing a comprehensive view of the user’s qualifications. It also displays a curated list of Trusted Partners and Reviews, enhancing credibility by highlighting endorsements from other professionals and clients. This landing page is designed to be easily shareable, giving users a professional edge by presenting their expertise and network in a polished, accessible format for potential clients and connections.',
        image: referapro1,
      },
      {
        heading: 'Conclusion',
        content:
          'Refer A Pro aims to revolutionize professional networking by providing a platform for trusted referrals, personal branding, and efficient client connections. With tools to showcase skills, manage referrals, and build credibility, the app supports professionals in expanding and nurturing their network.',
      },
      {
        heading: 'Next step',
        content:
          'As development progresses, the next steps will focus on refining core features, enhancing user experience, and integrating feedback from early testers. Launch preparations are underway, and Refer A Pro will be available on the market soon, offering professionals a powerful new way to grow and strengthen their business relationships.',
      },
    ],
  },
  {
    id: 4,
    thumbnail: bigMerchantThumb,
    name: 'BigMerchant: Sales App',
    subtext:
      'BigMerchant is a powerful sales and inventory management app designed to help businesses streamline operations by tracking sales, managing inventory, and handling invoicing all in one place.',
    process: [
      {
        heading: 'The Problem',
        content:
          'Small and medium businesses often struggle to keep track of their inventory, sales, and staff efficiently. Managing these vital operations often involves juggling multiple tools, which can be time-consuming and prone to error. Without a streamlined way to create invoices, print receipts, track inventory changes, or add new products and categories, business owners and their teams risk inefficiency, inaccuracies, and missed opportunities. To stay competitive and serve customers well, businesses need a reliable, all-in-one tool that simplifies day-to-day tasks. They need a way to monitor sales trends, understand inventory flow, and quickly respond to low stock or increased demand. However, many of these business owners are too busy to learn complex systems or manage multiple apps, so simplicity and ease of use are crucial.',
      },
      {
        heading: 'Goals',
        content: `Centralized Sales and Inventory Management: Develop a user-friendly app that provides businesses with a single platform to track sales, manage inventory, and oversee their workforce.

Multiple Business Management: Allow users to add multiple businesses under one account, making it simple for them to switch between different ventures without logging in and out or using multiple applications.

Efficient Product and Category Management: Enable users to easily add or remove products and organize them into categories to streamline inventory management.

Invoicing and Receipt Printing: Simplify the process of creating invoices and printing receipts, making it quick and hassle-free to process transactions, improve customer experience, and maintain professional standards.

Real-Time Updates and Insights: Provide up-to-date information on inventory levels, sales statistics, and worker activity, helping businesses make informed decisions on the go.`,
      },
    ],
    solution: [
      {
        heading: 'Onboarding',
        content:
          'The onboarding flow begins with a brief splash screen followed by three product introduction screens that highlight the app’s key features: inventory management, sales tracking, and invoicing. Users then proceed to either log in or sign up, with a quick, simple sign-up process for new users. New users are guided through creating their first business, while returning users with multiple businesses can easily select which one to access. This flow is designed to be fast and engaging, ensuring that users, whether new or returning, can start managing their businesses with minimal friction.',
        image: bigMerchant5,
      },
      {
        heading: 'Dashboard',
        content:
          'The dashboard provides a comprehensive overview for users to manage their business at a glance. Key metrics, like Money In, Total Sales, Pending Deliveries, and Outstanding Payments, are displayed prominently to give users instant insight into financial performance and current operations. Below these metrics, users see a list of Top Products and Recent Orders, offering a snapshot of popular inventory items and the latest customer activity. Additionally, a dropdown panel at the top of the dashboard allows users with multiple businesses to seamlessly switch between them, making it easy to manage and monitor each one without navigating away. This layout is designed to support quick decision-making and streamlined multi-business management.',
        image: bigMerchant4,
      },
      {
        heading: 'Inventory',
        content:
          'The inventory section offers a structured approach to manage both Products and Collections. Users can toggle between the two views, making it simple to focus on individual items or grouped collections as needed. The interface allows users to easily add new products or collections, maintaining an up-to-date inventory. A full list of all products and collections is displayed for quick reference, with a search input at the top to help users locate specific items efficiently. Additionally, users can delete products directly from this view, giving them full control over inventory management and ensuring they can keep their product lineup organized and current.',
        image: bigMerchant3,
      },
      {
        heading: 'Invoice',
        content:
          'The invoice section provides users with a clear breakdown of Outstanding and Cancelled invoices, helping them track and manage billing status at a glance. Users can access full order details, including items purchased, payment information, customer contact details, and specific order notes, ensuring all necessary information is readily available. For added convenience, users can print or download invoices directly from this section. Additionally, an invoice preview feature allows users to review the document’s layout and information before taking any action, promoting accuracy and professionalism in every transaction.',
        image: bigMerchant2,
      },
      {
        heading: 'Customer',
        content:
          'The customer section provides a centralized view of all customers, featuring a searchable list to help users find specific clients quickly. Users can add new customers to build and maintain their customer database efficiently. Each customer profile includes a detailed view, showing a Summary of activity, Personal Details (such as contact information), and a list of past Orders. This setup enables users to easily access customer history and insights, fostering stronger customer relationships and better service through accessible, organized information.',
        image: bigMerchant1,
      },
      {
        heading: 'Conclusion',
        content:
          'This sales app is designed to streamline business operations by consolidating essential functions like inventory tracking, sales monitoring, and customer management into one intuitive platform. With features for multi-business management, detailed invoicing, and customer tracking, the app aims to simplify complex processes and provide businesses with the tools they need to operate efficiently.',
      },
      {
        heading: 'Next step',
        content:
          'As the project is still in development, the next steps will focus on testing and refining core functionalities based on user feedback. This includes enhancing the user experience through additional features like advanced analytics, automated reminders for outstanding payments, and customization options for invoices. Moving forward, we’ll also explore potential integrations with popular accounting and e-commerce platforms to provide a more seamless experience for users.',
      },
    ],
  },
]
