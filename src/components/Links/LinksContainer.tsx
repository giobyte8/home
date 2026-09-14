import './links.css';
import * as T from './types';


const Link = ({ label, href }: T.Link) => {
  return <>
    <a className="link" rel="noopener noreferrer" href={href}>
      {label}
    </a>
    <br/>
  </>;
};

const LinksGroup = ({ name, links }: T.LinksGroup) => {
  return (
    <div className="links-group">
      {/* {name && <h2>{name}</h2>} */}
      <div className="links">
        {links.map((link, index) => (
          <Link key={index} label={link.label} href={link.href} />
        ))}
      </div>
    </div>
  );
};

const LinksSection = ({ name, groups }: T.LinksSection) => {
  return (
    <div className="links-section">
      {name && <h2>{name}</h2>}
      {groups.map((group, index) => (
        <LinksGroup key={index} name={group.name} links={group.links} />
      ))}
    </div>
  );
};


const LinksContainer = ({ sections }: { sections: T.LinksSection[] }) => {
  return (
    <div className="links-container mt-5">
      {sections.map((section, index) => (
        <LinksSection key={index} name={section.name} groups={section.groups} />
      ))}
    </div>
  );
};

export default LinksContainer;
