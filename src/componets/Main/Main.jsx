import { Experience } from "../Experience/Experience"
import { Slider } from "../Achievement/Achievement"
import { StudyMaterials } from '../StudyMaterials/StudyMaterials'
import { UsefulLinks } from "../UsefulLinks/UsefulLinks"
import { Contacts } from "../Contacts/Contacts"
import { Photos } from "../Photos/Photos"
import { Reviews } from "../Reviews/Reviews"
// import { Test } from "../Test/Test"

export const Main = () => (
  <main>
    <Experience />
    <Slider />
    {/* <Test/> */}
    <StudyMaterials />
    <UsefulLinks />
    <Photos/>
    <Reviews/>
    <Contacts/>
  </main>
)