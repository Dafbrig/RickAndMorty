export default function SearchBar({ onSearch }) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => onSearch('Esto es un ID')}>Agregar</button>
      </div>
   );
}
