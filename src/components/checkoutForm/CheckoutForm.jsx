import React from 'react';

const CheckoutForm = ({ handleSubmit, changeHandler, buyer }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={buyer.name}
        onChange={changeHandler}
        required
      />
      <br />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        value={buyer.email}
        onChange={changeHandler}
        required
      />
      <br />
      <label htmlFor='phone'>Phone</label>
      <input
        type='tel'
        name='phone'
        id='phone'
        value={buyer.phone}
        onChange={changeHandler}
        required
      />
      <br />
      <label htmlFor='address'>Address</label>
      <input
        type='text'
        name='address'
        id='address'
        value={buyer.address}
        onChange={changeHandler}
        required
      />
      <br />
      <button type='submit'>Submit Order</button>
    </form>
  );
};

export default CheckoutForm;
