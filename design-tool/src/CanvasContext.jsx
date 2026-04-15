import { createContext, useContext, useState } from 'react';
import { generateId } from './utils/uuid.js';

const CanvasContext = createContext();

export function CanvasProvider({ children }) {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [bgImage, setBgImage] = useState(null);
  const [elements, setElements] = useState([]);

  const clearBg = () => {
    setBgColor('#ffffff');
    setBgImage(null);
  };

  const addElement = (type, props = {}) => {
    const id = generateId();
    setElements(prev => [...prev, {id, type, x: 100, y: 100, ...props}]);
  };

  const updateElement = (id, updates) => {
    setElements(prev => prev.map(el => el.id === id ? {...el, ...updates} : el));
  };

  return (
    <CanvasContext.Provider value={{ bgColor, setBgColor, bgImage, setBgImage, clearBg, elements, addElement, updateElement }}>
      {children}
    </CanvasContext.Provider>
  );
}

export function useCanvas() {
  return useContext(CanvasContext);
}
