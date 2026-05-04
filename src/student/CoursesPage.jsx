import React, { useEffect, useState } from "react";
import api from "../api/axios";

// Icons
import {
  FaSearch,
  FaMobile,
  FaCreditCard,
  FaUniversity,
  FaHeadset,
  FaWhatsapp,
} from "react-icons/fa";

function CoursesPage() {
  // ================= STATE =================
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [search, setSearch] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [loading, setLoading] = useState(false);
  const [payLoading, setPayLoading] = useState(false);

  // ================= GET PLANS FROM BACKEND =================
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);

        const res = await api.get("/courses");

        setPlans(res.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        
        // fallback لو الباك واقع
        setPlans([
          { id: 1, title: "تفسير", description: "فهم الآيات", price: 180, type: "شهري" },
          { id: 2, title: "تجويد", description: "إتقان التلاوة", price: 200, type: "شهري" },
          { id: 3, title: "تحفيظ", description: "حفظ القرآن", price: 250, type: "شهري" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // ================= SEARCH =================
  const filteredPlans = plans.filter((plan) =>
    plan.title.toLowerCase().includes(search.toLowerCase())
  );

  // ================= SELECT PLAN =================
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  // ================= CHECKOUT (BACKEND READY) =================
  const handleCheckout = async () => {
    if (!selectedPlan) return alert("من فضلك اختر باقة أولاً");

    try {
      setPayLoading(true);

      const res = await axios.post("http://localhost:5000/api/checkout", {
        planId: selectedPlan.id,
        paymentMethod,
      });

      // لو الباك رجع لينك دفع
      if (res.data?.paymentUrl) {
        window.location.href = res.data.paymentUrl;
      } else {
        alert("تم إرسال الطلب بنجاح");
      }
    } catch (error) {
      console.log(error);
      alert("فشل في عملية الدفع");
    } finally {
      setPayLoading(false);
    }
  };

  // ================= WHATSAPP SUPPORT =================
  const handleSupport = () => {
    const phone = "201234567890";

    const message = "مرحبا 👋 أحتاج مساعدة في الاشتراك";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="flex flex-col px-6 py-4">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl px-6 py-4 mb-6 flex justify-between items-center">

        <div className="w-[120px]" />

        {/* SEARCH */}
        <div className="w-[420px] bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
          <FaSearch className="text-gray-500" />

          <input
            className="bg-transparent w-full outline-none text-right"
            placeholder="بحث في المسارات..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h2 className="text-green-700 font-bold text-lg">مشكاة</h2>
      </div>

      {/* ================= BODY ================= */}
      <div className="grid grid-cols-4 gap-6">

        {/* LEFT */}
        <div className="space-y-4">

          {/* SUMMARY */}
          <div className="bg-white p-4 rounded-xl shadow text-right">

            <h3 className="font-bold mb-3">ملخص الاشتراك</h3>

            {selectedPlan ? (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{selectedPlan.title}</span>
                  <span>الباقة</span>
                </div>

                <div className="flex justify-between">
                  <span>{selectedPlan.type}</span>
                  <span>النوع</span>
                </div>

                <div className="flex justify-between text-green-700 font-bold">
                  <span>{selectedPlan.price} ج.م</span>
                  <span>السعر</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">
                اختر باقة لعرض التفاصيل
              </p>
            )}

            {/* CHECKOUT */}
            <button
              onClick={handleCheckout}
              disabled={payLoading}
              className="w-full mt-4 bg-green-700 text-white py-2 rounded-lg disabled:opacity-50"
            >
              {payLoading ? "جاري الدفع..." : "إتمام الدفع"}
            </button>
          </div>

          {/* SUPPORT (ONLY GREEN BOX) */}
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-right">

            <div className="flex justify-end gap-2 items-center">
              <FaHeadset className="text-green-700" />
              <h3 className="font-bold text-green-700">الدعم الفني</h3>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              تواصل معنا لحل أي مشكلة
            </p>

            <button
              onClick={handleSupport}
              className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              واتساب الدعم
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-3">

          {/* LOADING */}
          {loading && (
            <p className="text-center text-gray-500">
              جاري تحميل الباقات...
            </p>
          )}

          {/* PLANS */}
          <div className="grid grid-cols-3 gap-4">

            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => handleSelectPlan(plan)}
                className={`cursor-pointer bg-white p-4 rounded-xl border hover:border-green-700 transition ${
                  selectedPlan?.id === plan.id ? "border-green-700" : ""
                }`}
              >
                <h4 className="font-bold text-right">{plan.title}</h4>

                <p className="text-xs text-gray-500 mt-2 text-right">
                  {plan.description}
                </p>

                <div className="flex justify-between mt-3 border-t pt-2 text-sm">
                  <span>{plan.type}</span>
                  <span>{plan.price} ج.م</span>
                </div>
              </div>
            ))}

          </div>

          {/* PAYMENT METHODS */}
          <div className="mt-6 bg-white p-4 rounded-xl text-right">

            <h3 className="font-bold mb-3">طريقة الدفع</h3>

            <div className="space-y-3">

              <label className="flex justify-between border p-3 rounded-lg">
                <input
                  type="radio"
                  name="pay"
                  value="vodafone"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>فودافون كاش</span>
                <FaMobile className="text-green-700" />
              </label>

              <label className="flex justify-between border p-3 rounded-lg">
                <input
                  type="radio"
                  name="pay"
                  value="card"
                  defaultChecked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>بطاقة بنكية</span>
                <FaCreditCard className="text-green-700" />
              </label>

              <label className="flex justify-between border p-3 rounded-lg">
                <input
                  type="radio"
                  name="pay"
                  value="instapay"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>إنستاباي</span>
                <FaUniversity className="text-green-700" />
              </label>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CoursesPage;