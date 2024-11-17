const questions = [
    { 
        question: "What is 'AI for Social Good'?",
        options: ["Artificial Intelligence used for profit generation", "AI applications aimed at solving societal challenges", "AI used in the entertainment industry", "AI for improving corporate productivity"],
        answer: 1
    },
    {
        question: "Which of the following is an example of AI being used for environmental sustainability?",
        options: ["AI-powered stock trading algorithms", "AI in predicting and mitigating natural disasters", "AI for video game graphics", "AI used for social media marketing"],
        answer: 1
    },
    {
        question: "How can AI help improve healthcare systems?",
        options: ["By making medical diagnoses more accurate", "By increasing the cost of healthcare", "By replacing doctors and healthcare professionals", "By reducing access to healthcare in rural areas"],
        answer: 0
    },
    {
        question: "How can AI be used to reduce poverty?",
        options: ["By automating jobs", "By providing better healthcare", "By predicting natural disasters", "By improving access to education"],
        answer: 3
    },
    {
        question: "Which AI technology is used to detect fraud in financial transactions?",
        options: ["Deep Learning", "Natural Language Processing", "Machine Learning", "Reinforcement Learning"],
        answer: 2
    },
    {
        question: "What is AI's role in disaster response?",
        options: ["Predicting natural disasters", "Providing psychological support", "Delivering aid to affected areas", "None of the above"],
        answer: 0
    },
    {
        question: "What is an ethical concern with AI?",
        options: ["Privacy invasion", "Increased productivity", "Artificial creativity", "None of the above"],
        answer: 0
    },
    {
        question: "AI in the field of education can help by?",
        options: ["Automating grading", "Personalizing learning experiences", "Reducing teacher workload", "All of the above"],
        answer: 3
    },
    {
        question: "What AI tool is used for creating personalized learning paths for students?",
        options: ["AI-powered recommendation systems", "Deep Learning", "Robotic Process Automation", "Speech Recognition"],
        answer: 0
    },
    {
        question: "Which AI technology helps to predict and manage traffic in smart cities?",
        options: ["Machine Learning", "Natural Language Processing", "Robotics", "AI-based Computer Vision"],
        answer: 3
    },
    {
        question: "Which AI application helps in predicting climate change and its impacts?",
        options: ["AI-based weather forecasting", "AI in crop monitoring", "AI for disaster management", "All of the above"],
        answer: 3
    },
    {
        question: "How can AI improve access to education in remote areas?",
        options: ["By automating school processes", "By offering AI-powered online learning tools", "By developing AI-based school curriculums", "By monitoring student behavior"],
        answer: 1
    },
    {
        question: "Which company uses AI to detect rare diseases in medical images?",
        options: ["Google Health", "Microsoft", "IBM Watson", "Apple Health"],
        answer: 0
    },
    {
        question: "How does AI contribute to improving healthcare in rural areas?",
        options: ["By enabling telemedicine services", "By replacing doctors", "By creating medical data lakes", "By reducing healthcare costs"],
        answer: 0
    },
    {
        question: "Which of these is a benefit of AI in the fight against climate change?",
        options: ["Optimizing energy usage", "Creating pollution", "Replacing green technologies", "None of the above"],
        answer: 0
    },
    {
        question: "What role does AI play in wildlife conservation?",
        options: ["Monitoring endangered species", "Predicting weather conditions", "Tracking deforestation", "All of the above"],
        answer: 3
    },
    {
        question: "Which AI application helps in reducing energy consumption in smart grids?",
        options: ["Predictive maintenance", "AI-powered load forecasting", "AI-based energy efficiency tools", "All of the above"],
        answer: 3
    },
    {
        question: "How can AI enhance disaster preparedness?",
        options: ["By automating emergency responses", "By predicting and analyzing potential disasters", "By providing real-time maps", "All of the above"],
        answer: 3
    },
    {
        question: "Which of these is a use of AI in mental health?",
        options: ["AI-powered chatbots for therapy", "Predicting mental health disorders", "Providing personalized counseling", "All of the above"],
        answer: 3
    },
    {
        question: "How can AI be used to fight misinformation?",
        options: ["By tracking fake news sources", "By analyzing social media data", "By verifying facts and sources", "All of the above"],
        answer: 3
    },
    {
        question: "What is the role of AI in improving public safety?",
        options: ["Predicting crime hotspots", "Improving emergency response time", "Monitoring security cameras", "All of the above"],
        answer: 3
    },
    {
        question: "How does AI help in reducing food waste?",
        options: ["By improving crop yields", "By predicting demand and supply patterns", "By sorting and packaging food efficiently", "All of the above"],
        answer: 3
    },
    {
        question: "Which of the following AI technologies is used to support clean energy initiatives?",
        options: ["Predictive analytics", "Deep learning", "Natural language processing", "Robotic process automation"],
        answer: 0
    },
    {
        question: "Which AI tool is commonly used in the financial industry for fraud detection?",
        options: ["Speech recognition", "Machine learning", "Chatbots", "Computer vision"],
        answer: 1
    },
    {
        question: "Which sector benefits the most from AI-powered predictive maintenance?",
        options: ["Transportation", "Manufacturing", "Healthcare", "All of the above"],
        answer: 3
    }
    
];

// Function to shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle the questions initially and select 10 (shuffled)
shuffleArray(questions);
const selectedQuestions = questions.slice(0, 10); // Select first 10 after shuffling

let currentQuestionIndex = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const optionsE1 = document.getElementById("options");
const resultE1 = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function showQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionE1.textContent = currentQuestion.question;

    optionsE1.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsE1.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = selectedQuestions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionE1.textContent = "";
    optionsE1.innerHTML = "";
    resultE1.textContent = `You scored ${score} out of ${selectedQuestions.length}`;
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => { 
    currentQuestionIndex = 0;
    score = 0;
    resultE1.textContent = "";
    restartBtn.style.display = "none";
    shuffleArray(questions);  // Shuffle again on restart
    selectedQuestions.length = 0; // Clear old questions
    selectedQuestions.push(...questions.slice(0, 10));  // Get new random questions
    showQuestion();
});

showQuestion();


let timer;
let time = 0;
let timerRunning = false;

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(function() {
            time++;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            document.getElementById('timer').textContent = `Time: ${formatTime(minutes)}:${formatTime(seconds)}`;
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timerRunning = false;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function startQuiz() {
    time = 0;
    document.getElementById('timer').textContent = 'Time: 00:00';
    startTimer();
    // Rest of your quiz initialization code here
}

function stopQuiz() {
    stopTimer();
    // Show result and hide options
    document.getElementById('result').textContent = 'Quiz completed!';
    document.getElementById('restart').style.display = 'block';
}

function restartQuiz() {
    stopTimer(); // Stop timer
    startQuiz(); // Restart the quiz and timer
    document.getElementById('restart').style.display = 'none'; // Hide restart button until the quiz ends
    document.getElementById('result').textContent = ''; // Clear result message
}

function goBackToHome() {
    // Redirect to the home page
    window.location.href = 'quiz.html'; // Replace 'index.html' with the actual URL of your home page
}

// Trigger the quiz start function when the page loads
window.onload = startQuiz;

