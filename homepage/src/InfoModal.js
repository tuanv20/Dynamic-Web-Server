import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalButton(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{color: '"#00008B', textDecoration: 'none'}} onClick={toggle}>
        Welcome to my Website
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>How It Was Made</ModalHeader>
        <ModalBody>
          My website is run on a node.js express server, containerized with Docker,
          and deployed on fly.io. This homepage is comprised entirely of Reactstrap 
          components. You can use the Navbar to navigate to my Github, resume, and 
          some of my personal projects. 
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
