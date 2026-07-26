import { TICKER } from '@/lib/data'

export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="ticker-wrapper" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
