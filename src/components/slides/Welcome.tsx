import './slides.css';
import background1 from '/src/assets/bg/background_1.jpg';

export const Welcome = () => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${background1})` }}>
      <h1 style={{ marginTop: 0 }}>Home</h1>

      <h2>Fleet: Macbook M4</h2>
      <ul>
        <li><a target="_blank" href="http://localhost:8200">Neo4j Browser</a></li>
        <li><a target="_blank" href="http://localhost:8203">PGAdmin</a></li>
        <li><a target="_blank" href="http://localhost:8204">RabbitMQ Management</a></li>
      </ul>

      <ul>
        <li><a target="_blank" href="http://localhost:8207">Jaeger UI</a></li>
        <li><a target="_blank" href="http://localhost:8208">Prometheus UI</a></li>
        <li><a target="_blank" href="http://localhost:8209">Grafana UI</a></li>
      </ul>

      <ul>
        <li><a target="_blank" href="http://localhost:8210/admin">Galleries Admin</a></li>
        <li><a target="_blank" href="http://localhost:8211">Galleries Scheduler Dashboard</a></li>
        <li><a target="_blank" href="http://localhost:8212">Galleries Estatico</a></li>
      </ul>

      <h2>Fleet: Development</h2>
      <ul>
        <li><a target="_blank" href="http://localhost:7474">Neo4j Browser</a></li>
        <li><a target="_blank" href="http://localhost:5433">PGAdmin</a></li>
        <li><a target="_blank" href="http://localhost:15672">RabbitMQ Management</a></li>
      </ul>

      <ul>
        <li><a target="_blank" href="http://localhost:16686">Jaeger UI</a></li>
        <li><a target="_blank" href="http://localhost:9090">Prometheus UI</a></li>
        <li><a target="_blank" href="http://localhost:3000">Grafana UI</a></li>
      </ul>
    </div>
  );
}
