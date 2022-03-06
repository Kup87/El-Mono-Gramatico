import NavDropdown from 'react-bootstrap/NavDropdown';

function SocialMediaLinks({titulo,link}) {

  return (
    <>
    <NavDropdown.Item href= {link} target="_blank" >{titulo}</NavDropdown.Item>
    </>
  )
}

export default SocialMediaLinks