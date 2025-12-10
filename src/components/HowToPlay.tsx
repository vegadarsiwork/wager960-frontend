/**
 * ============================================================================
 * HOW TO PLAY / FAQ COMPONENT
 * ============================================================================
 * 
 * Accordion-style FAQ section explaining Chess960 rules.
 * Uses Shadcn Accordion component for expand/collapse functionality.
 * 
 * TEAM NOTES:
 * -----------
 * KEY AREAS TO MODIFY:
 * - FAQ Items: Update the 'faqItems' array to add/remove/edit questions
 * - Section Title: Update H2 text
 * - Default Open: Change 'defaultValue="item-0"' to open different item by default
 * - Section ID: Used for anchor linking (id="how-to-play")
 * ============================================================================
 */

"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * ========== FAQ ITEMS DATA ==========
 * 
 * ADD: Copy an object to add a new FAQ item
 * REMOVE: Delete an object to remove a FAQ item
 * CHANGE: Modify 'question' or 'answer' to update content
 * 
 * NOTE: First item (index 0) is open by default
 */
const faqItems = [
    {
        question: "What is Fischer Random (Chess960)?",  // FAQ QUESTION - Shown in accordion header
        answer:                                          // FAQ ANSWER - Revealed when expanded
            "Fischer Random, also known as Chess960, is a variant of chess that randomizes the starting position of the pieces on the back rank. This negates opening theory and emphasizes raw chess skill and creativity from the very first move.",
    },
    {
        question: "The Randomized Setup",
        answer:
            "The pawns remain on their usual squares. However, the pieces on the back rank are placed in one of 960 possible semi-random positions. The constraints are: the king must be placed between the two rooks, and bishops must be on opposite-colored squares.",
    },
    {
        question: "Special Castling Rules",
        answer:
            "Castling is still a key move. The final position of the king and rook after castling is identical to standard chess. The king lands on the 'g' file and the rook on the 'f' file for kingside castling, and the king lands on 'c' file and rook on 'd' file for queenside castling, regardless of their starting positions.",
    },
];

export function HowToPlay() {
    return (
        /**
         * SECTION CONTAINER
         * -----------------
         * NOTE: id="how-to-play" is used for anchor linking from navigation
         * STYLING: 'py-16' controls vertical padding
         */
        <section id="how-to-play" className="py-16 px-4">
            <div className="max-w-[960px] mx-auto">

                {/* ========== SECTION TITLE ========== 
                 * CHANGE: Update text to modify section heading
                 */}
                <h2 className="text-3xl font-bold text-off-white text-center mb-8 tracking-tight animate-fade-in">
                    How to Play Chess960
                </h2>

                {/* ========== ACCORDION FAQ ========== 
                 * CHANGE: Set defaultValue to "item-0", "item-1", etc. to change which item is open by default
                 * CHANGE: Set defaultValue to undefined to have all items closed by default
                 * NOTE: type="single" means only one item can be open at a time
                 * NOTE: collapsible allows all items to be closed
                 */}
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-0"
                    className="flex flex-col gap-3"
                >
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-navy/30 border border-navy rounded-lg px-4 data-[state=open]:border-gold/30 transition-colors"
                        >
                            {/* FAQ QUESTION - Click to toggle */}
                            <AccordionTrigger className="text-off-white font-medium text-base hover:no-underline py-4">
                                {item.question}
                            </AccordionTrigger>
                            {/* FAQ ANSWER - Revealed on expand */}
                            <AccordionContent className="text-light-gray text-sm leading-relaxed pb-4 border-t border-navy/50 pt-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
