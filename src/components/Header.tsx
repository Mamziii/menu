import { Link } from "react-router-dom";
import { Coffee, UtensilsCrossed, Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-amber-200/60 shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* logo - brand name */}
          <Link to="/" className="group flex items-center gap-2 min-w-0">
            <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-linear-to-br from-amber-600 to-orange-700 flex items-center justify-center shadow-md">
              <Leaf
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                strokeWidth={2.2}
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="hidden sm:block text-base md:text-xl font-bold text-amber-900 tracking-tight group-hover:text-amber-800 transition-colors truncate">
                کافه فست فود پاییزان
              </span>

              <span className="sm:hidden text-[15px] font-bold text-amber-900 tracking-tight">
                پاییزان
              </span>

              <span className="hidden md:block text-[11px] text-amber-700/70 font-medium">
                طعم واقعی پاییز
              </span>
            </div>
          </Link>

          {/* links */}
          <nav className="flex items-center gap-1.5 sm:gap-2.5">
            <Link
              to="/coffe"
              className="flex items-center gap-1 sm:gap-1.5 
                         px-2.5 sm:px-4 md:px-5 
                         py-1.5 sm:py-2 md:py-2.5 
                         text-xs sm:text-sm md:text-base font-medium text-amber-900 
                         rounded-full border border-amber-300/80 bg-white/70
                         hover:bg-amber-600 hover:text-white hover:border-amber-600
                         hover:shadow-md
                          transition-all duration-300"
            >
              <Coffee
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-18px md:h-18px shrink-0"
                strokeWidth={2.2}
              />
              <span className="whitespace-nowrap">منو کافه</span>
            </Link>

            <Link
              to="/fastfood"
              className="flex items-center gap-1 sm:gap-1.5 
                         px-2.5 sm:px-4 md:px-5 
                         py-1.5 sm:py-2 md:py-2.5 
                         text-xs sm:text-sm md:text-base font-medium text-white
                         rounded-full bg-linear-to-r from-amber-600 to-orange-600
                         shadow-md shadow-amber-500/30
                         hover:from-amber-700 hover:to-orange-700 hover:shadow-lg
                          transition-all duration-300"
            >
              <UtensilsCrossed
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-18px md:h-18px shrink-0"
                strokeWidth={2.2}
              />
              <span className="whitespace-nowrap">منو فست فود</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
