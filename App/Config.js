import React from "react";
import { Form, FormItem } from "react-native-form-component";
import { AppContext } from "./App";

export const Config = () => {
  const {config, setConfig} = React.useContext(AppContext)

  return <>
    <Form hideSubmitButton>
      <FormItem
        label="Dirección Control Domótico"
        isRequired
        value={config.apiAddress}
        onChangeText={(apiAddress) => setConfig(_config => ({..._config, apiAddress}))}
        asterik />
    </Form>
  </>;
}
