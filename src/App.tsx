import OfferAccordion from "./components/Accordion";
import ActionButtons from "./components/ActionButtons";
import AppShell from "./components/AppShell";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import PortfolioLink from "./components/PortfolioLink";
import ProfileCard from "./components/ProfileCard";
import ProjectsCarousel from "./components/ProjectsCarousel";

function App() {
  return (
    <AppShell>
      <Nav />
      <ProfileCard />
      <ActionButtons />
      <ProjectsCarousel />
      <PortfolioLink />
      <OfferAccordion />
      <ContactMe onFormClick={() => console.log("Form clicked")} />
    </AppShell>
  );
}

export default App;
