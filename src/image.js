import * as React from "react";
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, TextInput, SelectInput, SimpleForm, ReferenceInput, Create, ImageField, useListContext, DateField, Labeled, ImageInput } from 'react-admin';
const ImageTitle = ({ record }) => {
    return <span> {record ? `"${record.title}"` : ''}</span>;
};


export const ImageList = props => (
    <List title='Iamgens' filters={<ImageTitle />} {...props}>
        <Datagrid label="Original image">
            <TextField source="title" />
            <ImageField source="url" title="Picture" />
            
        </Datagrid>
       
    </List>
);
export const ImageEdit = props => (
    <Edit title={<ImageTitle />} {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ImageInput  source="url" />
        </SimpleForm>
    </Edit>
);
export const ImageCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="albumId" reference="albums">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <ImageInput source="url"/>
        </SimpleForm>
    </Create>
);