import LinksContainer from '../Links/LinksContainer';
import * as linksSvc from '../../services/linksService';

import './slides.css';
import background1 from '/src/assets/bg/background_1.jpg';

export const Welcome = () => {
  return (
    <div className="slide" style={{
      backgroundImage: `url(${background1})`
    }}>
      <LinksContainer sections={ linksSvc.sections() } />
    </div>
  );
}
