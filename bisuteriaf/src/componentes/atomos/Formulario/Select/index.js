import React from 'react';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

/* 
export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

*/


const SelectMultiple = ({
    arrayOptions,
    arrayDefaultValue,
    setArraySelect,
    isMulti
}) => {
  
  console.log("isMulti isMulti isMulti isMulti ", isMulti);

  return (
    <Select
        id="selectMultipleApp"
        closeMenuOnSelect={false}
       // components={animatedComponents}
        defaultValue={arrayDefaultValue}
        isOptionSelected={true}
        isMulti={isMulti}
        options={arrayOptions}
        isFocused={false}
        isDisabled={arrayOptions && arrayOptions.length ? false: true}
        onChange={ (event) => setArraySelect(event) }
        //maxMenuHeight
      
    />
  );

}

export const  SelectOne = () => {
  return(
    <CreatableSelect 
    isClearable 
    options={[]} />
  );

};

export default SelectMultiple;