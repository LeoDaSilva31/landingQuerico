/* Todos los SVG como server-component-safe functions */

export function IcoWA({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.849L.057 23.5l5.817-1.525A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.727.977.994-3.635-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
    </svg>
  )
}

export function IcoPin({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export function IcoClock({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export function IcoTruck({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1"/>
      <path d="M16 8h4l3 5v3h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}

export function IcoBread({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 4C9.925 4 5 8.477 5 14c0 2.21.82 4.24 2.18 5.82L6 28h20l-1.18-8.18A9.955 9.955 0 0 0 27 14c0-5.523-4.925-10-11-10zm0 2c4.963 0 9 3.582 9 8 0 1.865-.677 3.576-1.8 4.942L22.5 26h-13l-.7-7.058A7.952 7.952 0 0 1 7 14c0-4.418 4.037-8 9-8z"/>
    </svg>
  )
}

export function IcoCroissant({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8C4.57 8 3 9.57 3 11.5c0 1.04.46 1.97 1.18 2.62L3 26h2l1.06-10.12A3.49 3.49 0 0 0 8 12.5V12h16v.5c0 1.13.54 2.13 1.38 2.76L26.5 26h2l-1.5-12.37A3.493 3.493 0 0 0 28.5 11c0-1.93-1.57-3.5-3.5-3.5-.93 0-1.77.36-2.4.95A3.48 3.48 0 0 0 20 8H12c-.87 0-1.67.32-2.28.84A3.49 3.49 0 0 0 6.5 8zm0 2c.83 0 1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5 5.67 10 6.5 10zM25 10c.83 0 1.5.67 1.5 1.5S25.83 13 25 13s-1.5-.67-1.5-1.5S24.17 10 25 10z"/>
    </svg>
  )
}

export function IcoFactura({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M4 6v20h24V6H4zm2 2h20v16H6V8zm3 3v2h2v-2H9zm4 0v2h6v-2h-6zm4 0v2h2v-2h-2zM9 14v2h2v-2H9zm4 0v2h6v-2h-6zm4 0v2h2v-2h-2zM9 19v2h2v-2H9zm4 0v2h6v-2h-6z"/>
    </svg>
  )
}

export function IcoBaguette({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M25.66 4.34a4.5 4.5 0 0 0-6.36 0L4 19.64 8.36 24l.7-.7-3-3 1.42-1.42 3 3 1.42-1.42-3-3 1.41-1.41 3 3 1.42-1.42-3-3 1.41-1.41 3 3 1.42-1.42-3-3 1.41-1.41 3 3 1.42-1.42-3-3 1.41-1.41 3 3 1.42-1.42-3-3 1.41-1.41.71.7 4.36 4.36a4.5 4.5 0 0 0 0-6.36z"/>
    </svg>
  )
}

export function IcoBrioche({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3a5 5 0 0 0-4.9 4H9a5 5 0 0 0-4 8 5 5 0 0 0 2 9.9h18A5 5 0 0 0 27 15a5 5 0 0 0-4-8h-2.1A5 5 0 0 0 16 3zm0 2a3 3 0 0 1 3 3h-6a3 3 0 0 1 3-3zM9 11h14a3 3 0 0 1 0 6H9a3 3 0 0 1 0-6zm-2 8h18a3 3 0 0 1 0 6H7a3 3 0 0 1 0-6z"/>
    </svg>
  )
}

export function IcoTorta({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M14 2v4.07A6.006 6.006 0 0 0 10 12H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a6.006 6.006 0 0 0-4-5.93V2h-4zm2 0h2v3.35a6.09 6.09 0 0 0-2 0V2zm0 6a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4zm-10 6h20v2H6v-2zm2 4h16v8H8v-8z"/>
    </svg>
  )
}

export function IcoPrepizza({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9.37 3 4 8.37 4 15c0 3.57 1.56 6.77 4.04 9H23.96A11.97 11.97 0 0 0 28 15C28 8.37 22.63 3 16 3zm0 2c5.52 0 10 4.48 10 10 0 2.2-.71 4.24-1.92 5.9L9.92 8.92A9.94 9.94 0 0 1 16 5zm-7.4 5.3 12.18 12.18c-.9.33-1.86.52-2.78.52H10a9.93 9.93 0 0 1-3.92-7.78c0-1.85.53-3.58 1.52-5.08zM10 26h12v2H10v-2z"/>
    </svg>
  )
}

export function IcoBiscochito({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M8 6a2 2 0 0 0-2 2v2H4v2h2v8H4v2h2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h2v-2h-2v-8h2v-2h-2V8a2 2 0 0 0-2-2H8zm0 2h16v16H8V8zm3 2v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/>
    </svg>
  )
}

export function IcoPancho({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M6 11a6 6 0 0 0-2 4.5 6 6 0 0 0 2 4.5V22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a6 6 0 0 0 2-4.5A6 6 0 0 0 26 11V10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1zm2-1h16v1.28A6 6 0 0 0 22 15.5a6 6 0 0 0 2 4.5V22H8v-2a6 6 0 0 0 2-4.5 6 6 0 0 0-2-4.5V10zm-2 5.5a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4zm14 0a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z"/>
    </svg>
  )
}

export function IcoEmpanada({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M4 10c0-1.1.9-2 2-2h20a2 2 0 0 1 2 2v1c0 6.08-4.94 11-11 11h-2C8.94 22 4 17.08 4 11v-1zm2 0v1c0 4.97 4.03 9 9 9h2c4.97 0 9-4.03 9-9v-1H6zm3 3h14v2H9v-2zm2 4h10v2H11v-2zm3 5h4v2h-4v-2z"/>
    </svg>
  )
}

export function IcoAnisado({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 13a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H8zm0 2h16v9H8v-9zm3 2v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h10v-2H11z"/>
    </svg>
  )
}

export function IcoCash({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M6 12h.01M18 12h.01"/>
    </svg>
  )
}

export function IcoTransfer({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3 4 7l4 4"/>
      <path d="M4 7h16"/>
      <path d="m16 21 4-4-4-4"/>
      <path d="M20 17H4"/>
    </svg>
  )
}
