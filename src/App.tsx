import Navbar from '@/scenes/navbar'
import { useState } from 'react';
import { SelectedPage } from '@/shared/types';
SelectedPage

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: string) => void;
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
      <div className="app bg-gray-100">
        <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      </div>
  );
}

export default App;
