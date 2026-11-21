import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello } from "./Hello";
import { UserProfle } from "./UserProfile";
import { StyledFrom } from "./StyledFrom";
import { ContactForm } from "./ContactForm";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";

function App() {
  return (
    <>
      <Product
        title="Gaming laptop"
        price={1299.99}
        inStock={true}
        catgories={["Electronics", "Computers", "Gaming"]}
      />
      <StyledFrom />
      <ContactForm />
      <UserProfle />
      <Hello />
      <Welcome />
      <Button />
      <CandidateProfile />
    </>
  );
}

export default App;
