import React, { useState, useEffect } from "react";
import UI from "./UI";
import axios from 'axios';
import { getItems } from './Functions';

import { useHistory, useParams } from 'react-router-dom';


const Items = () => {

  const history = useHistory();

  const { id } = useParams();

  const [itemsIn, setitemsIn] = useState([]);

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [item, setItem] = useState('');
  const [description, setDescription] = useState('');

  useEffect(
    () => {

      getItems(axios, setitemsIn);

    }, []
  )

  const ItemSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/items_form', { name, contact, item, description })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const UpdateSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8080/update_form' + id, { name, contact, item, description })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:8080/items' + id)
      .then(res => {
        window.location.reload();
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (


    <>
      <UI
        // for form
        ItemSubmit={ItemSubmit}
        setName={setName}
        setContact={setContact}
        setItem={setItem}
        setDescription={setDescription}
        // for request
        itemsIn={itemsIn}
        history={history}
        handleDelete={handleDelete}
        // for update
        UpdateSubmit={UpdateSubmit}
      />
    </>
  );
};

export default Items;
