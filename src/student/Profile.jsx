import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/AuthProvider";

// Icons
import { FiBell, FiSettings } from "react-icons/fi";
import { FaUser, FaPhone, FaEnvelope, FaIdCard } from "react-icons/fa";
import { MdFemale, MdMale } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

function Profile() {
  const { user, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      reset(user); // Load user data into form
    }
  }, [user, reset]);

  // حفظ التعديلات وتحديث السياق
  const onSubmit = (data) => {
    const updatedUser = { ...user, ...data };
    login(updatedUser); // This updates localStorage and Context
    setIsEditing(false);
  };

  const handleEdit = () => {
    reset(user);
    setIsEditing(true);
  };

  return (
    <main className="flex-1 px-10 py-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl px-6 py-4 flex justify-between items-center mb-6 shadow-sm">
        <div className="flex gap-5 text-gray-500 text-xl">
          <FiBell />
          <FiSettings />
        </div>
        <h1 className="text-lg font-bold text-emerald-700">
          الملف الشخصي للطالب
        </h1>
      </div>

      {/* ================= FORM ================= */}
      {isEditing ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl p-8 shadow-md space-y-6 text-right"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            تحديث ملف الطالب الشخصي
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-500 mb-1">
                <FaUser /> الاسم:
              </label>
              <input
                {...register("name", { required: "الاسم مطلوب" })}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-500 mb-1">
                <FaPhone /> رقم الهاتف:
              </label>
              <input
                {...register("phone", { required: "رقم الهاتف مطلوب" })}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-500 mb-1">
                <FaIdCard /> رقم الهوية:
              </label>
              <input
                {...register("nationalId", { required: "رقم الهوية مطلوب" })}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
              />
              {errors.nationalId && <p className="text-red-500 text-sm mt-1">{errors.nationalId.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-500 mb-1">
                <FaEnvelope /> الإيميل:
              </label>
              <input
                type="email"
                {...register("email", { required: "الإيميل مطلوب" })}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-500 mb-1">
                <FaIdCard /> المكان:
              </label>
              <input
                {...register("location", { required: "المكان مطلوب" })}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-gray-500 mb-1">
                <MdMale /> النوع:
              </label>
              <select
                {...register("gender", { required: "اختار النوع" })}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
              >
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
              </select>
            </div>

            <div>
              <label className="text-gray-500 mb-1 block">العمر:</label>
              <input
                type="number"
                {...register("age", { required: "العمر مطلوب" })}
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-500 mb-1">
              <GiBookshelf /> المسار:
            </label>
            <select
              {...register("track", { required: "اختار المسار" })}
              className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg outline-none focus:border-emerald-500"
            >
              <option value="حفظ">حفظ</option>
              <option value="تفسير">تفسير</option>
              <option value="تجويد">تجويد</option>
            </select>
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition">
              حفظ التعديلات
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-300 transition"
            >
              إلغاء
            </button>
          </div>
        </form>
      ) : (
        /* ================= VIEW ================= */
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6 text-right">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              بيانات الحساب الشخصي
            </h2>
            <button
              onClick={handleEdit}
              className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-6 py-2 rounded-xl font-bold hover:bg-emerald-100 transition"
            >
              تعديل البيانات
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">الاسم الكامل</p>
              <div className="flex items-center gap-3 font-bold">
                <FaUser className="text-emerald-600" />
                <span>{user?.name || "غير محدد"}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">رقم الهاتف</p>
              <div className="flex items-center gap-3 font-bold">
                <FaPhone className="text-emerald-600" />
                <span>{user?.phone || "غير محدد"}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">البريد الإلكتروني</p>
              <div className="flex items-center gap-3 font-bold">
                <FaEnvelope className="text-emerald-600" />
                <span>{user?.email || "غير محدد"}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">رقم الهوية</p>
              <div className="flex items-center gap-3 font-bold">
                <FaIdCard className="text-emerald-600" />
                <span>{user?.nationalId || "غير محدد"}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">النوع</p>
              <div className="flex items-center gap-3 font-bold">
                {user?.gender === "ذكر" ? <MdMale className="text-emerald-600" /> : <MdFemale className="text-emerald-600" />}
                <span>{user?.gender || "غير محدد"}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">المكان</p>
              <div className="flex items-center gap-3 font-bold">
                <FaIdCard className="text-emerald-600" />
                <span>{user?.location || "غير محدد"}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">المسار الحالي</p>
              <div className="flex items-center gap-3 font-bold text-emerald-800">
                <GiBookshelf className="text-emerald-600" />
                <span>{user?.track || "غير محدد"}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

export default Profile;