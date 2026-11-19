import './App.css'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Hello } from './Hello'
import { UserProfle } from './UserProfile'
import { StyledFrom } from './StyledFrom'
import { ContactForm } from './ContactForm'
import { CandidateProfile } from './CandidateProfile'

function App() {
  return (
    <>
      <StyledFrom />
      <ContactForm />
      <UserProfle />
      <Hello />
      <Welcome />
      <Button />
      <CandidateProfile />
    </>
  )
}

export default App
