import { useState } from "react";
import { Coffee } from "lucide-react";

// فرض می‌کنم دیتای منوی کافه رو از فایل data وارد می‌کنی
// مثال ساختار دیتا (می‌تونی مال خودت رو جایگزین کنی):
const coffeMenu = [
  {
    id: 1,
    title: "اسپرسو",
    category: "قهوه",
    price: "۸۵,۰۰۰",
    img: "/coffe/espresso.png",
    desc: "اسپرسو خالص و غلیظ با عطر قوی دانه‌های تازه رست‌شده",
  },
  {
    id: 2,
    title: "کاپوچینو",
    category: "قهوه",
    price: "۱۱۵,۰۰۰",
    img: "/coffe/cappuccino.png",
    desc: "اسپرسو + شیر بخارداده شده با لایه‌ای از فوم مخملی",
  },
  {
    id: 3,
    title: "لاته",
    category: "قهوه",
    price: "۱۲۰,۰۰۰",
    img: "/coffe/latte.png",
    desc: "ترکیب ملایم اسپرسو و شیر داغ با هنر لته آرت",
  },
  {
    id: 4,
    title: "چای ماسالا",
    category: "چای",
    price: "۹۵,۰۰۰",
    img: "/coffe/masala.png",
    desc: "چای سیاه با ادویه‌های گرم هندی و شیر",
  },
  {
    id: 5,
    title: "چای سبز",
    category: "چای",
    price: "۷۵,۰۰۰",
    img: "/coffe/greentea.png",
    desc: "چای سبز خالص و تازه با عطر طبیعی",
  },
  {
    id: 6,
    title: "کیک شکلاتی",
    category: "دسر",
    price: "۱۴۵,۰۰۰",
    img: "/coffe/chocolatecake.png",
    desc: "کیک شکلاتی مرطوب با گاناش تلخ و توت‌فرنگی تازه",
  },
  {
    id: 7,
    title: "چیزکیک",
    category: "دسر",
    price: "۱۵۵,۰۰۰",
    img: "/coffe/cheesecake.png",
    desc: "چیزکیک خامه‌ای با سس توت‌فرنگی خانگی",
  },
  {
    id: 8,
    title: "صبحانه انگلیسی",
    category: "صبحانه",
    price: "۲۸۵,۰۰۰",
    img: "/coffe/englandbreakfast.jpg",
    desc: "تخم‌مرغ، بیکن، سوسیس، لوبیا، نان تست و قارچ",
  },
  {
    id: 9,
    title: "املت سبزیجات",
    category: "صبحانه",
    price: "۱۶۵,۰۰۰",
    img: "/coffe/vegtableomlet.jpg",
    desc: "املت تازه با سبزیجات فصل و پنیر",
  },
];

const allCategories = ["همه", ...new Set(coffeMenu.map((menu) => menu.category))];

export default function Caffe() {
  const [allMenus, setAllMenus] = useState(coffeMenu);
  const [mainCategory, setMainCategory] = useState("همه");

  const filterMenus = (category: string) => {
    setMainCategory(category);
    if (category === "همه") {
      setAllMenus(coffeMenu);
      return;
    }
    const filtered = coffeMenu.filter((menu) => menu.category === category);
    setAllMenus(filtered);
  };

  return (
    <main className="bg-linear-to-b from-amber-50 via-orange-50/30 to-amber-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* عنوان صفحه */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-br from-amber-500 to-orange-600 shadow-lg mb-4">
            <Coffee className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-3">
            منوی کافه
          </h1>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-amber-800/70 text-sm sm:text-base max-w-md mx-auto">
            طعم‌های گرم و دلنشین پاییز را در هر فنجان تجربه کنید
          </p>
        </div>

        {/* دکمه‌های دسته‌بندی */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => filterMenus(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300
                ${
                  mainCategory === category
                    ? "bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/30 scale-105"
                    : "bg-white text-amber-900 border border-amber-200 hover:border-amber-400 hover:bg-amber-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* لیست آیتم‌های منو */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allMenus.map((menu) => (
            <article
              key={menu.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100/60"
            >
              {/* تصویر */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={menu.img}
                  alt={menu.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {menu.category}
                </div>
              </div>

              {/* اطلاعات آیتم */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-amber-900 leading-tight">
                    {menu.title}
                  </h3>
                  <span className="text-amber-700 font-bold text-base whitespace-nowrap">
                    {menu.price} تومان
                  </span>
                </div>
                <p className="text-amber-800/70 text-sm leading-relaxed">
                  {menu.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* پیام وقتی آیتمی پیدا نشد */}
        {allMenus.length === 0 && (
          <div className="text-center py-16">
            <p className="text-amber-800/60 text-lg">آیتمی در این دسته یافت نشد</p>
          </div>
        )}
      </section>
    </main>
  );
}