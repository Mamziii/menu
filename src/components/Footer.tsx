import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Clock, Mail } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-amber-900 to-amber-950 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.2} />
              </div>
              <span className="text-xl font-bold text-white">
                کافه فست فود پاییزان
              </span>
            </div>
            <p className="text-amber-100/80 text-sm leading-relaxed max-w-xs">
              طعم اصیل پاییز را با بهترین قهوه‌ها و فست‌فودهای تازه تجربه کنید.
              هر لقمه، قصه‌ای از طبیعت.
            </p>
          </div>

          {/* links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              دسترسی سریع
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/caffe"
                  className="text-amber-100/80 hover:text-amber-300 transition-colors"
                >
                  منو کافه
                </Link>
              </li>
              <li>
                <Link
                  to="/fastfood"
                  className="text-amber-100/80 hover:text-amber-300 transition-colors"
                >
                  منو فست فود
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-amber-100/80 hover:text-amber-300 transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-amber-100/80 hover:text-amber-300 transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              اطلاعات تماس
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-amber-100/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
              <li className="flex items-center gap-2.5 text-amber-100/80">
                <Phone className="w-4 h-4 shrink-0 text-amber-400" />
                <a
                  href="tel:+982112345678"
                  className="hover:text-amber-300 transition-colors"
                >
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-amber-100/80">
                <Mail className="w-4 h-4 shrink-0 text-amber-400" />
                <a
                  href="mailto:info@paeizan.cafe"
                  className="hover:text-amber-300 transition-colors"
                >
                  info@paeizan.cafe
                </a>
              </li>
            </ul>
          </div>

          {/* medias */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              ساعات کاری
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-amber-100/80 mb-6">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
              <div>
                <p>هر روز از ۱۰ صبح تا ۱۲ شب</p>
                <p className="text-amber-200/60 text-xs mt-1">
                  جمعه‌ها از ۱۱ صبح
                </p>
              </div>
            </div>

            <h3 className="text-white font-semibold mb-3 text-base">
              ما را دنبال کنید
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-amber-800/60 flex items-center justify-center
                           hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500
                           transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-amber-800/60 flex items-center justify-center
                           hover:bg-sky-500 transition-all duration-300 hover:scale-110"
              >
                <FaTelegramPlane className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800/50 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-amber-200/60">
          <p>
            © {new Date().getFullYear()} کافه فست فود پاییزان. تمام حقوق محفوظ
            است.
          </p>
          <p className="flex items-center gap-1">
            ساخته شده با
            <span className="text-amber-400">♥</span>
            برای عاشقان طعم پاییز
          </p>
        </div>
      </div>
    </footer>
  );
}
