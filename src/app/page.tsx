'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

function NavLinks() {
  return (
    <>
      <Link href="https://www.wecreatetech.org">
        <div className="text-lg font-bold uppercase hover:text-[#F11684] cursor-pointer">We Create Tech</div>
      </Link>
      <Link href="https://blog.wecreatetech.org">
        <div className="text-lg font-bold uppercase hover:text-[#F11684] cursor-pointer">News</div>
      </Link>
      <Link href="https://tally.so/r/w2VJjA">
        <div className="text-lg font-bold uppercase hover:text-[#F11684] cursor-pointer">Become a Member</div>
      </Link>
    </>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation Bar */}
      <div className={`fixed top-0 left-0 right-0 bg-white/90 z-50 backdrop-blur-md transition-shadow ${navShadow ? 'shadow-md' : ''}`}>
        <div className="flex justify-between items-center py-4 px-6">
          <Link href="/">
            <div className="text-2xl font-bold text-[#F11684] cursor-pointer">TechRise</div>
          </Link>

          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-[#F11684]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Nav links - desktop */}
          <div className="hidden sm:flex gap-6">
            <NavLinks />
          </div>
        </div>

        {/* Nav links - mobile dropdown */}
        <div className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-4 bg-white/90 border-t backdrop-blur-md">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-32 px-6 py-10 sm:px-10 text-center">
        <Image
          src="/home-banner.png"
          alt="TechRise Header"
          width={1200}
          height={400}
          className="w-full h-auto rounded-lg object-cover"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-[#F11684]">
          Welcome to TechRise by We Create Tech
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Your community to build skills, connections, and future tech careers.
        </p>

        {/* New Value Proposition */}
<div className="mt-8 text-center max-w-2xl mx-auto">
  <p className="inline-block font-semibold text-[#F11684]">Join a supportive tech community</p>
  <p className="inline-block text-gray-700"> that believes in your potential. </p><br/>

  <p className="inline-block font-semibold text-[#F11684]">Get career development resources</p>
  <p className="inline-block text-gray-700"> to boost your next move. </p><br/>

  <p className="inline-block font-semibold text-[#F11684]">Volunteer, earn hours, build your brand</p>
  <p className="inline-block text-gray-700"> — grow your impact. </p><br/>

  <p className="inline-block font-semibold text-[#F11684]">Access certificates and real-world tech projects</p>
  <p className="inline-block text-gray-700"> that matter. </p><br/>

  <p className="inline-block font-semibold text-[#F11684]">Help build college chapters</p>
  <p className="inline-block text-gray-700">  leading tech innovation on campus. </p>
</div>







      </div>

      {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 pt-8">
  <Link href="https://tally.so/r/w2VJjA">
    <div className="bg-[#F11684] hover:bg-[#c3146a] text-white px-6 py-3 rounded-lg text-center font-semibold transition cursor-pointer">
      Become a Member
    </div>
  </Link>
  <Link href="https://tally.so/r/nPgEd1">
    <div className="bg-[#6E4E42] hover:bg-[#5c4036] text-white px-6 py-3 rounded-lg text-center font-semibold transition cursor-pointer">
      Become an Advisor
    </div>
  </Link>
  <Link href="https://portal.goldenvolunteer.com/opportunities/Hy4xUivn6d">
    <div className="bg-[#13ABA6] hover:bg-[#0e8884] text-white px-6 py-3 rounded-lg text-center font-semibold transition cursor-pointer">
      Visit Volunteer Hub
    </div>
  </Link>
</div>


      {/* Background check note */}
      <p className="text-center text-sm text-gray-600 max-w-md mx-auto mb-12 italic">
        Heads up: Some volunteer opportunities may require a quick $20 background check — just keepin&apos; it safe for the kiddos.
      </p>

      {/* Info Section Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 px-6">
        {[
          {
            title: "About Us",
            href: "https://www.wecreatetech.org/about",
            vibe: "Peek behind the curtain and get to know our why and who.",
          },
          {
            title: "Fuel the Future – Support TechRise!",
            href: "https://www.every.org/we-create-tech-inc",
            vibe: "Every dollar helps us empower the next tech wave.",
          },
          {
            title: "Opportunities Vault",
            href: "https://2ly.link/27BAO",
            vibe: "Unlock tools, guides, entry level jobs for new grads with 0-2 years of experience.",
          },
        ].map(({ title, href, vibe }) => (
          <Link key={title} href={href}>
            <div className="bg-[#6E4E42] hover:bg-[#5c4036] text-white p-6 rounded-lg text-center shadow-lg cursor-pointer transition">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm">{vibe}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mb-8">
        <Link href="https://www.tiktok.com/@wecreatetech">
          <FaTiktok size={32} className="text-[#F11684] hover:text-[#c3146a] cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/wecreatetech/">
          <FaInstagram size={32} className="text-[#F11684] hover:text-[#c3146a] cursor-pointer" />
        </Link>
        <Link href="https://www.facebook.com/wecreatetechorg">
          <FaFacebook size={32} className="text-[#F11684] hover:text-[#c3146a] cursor-pointer" />
        </Link>
        <Link href="https://www.youtube.com/@wecreatetechofficial">
          <FaYoutube size={32} className="text-[#F11684] hover:text-[#c3146a] cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/company/we-create-tech/">
          <FaLinkedin size={32} className="text-[#F11684] hover:text-[#c3146a] cursor-pointer" />
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t pt-6 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} We Create Tech. Powered by TechRise.
      </footer>
    </div>
  );
}
