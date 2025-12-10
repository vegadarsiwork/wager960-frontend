/**
 * ============================================================================
 * FEATURES GRID COMPONENT
 * ============================================================================
 * 
 * Displays platform benefits in a 4-column responsive grid.
 * 
 * TEAM NOTES:
 * -----------
 * KEY AREAS TO MODIFY:
 * - Features Data: Update the 'features' array to add/remove/edit features
 * - Icons: Import new icons from 'lucide-react' and update the 'icon' property
 * - Section Header: Title and description above the grid
 * - Grid Layout: Currently 1 col mobile → 2 cols tablet → 4 cols desktop
 * ============================================================================
 */

"use client";

import { Shield, Scale, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * ========== FEATURES DATA ==========
 * 
 * ADD: Copy an object to add a new feature card
 * REMOVE: Delete an object to remove a feature card  
 * CHANGE: Modify 'icon', 'title', or 'description' to update content
 * 
 * ICONS: Import from 'lucide-react' - see https://lucide.dev/icons
 * Examples: Lock, Trophy, CreditCard, Clock, Globe, Star, etc.
 */
const features = [
    {
        icon: Shield,                    // ICON: Security/protection icon
        title: "Secure & Anti-Cheat",    // TITLE: Feature headline
        description: "Our state-of-the-art systems ensure fair play in every match.",  // DESCRIPTION: Feature details
    },
    {
        icon: Scale,
        title: "Skill-Based Matchmaking",
        description: "You'll always be paired against opponents of a similar skill level.",
    },
    {
        icon: Zap,
        title: "Instant Withdrawals",
        description: "Access your winnings immediately with our fast payout system.",
    },
    {
        icon: Users,
        title: "Thriving Community",
        description: "Join tournaments, chat with players, and climb the leaderboards.",
    },
];

export function FeaturesGrid() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-[960px] mx-auto">

                {/* ========== SECTION HEADER ========== 
                 * CHANGE: Update H2 text to modify section title
                 * CHANGE: Update <p> text to modify section description
                 */}
                <div className="flex flex-col gap-4 text-center items-center mb-10 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-off-white tracking-tight">
                        Why Wager960?
                    </h2>
                    <p className="text-light-gray text-base max-w-xl">
                        Experience Chess960 like never before, where skill meets high stakes in a secure and fair environment.
                    </p>
                </div>

                {/* ========== FEATURES GRID ========== 
                 * STYLING: Grid columns - 1 mobile, 2 tablet (sm:), 4 desktop (lg:)
                 * STYLING: Cards have hover effect with gold border and lift animation
                 * NOTE: Cards are rendered from the 'features' array above
                 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <Card
                            key={feature.title}
                            className={`bg-navy/30 border-navy hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                                {/* FEATURE ICON - Gold colored, size-10 (40px) */}
                                <feature.icon className="size-10 text-gold" strokeWidth={1.5} />
                                <div className="flex flex-col gap-1">
                                    {/* FEATURE TITLE */}
                                    <h3 className="text-off-white font-bold text-base">{feature.title}</h3>
                                    {/* FEATURE DESCRIPTION */}
                                    <p className="text-light-gray text-sm">{feature.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
