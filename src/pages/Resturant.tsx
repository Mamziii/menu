import { useState } from "react";
import { UtensilsCrossed } from "lucide-react";


const resturantMenu = [
  {
    id: 1,
    title: "چیزبرگر کلاسیک",
    category: "برگر",
    price: "۲۴۵,۰۰۰",
    img: "/images/cheeseburger.jpg",
    desc: "گوشت ۱۰۰٪ گوساله، پنیر چدار، کاهو، گوجه و سس مخصوص پاییزان",
  },
  {
    id: 2,
    title: "دبل اسموکی برگر",
    category: "برگر",
    price: "۳۱۵,۰۰۰",
    img: "/images/double-burger.jpg",
    desc: "دو لایه گوشت دودی، پنیر، پیاز کاراملی و سس باربیکیو",
  },
  {
    id: 3,
    title: "چیکن برگر",
    category: "برگر",
    price: "۲۲۵,۰۰۰",
    img: "/images/chicken-burger.jpg",
    desc: "فیله مرغ سوخاری، کاهو، خیارشور و سس مایو مخصوص",
  },
  {
    id: 4,
    title: "پیتزا پپرونی",
    category: "پیتزا",
    price: "۲۸۵,۰۰۰",
    img: "/images/pepperoni.jpg",
    desc: "خمیر تازه، سس گوجه، پنیر موزارلا و پپرونی تند",
  },
  {
    id: 5,
    title: "پیتزا مارگاریتا",
    category: "پیتزا",
    price: "۲۴۵,۰۰۰",
    img: "/images/margherita.jpg",
    desc: "گوجه تازه، ریحان، پنیر موزارلا و روغن زیتون فرابکر",
  },
  {
    id: 6,
    title: "پیتزا چهار فصل",
    category: "پیتزا",
    price: "۳۲۵,۰۰۰",
    img: "/images/quattro.jpg",
    desc: "قارچ، ژامبون، فلفل دلمه‌ای، زیتون و پنیر اضافه",
  },
  {
    id: 7,
    title: "ساندویچ رست بیف",
    category: "ساندویچ",
    price: "۲۶۵,۰۰۰",
    img: "/images/roast-beef.jpg",
    desc: "گوشت رست‌شده، پنیر سوئیسی، پیاز و سس خردل عسلی",
  },
  {
    id: 8,
    title: "هات داگ ویژه",
    category: "ساندویچ",
    price: "۱۸۵,۰۰۰",
    img: "/images/hotdog.jpg",
    desc: "هات‌داگ دودی، پیاز سرخ‌شده، خردل و کچاپ",
  },
  {
    id: 9,
    title: "سیب‌زمینی سرخ‌کرده",
    category: "پیش‌غذا",
    price: "۹۵,۰۰۰",
    img: "/images/fries.jpg",
    desc: "سیب‌زمینی ترد با سس کچاپ و مایونز",
  },
  {
    id: 10,
    title: "ناگت مرغ",
    category: "پیش‌غذا",
    price: "۱۴۵,۰۰۰",
    img: "/images/nuggets.jpg",
    desc: "۱۰ عدد ناگت طلایی با سس Barbecue",
  },
  {
    id: 11,
    title: "سالاد سزار",
    category: "پیش‌غذا",
    price: "۱۶۵,۰۰۰",
    img: "/images/caesar.jpg",
    desc: "کاهو رومی، مرغ گریل، نان تست، پنیر پارمزان و سس سزار",
  },
];

const allCategories = ["همه", ...new Set(resturantMenu.map((menu) => menu.category))];resturantMenu

export default function Resturant() {
  const [allMenus, setAllMenus] = useState(resturantMenu);
  const [mainCategory, setMainCategory] = useState("همه");

  const filterMenus = (category: string) => {
    setMainCategory(category);
    if (category === "همه") {
      setAllMenus(resturantMenu);
      return;
    }
    const filtered = resturantMenu.filter((menu) => menu.category === category);
    setAllMenus(filtered);
  };

  return (
    <main className="bg-linear-to-b from-amber-50 via-orange-50/30 to-amber-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* page title */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-br from-amber-500 to-orange-600 shadow-lg mb-4">
            <UtensilsCrossed className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-3">
            منوی فست فود
          </h1>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-amber-800/70 text-sm sm:text-base max-w-md mx-auto">
            طعم‌های داغ و لذیذ با بهترین مواد اولیه تازه
          </p>
        </div>

        {/* category btns */}
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

        {/* menu items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allMenus.map((menu) => (
            <article
              key={menu.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-amber-100/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={menu.img}
                  alt={menu.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {menu.category}
                </div>
              </div>

              {/* details */}
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

        
        {allMenus.length === 0 && (
          <div className="text-center py-16">
            <p className="text-amber-800/60 text-lg">آیتمی در این دسته یافت نشد</p>
          </div>
        )}
      </section>
    </main>
  );
}