import React, { useState, useEffect } from 'react';
import ProgressItem from './progress-item';
import './index.css';
import oneIcon from '../../assets/one.png';
import twoIcon from '../../assets/two.png';
import threeIcon from '../../assets/three.png';
import fourIcon from '../../assets/four.png';

const Container = () => {
  const [leaders, setLeaders] = useState([]);

  const fetchLeaders = async () => {
    const data = [
      { id: 1, icon: oneIcon, title: 'Top Authors', tech: 'HTML/CSS/JS, Python', progress: 46, color: '#00C49F' },
      { id: 2, icon: twoIcon, title: 'Popular Authors', tech: 'HTML, VueJS, Laravel', progress: 87, color: '#FFBB28' },
      { id: 3, icon: threeIcon, title: 'New Products', tech: 'HTML/CSS/JS, Python', progress: 53, color: '#0088FE' },
      { id: 4, icon: fourIcon, title: 'Weekly Bestsellers', tech: 'HTML/CSS/JS, Python', progress: 92, color: '#BA0050' },
    ];
    setLeaders(data);
  };

  useEffect(() => {
    fetchLeaders();
  }, []);

  return (
    <div className="container-card">
      <div className='row'>
        <div>
          <p className="container-card-title">Campaign Leaders</p>
          <p className="container-card-subtitle">890,344 Sales</p>
        </div>
        <div className="time-filters">
          <button className="active">Day</button>
          <button>Week</button>
          <button>Month</button>
        </div>
      </div>

      {leaders.map((leader) => (
        <ProgressItem key={leader.id} {...leader} />
      ))}
    </div>
  );;
};

export default Container;
