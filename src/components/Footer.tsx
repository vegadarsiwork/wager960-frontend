/**
 * ============================================================================
 * FOOTER COMPONENT
 * ============================================================================
 * KEY AREAS TO MODIFY:
 * - footerLinks object: Add/remove/edit footer link categories
 * - Each category contains an array of { label, href } link objects
 * - Copyright text at the bottom includes dynamic year
 * ============================================================================
 */

import Link from "next/link";
/**
 * FOOTER LINKS DATA - Organized by category
 * ADD: Copy a category block to add a new column
 * REMOVE: Delete a category to remove a column
 * CHANGE: Modify label/href to update links
 * NOTE: Links with href="#" are placeholders - update with real routes
 */
const footerLinks = {
    Platform: [
        { label: "How to Play", href: "#how-to-play" },
        { label: "Leaderboards", href: "#leaderboards" },
        { label: "Fair Play", href: "#" },
    ],
    Company: [
        { label: "About Us", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
    ],
    Support: [
        { label: "FAQ", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Discord", href: "#" },
    ],
    Legal: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="w-full bg-navy/30 border-t border-navy">
            <div className="max-w-[960px] mx-auto py-12 px-4">
                {/* ========== LINKS GRID - 4 columns on desktop, 2 on mobile ========== */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-sm font-semibold text-off-white tracking-wider uppercase mb-4">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-light-gray hover:text-off-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ========== COPYRIGHT - Year updates automatically ========== */}
                <div className="mt-8 pt-8 border-t border-navy/50 text-center">
                    <p className="text-light-gray text-sm">
                        © {new Date().getFullYear()} Wager960. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
