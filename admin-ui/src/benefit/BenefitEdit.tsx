import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BenefitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
