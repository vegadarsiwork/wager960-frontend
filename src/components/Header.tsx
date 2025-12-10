/**
 * ============================================================================
 * HEADER / NAVIGATION COMPONENT
 * ============================================================================
 * 
 * Sticky navigation bar containing logo, nav links, and authentication buttons.
 * 
 * TEAM NOTES:
 * -----------
 * KEY AREAS TO MODIFY:
 * - Logo: Update SVG icon and brand name (lines marked LOGO SECTION)
 * - Nav Links: Add/remove navigation items (lines marked NAV LINKS)
 * - Auth Buttons: Modify login/signup buttons (lines marked AUTH BUTTONS)
 * - Styling: Header uses glassmorphism effect (bg-charcoal/80 backdrop-blur-sm)
 * ============================================================================
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        /**
         * HEADER CONTAINER
         * ----------------
         * STYLING: 'sticky top-0 z-50' keeps header fixed at top
         * STYLING: 'bg-charcoal/80 backdrop-blur-sm' creates glassmorphism effect
         * STYLING: Change 'max-w-[960px]' to adjust content width
         */
        <header className="sticky top-0 z-50 w-full bg-charcoal/80 backdrop-blur-sm border-b border-navy/50">
            <div className="mx-auto flex max-w-[960px] items-center justify-between px-4 py-3 md:px-10">

                {/* ========== LOGO SECTION ========== 
                 * CHANGE: Update the SVG path to use a different icon
                 * CHANGE: Modify "Wager960" text for different brand name
                 * STYLING: 'text-gold' controls logo color, 'size-6' controls size
                 */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-6 text-gold">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-off-white tracking-tight">Wager960</span>
                </Link>

                {/* ========== NAVIGATION & BUTTONS CONTAINER ========== */}
                <div className="flex items-center gap-6">

                    {/* ========== NAV LINKS ========== 
                     * ADD: Copy a <Link> block to add more nav items
                     * REMOVE: Delete a <Link> block to remove nav items
                     * CHANGE: Update 'href' to link to different sections/pages
                     * NOTE: 'hidden md:flex' means links are hidden on mobile
                     */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="#how-to-play"
                            className="text-sm font-medium text-light-gray hover:text-off-white transition-colors"
                        >
                            How to Play
                        </Link>
                        <Link
                            href="#leaderboards"
                            className="text-sm font-medium text-light-gray hover:text-off-white transition-colors"
                        >
                            Leaderboards
                        </Link>
                    </nav>

                    {/* ========== AUTH BUTTONS ========== 
                     * CHANGE: Update hrefs '/login' and '/signup' for different routes
                     * CHANGE: Modify button text "Log In" and "Create Account"
                     * STYLING: Primary CTA uses 'bg-gold', secondary uses 'bg-navy'
                     */}
                    <div className="flex gap-2">
                        <Link href="/login">
                            <Button
                                variant="secondary"
                                className="bg-navy hover:bg-navy-light text-off-white border-none"
                            >
                                Log In
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button className="bg-gold hover:bg-gold-hover text-charcoal font-bold">
                                Create Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
