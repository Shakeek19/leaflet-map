import React, { useEffect, useRef } from 'react';
import RightArrow from '../../assets/right-arrow.png';
import * as d3 from 'd3';

function hexToRgba(hex, opacity) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const ProgressItem = ({ icon, title, tech, progress, color }) => {
    const progressBarRef = useRef(null);

    useEffect(() => {
        d3.select(progressBarRef.current).selectAll('*').remove();

        const width = 300;
        const height = 7;
        const borderRadius = 4;

        const svg = d3
            .select(progressBarRef.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        svg.append('rect')
            .attr('width', width)
            .attr('height', height)
            .attr('fill', color)
            .attr('opacity', 0.3)
            .attr('rx', borderRadius)
            .attr('ry', borderRadius);

        svg.append('rect')
            .attr('width', 0)
            .attr('height', height)
            .attr('fill', color)
            .attr('rx', borderRadius)
            .attr('ry', borderRadius)
            .transition()
            .duration(800)
            .attr('width', (progress / 100) * width);
    }, [progress, color]);

    return (
        <div className="row">
            <div className="icon-div" style={{ background: hexToRgba(color, 0.3) }}>
                <img src={icon} className="img" alt="icon" />
            </div>
            <div className="leader-info">
                <div className="leader-title">{title}</div>
                <div className="leader-tech">{tech}</div>
            </div>
            <div className='progress-section'>
                <div className='leader-title'>Progress</div>
                <div className='progressbar-row'>
                    <div ref={progressBarRef} className="progress-bar-container"></div>
                    <div className="leader-tech">{progress}%</div>
                </div>
            </div>
            <div className="right-arrow-button">
                <img src={RightArrow} className='img' alt="Right Arrow" />
            </div>
        </div>
    );
};

export default ProgressItem;
