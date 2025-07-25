export interface LikeButtonProps {
  onClick?: (e: MouseEvent) => void;
  maskSize: string;
}

export const LikeButton = (props: LikeButtonProps) => (
  <div class="style-scope">
    <button
      id="alllike"
      data-type="like"
      data-filled="false"
      class="like-menu yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button"
      aria-pressed="false"
      aria-label="Like all"
      onClick={(e) => props.onClick?.(e)}
    >
      <div
        class="yt-spec-button-shape-next__icon"
        style={{
          'color': 'var(--ytmusic-setting-item-toggle-active)',
        }}
        aria-hidden="true"
      >
        <div
          class="yt-spec-button-shape-next__icon"
          style={{
            'color': 'white',
            'mask': 'linear-gradient(grey, grey)',
            '-webkit-mask': 'linear-gradient(grey, grey)',
            '-webkit-mask-size': props.maskSize,
            '-webkit-mask-repeat': 'no-repeat',
            'z-index': 1,
            'position': 'absolute',
          }}
          aria-hidden="true"
        >
          <div style={{ 'width': '24px', 'height': '24px' }}>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              class="style-scope yt-icon"
              style={{
                'pointer-events': 'none',
                'display': 'block',
                'width': '100%',
                'height': '100%',
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"
                  class="style-scope yt-icon"
                />
              </g>
            </svg>
          </div>
        </div>
        <div style={{ 'width': '24px', 'height': '24px' }}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            class="style-scope yt-icon"
            style={{
              'pointer-events': 'none',
              'display': 'block',
              'width': '100%',
              'height': '100%',
            }}
          >
            <g class="style-scope yt-icon">
              <path
                d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"
                class="style-scope yt-icon"
              />
            </g>
          </svg>
        </div>
      </div>
      <yt-touch-feedback-shape style={{ 'border-radius': 'inherit' }}>
        <div
          class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
          aria-hidden="true"
        >
          <div class="yt-spec-touch-feedback-shape__stroke" />
          <div class="yt-spec-touch-feedback-shape__fill" />
        </div>
      </yt-touch-feedback-shape>
    </button>
  </div>
);
