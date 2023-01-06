import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ handleSubmit, handleChange, buyer }) => {
  return (
    <div className='checkout-form'>
      <p className='checkout-form__description'>
        Fill out this form to complete your purchase
      </p>
      <form className='checkout-form__form' onSubmit={handleSubmit}>
        <label className='checkout-form__label' htmlFor='name'>
          Name
        </label>
        <input
          className='checkout-form__input'
          type='text'
          name='name'
          id='name'
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <br />
        <label className='checkout-form__label' htmlFor='email'>
          Email
        </label>
        <input
          className='checkout-form__input'
          type='email'
          name='email'
          id='email'
          value={buyer.email}
          onChange={handleChange}
          required
        />
        <br />
        <label className='checkout-form__label' htmlFor='phone'>
          Phone
        </label>
        <input
          className='checkout-form__input'
          type='tel'
          name='phone'
          id='phone'
          value={buyer.phone}
          onChange={handleChange}
          required
        />
        <br />
        <label className='checkout-form__label' htmlFor='address'>
          Address
        </label>
        <input
          className='checkout-form__input'
          type='text'
          name='address'
          id='address'
          value={buyer.address}
          onChange={handleChange}
          required
        />
        <br />
        <button className='checkout-form__button' type='submit'>
          Submit Order
        </button>
      </form>
    </div>
  );
};
export default CheckoutForm;
