'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Explore from '@/components/Explore/Explore';
import Cards from '@/components/Cards/Cards';
import Footer from '@/components/Footer/Footer';

export default function ProjectsPage() {
  // State to hold the projects fetched from the API
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the data when the page loads
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className='app'>
      {/* <Navbar /> */}
      <Explore />
      {/* Pass the fetched projects data down to the Cards component as a prop */}
      <Cards projects={projects} />
      {/* <Footer /> */}
    </div>
  );
}