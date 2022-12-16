import { Button, Input, Modal, Text } from '@nextui-org/react';
import { useWeb3 } from '../../context/web3';
import { useState } from 'react';

interface CreateCampaignProps {
  visible: boolean;
  closeHandler: () => void;
}

function CreateCampaignModal({ closeHandler, visible }: CreateCampaignProps) {
  const { createCampaign, setIsLoading, isLoading } = useWeb3();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = async () => {
    setIsLoading(true);

    try {
      createCampaign(title, description);
      closeHandler();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Launch your
          <Text b size={18}>
            {' '}
            Campaign
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Campaign title"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Description"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Close
        </Button>
        <Button auto onClick={submitHandler}>
          {!isLoading ? 'Launch 🚀' : 'Launching...'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateCampaignModal;
