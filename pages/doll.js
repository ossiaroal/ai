import { useState } from 'react';

export default function Doll() {
  const [topColor, setTopColor] = useState('#ffb6c1');
  const [bottomColor, setBottomColor] = useState('#add8e6');

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>毛绒玩偶换装</h1>
      <div style={{ position: 'relative', width: '200px', height: '300px', margin: '0 auto' }}>
        {/* Head */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          width: '60px',
          height: '60px',
          background: '#ffe0bd',
          borderRadius: '50%',
          transform: 'translateX(-50%)'
        }} />
        {/* Top */}
        <div style={{
          position: 'absolute',
          top: '90px',
          left: '50%',
          width: '120px',
          height: '100px',
          background: topColor,
          borderRadius: '20px',
          transform: 'translateX(-50%)'
        }} />
        {/* Bottom */}
        <div style={{
          position: 'absolute',
          top: '190px',
          left: '50%',
          width: '100px',
          height: '90px',
          background: bottomColor,
          borderRadius: '20px 20px 0 0',
          transform: 'translateX(-50%)'
        }} />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label style={{ marginRight: '1rem' }}>
          上衣颜色：
          <input
            type="color"
            value={topColor}
            onChange={e => setTopColor(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
        <label>
          裤子颜色：
          <input
            type="color"
            value={bottomColor}
            onChange={e => setBottomColor(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
    </div>
  );
}
