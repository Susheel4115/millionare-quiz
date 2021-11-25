import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question:
        "What command is used to count the total number of lines, words, and characters contained in a file?",
      answers: [
        {
          text: "countw",
          correct: false,
        },
        {
          text: "wcount",
          correct: false,
        },
        {
          text: "wc",
          correct: true,
        },
        {
          text: "count p",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What command is used to remove files?(linux bash)",
      answers: [
        {
          text: "dm",
          correct: false,
        },
        {
          text: "rm",
          correct: true,
        },
        {
          text: "erase",
          correct: false,
        },
        {
          text: "delete",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What hardware architectures are not supported by Red Hat?",
      answers: [
        {
          text: "SPARC",
          correct: false,
        },
        {
          text: "IBM-compitable",
          correct: false,
        },
        {
          text: "ALPHA",
          correct: false,
        },
        {
          text: "MACINTOSH",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "The absorption of ink by blotting paper involves",
      answers: [
        {
          text: "viscosity of ink",
          correct: false,
        },
        {
          text: "capillary action phenomenon",
          correct: true,
        },
        {
          text: "diffusion of ink through the blotting",
          correct: false,
        },
        {
          text: "siphon action",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Nuclear sizes are expressed in a unit named",
      answers: [
        {
          text: "Fermi",
          correct: true,
        },
        {
          text: "Amstrong",
          correct: false,
        },
        {
          text: "Newton",
          correct: false,
        },
        {
          text: "Tesla",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "Indian Railways is planning to launch which new train to boost tourism?",
      answers: [
        {
          text: "Sampoorna Kranti",
          correct: false,
        },
        {
          text: "Bharat Paryatan",
          correct: false,
        },
        {
          text: "Bharat Gaurav",
          correct: true,
        },
        {
          text: "Paryatan Gaurav",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "Which state has bagged the Best Marine State Award for 2021-22 on the World Fisheries Day 2021?",
      answers: [
        {
          text: "Gujarat",
          correct: false,
        },
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Odisha",
          correct: false,
        },
        {
          text: "Andhra Pradesh",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question:
        "What function should be used to free the memory allocated by calloc() ?",
      answers: [
        {
          text: "dealloc()",
          correct: false,
        },
        {
          text: "malloc(variable_name, 0)",
          correct: false,
        },
        {
          text: "memalloc(variable_name, 0)",
          correct: false,
        },
        {
          text: "free()",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question:
        "From what location are the 1st computer instructions available on boot up?",
      answers: [
        {
          text: "ROM BIOS",
          correct: true,
        },
        {
          text: "CPU",
          correct: false,
        },
        {
          text: "boot.ini",
          correct: false,
        },
        {
          text: "CONFIG.SYS",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "The most commonly used bleaching agent is?",
      answers: [
        {
          text: "alcohol",
          correct: false,
        },
        {
          text: "carbon dioxide",
          correct: false,
        },
        {
          text: "Chlorine",
          correct: true,
        },
        {
          text: "sodium chlorine",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "The most abundant rare gas in the atmosphere is?",
      answers: [
        {
          text: "He",
          correct: false,
        },
        {
          text: "Re",
          correct: false,
        },
        {
          text: "Ar",
          correct: true,
        },
        {
          text: "Xe",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is the father of Geometry?",
      answers: [
        {
          text: "Newton",
          correct: false,
        },
        {
          text: "Pythagoras",
          correct: false,
        },
        {
          text: "Aristotle",
          correct: false,
        },
        {
          text: "Euclid",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1,000" },
        { id: 6, amount: "₹ 2,000" },
        { id: 7, amount: "₹ 4,000" },
        { id: 8, amount: "₹ 8,000" },
        { id: 9, amount: "₹ 16,000" },
        { id: 10, amount: "₹ 32,000" },
        { id: 11, amount: "₹ 64,000" },
        { id: 12, amount: "₹ 1,25,000" },
        { id: 13, amount: "₹ 2,50,000" },
        { id: 14, amount: "₹ 5,00,000" },
        { id: 15, amount: "₹ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
