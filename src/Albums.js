import * as React from "react";
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, TextInput, SelectInput, SimpleForm, ReferenceInput, Create, ImageField, useListContext, DateField, Labeled, ImageInput, TabbedForm, FormTab, ReferenceManyField, DeleteButton, TabbedShowLayout, Tab, ShowButton, Show, SimpleShowLayout, RichTextField } from 'react-admin';
const AlbumsTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


export const AlbumsList = props => (
    <List title="Álbuns" {...props}>
        <Datagrid label="Original image">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton/>
            <ShowButton/>
        </Datagrid>
       
    </List>
);
export const AlbumsEdit = props => (
    <Edit title={<AlbumsTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Álbum">
                <ReferenceInput source="userId" reference="users" label="">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextField source="title"/>
            </FormTab>
            <FormTab label="Imagens">
                <ReferenceManyField reference="photos" target="albumId" label="">
                    <Datagrid>
                        <ImageField source="thumbnailUrl" label="Imagem"/>
                        <DeleteButton label="Ação"/>
                    </Datagrid>
                </ReferenceManyField>

            </FormTab>
        </TabbedForm>
    </Edit>
);
export const AlbumsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);
export const AlbumsShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
        <Tab label="Detalhes">
            <ReferenceField source="userId" reference="users" label="">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
        </Tab>
        <Tab label="Imagens" >
            <ReferenceManyField  reference="photos" target="albumId" label="">
                <Datagrid>
                    <TextField source="title" />
                    <ImageField source="url" />
                </Datagrid>
            </ReferenceManyField>

        </Tab>
        </TabbedShowLayout>
    </Show>
);