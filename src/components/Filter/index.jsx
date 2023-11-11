export const  Filter = ({ value, onChange }) => {
  return (
    <label>
      <p>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </label>
  );
};
