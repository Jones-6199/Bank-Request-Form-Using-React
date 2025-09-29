export default function ButtonForm({ disvalue, handTheChange }) {
  return (
    <>
      <label>Name: </label>
      <input 
        type="text" 
        value={disvalue.name}   // ✅ استعمل الخاصية
        onChange={(e) => handTheChange({ ...disvalue, name: e.target.value })}
      />
    </>
  );
}
