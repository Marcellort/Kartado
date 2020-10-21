import * as React from "react";
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource, ListGuesser, Filter, Create, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate, PostShow  } from "./posts";
import { AlbumsList, AlbumsEdit, AlbumsCreate, AlbumsShow } from "./Albums";
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import ImageIcon from '@material-ui/icons/Image';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import { ImageCreate, ImageEdit, ImageList } from "./image";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} filter={Filter} />
      <Resource name="users" />
      <Resource name="albums" list={AlbumsList} edit={AlbumsEdit} create={AlbumsCreate} show={AlbumsShow} icon={PhotoAlbumIcon}/>
      <Resource name="comments"/>
      <Resource name="todos" />
      <Resource name="photos" list={ImageList} edit={ImageEdit} create={ImageCreate} edit={ImageEdit} icon={ImageIcon} />
    </Admin>
);

export default App;