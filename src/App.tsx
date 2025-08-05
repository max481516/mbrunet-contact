import OfferAccordion from "./components/Accordion";
import ActionButtons from "./components/ActionButtons";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import PortfolioLink from "./components/PortfolioLink";
import ProfileCard from "./components/ProfileCard";
import ProjectsCarousel from "./components/ProjectsCarousel";

function App() {
  return (
    <>
      <Nav />
      <ProfileCard />
      <ActionButtons />
      <ProjectsCarousel />
      <PortfolioLink />
      <OfferAccordion />
      <ContactMe onFormClick={() => console.log("Form clicked")} />
    </>
  );
}

export default App;
