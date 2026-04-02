import './index.css';
import { createIcons, Leaf, Search, BookOpen, Activity, FileText, Menu, X, ChevronRight, ChevronLeft, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Image, Calendar, ArrowRight, Pill, CheckCircle, Thermometer, ArrowUp, ArrowDown, User, Moon, Sun } from 'lucide';
import { medicines, organonPrinciples, symptomCategories, blogPosts } from './data/mockData';
import { Medicine, SymptomCategory, Disease, Remedy } from './types';

// Initialize Lucide Icons
const initIcons = () => {
  createIcons({
    icons: {
      Leaf, Search, BookOpen, Activity, FileText, Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Calendar, ArrowRight, Moon, Sun
    }
  });
};

// Navbar Component
const renderNavbar = () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const currentPath = window.location.pathname;
  const isActive = (path: string) => {
    const currentFile = currentPath.split('/').pop() || 'index.html';
    const targetFile = path.replace('./', '').replace('/', '') || 'index.html';
    return currentFile === targetFile ? 'text-teal-700 bg-teal-50 font-semibold' : 'text-slate-600 hover:text-teal-700 hover:bg-teal-50 font-medium';
  };

  // Theme Logic
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const currentTheme = savedTheme || systemTheme;
  
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <div class="flex items-center">
          <a href="./index.html" class="flex-shrink-0 flex items-center gap-3 group transition-transform hover:scale-105">
            <div class="bg-gradient-to-br from-teal-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/30 transition-all">
              <i data-lucide="leaf" class="h-6 w-6 text-white"></i>
            </div>
            <span class="font-bold text-xl text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors">সবার জন্য হোমিওপ্যাথি</span>
          </a>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-4">
          <div class="flex items-center space-x-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-100 shadow-sm">
            <a href="./index.html" class="${isActive('./index.html')} px-4 py-2 rounded-full text-sm transition-all duration-200">হোম</a>
            <a href="./materia-medica.html" class="${isActive('./materia-medica.html')} px-4 py-2 rounded-full text-sm transition-all duration-200">মেটেরিয়া মেডিকা</a>
            <a href="./organon.html" class="${isActive('./organon.html')} px-4 py-2 rounded-full text-sm transition-all duration-200">অর্গানন</a>
            <a href="./symptoms.html" class="${isActive('./symptoms.html')} px-4 py-2 rounded-full text-sm transition-all duration-200">লক্ষণ ভিত্তিক</a>
            <a href="./blog.html" class="${isActive('./blog.html')} px-4 py-2 rounded-full text-sm transition-all duration-200">ব্লগ</a>
          </div>

          <button id="theme-toggle" class="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-colors border border-slate-200 shadow-sm" aria-label="Toggle Dark Mode">
            <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" class="h-5 w-5"></i>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-3">
          <button id="mobile-theme-toggle" class="p-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors" aria-label="Toggle Dark Mode">
            <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" class="h-6 w-6"></i>
          </button>
          <button id="mobile-menu-btn" class="text-slate-600 hover:text-teal-700 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors">
            <i data-lucide="menu" class="h-6 w-6"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl z-50">
      <div class="px-4 pt-4 pb-6 space-y-2">
        <a href="./index.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">হোম</a>
        <a href="./materia-medica.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">মেটেরিয়া মেডিকা</a>
        <a href="./organon.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">অর্গানন</a>
        <a href="./symptoms.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">লক্ষণ ভিত্তিক</a>
        <a href="./blog.html" class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100">ব্লগ</a>
      </div>
    </div>
  `;

  // Mobile Menu Toggle
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Theme Toggle Logic
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    const iconName = isDark ? 'sun' : 'moon';
    const themeBtns = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    
    themeBtns.forEach(btn => {
      if (btn) {
        btn.innerHTML = `<i data-lucide="${iconName}" class="h-5 w-5"></i>`;
      }
    });

    createIcons({
      icons: { Moon, Sun },
      nameAttr: 'data-lucide',
      attrs: { class: "h-5 w-5" }
    });
  };

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('mobile-theme-toggle')?.addEventListener('click', toggleTheme);
};

// Footer Component
const renderFooter = () => {
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="bg-gradient-to-br from-teal-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-teal-900/50">
              <i data-lucide="leaf" class="h-6 w-6 text-white"></i>
            </div>
            <span class="font-bold text-xl text-white tracking-tight">সবার জন্য হোমিওপ্যাথি</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            প্রাকৃতিক আরোগ্যের পথে আপনার বিশ্বস্ত সঙ্গী। আমরা বিশ্বাস করি সবার জন্য নিরাপদ এবং পার্শ্বপ্রতিক্রিয়াহীন চিকিৎসা।
          </p>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <span class="w-1 h-6 bg-teal-500 rounded-full"></span>
            দ্রুত লিঙ্ক
          </h3>
          <ul class="space-y-3 text-slate-400">
            <li><a href="./materia-medica.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> মেটেরিয়া মেডিকা</a></li>
            <li><a href="./organon.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> অর্গানন অফ মেডিসিন</a></li>
            <li><a href="./symptoms.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> লক্ষণ ভিত্তিক চিকিৎসা</a></li>
            <li><a href="./blog.html" class="hover:text-teal-400 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="h-3 w-3"></i> স্বাস্থ্য ব্লগ</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <span class="w-1 h-6 bg-blue-500 rounded-full"></span>
            যোগাযোগ
          </h3>
          <ul class="space-y-4 text-slate-400">
            <li class="flex items-start gap-3 group">
              <div class="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-900/50 transition-colors">
                <i data-lucide="phone" class="h-4 w-4 text-teal-400"></i>
              </div>
              <span class="mt-1">+৮৮০ ১৭১১-০০০০০০</span>
            </li>
            <li class="flex items-start gap-3 group">
              <div class="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-900/50 transition-colors">
                <i data-lucide="mail" class="h-4 w-4 text-teal-400"></i>
              </div>
              <span class="mt-1">info@homeopathybd.com</span>
            </li>
            <li class="flex items-start gap-3 group">
              <div class="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-900/50 transition-colors">
                <i data-lucide="map-pin" class="h-4 w-4 text-teal-400"></i>
              </div>
              <span class="mt-1">ঢাকা, বাংলাদেশ</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <span class="w-1 h-6 bg-purple-500 rounded-full"></span>
            সোশ্যাল মিডিয়া
          </h3>
          <div class="flex space-x-4">
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg shadow-black/20 hover:shadow-blue-600/20 hover:-translate-y-1"><i data-lucide="facebook" class="h-5 w-5"></i></a>
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-sky-500 transition-all shadow-lg shadow-black/20 hover:shadow-sky-500/20 hover:-translate-y-1"><i data-lucide="twitter" class="h-5 w-5"></i></a>
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-pink-600 transition-all shadow-lg shadow-black/20 hover:shadow-pink-600/20 hover:-translate-y-1"><i data-lucide="instagram" class="h-5 w-5"></i></a>
            <a href="#" class="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-blue-700 transition-all shadow-lg shadow-black/20 hover:shadow-blue-700/20 hover:-translate-y-1"><i data-lucide="linkedin" class="h-5 w-5"></i></a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-slate-800 mt-12 pt-8 text-center">
        <p class="text-slate-500 text-sm">&copy; ${new Date().getFullYear()} সবার জন্য হোমিওপ্যাথি। সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </div>
  `;
};

