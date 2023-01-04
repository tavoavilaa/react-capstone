import React from 'react'
import { useState } from 'react';



const ReservationForm = () => {
  // Use the useState hook to create state variables for each form input
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState('');

  // Create a function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Validate the form inputs and make the reservation
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <br />
      <label>
        Hora:
        <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
      </label>
      <br />
      <label>
        Número de invitados:
        <input type="number" value={guests} onChange={(event) => setGuests(event.target.value)} />
      </label>
      <br />
      <label>
        Ocasión:
        <select value={occasion} onChange={(event) => setOccasion(event.target.value)}>
          <option value=""></option>
          <option value="cumpleaños">Cumpleaños</option>
          <option value="aniversario">Aniversario</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Enviar reserva" />
    </form>

    
  );
}

export default ReservationForm