import './App.css';
import Navebar from './components/Navebar/Navebar';
import AboutMe from './Pages/HomePage/AboutMe';
import Certificate from './Pages/HomePage/Certificate';
import Comments from './Pages/HomePage/Comments';
import CoursesTracks from './Pages/HomePage/CoursesTracks';
import HeroSection from './Pages/HomePage/HeroSection';
import Questions from './Pages/HomePage/Questions';
import Technologys from './Pages/HomePage/Technologys';
import WhyChooseMe from './Pages/HomePage/WhyChooseMe';

function App() {
  return (
    <>
      <Navebar />
      <HeroSection />
      <AboutMe />
      <Technologys />
      <WhyChooseMe />
      <CoursesTracks />
      <Certificate />
      <Comments />
      <Questions />

    </>
  );
}

export default App;
