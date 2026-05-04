import { IMAGES } from "@/lib/images";

const GALLERY_ITEMS = [
  { title: "PIPE CLEANER UPDO", description: "Pipe cleaner curls styled into a full protective updo with volume and shape.", image: IMAGES.pipeCleanerUpdo },
  { title: "TWO FRENCH BRAIDS", description: "A sleek protective loc style that keeps locs neat and secure.", image: IMAGES.twoFrenchBraids },
  { title: "LOC PINEAPPLE", description: "A gathered high style that preserves curls and adds height.", image: IMAGES.locPineapple },
  { title: "LOC FRENCH BRAIDS W/ LOC KNOTS", description: "Classic braiding with decorative loc knot details.", image: IMAGES.frenchBraidsKnots },
  { title: "LOC PIN WHEELS", description: "Rounded loc styling with soft shape and a polished finish.", image: IMAGES.pinWheels },
  { title: "LOC CURLS", description: "Defined curls for volume, movement, and a fresh styled look.", image: IMAGES.locCurls },
  { title: "LOC BARRELS", description: "Structured barrel styling for a clean protective look.", image: IMAGES.locBarrels },
  { title: "BARRELS INTO FRENCH BRAID", description: "Barrel-set locs transitioning into a bold French braid.", image: IMAGES.barrelsFrenchBraid },
  { title: "FRENCH BRAID", description: "Single sleek braid woven through locs for a clean classic look.", image: IMAGES.frenchBraid },
  { title: "BARRELS HALF WAY", description: "Loc barrels pulled down and left partially free.", image: IMAGES.barrelsHalfWay },
  { title: "FLAT TWIST INTO BUN", description: "Flat twists leading into a neat bun for a polished protective style.", image: IMAGES.flatTwistBun },
  { title: "CURLED LOC BUNS", description: "Two playful buns with curled locs for a fun youthful style.", image: IMAGES.curledLocBuns },
  { title: "PETAL HALO", description: "Locs arranged in a petal-like halo crown.", image: IMAGES.petalHalo },
  { title: "TWO STRAND INTO PETALS", description: "Two-strand twists blooming into decorative petal shapes.", image: IMAGES.twoStrandPetals },
  { title: "TOP KNOT W/ BANGS", description: "Sleek high top knot paired with flowing bangs.", image: IMAGES.topKnotBangs },
  { title: "BRICK LAY TWO STRAND STARTER LOCS", description: "Brick-pattern two-strand twists for beginning the loc journey.", image: IMAGES.brickLayStarter },
  { title: "LOC BOWS", description: "Neat uniform rows styled into loc bows.", image: IMAGES.locBows },
  { title: "LAYERED LOC KNOT BOB", description: "Stacked knot bob with layered loc sections.", image: IMAGES.knotBob },
  { title: "LONG LOC PETALS", description: "Bold long loc petals fanned out for a statement look.", image: IMAGES.longLocPetals },
  { title: "WEDDING CURLY BUN", description: "Soft curled locs swept into an elegant wedding bun.", image: IMAGES.weddingCurlyBun },
  { title: "WEDDING SWOOP W/ LOW BUN", description: "Swooped locs in front with a low bun for a graceful bridal look.", image: IMAGES.weddingSwoopBun },
  { title: "WEDDING CURLS", description: "Flowing curled locs styled for a soft romantic bridal appearance.", image: IMAGES.weddingCurls },
  { title: "WEDDING COILED BUN", description: "Tightly coiled locs pinned into a refined bun.", image: IMAGES.weddingCoiledBun },
];

export default function LocStyleGallery() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-secondary/40 py-12 md:py-16 px-6 text-center">
        <h1 className="font-heading text-3xl md:text-4xl mb-3">Gallery of Loc Styles</h1>
        <p className="font-body text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
          Browse loc styles for inspiration before your appointment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.title} className="group">
              <div className="aspect-square overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-body text-[11px] md:text-xs font-semibold tracking-wider mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed hidden sm:block">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}