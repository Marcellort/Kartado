import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, TextInput, SelectInput, SimpleForm, ReferenceInput, Create, Filter, TabbedForm, FormTab, ReferenceManyField, SingleFieldList, ChipField, DeleteButton, Show, SimpleShowLayout, RichTextField, NumberField, ShowButton, ReferenceArrayField, FileField, Tab, TabbedShowLayout } from 'react-admin';
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = props => (
    <List title='Postagens' filters={<PostFilter />} {...props}>
        <Datagrid>
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
            <ShowButton/>
        </Datagrid>
    </List>
);
export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Post" >

                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </FormTab>
            <FormTab label="Comentários" >
                <ReferenceManyField  reference="comments" target="postId">
                    <Datagrid>
                        <TextField source="name" />
                        <TextField source="body" />
                        <TextField source="postId" />
                        <DeleteButton/>
                    </Datagrid>
                </ReferenceManyField>

            </FormTab>
            
        </TabbedForm>
    </Edit>
);
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
export const PostShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Post">
                <ReferenceField source="userId" reference="users" label="Usuário">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" label="Titulo" />
                <RichTextField source="body" label="Texto" />
            </Tab>
            <Tab label="Comentários">
                <ReferenceManyField  reference="comments" target="postId" label="">
                    <Datagrid>
                        <TextField source="name" label="Usuário" />
                        <TextField source="body" label="Comentário" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
