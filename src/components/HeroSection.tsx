/**
 * ============================================================================
 * HERO SECTION COMPONENT
 * ============================================================================
 * 
 * The main above-the-fold section with headline, tagline, and call-to-action buttons.
 * 
 * TEAM NOTES:
 * -----------
 * KEY AREAS TO MODIFY:
 * - Background Image: Update the URL in backgroundImage style
 * - Headline: Main H1 text and highlighted portion
 * - Tagline: Subtext below the headline
 * - CTA Buttons: "Play Now" and "Watch Demo" buttons
 * - Section Height: Controlled by 'min-h-[480px]'
 * ============================================================================
 */

"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">

            {/* ========== BACKGROUND IMAGE ========== 
             * CHANGE: Replace the URL to use a different background image
             * STYLING: Gradient overlay uses rgba(18,18,18,0.85) for darkening
             * NOTE: Gradient goes from 85% opacity at top to 70% at bottom
             */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.85) 0%, rgba(18, 18, 18, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDq7hugQrABlEehirCjUjqZ1YDLAdXStVbRxErF2NOROcmbvbmOMoDIE_tCWhQUSUhyofhNuEsjIL9hkvrTUJYj8xqtWxqExPVATsRX0QpXLG7kuwc9be1Fi9NIXQcrIhnuiFlxfFHbBSxHKp6tRFjWn6")`,
                }}
            />

            {/* ========== HERO CONTENT CONTAINER ========== */}
            <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-16 text-center max-w-3xl mx-auto">

                {/* ========== HEADLINE & TAGLINE ========== 
                 * CHANGE: Update H1 text to modify main headline
                 * CHANGE: Update <span> text for the highlighted portion (gold gradient)
                 * CHANGE: Update <p> text to modify the tagline/subtext
                 * STYLING: Font sizes are responsive - text-4xl on mobile, up to text-6xl on large screens
                 */}
                <div className="flex flex-col gap-3 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-off-white">
                        {/* MAIN HEADLINE - White text */}
                        The Ultimate Test of Chess Skill.{" "}
                        {/* HIGHLIGHTED PORTION - Gold gradient text */}
                        <span className="text-gold-gradient">Wager on Your Win.</span>
                    </h1>
                    {/* TAGLINE - Gray subtext */}
                    <p className="text-base md:text-lg text-light-gray max-w-xl mx-auto">
                        Fair, Secure Fischer Random Chess with Real-Money Stakes.
                    </p>
                </div>

                {/* ========== CTA BUTTONS ========== 
                 * CHANGE: Update button text "Play Now" and "Watch Demo"
                 * CHANGE: Add onClick handlers or wrap with Link for navigation
                 * STYLING: Primary button uses 'bg-gold', outline button uses 'border-gold'
                 * NOTE: Buttons stack on mobile (flex-wrap)
                 */}
                <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-200">
                    {/* PRIMARY CTA - Solid gold background */}
                    <Button
                        size="lg"
                        className="bg-gold hover:bg-gold-hover text-charcoal font-bold px-6 h-12 text-base"
                    >
                        Play Now
                    </Button>
                    {/* SECONDARY CTA - Outline style */}
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 font-bold px-6 h-12 text-base bg-transparent"
                    >
                        Watch Demo
                    </Button>
                </div>
            </div>
        </section>
    );
}
