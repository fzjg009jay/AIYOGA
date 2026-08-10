'use client';

import { Instagram, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream pt-24 pb-10 container-px">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8 pb-16 border-b border-cream/10">
        <div className="md:col-span-4">
          <h3 className="font-display text-3xl mb-4">AIYOGA</h3>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            爱要干 — 奥克兰的瑜伽与普拉提静修所，传统修行与现代意图
            在此交汇。两间门店，同一份静定的品质标准。
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center border border-cream/20 hover:bg-cream hover:text-ink transition-colors duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center border border-cream/20 hover:bg-cream hover:text-ink transition-colors duration-300"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-6">
          <h4 className="text-xs uppercase tracking-widest2 text-cream/50 mb-5">
            营业时间
          </h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li className="flex justify-between gap-6">
              <span>周一 – 周五</span>
              <span>9:00 – 21:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>周六 – 周日</span>
              <span>9:00 – 15:00</span>
            </li>
          </ul>

          <h4 className="text-xs uppercase tracking-widest2 text-cream/50 mb-3 mt-8">
            快速导航
          </h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><a href="#classes" className="hover:text-cream">课程体系</a></li>
            <li><a href="#studio" className="hover:text-cream">空间体验</a></li>
            <li><a href="#locations" className="hover:text-cream">门店位置</a></li>
          </ul>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <h4 className="text-xs uppercase tracking-widest2 text-cream/50 mb-5">
            订阅资讯
          </h4>
          <p className="text-sm text-cream/60 mb-4">
            获取门店动态、新课程上线信息与会员专属优惠。
          </p>
          <form
            className="flex items-center border-b border-cream/30 pb-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="请输入您的邮箱地址"
              className="bg-transparent flex-1 text-sm placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="订阅"
              className="p-1 hover:translate-x-1 transition-transform duration-300"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
        <span>© {new Date().getFullYear()} AIYOGA 版权所有</span>
        <span>East Tamaki 店 · Albany 店 · 新西兰奥克兰</span>
      </div>
    </footer>
  );
}
