import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BenefitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
