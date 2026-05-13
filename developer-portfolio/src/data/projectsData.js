import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'ConnectChat - Real-Time Chat Application',
        projectDesc: 'Developed a scalable real-time chat system using Socket.IO with low-latency messaging.',
        tags: [ 'MongoDB', 'Express.js', 'React', 'Node.js', 'Redis'],
        code: 'https://github.com/22mic0103nikhitha/ConnectChat',
        demo: 'https://github.com/22mic0103nikhitha/ConnectChat',
        image: one
    },
    {
        id: 2,
        projectName: 'Sanjeevani-AI (SafeBot)',
        projectDesc: 'Implemented an offline suicide risk detection system with on-device IndicBERT inference',
        tags: ['Python', 'IndicBERT', 'PyTorch Lite', 'Android (Kotlin)'],
        code: 'https://github.com/22mic0103nikhitha/safebotapp',
        demo: 'https://github.com/22mic0103nikhitha/safebotapp',
        image: two
    },
    {
        id: 3,
        projectName: 'Persona RAG Chatbot',
        projectDesc: 'Developed a persona-aware Retrieval-Augmented Generation (RAG) chatbot using vector embeddings and semantic retrieval.',
        tags: ['Python', 'FastAPI', 'ChromaDB', 'Sentence Transformers', 'GPT4All'],
        code: 'https://github.com/22mic0103nikhitha/Persona-RAG-Chatbot',
        demo: 'https://github.com/22mic0103nikhitha/Persona-RAG-Chatbot',
        image: three
    },
    {
        id: 4,
        projectName: 'Hand Sign Detection Using Fuzzy Logic (ASL)',
        projectDesc: 'Built a real-time American Sign Language hand sign detection system using computer vision for gesture capture and preprocessing, Implemented fuzzy logic based classification to handle uncertainty in hand gestures and improve recognition accuracy.',
        tags: ['Python', 'OpenCV', 'NumPy', 'Scikit-learn', 'Fuzzy Logic'],
        code: 'https://github.com/22mic0103nikhitha/hands-sign-detection',
        demo: 'https://github.com/22mic0103nikhitha/hands-sign-detection',
        image: four
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/