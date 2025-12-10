/**
 * ============================================================================
 * STATS SECTION COMPONENT
 * ============================================================================
 * 
 * Displays live platform statistics (total wagered, games, active players).
 * 
 * TEAM NOTES:
 * -----------
 * KEY AREAS TO MODIFY:
 * - Stats Data: Update the 'stats' array to change displayed statistics
 * - Values: Currently hardcoded - integrate with API for live data
 * - Highlight: Set 'highlight: true' to make a stat gold-colored
 * - Layout: 3-column grid on desktop, stacks on mobile
 * 
 * TODO: Consider fetching real-time data from backend API
 * ============================================================================
 */

"use client";

export function StatsSection() {
    /**
     * ========== STATS DATA ==========
     * 
     * ADD: Copy an object to add a new stat (remember to update grid columns)
     * REMOVE: Delete an object to remove a stat
     * CHANGE: Modify 'label' and 'value' to update content
     * HIGHLIGHT: Set 'highlight: true' to make the value gold-colored
     * 
     * TODO: Replace hardcoded values with API data for live statistics
     */
    const stats = [
        { label: "Total Wagered", value: "$1,250,980", highlight: true },   // HIGHLIGHTED (gold)
        { label: "Games Played Today", value: "5,432", highlight: false },  // Normal (white)
        { label: "Active Players", value: "1,876", highlight: false },      // Normal (white)
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-[960px] mx-auto">

                {/* ========== STATS CONTAINER ========== 
                 * STYLING: Grid layout - 1 col mobile, 3 cols desktop (md:grid-cols-3)
                 * STYLING: Dark card with 'bg-navy/30' background and border
                 * NOTE: If adding more stats, consider changing grid-cols-3 to grid-cols-4, etc.
                 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-navy/30 border border-navy rounded-lg p-8 animate-fade-in">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="flex flex-col gap-2 text-center"
                        >
                            {/* STAT LABEL - Uppercase, small text */}
                            <p className="text-light-gray text-sm uppercase tracking-widest">
                                {stat.label}
                            </p>
                            {/* STAT VALUE - Large text, gold if highlighted */}
                            <p
                                className={`text-4xl font-bold ${stat.highlight ? "text-gold" : "text-off-white"
                                    }`}
                            >
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
