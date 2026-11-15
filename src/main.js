
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="dashboard">

    <aside class="sidebar">
      <h2>🛡 CyberShield</h2>

      <nav>
        <a class="active" href="#overview">Overview</a>
        <a href="#alerts">Threat Monitor</a>
        <a href="#activity">Activity Logs</a>
      </nav>

      <div class="sidebar-bottom">
        <span class="status-dot"></span>
        All Systems Operational
      </div>
    </aside>

    <main class="main-content" id="overview">

      <header class="topbar">
        <div>
          <h1>Security Overview</h1>
          <p>Monitor your digital environment</p>
        </div>
        <span class="admin">ADMINISTRATOR</span>
      </header>

      <section class="welcome">
        <div>
          <h2>Welcome to CyberShield</h2>
          <p>Your simulated security monitoring center is active.</p>
        </div>
        <span>● LIVE MONITORING</span>
      </section>

      <section class="stats">

        <div class="stat-card">
          <p>Security Score</p>
          <h2>96<span>/100</span></h2>
          <small>Excellent status</small>
        </div>

        <div class="stat-card">
          <p>Events Monitored</p>
          <h2 id="eventsCount">1,284</h2>
          <small>System activity</small>
        </div>

        <div class="stat-card">
          <p>Active Alerts</p>
          <h2 id="alertCount">03</h2>
          <small>Needs attention</small>
        </div>

        <div class="stat-card">
          <p>Resolved Alerts</p>
          <h2 id="resolvedCount">12</h2>
          <small>Successfully handled</small>
        </div>

      </section>

      <section class="content-grid">

        <div class="panel" id="alerts">
          <h3>Threat Monitor</h3>
          <p class="muted">Simulated security alerts</p>

          <div class="alert">
            <div>
              <strong>Suspicious Login Attempt</strong>
              <p>Unusual login activity detected</p>
              <span class="high">HIGH RISK</span>
            </div>
            <button class="resolve">Resolve</button>
          </div>

          <div class="alert">
            <div>
              <strong>Unusual Traffic</strong>
              <p>Unexpected traffic pattern observed</p>
              <span class="medium">MEDIUM RISK</span>
            </div>
            <button class="resolve">Resolve</button>
          </div>

          <div class="alert">
            <div>
              <strong>Software Update Pending</strong>
              <p>Security update requires attention</p>
              <span class="low">LOW RISK</span>
            </div>
            <button class="resolve">Resolve</button>
          </div>
        </div>

        <div class="panel" id="activity">
          <h3>Activity Logs</h3>
          <p class="muted">Recent system events</p>

          <div class="log">
            <span class="status-dot"></span>
            System monitoring started
          </div>

          <div class="log">
            <span class="status-dot"></span>
            Security scan completed
          </div>

          <div class="log">
            <span class="status-dot"></span>
            Dashboard initialized
          </div>
        </div>

      </section>

      <footer>
        CyberShield © 2026 | Educational Security Simulation
      </footer>

    </main>
  </div>
`

// Alert management
let resolved = 12

document.querySelectorAll('.resolve').forEach(button => {
  button.addEventListener('click', () => {
    const alert = button.closest('.alert')

    if (alert) {
      alert.remove()
      resolved++

      document.querySelector('#alertCount').textContent =
        String(document.querySelectorAll('.alert').length).padStart(2, '0')

      document.querySelector('#resolvedCount').textContent = resolved
    }
  })
})
