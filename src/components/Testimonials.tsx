/**
 * ============================================================================
 * TESTIMONIALS COMPONENT
 * ============================================================================
 * KEY AREAS TO MODIFY:
 * - testimonials array: Add/remove/edit user reviews
 * - Avatar URLs: Replace with actual user photos
 * - Grid layout: 1 col mobile → 2 cols tablet → 3 cols desktop
 * ============================================================================
 */

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/**
 * TESTIMONIALS DATA - ADD/REMOVE/EDIT user reviews here
 * Properties: quote, name, rating, avatar (image URL)
 */
const testimonials = [
    {
        quote:
            "Wager960 completely reignited my passion for chess. No more boring opening theory, just pure skill. And the instant payouts are legit!",
        name: "Alex M.",
        rating: "2150",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqsyWm8gRlsxkhMQ3NXUXeYeqJMo_NK_VXSL9_MS55_ZEpioW2UCf2G03mmnAqowecrFyaczF5Ys4PE6LEXNo_sHHrCxl7arfAY-zmJTbs8xc9DrXpFy3WIi_0bPX0xrWXEtvcqiLloEUSBkaHzRzupxJBP1dNJ5ckRYjuifvV24LrKeuTeS_nOwqgH5G4OTZTqVGuthumt1de4cuhXH6q1XA6Kz65w6rgZrHjpQATz5O4ayp65SF766mAW6BKJcJ3h4wLUt_870S8",
    },
    {
        quote:
            "The matchmaking is surprisingly fair. I always get games against players at my level, which makes the wagers feel earned and exciting.",
        name: "Jessica T.",
        rating: "1890",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCUTY7vKuSNT035OnxOdA-g1M1ihvssMc4sCbSoodIRomb1eEVN8Mbk_GPNAtftz0i5LxfE2oHXqVQi_Fe55jucwmycyQUCiJqU1qr64IdPAAisJ8H3-GSSO6WGHv87ZVXAcWROtkobdOeE9t_vCZ9zspCRfvY6NjKlytAIM0pKn1m4CiGrgVdNViYkJ_D2W6H2YwWRWd9HwTxZINHjylQf0IO2eOovNNEiuz11blUbmMQtmYk-LUNGI1ZVXJLaOA_u4IjW-wrP2faB",
    },
    {
        quote:
            "Finally, a platform that takes anti-cheat seriously. I can focus on my game without worrying about unfair advantages.",
        name: "Kenji O.",
        rating: "2300",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDoX_1tcfYF4gvBtz2IKXgeGPRmoQ4ZSXDK5TKIviTU8FgYcsind4-aZZikS4s69bTmUgLDTwoN4UcZf90tKbSItHRi1RTZD1RQStPYrOvd2VtulxLXCKxpiHL45Y5hy-yR_sXfVk3rnmW7aOo9T4XAwwz17uFQyXR0UfI8bxy99V_PB4MPmuuUqd_6hkSgIsvmqZ7aOg8OTCpg6aBCLno6enOEb2GS05vef-hyGZtxi65UwkLvRy0CwwIAlrteEofffJ_dHh9D1Wzd",
    },
];

export function Testimonials() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-[960px] mx-auto">
                {/* ========== SECTION HEADER - Update H2 text to change title ========== */}
                <div className="flex flex-col gap-4 text-center items-center mb-10 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-off-white tracking-tight">
                        What Our Players Say
                    </h2>
                </div>

                {/* ========== TESTIMONIALS GRID - Cards rendered from array above ========== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.name}
                            className="bg-navy/30 border-navy hover:border-gold/30 transition-colors duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="flex flex-col gap-4 p-6 h-full">
                                <p className="text-light-gray italic flex-1">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-3 mt-auto">
                                    <Avatar className="size-10">
                                        <AvatarImage
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="object-cover"
                                        />
                                        <AvatarFallback className="bg-navy text-gold">
                                            {testimonial.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="text-off-white font-bold">{testimonial.name}</h4>
                                        <p className="text-light-gray text-sm">Rating: {testimonial.rating}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
