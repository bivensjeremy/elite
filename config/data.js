import { GoBriefcase, GoClock, GoCodeOfConduct, GoCommentDiscussion, GoDeviceDesktop, GoDeviceMobile, GoLocation, GoPaperAirplane, GoServer, GoSquirrel, GoThumbsup, GoTools } from "react-icons/go";
import { LuFacebook, LuGlobe, LuInstagram, LuLinkedin, LuSendHorizontal, LuSmartphone } from "react-icons/lu";
import { siteConfig } from "./site";

export const websiteData = {
    branded: { // Consulting Services Template
        hero: {
            backgroundImage: '/hero_branded.jpg',
            title: 'Clarity. Strategy. Results.',
            desc: 'We help businesses solve complex problems, unlock growth, and make confident decisions.',
            buttonText: 'Schedule a Free Consultation'
        },
        about: {
            title: 'About Us',
            aboutData: [
        {
            id: 1,
            title: 'Your Partner In Progress',
            desc: "We're a consulting firm built for modern businesses. Whether you're launching a new initiative, refining operations, or navigating change, we bring strategic insight and hands-on support. Our approach is collaborative, data-informed, and tailored to your goals—so you can move forward with confidence.",
            img: '/image_01_branded.jpg'
        },
        {
            id: 2,
            title: 'Proudly Serving Our Community with Reliable Service',
            desc: `We're a locally rooted service provider committed to delivering high-quality work at fair prices. Whether you're booking a one-time job or ongoing support, we show up on time, treat your space with care, and get the job done right. No project is too big or too small—we serve homes and businesses across the region with professionalism and pride.`,
            img: '/image_02_branded.jpg'
        },
        {
            id: 3,
            title: 'Exterior & Property Care',
            desc: `From storefronts to family homes, we help keep your property looking its best. Our team uses professional-grade equipment and proven techniques to remove dirt, grime, and buildup—restoring curb appeal and protecting your investment. Ideal for restaurants, offices, retail spaces, and residential properties alike.`,
            img: '/image_03_branded.jpg'
        },
        {
            id: 4,
            title: 'Service You Can Count On',
            desc: `We believe great service goes beyond the job itself. Our team is friendly, responsive, and committed to making your experience smooth from start to finish. With a growing base of repeat clients and referrals, we’re proud to be known for both our results and our relationships.`,
            img: '/image_04_branded.jpg'
        }
    ]
        },
        cta: {
            title: "Let's Build Something Smarter",
            desc: "Book a free discovery call and see how we can support your next move.",
            buttonText: 'Start the Conversation'
        },
        why: {
            title: 'Consulting That Moves the Needle',
            image: '/image_10_branded.jpg',
            whyData: [
                'Customized strategies-not cookie-cutter solutions',
                'Deep expertise across industries and functions',
                'Clear deliverables and measurable outcomes',
                'Collaborative, transparent process',
                'Trusted by startups, nonprofits, and enterprise teams'
            ]
        },
        testimonials: {
            title: 'Trusted by Leaders',
            testimonialData: [
                {
                    quote: 'They helped us rethink our entire go-to-market strategy. The clarity and confidence we gained were game-changing.',
                    name: 'Taylor M.',
                    title: 'SaaS Founder'
                },
                {
                    quote: 'Professional, insightful, and easy to work with. They didn’t just advise—they helped us execute.',
                    name: 'Ravi S.',
                    title: 'Operations Director'
                }
            ]
        },
        services: {
            title: 'What We Do',
            desc: 'Our consulting services are designed to meet you where you are—and take you where you want to go.',
            serviceData: [
        {
            id: 'businessstrategy',
            title: 'Business Strategy',
            desc: 'Market analysis, growth planning, and competitive positioning.',
            img: '/image_05_branded.jpg',
            icon: GoBriefcase,
            alt: []
        },
        {
            id: 'operationalconsulting',
            title: 'Operational Consulting',
            desc: 'Streamline workflows, reduce waste, and improve efficiency.',
            img: '/image_06_branded.jpg',
            icon: GoThumbsup,
            alt: ['/image06.jpg', '/image04.jpg', '/image05.jpg', '/hero.jpg']
        },
        {
            id: 'brandandcommunication',
            title: 'Brand & Communication',
            desc: 'Clarify your message and connect with your audience.',
            img: '/image_07_branded.jpg',
            icon: GoCommentDiscussion,
            alt: ['/image07.jpg', '/image08.jpg', '/image09.jpg', '/image10.jpg', '/image11.jpg']
        },
        {
            id: 'systemsandtech',
            title: 'Systems & Tech Advisory',
            desc: 'Evaluate tools, optimize platforms, and align tech with business goals.',
            img: '/image_08_branded.jpg',
            icon: GoServer,
            alt: []
        },
    ]
        }
    },
    unbranded: { //General Services Template 
        hero: {
            backgroundImage: '/hero.jpg',
            title: 'Reliable Service. Local Expertise',
            desc: 'Professional support you can count on-delivered with care, precision, and speed.',
            buttonText: 'Get a Free Quote'
        },
        about: {
            title: 'About Us',
            aboutData: [
        {
            id: 1,
            title: 'Built for Your Peace of Mind',
            desc: "We're a locally rooted service provider committed to making your life easier. Whether you need help around the house, at the office, or online, we bring dependable solutions with a personal touch. Our team is trained, insured, and ready to deliver results you'll feel good about.",
            img: '/image_04.jpg'
        },
        {
            id: 2,
            title: 'Strategic Support for Growing Teams',
            desc: `We partner with businesses and organizations to help them solve problems, scale operations, and make confident decisions. Our consulting services are tailored to your goals—whether you're refining internal systems, launching a new initiative, or navigating change. We serve clients across industries with clarity, care, and measurable impact.`,
            img: '/image_04.jpg'
        },
        {
            id: 3,
            title: 'Operational & Organizational Clarity',
            desc: `From workflows to team structure, we help you build systems that support growth. Our consultants bring deep experience in process design, documentation, and change management—so you can streamline operations and empower your team. Whether you're a startup or an established organization, we meet you where you are and help you move forward.`,
            img: '/image_04.jpg'
        },
        {
            id: 4,
            title: 'Consulting That Builds Trust',
            desc: `We don’t just advise—we collaborate. Our approach is transparent, empathetic, and grounded in real-world experience. Clients return to us because we listen deeply, communicate clearly, and deliver actionable insights. If you're looking for a consulting partner who understands both strategy and execution, you're in the right place.`,
            img: '/image_04.jpg'
        }
    ]
        },
        cta: {
            title: 'Ready to Get Started?',
            desc: "Let's make your next project simple, stress-free, and successful.",
            buttonText: 'Book Your Service'
        },
        why: {
            title: 'Service That Stands Out',
            image: '/image_10.jpg',
            whyData: [
                'Fast,friendly response times',
                'Transparent pricing-no surprises',
                'Licensed and insured professionals',
                'Satisfaction guaranteed',
                'Locally owned and operated'
            ]
        },
        testimonials: {
            title: 'What Our Clients Say',
            testimonialData: [
                {
                    quote: 'Professional, prompt, and incredibly helpful. I’ll definitely be using them again',
                    name: 'Alex R.',
                    title: 'Homeowner'
                },
                {
                    quote: 'Finally found a service team I can trust. Everything was smooth from start to finish.',
                    name: 'Jordan M.',
                    title: 'Small Business Owner'
                }
            ]

        },
        services: {
            title: 'What We Offer',
            desc: 'Explore our most popular services—each one designed to save you time, reduce stress, and get the job done right.',
            serviceData: [
                {
                    id: 'general',
                    title: 'General Repairs',
                    desc: 'From leaky faucets to broken fixtures, we fix it fast and fix it right.',
                    img: '/image_04.jpg',
                    icon: GoTools,
                    alt: []
                },
                {
                    id: 'cleaningandmaintenance',
                    title: 'Cleaning & Maintenance',
                    desc: 'Keep your space spotless with recurring or one-time service.',
                    img: '/image_04.jpg',
                    icon: GoCodeOfConduct,
                    alt: ['/image_06.jpg', '/image_04.jpg', '/image_05.jpg']
                },
                {
                    id: 'techsupport',
                    title: 'Tech Support',
                    desc: 'Troubleshooting, setup, and digital peace of mind.',
                    img: '/image_04.jpg',
                    icon: GoDeviceDesktop,
                    alt: ['/image07.jpg', '/image08.jpg', '/image09.jpg', '/image10.jpg', '/image11.jpg']
                },
                {
                    id: 'outdoorcare',
                    title: 'Outdoor Care',
                    desc: 'Lawn, garden, and exterior upkeep tailored to your property',
                    img: '/image_04.jpg',
                    icon: GoSquirrel,
                    alt: []
                },
            ]
        },
    
    },
};

