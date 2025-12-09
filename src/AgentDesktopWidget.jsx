import React, { useState, useEffect, useCallback } from 'react';

const AlbertsonsForUWidget = () => {
  const [status, setStatus] = useState('Ready');
  const [agentData, setAgentData] = useState(null);
  const [interactionData, setInteractionData] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState('profile1');
  
  // Multiple customer profiles
  const customerProfiles = {
    profile1: {
      customerId: 'ALB-89432',
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@email.com',
      phone: '+1 (555) 678-9012',
      memberSince: '2020-08-12',
      points: 4850,
      lifetimeValue: 8923.75,
      purchaseCount: 89,
      lastPurchase: '2024-12-05',
      preferredStore: 'Albertsons #2847',
      preferredCategories: ['Produce', 'Organic', 'Deli'],
      birthday: 'September 22',
      communicationPreference: 'Email',
      weeklyAd: true,
      freshPass: false,
      recentPurchases: [
        {
          id: 'ORD-12847',
          date: '2024-12-05',
          total: 87.34,
          items: 'O Organics Milk, Fresh Produce, Signature Select Bread',
          pointsEarned: 87,
          status: 'Completed'
        },
        {
          id: 'ORD-12698',
          date: '2024-11-29',
          total: 124.56,
          items: 'Holiday Turkey, Primo Taglio Deli Meats, Vegetables',
          pointsEarned: 124,
          status: 'Completed'
        },
        {
          id: 'ORD-12543',
          date: '2024-11-22',
          total: 65.89,
          items: 'Open Nature Chicken, Waterfront Bistro Salmon',
          pointsEarned: 65,
          status: 'Completed'
        }
      ],
      clippedCoupons: [
        { id: 'CPN-001', title: '$1.50 Off O Organics', expires: '2024-12-20' },
        { id: 'CPN-002', title: '$2 Off Signature Select Pizza', expires: '2024-12-18' },
        { id: 'CPN-003', title: 'BOGO Lucerne Ice Cream', expires: '2024-12-25' }
      ]
    },
    profile2: {
      customerId: 'ALB-54821',
      name: 'James Thompson',
      email: 'james.thompson@email.com',
      phone: '+1 (555) 234-5678',
      memberSince: '2019-03-15',
      points: 12450,
      lifetimeValue: 15847.50,
      purchaseCount: 142,
      lastPurchase: '2024-12-08',
      preferredStore: 'Albertsons #3156',
      preferredCategories: ['Meat & Seafood', 'Beer & Wine', 'Bakery'],
      birthday: 'March 10',
      communicationPreference: 'SMS',
      weeklyAd: true,
      freshPass: true,
      recentPurchases: [
        {
          id: 'ORD-15432',
          date: '2024-12-08',
          total: 156.78,
          items: 'Primo Taglio Roast Beef, Craft Beer Variety, Lucerne Cheese',
          pointsEarned: 156,
          status: 'Delivered'
        },
        {
          id: 'ORD-15201',
          date: '2024-12-01',
          total: 203.45,
          items: 'Waterfront Bistro Shrimp, Wine Selection, Signature Steaks',
          pointsEarned: 203,
          status: 'Delivered'
        },
        {
          id: 'ORD-14987',
          date: '2024-11-24',
          total: 189.23,
          items: 'Holiday Ham, Bakery Desserts, O Organics Vegetables',
          pointsEarned: 189,
          status: 'Completed'
        }
      ],
      clippedCoupons: [
        { id: 'CPN-101', title: '$3 Off Waterfront Bistro Seafood', expires: '2024-12-22' },
        { id: 'CPN-102', title: '$5 Off Wine Purchase $25+', expires: '2024-12-31' },
        { id: 'CPN-103', title: '$2 Off Primo Taglio Deli', expires: '2024-12-19' },
        { id: 'CPN-104', title: 'Free Bakery Item', expires: '2024-12-28' }
      ]
    },
    profile3: {
      customerId: 'ALB-23156',
      name: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      phone: '+1 (555) 890-1234',
      memberSince: '2021-06-20',
      points: 2340,
      lifetimeValue: 4567.25,
      purchaseCount: 37,
      lastPurchase: '2024-12-06',
      preferredStore: 'Albertsons #2847',
      preferredCategories: ['Health & Wellness', 'Organic', 'Baby Care'],
      birthday: 'July 18',
      communicationPreference: 'Email',
      weeklyAd: false,
      freshPass: false,
      recentPurchases: [
        {
          id: 'ORD-09876',
          date: '2024-12-06',
          total: 98.45,
          items: 'O Organics Baby Food, Open Nature Snacks, Lucerne Yogurt',
          pointsEarned: 98,
          status: 'Completed'
        },
        {
          id: 'ORD-09654',
          date: '2024-11-28',
          total: 76.32,
          items: 'Vitamins, O Organics Produce, Signature Granola',
          pointsEarned: 76,
          status: 'Completed'
        },
        {
          id: 'ORD-09432',
          date: '2024-11-20',
          total: 54.78,
          items: 'Baby Diapers, Wipes, O Organics Milk',
          pointsEarned: 54,
          status: 'Completed'
        }
      ],
      clippedCoupons: [
        { id: 'CPN-201', title: '$1 Off O Organics Baby', expires: '2024-12-25' },
        { id: 'CPN-202', title: '$2 Off Vitamins', expires: '2024-12-30' }
      ]
    },
    profile4: {
      customerId: 'ALB-67890',
      name: 'Robert Martinez',
      email: 'robert.martinez@email.com',
      phone: '+1 (555) 456-7890',
      memberSince: '2018-11-05',
      points: 18750,
      lifetimeValue: 22134.80,
      purchaseCount: 218,
      lastPurchase: '2024-12-09',
      preferredStore: 'Albertsons #4521',
      preferredCategories: ['Deli', 'International', 'Prepared Meals'],
      birthday: 'November 3',
      communicationPreference: 'Email',
      weeklyAd: true,
      freshPass: true,
      recentPurchases: [
        {
          id: 'ORD-19234',
          date: '2024-12-09',
          total: 234.67,
          items: 'ReadyMeals Family Pack, International Foods, Premium Deli',
          pointsEarned: 234,
          status: 'Delivered'
        },
        {
          id: 'ORD-18967',
          date: '2024-12-02',
          total: 178.90,
          items: 'Primo Taglio Party Tray, Craft Beer, Specialty Cheeses',
          pointsEarned: 178,
          status: 'Delivered'
        },
        {
          id: 'ORD-18745',
          date: '2024-11-25',
          total: 312.45,
          items: 'Holiday Party Catering, Wine, Bakery Desserts',
          pointsEarned: 312,
          status: 'Completed'
        }
      ],
      clippedCoupons: [
        { id: 'CPN-301', title: '$5 Off ReadyMeals', expires: '2024-12-20' },
        { id: 'CPN-302', title: '$10 Off Catering Order $50+', expires: '2024-12-31' },
        { id: 'CPN-303', title: 'BOGO Primo Taglio Sliced Meats', expires: '2024-12-23' },
        { id: 'CPN-304', title: '$3 Off International Foods', expires: '2024-12-27' },
        { id: 'CPN-305', title: 'Free Bakery Roll with Purchase', expires: '2024-12-15' }
      ]
    }
  };

  const [customerData, setCustomerData] = useState(customerProfiles[selectedProfile]);

  const [availableRewards, setAvailableRewards] = useState([
    {
      id: 'REW-001',
      title: '$5 Off Next Purchase',
      points: 500,
      expires: '2025-01-31',
      eligible: true,
      category: 'Grocery'
    },
    {
      id: 'REW-002',
      title: 'Free Lucerne Dairy Item',
      points: 300,
      expires: '2025-02-15',
      eligible: true,
      category: 'Free Item'
    },
    {
      id: 'REW-003',
      title: '10¢ Off Per Gallon Gas',
      points: 100,
      expires: '2025-01-15',
      eligible: true,
      category: 'Fuel'
    },
    {
      id: 'REW-004',
      title: '$10 Off Produce Purchase',
      points: 1000,
      expires: '2025-02-28',
      eligible: true,
      category: 'Department'
    }
  ]);

  // Handle profile selection
  const handleProfileChange = (profileKey) => {
    setSelectedProfile(profileKey);
    setCustomerData(customerProfiles[profileKey]);
    setStatus(`Loaded profile: ${customerProfiles[profileKey].name}`);
    setTimeout(() => setStatus('Ready'), 2000);
  };

  // Update customerData when selectedProfile changes
  useEffect(() => {
    setCustomerData(customerProfiles[selectedProfile]);
  }, [selectedProfile, customerProfiles]);

  // Phone number to profile mapping
  const phoneToProfile = {
    '+15556789012': 'profile1',  // Maria Rodriguez
    '+15552345678': 'profile2',  // James Thompson
    '+15559876543': 'profile3',  // Sarah Chen
    '+15554567890': 'profile4',  // Robert Martinez
    // Add more mappings as needed
  };

  // Function to lookup customer by phone number
  const lookupCustomerByPhone = useCallback((phoneNumber) => {
    // Normalize phone number (remove spaces, dashes, parentheses)
    const normalizedPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');
    
    console.log('Looking up customer by phone:', phoneNumber, 'normalized:', normalizedPhone);
    
    // Try to find profile by exact match
    let profileKey = phoneToProfile[normalizedPhone] || phoneToProfile[phoneNumber];
    
    // If not found, try matching just the digits
    if (!profileKey) {
      const digitsOnly = normalizedPhone.replace(/\D/g, '');
      for (const [key, value] of Object.entries(phoneToProfile)) {
        const keyDigits = key.replace(/\D/g, '');
        if (keyDigits === digitsOnly) {
          profileKey = value;
          break;
        }
      }
    }
    
    if (profileKey && customerProfiles[profileKey]) {
      console.log('Found profile:', profileKey);
      setSelectedProfile(profileKey);
      setCustomerData(customerProfiles[profileKey]);
      setStatus(`Customer loaded: ${customerProfiles[profileKey].name}`);
      
      // Send confirmation back to Agent Desktop
      sendToDesktop('widget:customerLoaded', {
        customerId: customerProfiles[profileKey].customerId,
        customerName: customerProfiles[profileKey].name,
        phoneNumber: phoneNumber,
        timestamp: new Date().toISOString()
      });
      
      setTimeout(() => setStatus('Ready'), 2500);
      return true;
    } else {
      console.log('No profile found for phone:', phoneNumber);
      setStatus(`No customer found for ${phoneNumber}`);
      
      // Send notification that customer was not found
      sendToDesktop('widget:customerNotFound', {
        phoneNumber: phoneNumber,
        timestamp: new Date().toISOString()
      });
      
      setTimeout(() => setStatus('Ready'), 3000);
      return false;
    }
  }, [customerProfiles]);

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
        
        // Automatic customer lookup when ANI (phone number) is available
        if (data.ani) {
          console.log('ANI detected, looking up customer:', data.ani);
          lookupCustomerByPhone(data.ani);
        }
        break;
      case 'widget:lookupCustomer':
        // Manual customer lookup by phone
        console.log('Manual customer lookup requested:', data);
        if (data.phoneNumber) {
          lookupCustomerByPhone(data.phoneNumber);
        }
        break;
      default:
        console.log('Received message:', type, data);
    }
  }, [lookupCustomerByPhone]);

  // Setup message listener on mount
  useEffect(() => {
    window.addEventListener('message', handleMessage);
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
        widgetId: 'albertsons-foru-widget',
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

  // Handle reward redemption
  const handleRedeemReward = (reward) => {
    if (customerData.points >= reward.points) {
      setStatus(`Redeeming ${reward.title}...`);
      
      setTimeout(() => {
        setCustomerData({
          ...customerData,
          points: customerData.points - reward.points
        });
        setStatus(`${reward.title} redeemed successfully!`);
        
        sendToDesktop('foru:rewardRedeemed', {
          customerId: customerData.customerId,
          reward: reward,
          remainingPoints: customerData.points - reward.points
        });
        
        setTimeout(() => setStatus('Ready'), 3000);
      }, 1000);
    } else {
      setStatus('Insufficient points for this reward');
      setTimeout(() => setStatus('Ready'), 2000);
    }
  };

  // Handle adding points
  const handleAddPoints = () => {
    setStatus('Adding 100 bonus points...');
    setTimeout(() => {
      setCustomerData({
        ...customerData,
        points: customerData.points + 100
      });
      setStatus('Bonus points added!');
      
      sendToDesktop('foru:pointsAdded', {
        customerId: customerData.customerId,
        pointsAdded: 100,
        newTotal: customerData.points + 100
      });
      
      setTimeout(() => setStatus('Ready'), 2000);
    }, 1000);
  };

  // Handle viewing order
  const handleViewOrder = (orderId) => {
    setStatus(`Opening order ${orderId}...`);
    sendToDesktop('foru:viewOrder', { orderId });
    setTimeout(() => setStatus('Ready'), 1500);
  };

  // Calculate dollar value of points
  const calculatePointsValue = () => {
    return (customerData.points / 100).toFixed(2);
  };

  // Manual phone lookup handler
  const [manualPhone, setManualPhone] = useState('');
  
  const handleManualLookup = () => {
    if (manualPhone.trim()) {
      lookupCustomerByPhone(manualPhone);
      setManualPhone(''); // Clear input after lookup
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Albertsons for U™</h1>
          <div style={styles.headerSubtitle}>Grocery Rewards & Loyalty</div>
        </div>
      </div>

      {/* Phone Lookup Section */}
      <div style={styles.lookupSection}>
        <div style={styles.lookupLabel}>🔍 Customer Lookup by Phone</div>
        <div style={styles.lookupInputGroup}>
          <input
            type="tel"
            style={styles.lookupInput}
            placeholder="Enter phone number (e.g., +1 555-678-9012)"
            value={manualPhone}
            onChange={(e) => setManualPhone(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleManualLookup();
              }
            }}
          />
          <button style={styles.lookupButton} onClick={handleManualLookup}>
            Lookup
          </button>
        </div>
        <div style={styles.lookupHint}>
          Available: +1 (555) 678-9012, +1 (555) 234-5678, +1 (555) 987-6543, +1 (555) 456-7890
        </div>
      </div>

      {/* Status Bar */}
      <div style={styles.statusBar}>
        <span style={styles.statusLabel}>Status:</span>
        <span>{status}</span>
      </div>

      {/* Profile Selector */}
      <div style={styles.profileSelector}>
        <span style={styles.profileSelectorLabel}>👤 Customer Profile:</span>
        <div style={styles.profileButtons}>
          <button 
            style={{
              ...styles.profileButton,
              ...(selectedProfile === 'profile1' ? styles.profileButtonActive : {})
            }}
            onClick={() => handleProfileChange('profile1')}
          >
            Maria R. (4.8K pts)
          </button>
          <button 
            style={{
              ...styles.profileButton,
              ...(selectedProfile === 'profile2' ? styles.profileButtonActive : {})
            }}
            onClick={() => handleProfileChange('profile2')}
          >
            James T. (12.5K pts) 🚚
          </button>
          <button 
            style={{
              ...styles.profileButton,
              ...(selectedProfile === 'profile3' ? styles.profileButtonActive : {})
            }}
            onClick={() => handleProfileChange('profile3')}
          >
            Sarah C. (2.3K pts)
          </button>
          <button 
            style={{
              ...styles.profileButton,
              ...(selectedProfile === 'profile4' ? styles.profileButtonActive : {})
            }}
            onClick={() => handleProfileChange('profile4')}
          >
            Robert M. (18.8K pts) 🚚
          </button>
        </div>
      </div>

      {/* Customer Profile Card */}
      <div style={styles.profileCard}>
        <div style={styles.profileHeader}>
          <div style={styles.customerAvatar}>
            {customerData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div style={styles.customerInfo}>
            <h2 style={styles.customerName}>{customerData.name}</h2>
            <div style={styles.customerMeta}>
              <span style={styles.customerId}>ID: {customerData.customerId}</span>
              <span style={styles.memberBadge}>for U™ Member</span>
            </div>
          </div>
        </div>

        <div style={styles.profileGrid}>
          <div style={styles.profileItem}>
            <span style={styles.profileLabel}>📧 Email</span>
            <span style={styles.profileValue}>{customerData.email}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.profileLabel}>📞 Phone</span>
            <span style={styles.profileValue}>{customerData.phone}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.profileLabel}>🏪 Preferred Store</span>
            <span style={styles.profileValue}>{customerData.preferredStore}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.profileLabel}>🎂 Birthday</span>
            <span style={styles.profileValue}>{customerData.birthday}</span>
          </div>
        </div>
      </div>

      {/* Points & Value Section */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>🎁</div>
          <div style={styles.statValue}>{customerData.points.toLocaleString()}</div>
          <div style={styles.statLabel}>for U™ Points</div>
          <div style={styles.statSubtext}>${calculatePointsValue()} value</div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statIcon}>💰</div>
          <div style={styles.statValue}>${customerData.lifetimeValue.toLocaleString()}</div>
          <div style={styles.statLabel}>Lifetime Spend</div>
          <div style={styles.statSubtext}>{customerData.purchaseCount} orders</div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statIcon}>🛒</div>
          <div style={styles.statValue}>{new Date(customerData.lastPurchase).toLocaleDateString()}</div>
          <div style={styles.statLabel}>Last Purchase</div>
          <div style={styles.statSubtext}>Order #{recentPurchases[0]?.id}</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>⚡ Quick Actions</h3>
        <div style={styles.actionGrid}>
          <button style={styles.actionButton} onClick={handleAddPoints}>
            ➕ Add 100 Points
          </button>
          <button style={styles.actionButton} onClick={() => setStatus('Opening profile...')}>
            ✏️ Edit Profile
          </button>
          <button style={styles.actionButton} onClick={() => setStatus('Opening Weekly Ad...')}>
            📰 View Weekly Ad
          </button>
          <button style={styles.actionButton} onClick={() => setStatus('Checking FreshPass...')}>
            🚚 FreshPass Status
          </button>
        </div>
      </div>

      {/* Clipped Coupons */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>✂️ Clipped Coupons ({customerData.clippedCoupons.length})</h3>
        <div style={styles.couponsList}>
          {customerData.clippedCoupons.map(coupon => (
            <div key={coupon.id} style={styles.couponCard}>
              <div style={styles.couponTitle}>{coupon.title}</div>
              <div style={styles.couponExpiry}>Expires: {new Date(coupon.expires).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Rewards */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🎁 Available for U™ Rewards</h3>
        <div style={styles.rewardsList}>
          {availableRewards.map(reward => (
            <div key={reward.id} style={styles.rewardCard}>
              <div style={styles.rewardInfo}>
                <div style={styles.rewardTitle}>{reward.title}</div>
                <div style={styles.rewardMeta}>
                  <span style={styles.rewardPoints}>{reward.points} points</span>
                  <span style={styles.rewardCategory}>{reward.category}</span>
                  <span style={styles.rewardExpiry}>Exp: {new Date(reward.expires).toLocaleDateString()}</span>
                </div>
              </div>
              <button 
                style={{
                  ...styles.redeemButton,
                  ...(customerData.points < reward.points ? styles.redeemButtonDisabled : {})
                }}
                onClick={() => handleRedeemReward(reward)}
                disabled={customerData.points < reward.points}
              >
                {customerData.points >= reward.points ? 'Redeem' : 'Locked'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Purchases */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📦 Recent Purchases</h3>
        <div style={styles.purchasesList}>
          {customerData.recentPurchases.map(purchase => (
            <div key={purchase.id} style={styles.purchaseCard}>
              <div style={styles.purchaseHeader}>
                <span style={styles.purchaseId}>{purchase.id}</span>
                <span style={styles.purchaseDate}>{new Date(purchase.date).toLocaleDateString()}</span>
              </div>
              <div style={styles.purchaseItems}>{purchase.items}</div>
              <div style={styles.purchaseFooter}>
                <div>
                  <div style={styles.purchaseTotal}>${purchase.total}</div>
                  <div style={styles.purchasePoints}>+{purchase.pointsEarned} points earned</div>
                </div>
                <button 
                  style={styles.viewButton}
                  onClick={() => handleViewOrder(purchase.id)}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>⚙️ Customer Preferences</h3>
        <div style={styles.preferencesGrid}>
          <div style={styles.preferenceItem}>
            <span style={styles.preferenceLabel}>Favorite Categories:</span>
            <div style={styles.categoryTags}>
              {customerData.preferredCategories.map((cat, idx) => (
                <span key={idx} style={styles.categoryTag}>{cat}</span>
              ))}
            </div>
          </div>
          <div style={styles.preferenceRow}>
            <div style={styles.preferenceItem}>
              <span style={styles.preferenceLabel}>Communication:</span>
              <span style={styles.preferenceValue}>{customerData.communicationPreference}</span>
            </div>
            <div style={styles.preferenceItem}>
              <span style={styles.preferenceLabel}>Weekly Ad:</span>
              <span style={styles.preferenceValue}>{customerData.weeklyAd ? '✓ Yes' : '✗ No'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Albertsons Brand Colors
const albertsonsBlue = '#003DA5';    // Primary Blue
const albertsonsRed = '#E31837';      // Primary Red
const albertsonsGreen = '#00A651';    // Success Green
const albertsonsOrange = '#FF6A13';   // Accent Orange

// Styles
const styles = {
  container: {
    padding: '20px',
    background: '#f5f7fa',
    minHeight: '100vh',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  header: {
    background: `linear-gradient(135deg, ${albertsonsBlue} 0%, #0052cc 100%)`,
    color: 'white',
    padding: '24px',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,61,165,0.3)'
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  headerTitle: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 700,
    letterSpacing: '-0.5px'
  },
  headerSubtitle: {
    fontSize: '14px',
    opacity: 0.9,
    fontWeight: 400
  },
  statusBar: {
    background: '#e8f4fd',
    borderLeft: `4px solid ${albertsonsBlue}`,
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#003d7a',
    marginBottom: '20px'
  },
  statusLabel: {
    fontWeight: 600,
    marginRight: '8px'
  },
  lookupSection: {
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    border: `2px solid ${albertsonsBlue}`
  },
  lookupLabel: {
    fontSize: '16px',
    fontWeight: 700,
    color: albertsonsBlue,
    marginBottom: '12px'
  },
  lookupInputGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '8px'
  },
  lookupInput: {
    flex: 1,
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '15px',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    transition: 'border-color 0.2s'
  },
  lookupButton: {
    padding: '12px 32px',
    background: albertsonsBlue,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap'
  },
  lookupHint: {
    fontSize: '12px',
    color: '#6b7280',
    fontStyle: 'italic'
  },
  profileSelector: {
    background: 'white',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb'
  },
  profileSelectorLabel: {
    fontSize: '14px',
    fontWeight: 700,
    color: albertsonsBlue,
    marginBottom: '12px',
    display: 'block'
  },
  profileButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px'
  },
  profileButton: {
    padding: '12px 16px',
    background: '#f3f4f6',
    border: `2px solid #e5e7eb`,
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 600,
    color: '#4b5563',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center'
  },
  profileButtonActive: {
    background: albertsonsBlue,
    color: 'white',
    borderColor: albertsonsBlue,
    boxShadow: `0 0 0 3px rgba(0, 61, 165, 0.1)`
  },
  profileCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb'
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e5e7eb'
  },
  customerAvatar: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${albertsonsBlue} 0%, ${albertsonsRed} 100%)`,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    fontWeight: 700,
    marginRight: '16px'
  },
  customerInfo: {
    flex: 1
  },
  customerName: {
    margin: '0 0 8px 0',
    fontSize: '24px',
    fontWeight: 700,
    color: '#1f2937'
  },
  customerMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  customerId: {
    fontSize: '14px',
    color: '#6b7280'
  },
  memberBadge: {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: 700,
    background: albertsonsBlue,
    color: 'white'
  },
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  profileItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  profileLabel: {
    fontSize: '13px',
    color: '#6b7280',
    fontWeight: 600
  },
  profileValue: {
    fontSize: '14px',
    color: '#1f2937',
    fontWeight: 500
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '20px'
  },
  statCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb'
  },
  statIcon: {
    fontSize: '36px',
    marginBottom: '8px'
  },
  statValue: {
    fontSize: '26px',
    fontWeight: 700,
    color: albertsonsBlue,
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '13px',
    color: '#6b7280',
    fontWeight: 600
  },
  statSubtext: {
    fontSize: '12px',
    color: '#9ca3af',
    marginTop: '4px'
  },
  section: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb'
  },
  sectionTitle: {
    margin: '0 0 16px 0',
    fontSize: '18px',
    fontWeight: 700,
    color: albertsonsBlue
  },
  actionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px'
  },
  actionButton: {
    padding: '14px 16px',
    background: '#f3f4f6',
    border: `2px solid ${albertsonsBlue}`,
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    color: albertsonsBlue,
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  couponsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px'
  },
  couponCard: {
    padding: '12px',
    background: '#fef3e7',
    border: `2px dashed ${albertsonsOrange}`,
    borderRadius: '8px'
  },
  couponTitle: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: '4px'
  },
  couponExpiry: {
    fontSize: '12px',
    color: '#6b7280'
  },
  rewardsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  rewardCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    background: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },
  rewardInfo: {
    flex: 1
  },
  rewardTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: '6px'
  },
  rewardMeta: {
    display: 'flex',
    gap: '12px',
    fontSize: '13px'
  },
  rewardPoints: {
    fontWeight: 700,
    color: albertsonsBlue
  },
  rewardCategory: {
    padding: '2px 8px',
    background: '#e5e7eb',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#4b5563'
  },
  rewardExpiry: {
    color: '#6b7280'
  },
  redeemButton: {
    padding: '10px 24px',
    background: albertsonsBlue,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  redeemButtonDisabled: {
    background: '#d1d5db',
    cursor: 'not-allowed'
  },
  purchasesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  purchaseCard: {
    padding: '16px',
    background: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },
  purchaseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  purchaseId: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1f2937'
  },
  purchaseDate: {
    fontSize: '13px',
    color: '#6b7280'
  },
  purchaseItems: {
    fontSize: '14px',
    color: '#4b5563',
    marginBottom: '12px'
  },
  purchaseFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  purchaseTotal: {
    fontSize: '18px',
    fontWeight: 700,
    color: albertsonsBlue
  },
  purchasePoints: {
    fontSize: '12px',
    color: albertsonsGreen,
    fontWeight: 600
  },
  viewButton: {
    padding: '8px 16px',
    background: 'transparent',
    border: `2px solid ${albertsonsBlue}`,
    color: albertsonsBlue,
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    borderRadius: '6px'
  },
  preferencesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  preferenceRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  preferenceLabel: {
    fontSize: '13px',
    color: '#6b7280',
    fontWeight: 600
  },
  preferenceValue: {
    fontSize: '14px',
    color: '#1f2937',
    fontWeight: 500
  },
  categoryTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '8px'
  },
  categoryTag: {
    padding: '6px 14px',
    background: albertsonsBlue,
    color: 'white',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 700
  }
};

// Export as default with the standard name for compatibility
export default AlbertsonsForUWidget;