import { useState } from 'react'
import { CanvasProvider } from './CanvasContext.jsx'
import TopBar from './components/TopBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Canvas from './components/Canvas.jsx'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <CanvasProvider>
      <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="main-layout">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <Canvas />
        </div>
      </div>
    </CanvasProvider>
  )
}

export default App
