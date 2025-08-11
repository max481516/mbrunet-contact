import * as React from "react";
import OfferAccordion from "./components/Accordion";
import ActionButtons from "./components/ActionButtons";
import Links from "./components/Links";
import AppShell from "./components/AppShell";
import ContactMe from "./components/ContactMe";
import Nav from "./components/Nav";
import PortfolioLink from "./components/PortfolioLink";
import ProfileCard from "./components/ProfileCard";
import ProjectsCarousel from "./components/ProjectsCarousel";
import ContactDialog from "./components/ContactDialog";
import { Toaster } from "sonner";

function App() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <AppShell>
      <Toaster position="top-center" richColors closeButton />
      <Nav onMessageClick={openContact} />
      <ProfileCard />
      <Links />
      <ActionButtons />
      <ProjectsCarousel />
      <PortfolioLink />
      <OfferAccordion />
      <ContactMe onFormClick={openContact} />
      <ContactDialog
        open={isContactOpen}
        onOpenChange={(o) => (o ? openContact() : closeContact())}
      />
    </AppShell>
  );
}

export default App;
