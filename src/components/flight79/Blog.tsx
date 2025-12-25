import React from 'react';
import { Badge } from '../ui/Badge';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-2">Latest News</div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-text">Stories Behind the Cup</h2>
          </div>
          <a href="/" className="group flex items-center gap-2 text-sm font-bold hover:text-brand-primary transition-colors">
            View all articles
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BlogCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmM-znU1Llm8z8SYjEK6SgNu0K1Fuhh0lzjYOWaP8lBw8zoweYD0hS98IaqPo3co6ikAEla8SBMxRLE5BiiNgMDVU8o17sS4NS22Fzi5AU2LFLW8ectGPiDHuwUHkJl2XHB9oAnucMWNlCz72KkdeyOwYbbWeHPNOF5UFQcnJQT9E1YDZ4cD-FFMdUtFVpMqs1T0ReW-ehOjMTRZf4kpP-9Bdm0Lv0gTYBlCM-LpNGPKM0IEOTi_zFcc1QZV4SqD2OAeQUbe6UppZI"
                category="Education"
                date="12 Oct 2023"
                title="Barista Secrets: Perfect Latte Art"
                desc="Discover the basic techniques of pouring milk to create beautiful heart and tulip patterns in your coffee."
            />
            <BlogCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPc02znm5V1cAG7tF0f7irjrpTR-o_3UHNt-m9__jmCgumKMHu2cuPPtWoHHxocAZKfzpQNHXG3gmtzxlRGePs6HJG55SC_7ZH0M0Gp0kAnm6exQr87MVhV9IhvlSdGzOQRrQ6CExnF63WtuIF_kWFj3k56-H-YuYQRSPEHjOkBcZZh3caUEu_1gn8IoF6aQD8R9_rNrL_PB-h6ok7UO1sVCCO63jhfzcX0Wca6NEuipyTgoWHD32-6af8VOIzIWaWL-a8GxbxP9O"
                category="Origin"
                date="05 Oct 2023"
                title="Bean Journey: From Local Farmers"
                desc="Get closer to the coffee farmers who dedicate their lives to quality beans."
            />
             <BlogCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCdk76E8SvIVpf5lvzqYDTqfqb8ymxl9TRAUB01eLQ_4OK3wGQQxonXq4iddiATTe1KWnRrjJCkOULmsaYpiMwVQW8U16IcBDHqwyAUiIxeVoPqgX8L_1LGwoiaDW8ndARjsPHyr3d4w18dFuV_bbk5JbbN0s8q4CDoIVivYnNQbidoGB_KJWUcu4uPAF35v2BF-XbOCJ5Y3Z69SZc2BPlydl-frBCW_I9bIdOn7cOlHEuul4nnoriw8uokfZy1__svYZ_Fk7lDN_X5"
                category="News"
                date="28 Sep 2023"
                title="New Premium Chocolate Launch"
                desc="We present the sensation of richer and creamier Belgian chocolate to accompany your afternoon."
            />
             <BlogCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuC7mW-jiITNhDgxifHqXCHs4nwhJJg5r60GOKahLKNO4Yv73k31JNWQkSGa2ww-dawBZClz_NNsNQlNCB-q3j1w77RpqKw1u8Ld3AU2GsYvCNsXfOhWBmmtdtzpLOMiM5qhe0V3itAC87Eyn5gQuoyeg3VFEf22WprWaykRXVGZitDc46HU4MH93wbLcINPYv7ZY5cviaVfZKpXT6MVoLxJViZ_hqaVvuu4K53rIEL3_0P0ObDw3fUY8ECkWVVZ3C0-J09y9-oNgy4s"
                category="Event"
                date="15 Sep 2023"
                title="Weekend Manual Brew Workshop"
                desc="Peek into the excitement of the coffee lovers community learning V60 techniques with our head barista."
            />
        </div>
      </div>
    </section>
  );
}

function BlogCard({ image, category, date, title, desc }: { image: string, category: string, date: string, title: string, desc: string }) {
    return (
        <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
                <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={image} />
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur border-none text-brand-muted uppercase tracking-wider font-bold text-[10px] px-2 py-1">
                        {category}
                    </Badge>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-brand-muted mb-3">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span>{date}</span>
                </div>
                <h3 className="text-lg font-bold font-serif mb-3 leading-snug group-hover:text-brand-primary transition-colors">{title}</h3>
                <p className="text-sm text-brand-muted mb-4 line-clamp-2 flex-1">{desc}</p>
                <button className="text-sm font-bold text-brand-primary flex items-center gap-1 group-hover:underline cursor-pointer">
                    Read More
                </button>
            </div>
        </div>
    );
}
