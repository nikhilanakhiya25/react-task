import { useCanvas } from '../CanvasContext.jsx';
import { useRef } from 'react';

export default function Sidebar({ isSidebarOpen }) {
  const { setBgColor, setBgImage, clearBg, addElement } = useCanvas();
  const headingRef = useRef(1);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/') && file.size < 5 * 1024 * 1024) { // 5MB limit
      const reader = new FileReader();
      reader.onload = (e) => setBgImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddText = () => {
    const level = headingRef.current.value || 1;
    addElement('text', {level: Number(level), text: 'Double-click to edit'});
  };

  return (
    <div className="sidebar" style={{visibility: isSidebarOpen ? 'visible' : 'hidden'}}>
      <h3>Background</h3>
      <label>Color: </label>
      <input type="color" onChange={(e) => setBgColor(e.target.value)} defaultValue="#ffffff" />
      <br />
      <label>Image: </label>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br />
      <button onClick={clearBg}>Remove Background</button>
      <hr />
      <h3>Elements</h3>
      <label>Heading Level: </label>
      <select ref={headingRef}>
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
        <option value="4">H4</option>
        <option value="5">H5</option>
        <option value="6">H6</option>
      </select>
      <br />
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
}
