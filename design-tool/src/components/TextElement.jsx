
export default function TextElement({ level = 1, text = 'Sample Text', onChange }) {
  const HeadingTag = `h${level}`;
  const handleBlur = (e) => {
    const newText = e.target.textContent;
    if (onChange && newText !== text) {
      onChange({text: newText});
    }
  };

  return <HeadingTag contentEditable suppressContentEditableWarning onBlur={handleBlur} style={{padding: '8px', border: '1px dashed transparent', outline: 'none'}}>{text}</HeadingTag>;
}
