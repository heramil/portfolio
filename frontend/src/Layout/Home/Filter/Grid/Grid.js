import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import Hero from './Hero/Hero';
import { listProjects } from '../../../../utils/api/api';

import './Grid.css';

export default function Grid({ selectedCategories }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('description');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let res = await listProjects();
        let projects = res.projects;

        const filteredProjects = projects.filter((project) => {
          if (selectedCategories.length === 0) {
            return true;
          } else {
            return selectedCategories.includes(project.project_type);
          }
        });

        setProjects(filteredProjects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, [selectedCategories]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
    setSlideIndex(0);
  };

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedProject({ ...selectedProject, [name]: true });
    } else {
      setSelectedProject((prevProject) => {
        const updatedProject = { ...prevProject };
        delete updatedProject[name];
        return updatedProject;
      });
    }
  };

  const handleFilterCategory = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setActiveCategory(name);
    } else {
      setActiveCategory('');
    }
  }

  const projectImages = Object.values(selectedProject?.project_images || {});

  const goToPreviousSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="grid">
        {
        projects.map((project, index) => (
          <div style={{ backgroundColor: project.project_backgroundColor }} className="cell" key={index} onClick={() => openModal(project)}>
            <div className="transition zoom-effect">
              <div className="hero-text">
                <h1 style={{ color: project.project_color }}>{project.project_title}</h1>
              </div>
              <div className="hero-image">
                <img className="image" src={project.project_images.image00} alt="Project Image" />
              </div>
            </div>
          </div>
        ))
        }
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedProject && (
          <div className="modal">

            <div className="hero">

              <div className="hero-slideshow">
                <button className="slideshow-button previous" onClick={goToPreviousSlide}>
                  <i className="bi bi-arrow-left"></i>
                </button>
                <img className="slideshow-image" src={projectImages[slideIndex]} alt="Slide" />
                <button className="slideshow-button next" onClick={goToNextSlide}>
                <i className="bi bi-arrow-right"></i>
                </button>
              </div>

              <div className="hero-info">
                <Hero selectedProject={selectedProject} activeCategory={activeCategory}/>
              </div>

            </div>

            <div className="filter">
              <div id={activeCategory === 'description' ? 'inputActive' : ''} className="container">
                <input name="description" type="checkbox" onChange={handleCategoryChange} onClick={handleFilterCategory}></input>
                <label>description</label>
              </div>
              <div id={activeCategory === 'goal' ? 'inputActive' : ''} className="container">
                <input name="goal" type="checkbox" onChange={handleCategoryChange} onClick={handleFilterCategory}></input>
                <label>goal</label>
              </div>
              <div id={activeCategory === 'process' ? 'inputActive' : ''} className="container">
                <input name="process" type="checkbox" onChange={handleCategoryChange} onClick={handleFilterCategory}></input>
                <label>process</label>
              </div>
              <div id={activeCategory === 'outcome' ? 'inputActive' : ''} className="container">
                <input name="outcome" type="checkbox" onChange={handleCategoryChange} onClick={handleFilterCategory}></input>
                <label>outcome</label>
              </div>
              <div id={activeCategory === 'credits' ? 'inputActive' : ''} className="container">
                <input name="credits" type="checkbox" onChange={handleCategoryChange} onClick={handleFilterCategory}></input>
                <label>credits</label>
              </div>
              <div id={activeCategory === 'technologies' ? 'inputActive' : ''} className="container">
                <input name="technologies" type="checkbox" onChange={handleCategoryChange} onClick={handleFilterCategory}></input>
                <label>technologies</label>
              </div>
            </div>

          </div>
        )}
      </Modal>
    </>
  );
}