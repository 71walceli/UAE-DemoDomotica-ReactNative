import React from "react";
import { Form, FormItem } from "react-native-form-component";
import { Button, Modal } from "react-native";
//import Modal from "react-native-form-component";
import { About } from "./About";

export const AppContext = React.createContext();

export const Config = () => {
  const { config, setConfig } = React.useContext(AppContext);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Form hideSubmitButton>
        <FormItem
          label="Dirección Control Domótico"
          isRequired
          value={config.apiAddress}
          onChangeText={(apiAddress) =>
            setConfig((_config) => ({ ..._config, apiAddress }))
          }
          asterik
        />
        <Button title="Acerca de ..." onPress={() => setShowModal(true)} />
        <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
          <About />
        </Modal>
      </Form>
    </>
  );
};
