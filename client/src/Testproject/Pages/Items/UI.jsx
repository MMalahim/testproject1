import React from "react";
import "./Style.css";

import { Switch, Route } from 'react-router-dom';

const UI = ({ ItemSubmit, itemsIn, history, setName, setContact, setItem, setDescription, UpdateSubmit, handleDelete }) => {
  return (
    <>
      <div className="Items">
        <Switch>
          <Route exact path="/" render={
            () => (
              <Requests
                itemsIn={itemsIn}
                history={history}
                handleDelete={handleDelete}
              />
            )
          } />
          <Route exact path="/items_form" render={
            () => (
              <ItemsForm
                ItemSubmit={ItemSubmit}
                setName={setName}
                setContact={setContact}
                setItem={setItem}
                setDescription={setDescription}
              />
            )
          } />
          <Route exact path="/update_form/:id" render={
            () => (
              <UpdateForm
                UpdateSubmit={UpdateSubmit}
                setName={setName}
                setContact={setContact}
                setItem={setItem}
                setDescription={setDescription}
              />
            )
          } />

        </Switch>
      </div>
    </>
  );
};

export default UI;

const Requests = ({ itemsIn, history, handleDelete }) => {
  return (
    <>
      <div className="Items_list">
        <button className="btn green d-block w-25 ml-auto mb-3" onClick={() => history.push('/items_form')} >Form</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Item</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemsIn.map(
                (data, id) => {
                  return (
                    <>
                      <tr className="tableRow">

                        <td>{id + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.contact}</td>
                        <td>{data.item}</td>
                        <td>{data.description}</td>
                        <div className="displayonHover">
                          <button className="btn edit d-block" onClick={() => history.push('/update_form/' + id)} >Edit</button>
                          <button className="btn cancle d-block" onClick={() => history.push(e => handleDelete(data.id))} >Delete</button>
                        </div>
                      </tr>
                    </>
                  )
                }
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

const ItemsForm = ({ ItemSubmit, setName, setContact, setItem, setDescription }) => {
  return (
    <div className="ItemsForm">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="heading">New Item Form</h3>
      </div>
      <hr />
      <form className="ItemsForm_form" id="ItemsForm_form" onSubmit={ItemSubmit}>
        <fieldset>
          <label className="mb-0 font-weight-bold">Name</label>
          <input
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
            className="form-control mb-2"
            required
          />
          <label className="mb-0 font-weight-bold">Contact Number</label>
          <input
            type="text"
            name="contact"
            onChange={e => setContact(e.target.value)}
            className="form-control mb-2"
            required
          />
          <label className="mb-0 font-weight-bold">Item</label>
          <input
            type="text"
            name="item"
            onChange={e => setItem(e.target.value)}
            className="form-control mb-2"
            required
          />
          <label className="mb-0 font-weight-bold">Description</label>
          <textarea
            type="text"
            name="description"
            onChange={e => setDescription(e.target.value)}
            className="form-control mb-2"
            minLength={15}
            required
          />

          <button className="btn submit d-block ml-auto">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

const UpdateForm = ({ UpdateSubmit, setName, setContact, setItem, setDescription }) => {
  return (
    <div className="UpdateForm">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="heading">Update Item Form</h3>
      </div>
      <hr />
      <form className="ItemsForm_form" id="ItemsForm_form" onSubmit={UpdateSubmit}>
        <fieldset>
          <label className="mb-0 font-weight-bold">Name</label>
          <input
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
            className="form-control mb-2"
            required
          />
          <label className="mb-0 font-weight-bold">Contact Number</label>
          <input
            type="text"
            name="contact"
            onChange={e => setContact(e.target.value)}
            className="form-control mb-2"
            required
          />
          <label className="mb-0 font-weight-bold">Item</label>
          <input
            type="text"
            name="item"
            onChange={e => setItem(e.target.value)}
            className="form-control mb-2"
            required
          />
          <label className="mb-0 font-weight-bold">Description</label>
          <textarea
            type="text"
            name="description"
            onChange={e => setDescription(e.target.value)}
            className="form-control mb-2"
            minLength={15}
            required
          />

          <button className="btn submit d-block ml-auto">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};
