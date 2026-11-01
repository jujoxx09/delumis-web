import GalleryTunnel from "./gallery-tunnel";
import { HeroContent } from "./hero-content";

function asset(file) {
  return `/originkit/hero-13/${file}`;
}

const DEFAULT_IMAGES = [
  asset("potrait-6.png"),
  asset("potrait-5.png"),
  asset("potrait-4.png"),
  asset("potrait-3.png"),
  asset("potrait-2.png"),
  asset("potrait-1.png"),
];

export const Section20Hero = () => {
  const handleExploreGallery = () => {
    window.location.hash = "#gallery";
  };

  const handleBookShoot = () => {
    window.location.hash = "#book";
  };

  return (
    <section
      aria-label="Elevating portraits through perspective"
      className="hero-13"
    >
      {/* 3D portrait tunnel */}
      <div
        aria-hidden="true"
        className="hero-13__tunnel"
      >
        <GalleryTunnel
          images={DEFAULT_IMAGES}
          background="#131313"
          lineColor="#B0B0B0"
          lineOpacity={0}
          grid={4}
          speed={30}
          boost={100}
          fade={100}
          label={false}
          cellMode="square"
        />
      </div>

      {/* Radial vignette behind the text */}
      <div
        aria-hidden="true"
        className="hero-13__vignette"
      />

      {/* Hero content */}
      <div className="hero-13__content-wrapper">
        <div className="hero-13__content">
          <HeroContent
            onExploreGallery={handleExploreGallery}
            onBookShoot={handleBookShoot}
          />
        </div>
      </div>
    </section>
  );
};
