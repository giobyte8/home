import type { LinksSection } from "../components/Links/types";


const m4Section: LinksSection = {name: 'Fleet M4', groups: [
  {
    name: 'Databases',
    links: [
      { label: 'Neo4j', href: 'http://localhost:8200' },
      { label: 'PGAdmin', href: 'http://localhost:8203' },
      { label: 'RabbitMQ', href: 'http://localhost:8204' },
    ],
  },
  {
    name: 'Telemetry',
    links: [
      { label: 'Jaeger', href: 'http://localhost:8207' },
      { label: 'Prometheus', href: 'http://localhost:8208' },
      { label: 'Grafana', href: 'http://localhost:8209' },
    ],
  },
  {
    name: 'Galleries',
    links: [
      { label: 'Galleries Admin', href: 'http://localhost:8210/admin' },
      { label: 'Galleries Scan Scheduler', href: 'http://localhost:8211' },
      { label: 'Galleries Estatico', href: 'http://localhost:8212' },
    ],
  }
]};

const devSection: LinksSection = {name: 'Fleet Dev', groups: [
  {
    name: 'Databases',
    links: [
      { label: 'Neo4j', href: 'http://localhost:7474' },
      { label: 'PGAdmin', href: 'http://localhost:5433' },
      { label: 'RabbitMQ', href: 'http://localhost:15672' },
    ],
  },
  {
    name: 'Telemetry',
    links: [
      { label: 'Jaeger', href: 'http://localhost:16686' },
      { label: 'Prometheus', href: 'http://localhost:9090' },
      { label: 'Grafana', href: 'http://localhost:3000' },
    ],
  },
]};

const rbxSection: LinksSection = {name: 'Fleet RBX', groups: [
  {
    name: 'Databases',
    links: [
      // { label: 'Neo4j', href: 'http://192.168.100.130:8203' },
      { label: 'PGAdmin', href: 'http://192.168.100.130:8203' },
      { label: 'RabbitMQ', href: 'http://192.168.100.130:8204' },
    ],
  },
  {
    name: 'Telemetry',
    links: [
      { label: 'Jaeger', href: 'http://192.168.100.130:8207' },
      { label: 'Prometheus', href: 'http://192.168.100.130:8208' },
      { label: 'Grafana', href: 'http://192.168.100.130:8209' },
    ],
  },
  {
    name: 'Apps',
    links: [
      { label: 'Ddownloader', href: 'https://dl.giovanniaguirre.me' },
      { label: 'Syncthing', href: 'https://st.giovanniaguirre.me' },
    ]
  }
]};


export const sections = (): LinksSection[] => {
  return [m4Section, devSection, rbxSection];
};
