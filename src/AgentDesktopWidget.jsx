import React, { useState, useEffect, useCallback } from 'react';

const AgentDesktopWidget = () => {
  const [status, setStatus] = useState('Ready');
  const [agentData, setAgentData] = useState(null);
  const [interactionData, setInteractionData] = useState(null);

  // Handle messages from Agent Desktop
  const handleMessage = useCallback((event) => {
    const { type, data } = event.data;
    
    switch(type) {
      case 'agentContact:ready':
        console.log('Agent Desktop is ready');
        setStatus('Connected to Agent Desktop');
        break;
      case 'agentContact:stateChange':
        console.log('Agent state changed:', data);
        setAgentData(data);
        break;
      case 'agentContact:interaction':
        console.log('Interaction data:', data);
        setInteractionData(data);
        break;
      default:
        console.log('Received message:', type, data);
    }
  }, []);

  // Setup message listener on mount
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    
    // Notify Agent Desktop that component is ready
    notifyReady();
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);

  // Notify Agent Desktop that component is ready
  const notifyReady = () => {
    window.parent.postMessage({
      type: 'widget:ready',
      data: {
        widgetId: 'agent-desktop-widget',
        timestamp: new Date().toISOString()
      }
    }, '*');
  };

  // Send data to Agent Desktop
  const sendToDesktop = (type, data) => {
    window.parent.postMessage({
      type: type,
      data: data
    }, '*');
  };

  // Handle refresh button click
  const handleRefresh = () => {
    setStatus('Refreshing...');
    
    // Request latest data from Agent Desktop
    sendToDesktop('widget:requestUpdate', {
      widgetId: 'agent-desktop-widget'
    });

    setTimeout(() => {
      setStatus('Ready');
    }, 1000);
  };

  // Handle action button click
  const handleAction = () => {
    // Send data back to Agent Desktop
    sendToDesktop('widget:action', {
      action: 'customAction',
      timestamp: new Date().toISOString(),
      data: {
        message: 'Action performed from widget'
      }
    });

    setStatus('Action sent to Agent Desktop');
    
    setTimeout(() => {
      setStatus('Ready');
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>🎯 Agent Desktop Widget (React)</h1>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Widget Status</h2>
        <div style={styles.statusBar}>
          <span style={styles.statusLabel}>Status:</span>
          <span>{status}</span>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Agent Information</h2>
        <div style={styles.infoBlock}>
          {agentData ? (
            <>
              <strong>Agent State:</strong> {agentData.state || 'Unknown'}<br />
              <strong>Team:</strong> {agentData.team || 'N/A'}<br />
              {agentData.agentId && (
                <>
                  <strong>Agent ID:</strong> {agentData.agentId}
                </>
              )}
            </>
          ) : (
            <em style={styles.emptyText}>Waiting for agent data...</em>
          )}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Current Interaction</h2>
        <div style={styles.infoBlock}>
          {interactionData ? (
            <>
              <strong>Interaction ID:</strong> {interactionData.id || 'N/A'}<br />
              <strong>Type:</strong> {interactionData.mediaType || 'N/A'}<br />
              <strong>ANI:</strong> {interactionData.ani || 'N/A'}<br />
              {interactionData.direction && (
                <>
                  <strong>Direction:</strong> {interactionData.direction}
                </>
              )}
            </>
          ) : (
            <em style={styles.emptyText}>No active interaction</em>
          )}
        </div>
      </div>

      <div style={styles.buttonGroup}>
        <button style={{...styles.button, ...styles.refreshBtn}} onClick={handleRefresh}>
          🔄 Refresh Data
        </button>
        <button style={{...styles.button, ...styles.actionBtn}} onClick={handleAction}>
          ⚡ Perform Action
        </button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '20px',
    background: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  headerTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 600
  },
  section: {
    background: '#f8f9fa',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px'
  },
  sectionTitle: {
    margin: '0 0 12px 0',
    fontSize: '16px',
    color: '#495057',
    fontWeight: 600
  },
  infoBlock: {
    background: 'white',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#495057'
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '16px'
  },
  button: {
    flex: 1,
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  refreshBtn: {
    background: '#17a2b8',
    color: 'white'
  },
  actionBtn: {
    background: '#28a745',
    color: 'white'
  },
  statusBar: {
    background: '#e7f3ff',
    borderLeft: '4px solid #0066cc',
    padding: '12px',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#004085'
  },
  statusLabel: {
    fontWeight: 600,
    marginRight: '8px'
  },
  emptyText: {
    color: '#6c757d'
  }
};

export default AgentDesktopWidget;
