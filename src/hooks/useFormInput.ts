import React, { useState } from 'react';

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useFormInput;

// const MyFormComponent: React.FC = () => {
//   const firstName = useFormInput('');
//   const lastName = useFormInput('');

//   return (
//     <form>
//       <input type="text" />
//       <input type="text"  />
//     </form>
//   );
// };