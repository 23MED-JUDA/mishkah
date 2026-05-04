import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExamPage() {

  const navigate = useNavigate();

  // ================= الأسئلة (FRONTEND ONLY) =================
  const questions = [
    {
      id: 1,
      question: "ما حكم التجويد؟",
      answers: ["واجب", "سنة", "مكروه", "مباح"],
      correct: 0,
    },
    {
      id: 2,
      question: "عدد مخارج الحروف؟",
      answers: ["15", "16", "17", "18"],
      correct: 1,
    },
    {
      id: 3,
      question: "أول سورة في القرآن؟",
      answers: ["البقرة", "الفاتحة", "الإخلاص", "الناس"],
      correct: 1,
    },
  ];

  // ================= STATE =================
  const [current, setCurrent] = useState(0); // السؤال الحالي
  const [score, setScore] = useState(0); // النتيجة
  const [selected, setSelected] = useState(null); // الإجابة المختارة

  // ================= اختيار إجابة =================
  const handleAnswer = (index) => {
    setSelected(index);
  };

  // ================= NEXT =================
  const handleNext = () => {

    // لو اختار إجابة صح
    if (selected === questions[current].correct) {
      setScore((prev) => prev + 1);
    }

    setSelected(null);

    // الانتقال للسؤال التالي
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // انتهى الاختبار → صفحة النتيجة
      navigate("/result", {
        state: {
          score: selected === questions[current].correct ? score + 1 : score,
          total: questions.length,
        },
      });
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-right">

      {/* ================= السؤال ================= */}
      <h2 className="text-xl font-bold mb-6">
        سؤال {current + 1} من {questions.length}
      </h2>

      <p className="mb-4 text-lg">
        {questions[current].question}
      </p>

      {/* ================= الاختيارات ================= */}
      <div className="space-y-3">

        {questions[current].answers.map((ans, i) => (
          <div
            key={i}
            onClick={() => handleAnswer(i)}
            className={`p-3 border rounded-lg cursor-pointer transition
              ${
                selected === i
                  ? "bg-green-100 border-green-600"
                  : "hover:bg-gray-100"
              }`}
          >
            {ans}
          </div>
        ))}

      </div>

      {/* ================= زر التالي ================= */}
      <button
        onClick={handleNext}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg"
      >
        {current === questions.length - 1
          ? "إنهاء الاختبار"
          : "التالي"}
      </button>

    </div>
  );
}

export default ExamPage;