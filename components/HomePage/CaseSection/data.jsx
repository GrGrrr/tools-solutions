import Image from 'next/image';
import {RedHat} from "@/assets/icons/RedHat";
import informa from "@/public/informa.png";
import logo from '@/public/logo.png';
import {NCGR} from "@/assets/icons/NCGR";
import {Talogy} from "@/assets/icons/Talogy";
import MoS from '@/public/Ministry_of_Sport.png';
import {SDGA} from "@/assets/icons/SDGA";
import {SIDF} from "@/assets/icons/SIDF";
import {SSA} from "@/assets/icons/SSA";
import {SUEZ} from "@/assets/icons/SUEZ";

export const mobile = [
    {
        logo: <RedHat style={{height: '34px', marginLeft: '-20px'}} key="RedHat"/>,
        index: '01',
        industry: 'Software Development',
        feature: 'Business Process Solutions',
        challenge: 'Red Hat aimed to relocate to Saudi Arabia while maintaining its global standards and operational consistency.',
        solution: 'We provided end-to-end support, including setup, HR, financial consulting, and workplace solutions, ensuring seamless market entry and ongoing operations.',
    },
    {
        logo: <Image key="informa" style={{height: '46px', width: 'auto'}} src={informa} alt={''}/>,
        index: '02',
        industry: 'Information Services',
        feature: 'Business Process Solutions',
        challenge: 'Informa needed to establish a Saudi presence swiftly while securing visas for over 300 professionals.',
        solution: 'Our operational support, including HR services and financial management, allowed Informa to efficiently establish a foothold in new markets, ensuring smooth and effective expansion.',
    },
    {
        logo: <Image key="logo" style={{height: '64px', width: 'auto', marginLeft: '-5px'}} src={logo} alt={''}/>,
        index: '03',
        industry: 'Legal or Government',
        feature: 'Python, Microsoft .NET, HANDLE, and Azure DevOps',
        challenge: 'They sought to improve their litigation systems while providing enhanced judicial services to citizens and residents.',
        solution: 'Our 360-degree technical support model employed a competitive tech stack that included Python, Microsoft .NET, HANDLE, and Azure DevOps. With efficient system operations, agile deployment, and consistent monitoring, we helped the Ministry achieve top rankings in digital transformation.',
    },
    {
        logo: <NCGR style={{height: '64px', marginLeft: '-15px'}} key="NCGR"/>,
        index: '04',
        industry: 'Resource Management or Government',
        feature: 'Training and Development',
        challenge: 'The National Center for Government Resource Systems was looking to manage the financial aspects of training programs. The Center also required a highly qualified team to meet employees\' development needs.',
        solution: 'We collaborated with the center to design development sessions and established a training platform to refine operations. Additionally, we registered 300 employees for international and local training programs, contributing to the center’s workforce enhancement.',
    },
    {
        logo: <Talogy style={{height: '44px', marginLeft: '-20px'}} key="Talogy"/>,
        index: '05',
        industry: 'Human Resources',
        feature: 'Business Process Solutions',
        challenge: 'Talogy was looking to expand into Saudi Arabia to offer its talent and development services in an emerging market.',
        solution: 'We provided recruitment, payroll, VAT compliance, and government relations services, empowering Talogy to simplify talent management and ensure smooth operations.',
    },
    {
        logo: <Image key="MoS" style={{height: '49px', width: 'auto'}} src={MoS} alt={''}/>,
        index: '06',
        industry: 'Sports & Recreation or Government',
        feature: 'Training & Development',
        challenge: 'The Ministry desired a comprehensive training approach tailored specifically to its employees’ behavioral competencies and technical skills.',
        solution: 'We conducted a thorough training needs analysis and then delivered customized programs, advancing the Ministry’s employee performance and matching over 70% of their requirements.',
    },
    {
        logo: <SDGA style={{height: '44px', marginLeft: '-20px'}} key="SDGA"/>,
        index: '07',
        industry: 'Technology or Government',
        feature: 'Training and Development',
        challenge: 'They wanted to design technical training content that aligned with both educational and technical needs.',
        solution: 'We developed 65 educational programs in partnership with 20 global universities, training over 3,000 employees to accelerate digitization.',
    },
    {
        logo: <SIDF style={{height: '64px', marginLeft: '-30px'}} key="SIDF"/>,
        index: '08',
        industry: 'Finance or Government',
        feature: 'SAP CX',
        challenge: 'The Industrial Development Fund required a streamlined system to integrate internal and external operations while improving communication and customer response efficiency.',
        solution: 'We set up the SAP CX Sales & Services application system and connected it with our internal and external platforms. Moreover, an automated response system that works with SAP to improve communication and service efficiency was added.',
    },
    {
        logo: <SSA style={{height: '60px', marginLeft: '-20px'}} key="SSA"/>,
        index: '09',
        industry: 'Aerospace or Government',
        feature: 'SAP SuccessFactors',
        challenge: 'They needed a comprehensive system for managing recruitment, performance measurement, and employee development.',
        solution: 'We introduced an integrated learning system to support continuous development and career growth. In addition, the SAP SuccessFactors HR Management system was deployed to optimize talent acquisition, performance evaluations, and compensation planning.',
    },
    {
        logo: <SUEZ style={{height: '38px', marginLeft: '-20px'}} key="SUEZ"/>,
        index: 10,
        industry: 'Environmental Services',
        feature: 'Business Process Solutions',
        challenge: 'To expand strategically, they wanted to set up a local base in Saudi Arabia to contribute to the region\'s environmental and sustainability objectives.',
        solution: 'By managing company setup, HR services, government relations, and legal matters for SUEZ, we enable them to focus on delivering environmental solutions while operating smoothly and compliantly.',
    },
];

