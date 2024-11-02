import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import SidebarButton from '../components/SideBarButton';
import Sidebar from '../components/SideBar';
import FormSection from '../components/FormSection';
import TrailerSection from '../components/TrailerSection';


const DramaInput = () => (
  <div>
    <Navbar />
    <SearchBar />
    <SidebarButton />
    <Sidebar />
    <FormSection />
    <TrailerSection />
  </div>
);

export default DramaInput;
