import { useEffect, useState } from "react";

//This is the custom hook to save notes in localstorage
// T - generic datatype. Can take RawNote or Tag
// key - will be used to store in locastorage against data
// initialValue - value that needs to be store in localstorage
export const useLocalStorage = <T>(key: string, initialValue: T) => {

   //Normal state hook which first checks whether passed initialvalue exists in localstorage or not
   //If yes get from localstorage, parse & assign to value
   //If no return initivalue & assign to value  
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue == null) {
      return initialValue;
    } else {
      return JSON.parse(jsonValue);
    }
  });

  //it will run whenever value or key changed. Whether value/key is new or coming as updated
  //It will set/override localstorage with value 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  //This will return value & funtion to setValue
  return [value, setValue] as [T, typeof setValue];
};
