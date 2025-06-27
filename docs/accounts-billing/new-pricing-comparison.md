---
slug: plan-comparison
title: "Plan Comparison"
description: "Compare FlutterFlow plans and features to find the right plan for your needs"
hide_table_of_contents: true
sidebar_position: 3
---

<Head>
  <link rel="stylesheet" href="/css/table_style.css" />
</Head>

import {useState, useEffect} from 'react';

export const PricingToggles = () => {
  const [currency, setCurrency] = useState('USD');
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  // Update sticky header when pricing changes
  useEffect(() => {
    // Trigger sticky header recreation when pricing data changes
    const event = new CustomEvent('pricingChanged');
    window.dispatchEvent(event);
  }, [currency, billingPeriod]);
  
  const pricingData = {
    USD: {
      monthly: {
        free: 0,
        individual: 39,
        growth: '1st seat: $80, \n 2nd seat: $55',
        business: '1st seat: $150, \n Seats 2-5: $85 each*',
        enterprise: 'Custom'
      },
      annual: { 
        free: 0,
        individual: 351, // $360/year = $30/month effective
        growth: '1st seat: $720, \n 2nd seat: $495', 
        business: '1st seat: $1,350, \n Seats 2-5: $765*', // $4752/year = $396/month effective
        enterprise: 'Custom'
      }
    },
    INR: {
      monthly: {
        free: 0,
        individual: 1300, // Official INR rate
        growth: '1st seat: ₹2,650, \n 2nd seat: ₹1,850', // Official INR rate
        business: '1st seat: ₹5,100, \n Seats 2-5: ₹2,850 each*', // Official INR rate
        enterprise: 'Custom'
      },
      annual: {
        free: 0,
        individual: 11700, // ₹11,700/year = ₹975/month effective
        growth: '1st seat: ₹27,000, \n 2nd seat: ₹13,500',
        business: '1st seat: ₹45,900, \n Seats 2-5: ₹25,650*',
        enterprise: 'Custom'
      }
    }
  };

  const formatPrice = (price) => {
  // Return the string directly if the price is a string

   if (typeof price === 'string') return price;

    if (currency === 'USD') {
      return `$${price}`;
    } else {
      return `₹${price.toLocaleString('en-IN')}`;
    }
  };

  const getPeriodText = () => {
    return billingPeriod === 'annual' ? (
      <>
        billed annually
      </>
    ) : 'per month';
  };

  const currentPrices = pricingData[currency][billingPeriod];

  return (
    <div style={{marginBottom: '2rem'}}>
      <div style={{display: 'flex', gap: '2rem', marginBottom: '1rem', flexWrap: 'wrap'}}>
        {/* Currency Toggle */}
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{fontSize: '0.9rem', fontWeight: '500'}}>Currency:</span>
          <div style={{
            display: 'flex',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: 'var(--ifm-color-emphasis-100)'
          }}>
            <button
              onClick={() => setCurrency('USD')}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                backgroundColor: currency === 'USD' ? 'var(--ifm-color-primary)' : 'transparent',
                color: currency === 'USD' ? 'white' : 'var(--ifm-font-color-base)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('INR')}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                backgroundColor: currency === 'INR' ? 'var(--ifm-color-primary)' : 'transparent',
                color: currency === 'INR' ? 'white' : 'var(--ifm-font-color-base)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              INR
            </button>
          </div>
        </div>

        {/* Billing Period Toggle */}
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{fontSize: '0.9rem', fontWeight: '500'}}>Billing:</span>
          <div style={{
            display: 'flex',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: 'var(--ifm-color-emphasis-100)'
          }}>
            <button
              onClick={() => setBillingPeriod('monthly')}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                backgroundColor: billingPeriod === 'monthly' ? 'var(--ifm-color-primary)' : 'transparent',
                color: billingPeriod === 'monthly' ? 'white' : 'var(--ifm-font-color-base)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                backgroundColor: billingPeriod === 'annual' ? 'var(--ifm-color-primary)' : 'transparent',
                color: billingPeriod === 'annual' ? 'white' : 'var(--ifm-font-color-base)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              Annual
            </button>
          </div>
          {billingPeriod === 'annual' && (
            <span style={{fontSize: '0.8rem', color: 'var(--ifm-color-success)', fontWeight: '500', marginLeft: '0.5rem'}}>
              Save ~25%
            </span>
          )}
        </div>
      </div>

      <table className="simplified-pricing-table" id="pricing-table">
        <thead id="table-header">
          <tr>
            <th>Plan</th>
            <th>Free<br/><span style={{fontSize: '1.2em', fontWeight: 'bold'}}>{formatPrice(currentPrices.free)}</span><br/><span style={{fontSize: '0.9em', opacity: '0.8'}}>{getPeriodText()}</span></th>
            <th>Basic<br/><span style={{fontSize: '1.2em', fontWeight: 'bold'}}>{formatPrice(currentPrices.individual)}</span><br/><span style={{fontSize: '0.9em', opacity: '0.8'}}>{getPeriodText()}</span></th>
            <th>Growth<br/><span style={{fontSize: '1.2em', fontWeight: 'bold'}}>{formatPrice(currentPrices.growth)}</span><br/><span style={{fontSize: '0.9em', opacity: '0.8'}}>{getPeriodText()}</span></th>
            <th>Business<br/><span style={{fontSize: '1.2em', fontWeight: 'bold'}}>{formatPrice(currentPrices.business)}</span><br/><span style={{fontSize: '0.9em', opacity: '0.8'}}>{getPeriodText()}</span></th>
            <th>Enterprise<br/><span style={{fontSize: '1.2em', fontWeight: 'bold'}}>{formatPrice(currentPrices.enterprise)}</span><br/><span style={{fontSize: '0.9em', opacity: '0.8'}}>pricing</span></th>
          </tr>
        </thead>
        <tbody>
          <tr className="section-header">
            <td colSpan="6"><strong>Core Platform Features</strong></td>
          </tr>
          <tr>
            <td>Visual Development Environment<br/><span className="feature-description">Drag & drop builder for creating apps visually</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>1K+ Prebuilt Templates<br/><span className="feature-description">Ready-to-use app templates and components</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Project Count<br/><span className="feature-description">Number of projects you can create</span></td>
            <td>2 projects</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>AI Generation<br/><span className="feature-description">AI-powered assistance for building and coding</span></td>
            <td>5 requests/lifetime</td>
            <td>50 requests/mo</td>
            <td>200 requests/mo</td>
            <td>500 requests/mo</td>
            <td>Custom</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Data & Integrations</strong></td>
          </tr>
          <tr>
            <td>Firebase Integration<br/><span className="feature-description">Connect to Firestore, Firebase Auth, and more</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Supabase Integration<br/><span className="feature-description">Connect to Supabase for database and auth</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>AI Agents<br/><span className="feature-description">Create AI agents with OpenAI, Anthropic, and Google</span></td>
            <td>0</td>
            <td>1</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>API Endpoints<br/><span className="feature-description">Connect to external APIs and services</span></td>
            <td>2</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Swagger/OpenAPI Imports<br/><span className="feature-description">Import API specifications automatically</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Development Environments<br/><span className="feature-description">Separate databases and configuration values for testing and production</span></td>
            <td>1 (default only)</td>
            <td>1 (default only)</td>
            <td>Up to 1 additional (+default)</td>
            <td>Up to 2 additional (+default)</td>
            <td>Custom</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Development Features</strong></td>
          </tr>
          <tr>
            <td>Code Extensibility<br/><span className="feature-description">Add custom code to extend functionality</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Live Debugging<br/><span className="feature-description">Test your app in the browser and hot reload</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Visual Logic Builder<br/><span className="feature-description">Create app logic with a visual editor</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>State Management<br/><span className="feature-description">Manage app data and user interface states</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Custom Code Expressions<br/><span className="feature-description">Write custom expressions and logic</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>One-Click Localization (i18n)<br/><span className="feature-description">Automatically translate your app using Google Translate API</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Push to GitHub<br/><span className="feature-description">Push your project code to GitHub</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>VS Code Extension<br/><span className="feature-description">Sync custom code files back and forth between FlutterFlow and VS Code</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Automated Testing<br/><span className="feature-description">Run automated tests on your applications</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>Up to 3 tests per project</td>
            <td>Unlimited tests</td>
          </tr>
          <tr>
            <td>Custom Classes<br/><span className="feature-description">Bring custom Dart classes into your app</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>YAML Editing<br/><span className="feature-description">Refactor your project with by editing the YAML representation</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Project API<br/><span className="feature-description">Programmatic access to project data</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>MCP Server (Experimental)<br/><span className="feature-description">Model Context Protocol server integration</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Cloud Functions<br/><span className="feature-description">Write and deploy Firebase Cloud Functions directly from FlutterFlow</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>CLI<br/><span className="feature-description">Command-line interface for downloading code and project management</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Configuration File Snippets<br/><span className="feature-description">Directly modify Info.plist, main.dart, Android manifest, and other config files</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Local Run Desktop Emulator<br/><span className="feature-description">Run code locally with automatic environment setup</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Design Features</strong></td>
          </tr>
          <tr>
            <td>Design Systems<br/><span className="feature-description">Consistent color schemes, typographic, icons, and more</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Animations & Haptic Touch<br/><span className="feature-description">Add animations and haptic feedback to your app</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Custom Fonts & Icons<br/><span className="feature-description">Upload and use custom fonts and icons</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Custom Typography Presets<br/><span className="feature-description">Create reusable text styles and presets</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Screenshot Generator<br/><span className="feature-description">Generate app screenshots automatically for App Store review</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Figma Theme Import<br/><span className="feature-description">Import color and typography themes from Figma</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Figma Frame Import<br/><span className="feature-description">AI-powered import of Figma frames to FlutterFlow</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>100 requests/mo</td>
            <td>Custom</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Advanced App Features</strong></td>
          </tr>
          <tr>
            <td>Push Notifications<br/><span className="feature-description">Send notifications to app users</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Payments Integration<br/><span className="feature-description">Integrate Stripe and other payment providers</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Ads Integration<br/><span className="feature-description">Monetize your app with advertisements</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Third-Party Package Imports<br/><span className="feature-description">Add pub.dev packages and GitHub dependencies</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Debug Panel<br/><span className="feature-description">Advanced debugging tools and console</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Collaboration Features</strong></td>
          </tr>
          <tr>
            <td>Number of Editors<br/><span className="feature-description">Team members who can edit projects</span></td>
            <td>1</td>
            <td>1</td>
            <td>Up to 2</td>
            <td>Up to 5*</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Single Project Collaborator Add-Ons<br/><span className="feature-description">Allow non-team members to collaborate on a single project</span></td>
            <td>None</td>
            <td>None</td>
            <td>Up to 4 collaborators available for purchase</td>
            <td>Up to 10 collaborators available for purchase</td>
            <td>N/A (unlimited team editors)</td>
          </tr>
          <tr>
            <td>Real-Time Collaboration<br/><span className="feature-description">Work together on projects simultaneously</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Project Commenting<br/><span className="feature-description">Add comments and feedback to projects</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Manual Commits<br/><span className="feature-description">Make explicit named commits to the current branch for version control</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Number of Branches<br/><span className="feature-description">Create and manage multiple project branches (all plans include main branch)</span></td>
            <td>1 (main only)</td>
            <td>1 (main only)</td>
            <td>Up to 2 open branches (+main)</td>
            <td>Up to 5 open branches (+main)</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td>Automated Snapshot Backups<br/><span className="feature-description">Automatic project backups and version control</span></td>
            <td>Up to 1 hour prior</td>
            <td>Up to 1 day prior</td>
            <td>Up to 3 days prior</td>
            <td>Up to 7 days prior</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td>Activity Logging<br/><span className="feature-description">Track project changes and user activity</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Project Level Access Control<br/><span className="feature-description">Manage permissions for individual projects</span></td>
            <td>Manage view-only collaborators only</td>
            <td>Manage view-only collaborators only</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Centralized Billing<br/><span className="feature-description">Manage team billing from one account</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Library Features</strong></td>
          </tr>
          <tr>
            <td>Library Imports<br/><span className="feature-description">Add FlutterFlow libraries to your projects</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Library Publishing<br/><span className="feature-description">Publish your projects as reusable libraries</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Deployment</strong></td>
          </tr>
          <tr>
            <td>Web Deployment<br/><span className="feature-description">Deploy your app as a web application</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Free Subdomains<br/><span className="feature-description">Deploy your web app to FlutterFlow subdomains</span></td>
            <td>Up to 2</td>
            <td>Up to 20</td>
            <td>Up to 20</td>
            <td>Up to 20</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Custom Domains<br/><span className="feature-description">Deploy to your own custom domain</span></td>
            <td>❌</td>
            <td>1 free domain, more available for purchase</td>
            <td>1 free domain, more available for purchase</td>
            <td>1 free domain, more available for purchase</td>
            <td>Custom</td>
          </tr>
          <tr>
            <td>Custom Web Favicon<br/><span className="feature-description">Set custom favicon for web publishing</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>FlutterFlow Watermark Removal<br/><span className="feature-description">Remove FlutterFlow branding from published apps</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Code Download<br/><span className="feature-description">Download your project's source code</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>APK Download<br/><span className="feature-description">Download Android APK files</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>One-Click Apple & Google Store Deployment<br/><span className="feature-description">Deploy directly to app stores with one click</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>

          <tr className="section-header">
            <td colSpan="6"><strong>Support</strong></td>
          </tr>
          <tr>
            <td>Account and Billing Support<br/><span className="feature-description">Help with account management and billing questions</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Community Support<br/><span className="feature-description">Access to FlutterFlow community forums</span></td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Email Support<br/><span className="feature-description">Get help via email from our support team</span></td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>In-App Support<br/><span className="feature-description">Chat support directly within FlutterFlow</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Dedicated Live Support<br/><span className="feature-description">Direct access to dedicated support specialists</span></td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

# Plan Comparison

Choose the plan that fits your development needs and team size.

<div className="pricing-table-container">
  <div className="mobile-scroll-hint">
    ← Scroll horizontally to see all plans →
  </div>

  <PricingToggles />
</div>

## Business Plan Extensions

### *Agencies Expansion
Includes all Business features, plus the ability to add up to 7 additional seats (12 total per team) at **$85/seat/month** (USD) or **₹2,850/seat/month** (INR) and collaborate with up to 20 other paid users at the project level via Single Project Collaborator Passes. Must be approved as an Expert Agency via [Contra](https://contra.com/opportunity/rWlmk2Yv-become-a-flutter-flow-agency).

### Localized Pricing
INR pricing reflects localized rates adjusted for local purchasing power, providing the same features and plan structures as USD pricing. All plans include the same comprehensive feature set regardless of currency.