/**
 * ============================================================================
 * MAIN LANDING PAGE - Wager960
 * ============================================================================
 * 
 * This is the main entry point for the Wager960 landing page.
 * 
 * TEAM NOTES:
 * -----------
 * - To ADD a new section: Import the component and add it inside <main>
 * - To REMOVE a section: Delete the component line and its import
 * - To REORDER sections: Move the component tags within <main>
 * - Global colors are defined in: src/app/globals.css
 * 
 * CURRENT PAGE STRUCTURE (top to bottom):
 * 1. Header    - Sticky navigation bar with logo and auth buttons
 * 2. Hero      - Main headline, tagline, and CTA buttons
 * 3. Features  - 4-column grid of platform benefits
 * 4. HowToPlay - Accordion FAQ about Chess960 rules
 * 5. Stats     - Live statistics display (wagered, games, players)
 * 6. Testimonials - User reviews carousel
 * 7. Footer    - Links and copyright
 * ============================================================================
 */

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { HowToPlay } from "@/components/HowToPlay";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    /**
     * LAYOUT CONTAINER
     * ----------------
     * STYLING: Change 'bg-charcoal' to modify page background
     * STYLING: Change 'text-off-white' to modify default text color
     */
    <div className="min-h-screen bg-charcoal text-off-white">
      {/* ========== HEADER / NAVIGATION ========== */}
      <Header />

      <main>
        {/* ========== HERO SECTION - Main CTA ========== */}
        <HeroSection />

        {/* ========== FEATURES GRID - Platform Benefits ========== */}
        <FeaturesGrid />

        {/* ========== HOW TO PLAY - Chess960 Rules FAQ ========== */}
        <HowToPlay />

        {/* ========== STATS - Live Platform Statistics ========== */}
        <StatsSection />

        {/* ========== TESTIMONIALS - User Reviews ========== */}
        <Testimonials />
      </main>

      {/* ========== FOOTER - Links & Copyright ========== */}
      <Footer />
    </div>
  );
}
