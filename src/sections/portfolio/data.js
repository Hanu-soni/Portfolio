import Image1 from '../../assets/Quiz_builder.png';
import Image2 from '../../assets/Red_Bus.jpg';
import Image3 from '../../assets/Youtube-Subscribers.jpg';
import Image4 from '../../assets/zomato.png';
import Image5 from '../../assets/Resume_builder.png';
import Image6 from '../../assets/Register.jpg';
import Image7 from '../../assets/Chat-app.png';
import Image8 from '../../assets/coding.png';
import Image9 from '../../assets/graphQL.png';

const data = [
    {
        id: 1,
        category: 'Front-end',
        image: Image1,
        title: 'Quiz_Builder',
        desc: "This is a platform where user can go and make their quiz and student can play quiz",
        demo: 'https://hanu-soni.github.io/QuizBuilder-2',
        github: 'https://github.com/Hanu-soni/QuizBuilder-2',
    },
    {
        id: 5,
        category: 'Front-end',
        image: Image5,
        title: "Resume-Builder)",
        desc:'Resume builder is used to build resume for user.New things -Login-Verification| Form-Validation |Download pdf |LocalStorage |Redux',
        demo: 'https://hanu-soni.github.io/Resume_Builder3/',
        github: 'https://github.com/Hanu-soni/Resume_Builder3.git'
    },

    
    {
        id: 3,
        category: 'Backend',
        image: Image3,
        title: "Youtube-Subscribers",
        desc: "THIS IS A ALMABETTER VERIFIED PROJECT | Technology used- Mongodb, ExpressJs, NodeJs | Atlas | Postman",      
        demo: 'https://github.com/Hanu-soni/Youtube_subscribers.git',
        github: 'https://github.com/Hanu-soni/Youtube_subscribers.git',
        //need to work on this
    },
    {
        id: 2,
        category: 'Backend',
        image: Image2,
        title: "Red_Bus",
        desc: "This Project is having 3 api request for knowing all the trips and getting bus details",
        demo: 'https://github.com/Hanu-soni/Red_Bus_Backend',
        github: 'https://github.com/Hanu-soni/Red_Bus_Backend'
        //need to work on this
    },
    {
        id:6,
        category:'Front-end',
        title:"Vaniella Registration",
        desc:"This is a simple form where user can enter their details and get registered successfully. HTML,CSS and JS is used. No Bootstrap . Form-Validation is taken care",
        github:'https://github.com/Hanu-soni/Vaniella_Form',
        demo:'https://hanu-soni.github.io/Vaniella_Form/register',
        image:Image6,
    },
    {
        id:7,
        category:"Full-Stack",
        title:"Chat-app",
        desc:"This is a simple chat application where I created a register and login account .Once Logged In, User can chat with all list members and seperate chat-box is created for each",
        github:"https://github.com/Hanu-soni/Chat_app",
        demo:"https://github.com/Hanu-soni/Chat_app",
        image:Image7
    },
    {
        id:8,
        category:"DSA",
        title:"Coding",
        desc:"Solved around 100+ WAPs to improve coding skills. The Programmes solved are from basics to advance and covers topic like series, pattern, recursive-function,sorting,searching,string-manipulation and all famous questions of leetcode",
        github:"https://github.com/Hanu-soni/DSA-coding",
        // demo:"no demo",
        image:Image8


    },
    {
        id:9,
        category:"Backend",
        title:"Graph-SQL",
        desc:"Created a GraphQL based Backend Project to learn the basic concept of it and used ApolloServer. Fetching data from database and avoiding Over-fetching and under-fetching ",
        github:"https://github.com/Hanu-soni/GraphQL",
        // demo:"no demo",
        image:Image9


    }
   
]


export default data;