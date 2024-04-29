'use client';

const HeroButton = ({ yellow, title }) => (
  <button className={yellow ? 'yellow' : 'blue'}>
    {title}
    <style jsx>{`
      button {
        border-radius: 50px;
        width: 248px;
        height: 54px;
        font-family: Museo Sans Cyrl, sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0%;
        text-align: center;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s;
        letter-spacing: 2px;
      }
      .yellow {
        background: var(--brand-color-yellow);
        color: var(--brand-color-black);
      }
      .blue {
        background: var(--brand-color-blue-1);
        color: var(--brand-white);
      }
      .yellow:hover {
        background: var(--brand-color-blue-1);
        color: var(--brand-white);
      }
      .blue:hover {
        background: var(--brand-color-yellow);
        color: var(--brand-color-black);
      }
    `}</style>
  </button>
);

export default HeroButton;