// Home Page Logic
const renderHome = () => {
  const app = document.getElementById('app-home');
  if (!app) return;

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1920&auto=format&fit=crop',
      title: 'প্রাকৃতিক আরোগ্যের পথে',
      subtitle: 'পার্শ্বপ্রতিক্রিয়াহীন ও নিরাপদ চিকিৎসা'
    },
    {
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1920&auto=format&fit=crop',
      title: 'সুস্থ জীবনের জন্য হোমিওপ্যাথি',
      subtitle: 'আপনার এবং আপনার পরিবারের সুস্বাস্থ্যের জন্য'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop',
      title: 'অভিজ্ঞ চিকিৎসকের পরামর্শ',
      subtitle: 'সঠিক লক্ষণ বিচার করে চিকিৎসা'
    },
    {
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1920&auto=format&fit=crop',
      title: 'সম্পূর্ণ পার্শ্বপ্রতিক্রিয়াহীন',
      subtitle: 'শিশুদের ও বয়স্কদের জন্য নিরাপদ'
    }
  ];

  app.innerHTML = `
    <!-- Hero Slider -->
    <div class="relative h-[500px] md:h-[600px] overflow-hidden group">
      <div id="slider-track" class="h-full w-full relative">
        ${slides.map((slide, index) => `
          <div class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out slide-item ${index === 0 ? 'opacity-100 z-10 slide-active' : 'opacity-0 z-0'}">
            <div class="absolute inset-0 bg-slate-900/40 z-10"></div>
            <div class="w-full h-full overflow-hidden">
              <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover slide-image" referrerPolicy="no-referrer" />
            </div>
            <div class="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div class="max-w-4xl slide-content">
                 <div class="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
                    <i data-lucide="leaf" class="h-4 w-4 text-teal-300"></i>
                    <span>হোমিওপ্যাথি</span>
                 </div>
                 <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                   ${slide.title}
                 </h1>
                 <p class="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                   ${slide.subtitle}
                 </p>
                 <a href="#search-section" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/30 inline-flex items-center gap-2">
                   শুরু করুন <i data-lucide="arrow-right" class="h-5 w-5"></i>
                 </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Navigation Arrows -->
      <button id="prev-slide" class="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/10 transform hover:scale-110">
        <i data-lucide="chevron-left" class="h-8 w-8"></i>
      </button>
      <button id="next-slide" class="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/10 transform hover:scale-110">
        <i data-lucide="chevron-right" class="h-8 w-8"></i>
      </button>

      <!-- Dots -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        ${slides.map((_, i) => `
          <button class="slider-dot w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}" data-index="${i}"></button>
        `).join('')}
      </div>
    </div>
    
    <!-- Search Section (Moved down) -->
    <div id="search-section" class="relative -mt-8 z-20 max-w-2xl mx-auto px-4 mb-16">
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative">
          <input type="text" id="home-search" placeholder="ওষুধ বা রোগের নাম লিখুন..." 
            class="w-full pl-14 pr-6 py-5 rounded-full border border-slate-200 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none text-lg shadow-xl shadow-slate-200/50 transition-all placeholder:text-slate-400 text-slate-700"
          />
          <div class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
            <i data-lucide="search" class="h-6 w-6"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <a href="./materia-medica.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
          <i data-lucide="book-open" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">মেটেরিয়া মেডিকা</h3>
        <p class="text-slate-500 leading-relaxed">বিভিন্ন ওষুধের বিস্তারিত বিবরণ এবং লক্ষণসমূহ জানুন।</p>
      </a>
      
      <a href="./organon.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-blue-600">
          <i data-lucide="file-text" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">অর্গানন অফ মেডিসিন</h3>
        <p class="text-slate-500 leading-relaxed">হ্যানিম্যানের চিকিৎসা দর্শনের মূলনীতিসমূহ।</p>
      </a>

      <a href="./symptoms.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 text-purple-600">
          <i data-lucide="activity" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">লক্ষণ ভিত্তিক</h3>
        <p class="text-slate-500 leading-relaxed">রোগের লক্ষণ অনুযায়ী সঠিক ওষুধ নির্বাচন করুন।</p>
      </a>

      <a href="./blog.html" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-100 hover:-translate-y-1 transition-all duration-300 group text-left">
        <div class="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 text-orange-600">
          <i data-lucide="leaf" class="h-7 w-7"></i>
        </div>
        <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-orange-700 transition-colors">স্বাস্থ্য ব্লগ</h3>
        <p class="text-slate-500 leading-relaxed">হোমিওপ্যাথি বিষয়ক বিভিন্ন প্রবন্ধ ও টিপস।</p>
      </a>
    </div>

    <!-- About Section -->
    <div class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-slate-900 mb-8">কেন হোমিওপ্যাথি বেছে নেবেন?</h2>
            <div class="space-y-8">
              <div class="flex gap-5 group">
                <div class="bg-teal-50 p-4 rounded-2xl h-fit group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
                  <i data-lucide="leaf" class="h-6 w-6"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-slate-900 mb-2">পার্শ্বপ্রতিক্রিয়াহীন</h3>
                  <p class="text-slate-600 leading-relaxed">প্রাকৃতিক উপাদান থেকে তৈরি, তাই শরীরের কোনো ক্ষতি করে না।</p>
                </div>
              </div>
              <div class="flex gap-5 group">
                <div class="bg-teal-50 p-4 rounded-2xl h-fit group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
                  <i data-lucide="activity" class="h-6 w-6"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-slate-900 mb-2">স্থায়ী আরোগ্য</h3>
                  <p class="text-slate-600 leading-relaxed">রোগের মূল কারণ নির্মূল করে স্থায়ী সমাধান দেয়।</p>
                </div>
              </div>
              <div class="flex gap-5 group">
                <div class="bg-teal-50 p-4 rounded-2xl h-fit group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
                  <i data-lucide="book-open" class="h-6 w-6"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-slate-900 mb-2">ব্যক্তিভিত্তিক চিকিৎসা</h3>
                  <p class="text-slate-600 leading-relaxed">প্রতিটি রোগীর শারীরিক ও মানসিক লক্ষণ বিচার করে ওষুধ দেওয়া হয়।</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-lg relative overflow-hidden">
            <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            <blockquote class="text-2xl font-medium text-slate-800 italic mb-8 relative z-10 leading-relaxed">
              "চিকিৎসকের একমাত্র এবং মহৎ উদ্দেশ্য হলো রোগীকে দ্রুত, আলতোভাবে এবং স্থায়ীভাবে আরোগ্য প্রদান করা।"
            </blockquote>
            <div class="flex items-center gap-5">
              <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-lg">S</div>
              <div>
                <div class="font-bold text-xl text-slate-900">স্যামুয়েল হ্যানিম্যান</div>
                <div class="text-teal-600 font-medium">হোমিওপ্যাথির জনক</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest Blog Section -->
    <div class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-6">সাম্প্রতিক স্বাস্থ্য কথা</h2>
          <p class="text-slate-600 max-w-2xl mx-auto text-lg">
            আমাদের বিশেষজ্ঞ ডাক্তারদের লেখা সর্বশেষ ব্লগ এবং পরামর্শ।
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${blogPosts.slice(0, 3).map(post => `
            <a href="./blog.html" class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-100 transition-all duration-300 group flex flex-col h-full">
              <div class="h-56 bg-slate-100 relative overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-600 shadow-sm">
                  ${post.category}
                </div>
              </div>
              <div class="p-8 flex flex-col flex-grow">
                <div class="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <i data-lucide="calendar" class="h-4 w-4"></i>
                  <span>${post.date}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">${post.title}</h3>
                <p class="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">${post.excerpt}</p>
                <div class="flex items-center gap-2 text-teal-600 font-bold text-sm mt-auto group/btn">
                  পড়ুন <i data-lucide="arrow-right" class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
        <div class="text-center mt-12">
          <a href="./blog.html" class="inline-flex items-center gap-2 bg-white text-slate-700 hover:text-teal-700 border border-slate-200 hover:border-teal-200 px-8 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
            সব ব্লগ দেখুন <i data-lucide="arrow-right" class="h-4 w-4"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  // Slider Logic
  let currentSlide = 0;
  const totalSlides = slides.length;
  // track is no longer used for transform, but we keep the variable if needed or remove it. 
  // Actually, we don't need to manipulate track style anymore.
  const dots = document.querySelectorAll('.slider-dot');
  const slideItems = document.querySelectorAll('.slide-item');
  
  const updateSlider = () => {
    // Update active class on slides for animation and fade
    slideItems.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.remove('opacity-0', 'z-0');
        slide.classList.add('opacity-100', 'z-10', 'slide-active');
      } else {
        slide.classList.remove('opacity-100', 'z-10', 'slide-active');
        slide.classList.add('opacity-0', 'z-0');
      }
    });

    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('bg-white', 'w-8');
        dot.classList.remove('bg-white/50');
      } else {
        dot.classList.remove('bg-white', 'w-8');
        dot.classList.add('bg-white/50');
      }
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  };

  let timer = setInterval(nextSlide, 5000);

  const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
  };

  document.getElementById('next-slide')?.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  document.getElementById('prev-slide')?.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt((e.target as HTMLElement).dataset.index || '0');
      currentSlide = index;
      updateSlider();
      resetTimer();
    });
  });

  // Search Logic
  const searchInput = document.getElementById('home-search') as HTMLInputElement;
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        window.location.href = `./materia-medica.html?q=${encodeURIComponent(searchInput.value)}`;
      }
    });
  }

  // Re-init icons for the new slider elements
  createIcons({ icons: { Leaf, Search, BookOpen, Activity, FileText, Calendar, ArrowRight, ChevronLeft, ChevronRight } });
};

// Materia Medica Logic
const renderMateriaMedica = () => {
  const app = document.getElementById('app-materia');
  if (!app) return;

  // Get query param
  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get('q') || '';

  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">মেটেরিয়া মেডিকা</h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">
          হোমিওপ্যাথিক ওষুধের বিস্তারিত বিবরণ, উৎস এবং লক্ষণসমূহ।
        </p>
      </div>

      <div class="max-w-2xl mx-auto mb-16">
        <div class="relative group">
          <input type="text" id="med-search" value="${initialQuery}" placeholder="ওষুধ খুঁজুন..." 
            class="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all shadow-sm group-hover:shadow-md text-lg placeholder:text-slate-400 text-slate-700"
          />
          <div class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
            <i data-lucide="search" class="h-6 w-6"></i>
          </div>
        </div>
      </div>

      <div id="med-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Medicines will be injected here -->
      </div>
    </div>
    
    <!-- Modal Container -->
    <div id="med-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-all duration-300">
      <div class="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all scale-100">
        <div id="med-modal-content"></div>
      </div>
    </div>
  `;

  const grid = document.getElementById('med-grid');
  const searchInput = document.getElementById('med-search') as HTMLInputElement;
  const modal = document.getElementById('med-modal');
  const modalContent = document.getElementById('med-modal-content');

  const renderList = (filter: string) => {
    if (!grid) return;
    const filtered = medicines.filter(m => 
      m.name.toLowerCase().includes(filter.toLowerCase()) || 
      m.mainSymptoms.some(s => s.toLowerCase().includes(filter.toLowerCase()))
    );

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="col-span-full text-center py-20">
        <div class="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="search" class="h-8 w-8 text-slate-400"></i>
        </div>
        <p class="text-slate-500 text-lg">কোনো ওষুধ পাওয়া যায়নি</p>
      </div>`;
      return;
    }

    grid.innerHTML = filtered.map(m => `
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-100 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        
        <div class="flex items-start justify-between mb-6 relative">
          <div class="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-teal-600">
            <i data-lucide="leaf" class="h-6 w-6"></i>
          </div>
          <span class="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 group-hover:border-teal-200 transition-colors">
            ${m.source}
          </span>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">${m.name}</h3>
        <p class="text-sm text-slate-500 mb-6 italic font-medium">${m.commonName}</p>
        <p class="text-slate-600 text-sm line-clamp-3 mb-8 flex-grow leading-relaxed">${m.description}</p>
        <button data-id="${m.id}" class="view-details w-full mt-auto flex items-center justify-center gap-2 bg-slate-50 text-slate-700 py-3 rounded-xl hover:bg-teal-600 hover:text-white transition-all font-semibold text-sm group-hover:shadow-lg group-hover:shadow-teal-500/20">
          বিস্তারিত দেখুন <i data-lucide="chevron-right" class="h-4 w-4"></i>
        </button>
      </div>
    `).join('');

    // Re-attach listeners
    document.querySelectorAll('.view-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        openModal(id!);
      });
    });
    createIcons({ icons: { Leaf, ChevronRight, Search } });
  };

  const openModal = (id: string) => {
    const med = medicines.find(m => m.id === id);
    if (!med || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="relative">
        <div class="bg-slate-900 text-white p-8 sticky top-0 z-10">
          <div class="flex justify-between items-start">
            <div>
              <h2 class="text-3xl font-bold mb-2">${med.name}</h2>
              <div class="flex items-center gap-3 text-slate-300 text-sm">
                <span class="bg-slate-800 px-3 py-1 rounded-full">${med.commonName}</span>
                <span>•</span>
                <span class="bg-slate-800 px-3 py-1 rounded-full">${med.source}</span>
              </div>
            </div>
            <button id="close-modal" class="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
              <i data-lucide="x" class="h-6 w-6"></i>
            </button>
          </div>
        </div>
        
        <div class="p-8 space-y-10">
          <div>
            <h3 class="flex items-center gap-2 font-bold text-slate-900 text-lg mb-4 border-b border-slate-100 pb-3">
              <i data-lucide="file-text" class="h-5 w-5 text-teal-600"></i> বর্ণনা
            </h3>
            <p class="text-slate-600 leading-relaxed text-lg">${med.description}</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-teal-50/50 rounded-2xl p-6 border border-teal-100">
              <h3 class="font-bold text-teal-900 mb-4 flex items-center gap-2 text-lg">
                <i data-lucide="activity" class="h-5 w-5 text-teal-600"></i> প্রধান লক্ষণ
              </h3>
              <ul class="space-y-3">
                ${med.mainSymptoms.map(s => `<li class="flex gap-3 text-slate-700 leading-relaxed"><span class="text-teal-500 font-bold text-lg leading-none">•</span>${s}</li>`).join('')}
              </ul>
            </div>

            <div class="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
              <h3 class="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                <i data-lucide="book-open" class="h-5 w-5 text-blue-600"></i> মানসিক লক্ষণ
              </h3>
              <ul class="space-y-3">
                ${med.mentalSymptoms.map(s => `<li class="flex gap-3 text-slate-700 leading-relaxed"><span class="text-blue-500 font-bold text-lg leading-none">•</span>${s}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i data-lucide="thermometer" class="h-5 w-5 text-slate-600"></i> হ্রাস-বৃদ্ধি (Modalities)
            </h3>
            <div class="grid md:grid-cols-2 gap-6 text-sm">
              <div class="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                <span class="font-bold text-red-600 block mb-2 flex items-center gap-2"><i data-lucide="arrow-up" class="h-4 w-4"></i> বৃদ্ধি (Aggravation):</span>
                <p class="text-slate-600 leading-relaxed">${med.modalities.aggravation}</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                <span class="font-bold text-green-600 block mb-2 flex items-center gap-2"><i data-lucide="arrow-down" class="h-4 w-4"></i> উপশম (Amelioration):</span>
                <p class="text-slate-600 leading-relaxed">${med.modalities.amelioration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    createIcons({ icons: { X, FileText, Activity, BookOpen, Thermometer, ArrowUp, ArrowDown } });

    document.getElementById('close-modal')?.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderList((e.target as HTMLInputElement).value));
  }
  
  // Close modal on outside click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  renderList(initialQuery);
};

// Organon Logic
const renderOrganon = () => {
  const app = document.getElementById('app-organon');
  if (!app) return;

  app.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">অর্গানন অফ মেডিসিন</h1>
        <p class="text-slate-600 text-lg">
          স্যামুয়েল হ্যানিম্যান প্রবর্তিত হোমিওপ্যাথির মূলনীতিসমূহ।
        </p>
      </div>

      <div class="space-y-8">
        ${organonPrinciples.map((principle, index) => `
          <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-300 group">
            <div class="flex gap-6 items-start">
              <div class="hidden md:flex bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                ${principle.id}
              </div>
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <span class="md:hidden bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                    ${principle.id}
                  </span>
                  <h3 class="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">${principle.title}</h3>
                </div>
                <p class="text-slate-600 leading-relaxed text-lg">
                  ${principle.content}
                </p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

// Symptoms Logic
const renderSymptoms = () => {
  const app = document.getElementById('app-symptoms');
  if (!app) return;

  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">লক্ষণ ভিত্তিক চিকিৎসা</h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">
          শরীরের বিভিন্ন অংশের লক্ষণ অনুযায়ী রোগ ও তার প্রতিকার খুঁজুন।
        </p>
      </div>

      <div class="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
        ${symptomCategories.map(category => `
          <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
            <div class="bg-purple-50/50 p-6 border-b border-purple-100">
              <h2 class="text-2xl font-bold text-purple-900 flex items-center gap-3">
                <div class="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <i data-lucide="activity" class="h-6 w-6"></i>
                </div>
                ${category.name}
              </h2>
            </div>
            <div class="p-8">
              ${category.diseases.length > 0 ? `
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${category.diseases.map(disease => `
                  <button 
                    data-cat="${category.id}" 
                    data-dis="${disease.id}"
                    class="disease-btn text-left p-5 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50 hover:shadow-md transition-all group bg-slate-50/50"
                  >
                    <div class="font-bold text-slate-800 group-hover:text-purple-900 mb-2 text-lg">${disease.name}</div>
                    <div class="text-xs text-slate-500 flex items-center gap-1 font-medium group-hover:text-purple-600">
                      উপযুক্ত ওষুধ দেখুন <i data-lucide="chevron-right" class="h-3 w-3 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </button>
                `).join('')}
              </div>
              ` : `
              <div class="text-center py-8 text-slate-400">
                <i data-lucide="clock" class="h-12 w-12 mx-auto mb-3 opacity-50"></i>
                <p class="text-lg">শীঘ্রই আসছে...</p>
              </div>
              `}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Modal -->
    <div id="symptom-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-all duration-300">
      <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all scale-100">
        <div id="symptom-modal-content"></div>
      </div>
    </div>
  `;

  const modal = document.getElementById('symptom-modal');
  const modalContent = document.getElementById('symptom-modal-content');

  const openModal = (catId: string, disId: string) => {
    const category = symptomCategories.find(c => c.id === catId);
    const disease = category?.diseases.find(d => d.id === disId);
    
    if (!disease || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="relative">
        <div class="bg-slate-900 text-white p-8 sticky top-0 z-10 flex justify-between items-center">
          <div>
            <h2 class="text-3xl font-bold mb-1">${disease.name}</h2>
            <p class="text-slate-400 text-sm mt-1">সবচেয়ে উপযুক্ত ৫টি ওষুধ ও লক্ষণ</p>
          </div>
          <button id="close-sym-modal" class="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
            <i data-lucide="x" class="h-6 w-6"></i>
          </button>
        </div>
        
        <div class="p-8 grid md:grid-cols-2 gap-6 bg-slate-50">
          ${disease.remedies.map((remedy, idx) => `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group">
              <div class="flex items-center gap-4 mb-4 border-b border-slate-100 pb-3">
                <span class="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  ${idx + 1}
                </span>
                <h3 class="font-bold text-xl text-slate-900 group-hover:text-purple-700 transition-colors">${remedy.name}</h3>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-teal-700 text-sm mb-2 flex items-center gap-1">
                    <i data-lucide="activity" class="h-4 w-4"></i> প্রধান লক্ষণ
                  </h4>
                  <ul class="space-y-2">
                    ${(remedy.mainSymptoms || remedy.symptoms || []).map((s) => `
                      <li class="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <i data-lucide="check-circle" class="h-3.5 w-3.5 text-teal-500 mt-0.5 flex-shrink-0"></i>
                        <span>${s}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>

                ${remedy.mentalSymptoms && remedy.mentalSymptoms.length > 0 ? `
                <div>
                  <h4 class="font-semibold text-blue-700 text-sm mb-2 flex items-center gap-1">
                    <i data-lucide="book-open" class="h-4 w-4"></i> মানসিক লক্ষণ
                  </h4>
                  <ul class="space-y-2">
                    ${remedy.mentalSymptoms.map((s) => `
                      <li class="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <i data-lucide="check-circle" class="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0"></i>
                        <span>${s}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>
                ` : ''}

                ${remedy.modalities ? `
                <div class="bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                  <h4 class="font-semibold text-orange-800 text-sm mb-2 flex items-center gap-1">
                    <i data-lucide="thermometer" class="h-4 w-4"></i> হ্রাস-বৃদ্ধি
                  </h4>
                  <div class="space-y-1 text-xs text-slate-600">
                    <p><span class="font-medium text-red-600">বৃদ্ধি:</span> ${remedy.modalities.aggravation}</p>
                    <p><span class="font-medium text-green-600">উপশম:</span> ${remedy.modalities.amelioration}</p>
                  </div>
                </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    createIcons({ icons: { X, CheckCircle, Activity, ChevronRight, Pill, BookOpen, Thermometer } });

    document.getElementById('close-sym-modal')?.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.disease-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      openModal(el.dataset.cat!, el.dataset.dis!);
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
};

// Blog Logic
const renderBlog = () => {
  const app = document.getElementById('app-blog');
  if (!app) return;

  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">স্বাস্থ্য ব্লগ</h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">
          হোমিওপ্যাথি চিকিৎসা বিষয়ক বিভিন্ন প্রবন্ধ, টিপস এবং পরামর্শ।
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${blogPosts.map(post => `
          <article class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-100 transition-all duration-300 group flex flex-col h-full">
            <div class="h-56 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
              <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm">
                ${post.category}
              </div>
            </div>
            <div class="p-8 flex flex-col flex-grow">
              <div class="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <i data-lucide="calendar" class="h-4 w-4"></i>
                <span>${post.date}</span>
                <span>•</span>
                <span class="text-orange-600 font-medium">${post.author}</span>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-700 transition-colors line-clamp-2">${post.title}</h2>
              <p class="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">${post.excerpt}</p>
              <button data-id="${post.id}" class="blog-read-more flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors mt-auto group/btn">
                আরও পড়ুন <i data-lucide="arrow-right" class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </article>
        `).join('')}
      </div>
    </div>

    <!-- Blog Modal -->
    <div id="blog-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-all duration-300">
      <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all scale-100">
        <div id="blog-modal-content" class="h-full flex flex-col"></div>
      </div>
    </div>
  `;

  const modal = document.getElementById('blog-modal');
  const modalContent = document.getElementById('blog-modal-content');

  const openModal = (postId: number) => {
    const post = blogPosts.find(p => p.id === postId);
    if (!post || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="relative h-full overflow-y-auto">
        <button id="close-blog-modal" class="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors shadow-lg border border-white/30">
          <i data-lucide="x" class="h-6 w-6"></i>
        </button>
        
        <div class="h-64 md:h-80 w-full relative">
           <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" referrerPolicy="no-referrer" />
           <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
           <div class="absolute bottom-0 left-0 p-8 text-white w-full">
             <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block shadow-sm">${post.category}</span>
             <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-2 text-shadow-sm">${post.title}</h2>
           </div>
        </div>

        <div class="p-8 md:p-10 bg-white">
          <div class="flex items-center gap-6 text-slate-500 text-sm mb-8 border-b border-slate-100 pb-6">
            <div class="flex items-center gap-2">
              <i data-lucide="calendar" class="h-4 w-4 text-orange-500"></i>
              <span>${post.date}</span>
            </div>
            <div class="flex items-center gap-2">
              <i data-lucide="user" class="h-4 w-4 text-orange-500"></i>
              <span class="font-medium text-slate-700">${post.author}</span>
            </div>
          </div>
          
          <div class="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
            ${post.content.split('\n').map(para => `<p class="mb-4">${para}</p>`).join('')}
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    createIcons({ icons: { X, Calendar, User } });

    document.getElementById('close-blog-modal')?.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.blog-read-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      // dataset.id is string, parse to int
      const id = parseInt(el.dataset.id || '0', 10);
      if (id) openModal(id);
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  createIcons({ icons: { Image, Calendar, ArrowRight } });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  
  // Route handling based on element existence
  renderHome();
  renderMateriaMedica();
  renderOrganon();
  renderSymptoms();
  renderBlog();

  initIcons();
});
