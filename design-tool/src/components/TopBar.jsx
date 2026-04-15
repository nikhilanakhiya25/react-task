export default function TopBar({ toggleSidebar, isSidebarOpen }) {
  return (
    <div className="top-bar">
      <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <button className="menu-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? '✕' : '☰'}
        </button>
        <h2>Printdeed Design Tool</h2>
      </div>
      <div style={{marginLeft: 'auto'}}>
        <button>Export PNG</button>
        <button>Save</button>
      </div>
    </div>
  );
}
