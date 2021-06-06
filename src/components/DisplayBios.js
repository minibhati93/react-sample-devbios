import DeveloperBio from "./DeveloperBio";

function DisplayBios(props) {
  return(
    props.developers.map(dev =>
      <DeveloperBio developers={dev} key={dev.id}/>)
  )
}

export default DisplayBios;