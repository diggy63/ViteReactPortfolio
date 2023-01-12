import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Homepage from '../Pages/Homepage';
import AboutMe from '../Pages/AboutMe';

export default function TabsNav() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Homepage />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <AboutMe />
      </Tab>
      
    </Tabs>
  );
}
