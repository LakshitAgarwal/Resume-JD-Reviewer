import UploadComp from "@/components/home/UploadComp";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <UploadComp />
      </main>

      <Footer />
    </div>
  );
}
