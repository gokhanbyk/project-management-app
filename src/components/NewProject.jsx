import React from 'react';

function NewProject() {
  return (
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu>
      <div>
        <p>
          <label htmlFor="">Title</label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </p>
        <p>
          <label htmlFor="">Due Date</label>
          <input type="date" />
        </p>
      </div>
    </div>
  );
}

export default NewProject;