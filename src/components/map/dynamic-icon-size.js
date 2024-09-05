import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const initialIconSize = [12, 12];

const DynamicIconSize = ({ setIconSize, mapCenter }) => {
  const map = useMap();

  useEffect(() => {
    const updateIconSize = () => {
      const zoom = map.getZoom();
      const newSize = [initialIconSize[0] * zoom / 12, initialIconSize[1] * zoom / 12];
      setIconSize(newSize);
      map.setView(mapCenter);
    };

    map.on('zoom', updateIconSize);
    updateIconSize();

    return () => {
      map.off('zoom', updateIconSize);
    };
  }, [map, setIconSize, mapCenter]);

  return null;
};

export default DynamicIconSize;