export const contactData = [
    {
        icon: GoDeviceMobile,
        title: 'Phone',
        desc: siteConfig.company.phone
    },
    {
        icon: GoPaperAirplane,
        title: 'E-Mail',
        desc: siteConfig.company.email
    },
    {
        icon: GoClock,
        title: 'Business Hours',
        desc: '24/7'
    },
    {
        icon: GoLocation,
        title: 'Location',
        desc: 'Online Service'
    }
]

export const footerData = [
    {
        id: 1,
        link: siteConfig.links.facebook,
        image: LuFacebook,
        alt: 'Facebook Icon',
        color: '#1877F2'
    },
    {
        id: 2,
        link: siteConfig.links.instagram,
        image: LuInstagram,
        alt: 'Instagram Icon',
        color: '#DD2A7B'
    },
    {
        id: 3,
        link: siteConfig.links.linkedin,
        image: LuLinkedin,
        alt: 'LinkedIn Icon',
        color: '#0072B1'
    },
    {
        id: 4,
        link: siteConfig.links.business,
        image: LuGlobe,
        alt: 'Blueprint logo',
        color: '#1E3A8A'
    },
    {
        id: 5,
        link: `mailto:${siteConfig.company.email}`,
        image: LuSendHorizontal,
        alt: 'Mail Icon',
        color: '#cc0000'
    },
    {
        id: 6,
        link: `tel:${siteConfig.company.phone}`,
        image: LuSmartphone,
        alt: 'Phone Icon',
        color: '#374151'
    }
];

export const workImages = [
        'image01.jpg', 'image02.webp', 'image03.jpg', 'image04.jpg', 'image05.jpg', 'image06.jpg', 'image07.jpg', 'image08.jpg', 'image09.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
    ];