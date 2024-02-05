import { useSearchParams } from "react-router-dom";
import { subjects } from "../assets/constance";
import { useEffect, useState } from "react";
import axios from "axios";

export default function QuizePage() {
  const [params, setParams] = useSearchParams();
  const subject = params.get("subject");

  return (
    <div className="md:bg-gray-100 md:mx-[20%] md:px-8 px-4 py-6">
      {subject ? (
        <QuizCard subject={subject} />
      ) : (
        <>
          <h2 className="md:text-2xl text-xl font-bold mb-5">
            Chooce Subject to Start Quize
          </h2>
          <div className="flex flex-wrap">
            {subjects.map((subject) => (
              <div
                className="md:bg-white bg-gray-200 px-4 py-2 md:mr-4 m-1 rounded"
                key={subject}
                onClick={() => setParams({ subject: subject })}
              >
                {subject}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function QuizCard({ subject }) {
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const results = await axios(
          "https://the-trivia-api.com/v2/questions"
        ).then((res) => res);
        if (isMuted) {
          setQuestions(results.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();

    return () => {
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(questions);

  return (
    <div className="">
      <div className="mt-5">
        {!isStarted ? (
          <>
            <h3 className="md:text-2xl font-bold text-center">
              {subject} Quiz Test
            </h3>
            <button
              className="border border-primary px-5 py-2 rounded mt-5 text-center"
              onClick={() => setIsStarted(true)}
            >
              Start
            </button>
          </>
        ) : (
          <div className="">
            <div className="flex items-center justify-between">
              <span className="">{subject}</span>
              <span className="">15</span>
            </div>
            <div className="mt-6">
              {questions.length > 0 &&
                questions.map((question) => (
                  <div className="border md:border-primary bg-white p-4 mb-3">
                    <p className="font-bold">{question.question.text}</p>
                    <div className="ml-3">
                      {question.incorrectAnswers.map((ans) => (
                        <div className="flex items-center mt-2">
                          <input type="radio" name="answer" />
                          <span className="ml-3">{ans}</span>
                        </div>
                      ))}
                      <div className="flex items-center mt-2">
                        <input type="radio" name="answer" />
                        <span className="ml-3">{question.correctAnswer}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
