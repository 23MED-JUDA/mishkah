import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResultPage() {

  const navigate = useNavigate();
  const location = useLocation();

  const { score, total } = location.state || {
    score: 0,
    total: 0,
  };

  return (
    <div className="p-6 text-center">

      <h1 className="text-2xl font-bold mb-4">
        النتيجة النهائية
      </h1>

      <p className="text-lg mb-6">
        لقد حصلت على{" "}
        <span className="text-green-600 font-bold">
          {score}
        </span>
        /{total}
      </p>

      {/* ================= BUTTON ================= */}
      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        العودة للتقويم
      </button>

    </div>
  );
}

export default ResultPage;