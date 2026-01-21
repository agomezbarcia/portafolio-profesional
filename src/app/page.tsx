import Header from '@/components/navigation/Header';
import Hero from '@/components/hero/Hero';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Education from '@/components/education/Education';
import Projects from '@/components/projects/Projects';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';
import { PORTFOLIO_DATA } from '@/lib/constants';

export const metadata = {
  title: `${PORTFOLIO_DATA.name} | Portfolio`,
  description: PORTFOLIO_DATA.bio,
};

export default function Home() {
  return (
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
        <Header />

        <main>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <ContactSection />
        </main>

        <Footer />
      </div>
  );
}