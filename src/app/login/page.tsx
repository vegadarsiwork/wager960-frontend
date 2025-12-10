"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-charcoal p-4">
            {/* Header */}
            <header className="absolute top-0 flex w-full max-w-7xl items-center justify-between p-6">
                <Link href="/" className="flex items-center gap-3 text-off-white">
                    <div className="size-6 text-gold">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-tight">Wager960</h2>
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex w-full max-w-md flex-col items-center animate-fade-in-up">
                <div className="mb-8 w-full text-center">
                    <h1 className="text-4xl font-black leading-tight tracking-tight text-off-white">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-base font-normal leading-normal text-light-gray">
                        Log in to continue playing.
                    </p>
                </div>

                {/* Form */}
                <form className="w-full space-y-4">
                    <div>
                        <Label htmlFor="email" className="mb-2 block text-sm font-medium text-off-white">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-navy/50 bg-navy p-3 text-base text-off-white placeholder:text-light-gray focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                    </div>

                    <div>
                        <Label htmlFor="password" className="mb-2 block text-sm font-medium text-off-white">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-navy/50 bg-navy p-3 text-base text-off-white placeholder:text-light-gray focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                    </div>

                    <div className="flex items-center justify-end">
                        <Link href="/forgot-password" className="text-sm text-gold hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gold text-sm font-bold leading-normal tracking-wide text-charcoal transition-opacity hover:bg-gold-hover"
                    >
                        Log In
                    </Button>
                </form>

                {/* Divider */}
                <div className="relative my-6 flex w-full items-center justify-center">
                    <div className="absolute w-full border-t border-navy/50"></div>
                    <span className="relative bg-charcoal px-2 text-xs uppercase text-light-gray">Or</span>
                </div>

                {/* Social Sign In Buttons */}
                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                    <Button
                        variant="outline"
                        className="flex h-11 items-center justify-center gap-2.5 rounded-lg border border-navy/50 bg-navy text-sm font-medium text-off-white transition-colors hover:bg-navy-light"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_google_login)">
                                <path d="M21.9999 12.2248C21.9999 11.3698 21.9299 10.5148 21.7799 9.6948H12.2199V14.4948H17.7699C17.5199 16.0548 16.7099 17.4148 15.4699 18.2848V21.0948H19.0499C20.8999 19.4248 21.9999 16.9248 21.9999 12.2248Z" fill="#4285F4" />
                                <path d="M12.22 22.0001C15.11 22.0001 17.59 21.0301 19.05 19.4301L15.47 18.2801C14.51 18.9001 13.45 19.2701 12.22 19.2701C9.86 19.2701 7.82 17.7201 7.02 15.5401L3.34 16.7301V16.7701C4.8 19.6901 8.21 22.0001 12.22 22.0001Z" fill="#34A853" />
                                <path d="M7.02002 15.5448C6.77002 14.8248 6.62002 14.0548 6.62002 13.2548C6.62002 12.4548 6.76002 11.6848 7.01002 10.9648V8.7848L3.34002 7.5948C2.51002 9.2148 2.00002 11.1748 2.00002 13.2548C2.00002 15.3348 2.51002 17.2948 3.34002 18.9148L7.02002 15.5448Z" fill="#FBBC05" />
                                <path d="M12.22 7.22999C13.56 7.22999 14.77 7.70999 15.73 8.60999L19.12 5.21999C17.58 3.75999 15.11 2.98999 12.22 2.98999C8.21 2.98999 4.8 5.29999 3.34 8.21999L7.02 10.96C7.82 8.77999 9.86 7.22999 12.22 7.22999Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_google_login">
                                    <rect fill="white" height="20" transform="translate(2 2)" width="20" />
                                </clipPath>
                            </defs>
                        </svg>
                        Log in with Google
                    </Button>

                    <Button
                        variant="outline"
                        className="flex h-11 items-center justify-center gap-2.5 rounded-lg border border-navy/50 bg-navy text-sm font-medium text-off-white transition-colors hover:bg-navy-light"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65685 21.1283 10.4375 21.875V14.875H7.89375V12H10.4375V9.79375C10.4375 7.29375 11.9304 6 14.2156 6C15.3086 6 16.2598 6.09375 16.5422 6.13594V8.5H15.1953C13.9507 8.5 13.5625 9.25 13.5625 10.125V12H16.4219L15.9688 14.875H13.5625V21.875C18.3431 21.1283 22 16.9913 22 12Z" fill="#1877F2" />
                        </svg>
                        Log in with Facebook
                    </Button>
                </div>

                {/* Sign Up Link */}
                <p className="mt-8 text-center text-sm text-light-gray">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-medium text-gold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </main>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full p-6 text-center">
                <p className="text-xs text-light-gray">
                    <Link href="/terms" className="hover:text-gold hover:underline">
                        Terms of Service
                    </Link>{" "}
                    •{" "}
                    <Link href="/privacy" className="hover:text-gold hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </footer>
        </div>
    );
}
