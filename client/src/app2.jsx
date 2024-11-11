// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
//   ]);
//   const [newName, setNewName] = useState('');
//   const [newNumber, setNewNumber] = useState('');
//   const [search, setSearch] = useState('');

//   const addContact = (e) => {
//     e.preventDefault();
//     if (!newName || !newNumber)
//       return alert('Please enter a valid name or number.');
//     if (persons.some((contact) => contact.name === newName))
//       return alert('Contact already exists.');

//     setPersons([...persons, { name: newName, number: newNumber }]);
//     setNewName('');
//     setNewNumber('');
//   };

//   const handleNameChange = (e) => {
//     setNewName(e.target.value.trim());
//   };
//   const handleNumberChange = (e) => {
//     setNewNumber(e.target.value.trim());
//   };
//   const handleSearchChange = (e) => {
//     setSearch(e.target.value.trim());
//   };

//   const filteredPersons =  persons.filter((person) =>
//         person.name.toLowerCase().includes(search.toLowerCase())
//       )

//   const personItem = filteredPersons.map((person) => (
//     <li key={person.id}>
//       {person.name} #{person.number}
//     </li>
//   ));

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div>filter shown with:</div>
//       <form onSubmit={addContact}>
//         <h2>
//           Add a new concat:{' '}
//           <input
//             type='text'
//             value={search}
//             onChange={handleSearchChange}
//             placeholder='Search by name'
//           />
//         </h2>
//         <div>
//           name:
//           <input type='text' onChange={handleNameChange} value={newName} />
//         </div>
//         <div>
//           number:
//           <input
//             type='number'
//             onChange={handleNumberChange}
//             value={newNumber}
//           />
//         </div>
//         <div>
//           <button type='submit'>add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <ul>{personItem}</ul>
//     </div>
//   );
// };