export const desktopInfo = [
    {
        index: '01',
        industry: 'Software Development',
        feature: 'Business Process Solutions',
        challenge: 'Red Hat aimed to relocate to Saudi Arabia while maintaining its global standards and operational consistency.',
        solution: 'We provided end-to-end support, including setup, HR, financial consulting, and workplace solutions, ensuring seamless market entry and ongoing operations.',
    },
    {
        index: '02',
        industry: 'Information Services',
        feature: 'Business Process Solutions',
        challenge: 'Informa needed to establish a Saudi presence swiftly while securing visas for over 300 professionals.',
        solution: 'Our operational support, including HR services and financial management, allowed Informa to efficiently establish a foothold in new markets, ensuring smooth and effective expansion.',
    },
    {
        index: '03',
        industry: 'Legal or Government',
        feature: 'Python, Microsoft .NET, HANDLE, and Azure DevOps',
        challenge: 'They sought to improve their litigation systems while providing enhanced judicial services to citizens and residents.',
        solution: 'Our 360-degree technical support model employed a competitive tech stack that included Python, Microsoft .NET, HANDLE, and Azure DevOps. With efficient system operations, agile deployment, and consistent monitoring, we helped the Ministry achieve top rankings in digital transformation.',
    },
    {
        index: '04',
        industry: 'Resource Management or Government',
        feature: 'Training and Development',
        challenge: 'The National Center for Government Resource Systems was looking to manage the financial aspects of training programs. The Center also required a highly qualified team to meet employees\' development needs.',
        solution: 'We collaborated with the center to design development sessions and established a training platform to refine operations. Additionally, we registered 300 employees for international and local training programs, contributing to the center’s workforce enhancement.',
    },
    {
        index: '05',
        industry: 'Human Resources',
        feature: 'Business Process Solutions',
        challenge: 'Talogy was looking to expand into Saudi Arabia to offer its talent and development services in an emerging market.',
        solution: 'We provided recruitment, payroll, VAT compliance, and government relations services, empowering Talogy to simplify talent management and ensure smooth operations.',
    },
    {
        index: '06',
        industry: 'Sports & Recreation or Government',
        feature: 'Training & Development',
        challenge: 'The Ministry desired a comprehensive training approach tailored specifically to its employees’ behavioral competencies and technical skills.',
        solution: 'We conducted a thorough training needs analysis and then delivered customized programs, advancing the Ministry’s employee performance and matching over 70% of their requirements.',
    },
    {
        index: '07',
        industry: 'Technology or Government',
        feature: 'Training and Development',
        challenge: 'They wanted to design technical training content that aligned with both educational and technical needs.',
        solution: 'We developed 65 educational programs in partnership with 20 global universities, training over 3,000 employees to accelerate digitization.',
    },
    {
        index: '08',
        industry: 'Finance or Government',
        feature: 'SAP CX',
        challenge: 'The Industrial Development Fund required a streamlined system to integrate internal and external operations while improving communication and customer response efficiency.',
        solution: 'We set up the SAP CX Sales & Services application system and connected it with our internal and external platforms. Moreover, an automated response system that works with SAP to improve communication and service efficiency was added.',
    },
    {
        index: '09',
        industry: 'Aerospace or Government',
        feature: 'SAP SuccessFactors',
        challenge: 'They needed a comprehensive system for managing recruitment, performance measurement, and employee development.',
        solution: 'We introduced an integrated learning system to support continuous development and career growth. In addition, the SAP SuccessFactors HR Management system was deployed to optimize talent acquisition, performance evaluations, and compensation planning.',
    },
    {
        index: '10',
        industry: 'Environmental Services',
        feature: 'Business Process Solutions',
        challenge: 'To expand strategically, they wanted to set up a local base in Saudi Arabia to contribute to the region\'s environmental and sustainability objectives.',
        solution: 'By managing company setup, HR services, government relations, and legal matters for SUEZ, we enable them to focus on delivering environmental solutions while operating smoothly and compliantly.',
    },
];

export const desktopLogos = [
    {
        logo: <RedHat style={{height: '43px'}} key="RedHat"/>,
        index: '01',
    },
    {
        logo: <Image key="informa" src={informa} alt={''}/>,
        index: '02',
    },
    {
        logo: <Image key="logo" src={logo} alt={''}/>,
        index: '03',
    },
    {
        logo: <NCGR style={{height: '80px'}} key="NCGR"/>,
        index: '04',
    },
    {
        logo: <Talogy style={{height: '55px'}} key="Talogy"/>,
        index: '05',
    },
    {
        logo: <Image key="MoS" src={MoS} alt={''}/>,
        index: '06',
    },
    {
        logo: <SDGA style={{height: '55px'}} key="SDGA"/>,
        index: '07',
    },
    {
        logo: <SIDF style={{height: '80px'}} key="SIDF"/>,
        index: '08',
    },
    {
        logo: <SSA style={{height: '75px'}} key="SSA"/>,
        index: '09',
    },
    {
        logo: <SUEZ style={{height: '47px'}} key="SUEZ"/>,
        index: '10',
    },
];