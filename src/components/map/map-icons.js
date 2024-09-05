import L from 'leaflet';

export const computerIcon = (size) => {
    return new L.Icon({
        iconUrl: require('../../assets/marker-icon.png'),
        iconSize: size,
        popupAnchor: [0, -size[1] / 2],
    });
};

export const centerIcon = (size) => {
    return new L.Icon({
        iconUrl: require('../../assets/switch.png'),
        iconSize: size,
        popupAnchor: [0, -size[1] / 2],
    });
};

export const generateComputerPositions = (center, numPositions, radius = 0.0003) => {
    const positions = [];
    const angleStep = (2 * Math.PI) / numPositions;

    for (let i = 0; i < numPositions; i++) {
        const angle = i * angleStep;
        const offsetLat = center[0] + radius * Math.cos(angle);
        const offsetLng = center[1] + radius * Math.sin(angle);
        positions.push([offsetLat, offsetLng]);
    }

    return positions;
};