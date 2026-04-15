import { useCanvas } from '../CanvasContext.jsx';

import TextElement from './TextElement.jsx';

export default function Canvas() {
  const { bgColor, bgImage, elements, updateElement } = useCanvas();

  return (
      <div 
      className="canvas"
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {elements.map((el) => (
        el.type === 'text' ? (
          <div
            key={el.id}
            className="text-element-wrapper"
            style={{
              position: 'absolute',
              left: `${el.x}px`,
              top: `${el.y}px`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
          >
            <TextElement
              {...el}
              onChange={(updates) => updateElement(el.id, updates)}
            />
          </div>
        ) : null
      ))}
    </div>
  );
}
