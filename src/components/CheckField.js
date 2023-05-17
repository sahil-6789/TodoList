import React from 'react';

const CheckField = ({  checked, onChange ,id}) => {
  return (
    <input type="checkbox"   checked={checked} onChange={onChange} />
  );
};

export default CheckField;