"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Chess board component
function ChessBoard() {
    const squares = [];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const isLight = (row + col) % 2 === 0;
            squares.push(
                <div
                    key={`${row}-${col}`}
                    className={`chess-square ${isLight ? "light" : "dark"}`}
                />
            );
        }
    }
    return <div className="chess-board overflow-hidden rounded-lg shadow-2xl">{squares}</div>;
}

// Player info component
function PlayerInfo({
    username,
    rating,
    time,
    avatarUrl,
    isCurrentPlayer = false,
}: {
    username: string;
    rating: number;
    time: string;
    avatarUrl: string;
    isCurrentPlayer?: boolean;
}) {
    return (
        <div
            className={`flex w-full max-w-[calc(100vh-160px)] items-center gap-4 rounded-lg p-2 ${isCurrentPlayer ? "ring-2 ring-gold/80" : ""
                }`}
        >
            <div className="flex items-center gap-3">
                <div
                    className="aspect-square size-10 flex-shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${avatarUrl}')` }}
                />
                <div>
                    <p className="text-lg font-bold leading-tight text-off-white">{username}</p>
                    <p className="text-sm font-normal leading-normal text-off-white/60">
                        Rating: {rating}
                    </p>
                </div>
            </div>
            <div
                className={`ml-auto flex h-10 min-w-[90px] items-center justify-center rounded-lg px-4 ${isCurrentPlayer ? "bg-gold/20" : "bg-black/50"
                    }`}
            >
                <p
                    className={`text-xl font-bold tracking-tight ${isCurrentPlayer ? "text-gold" : "text-off-white"
                        }`}
                >
                    {time}
                </p>
            </div>
        </div>
    );
}

// Move list component
function MoveList() {
    const moves = [
        { white: "Nf3", black: "d5" },
        { white: "g3", black: "c5" },
        { white: "Bg2", black: "Nc6" },
        { white: "O-O", black: "e5" },
        { white: "d3", black: "Nf6" },
        { white: "Nbd2", black: "Be7" },
        { white: "e4", black: "O-O" },
        { white: "Re1", black: "d4" },
        { white: "a4", black: "Be6" },
    ];

    return (
        <ol className="grid grid-cols-[auto_1fr_1fr] gap-x-4 gap-y-1 text-off-white/80">
            {moves.map((move, index) => (
                <li key={index} className="contents">
                    <span className="text-right text-off-white/40">{index + 1}.</span>
                    <span>{move.white}</span>
                    <span>{move.black}</span>
                </li>
            ))}
        </ol>
    );
}

export default function PlayPage() {
    const [activeTab, setActiveTab] = useState<"moves" | "chat" | "info">("moves");

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-gold/20 px-4 py-3 md:px-10">
                <Link href="/" className="flex items-center gap-4 text-off-white">
                    <div className="size-6 text-gold">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight text-off-white">
                        Wager960
                    </h2>
                </Link>

                <nav className="hidden items-center gap-9 md:flex">
                    <Link
                        href="/dashboard"
                        className="text-sm font-medium leading-normal text-off-white hover:text-gold"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/play"
                        className="text-sm font-bold leading-normal text-gold"
                    >
                        Play
                    </Link>
                    <Link
                        href="/leaderboard"
                        className="text-sm font-medium leading-normal text-off-white hover:text-gold"
                    >
                        Leaderboard
                    </Link>
                    <Link
                        href="/learn"
                        className="text-sm font-medium leading-normal text-off-white hover:text-gold"
                    >
                        Learn
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button className="h-10 min-w-[84px] bg-gold/20 px-4 text-sm font-bold text-gold hover:bg-gold/30">
                        Deposit
                    </Button>
                    <div
                        className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHqXfg3WOHN0FV1QOgbnaLzdNVC_kc2pwamOj_vVWbIYm65shlrFRYlFOAregypsCK5cTPrSYru5Hh2GWAIiOPSJpCBIdB3LzDFkLzDG8s2pxEk79rHWQMo5wA43tjWjwGUcF_EA8TrnqcUYqqkH_RPtwdwCYx82iBncpYcnObQ144cgjz2mikyVLTXNC4mmacV0a8YDXfMtxeqDA3PiS1FFuywFVl6AqhJnLELOpPDOFmpbfWnGFqegc7iuQrVjWsKifaatsB95DM')`,
                        }}
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-4 md:p-6 lg:p-8">
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 lg:grid-cols-[1fr_auto]">
                    {/* Chess Board Section */}
                    <div className="flex flex-col items-center justify-center gap-4">
                        {/* Opponent Info */}
                        <PlayerInfo
                            username="OpponentUsername"
                            rating={1580}
                            time="04:30"
                            avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD2emSfoZUsWl8gkqS5c5QKEsHkXQhj7hMpsFBYsC1C5uZ-_BCKgpyACNNWR4Um2nyEgiwZ8u9AjiqKUir8u4-0yqSa-LiW361v0DRcuJ1HuQ7riDNeCg7I9p-OJfuNpfVIb2xRIQWdq-eJYezarF9jn-9TK4fZNFHAGdgAvVjLFSgrqhTgAhhKO7SlHclKPYXaOBqQT0YaAUKz7AnKSZ3E5N0OItcVE6cZLSrHOE9HhFqoan0tClA-LBknhiYKW1OT9I-bGa371zTa"
                        />

                        {/* Chess Board */}
                        <div className="w-full max-w-[calc(100vh-160px)]">
                            <ChessBoard />
                        </div>

                        {/* Current Player Info */}
                        <PlayerInfo
                            username="YourUsername"
                            rating={1600}
                            time="04:55"
                            avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ahs0paUBDIiCbiw2p9xfDYbSIhLHhkeet0c5_PAvaz6cIZv34vhoPjmtmx8PduOo_9ZHoZFqZn6DO9FsREUxjQrUtO9y7lPR_BfFENMgFf9nFHYkP14eQC5iGuII7wpl-yNGB5Jwbell_7nxvKEU413G2KoZcOk8PLmmjPgonDOtgPXsjxrs9zZnY511kksEFyb9T2cMV3fmwnGshX279cdrdjIR_1GR3hM47fYHufPuZuMHbXVcbqaEtMDkUzKHe00YFJrixK5b"
                            isCurrentPlayer
                        />
                    </div>

                    {/* Side Panel */}
                    <div className="flex w-full max-w-sm flex-col gap-6">
                        {/* Game Info Panel */}
                        <div className="flex h-full flex-col rounded-xl border border-gold/20 bg-surface-dark">
                            {/* Tab Headers */}
                            <div className="flex border-b border-gold/20">
                                <button
                                    onClick={() => setActiveTab("moves")}
                                    className={`flex-1 px-4 py-3 text-sm font-bold ${activeTab === "moves"
                                            ? "border-b-2 border-gold text-gold"
                                            : "text-off-white/60 hover:text-off-white"
                                        }`}
                                >
                                    Moves
                                </button>
                                <button
                                    onClick={() => setActiveTab("chat")}
                                    className={`flex-1 px-4 py-3 text-sm font-medium ${activeTab === "chat"
                                            ? "border-b-2 border-gold text-gold"
                                            : "text-off-white/60 hover:text-off-white"
                                        }`}
                                >
                                    Chat
                                </button>
                                <button
                                    onClick={() => setActiveTab("info")}
                                    className={`flex-1 px-4 py-3 text-sm font-medium ${activeTab === "info"
                                            ? "border-b-2 border-gold text-gold"
                                            : "text-off-white/60 hover:text-off-white"
                                        }`}
                                >
                                    Info
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="flex-grow overflow-y-auto p-4">
                                {activeTab === "moves" && <MoveList />}
                                {activeTab === "chat" && (
                                    <p className="text-off-white/60">Chat coming soon...</p>
                                )}
                                {activeTab === "info" && (
                                    <p className="text-off-white/60">Game info coming soon...</p>
                                )}
                            </div>

                            {/* Wager Display */}
                            <div className="border-t border-gold/20 p-4">
                                <div className="flex items-center justify-center rounded-lg bg-black/50 p-4">
                                    <p className="text-lg font-bold leading-normal text-gold">
                                        Wager: $50.00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                className="flex h-12 flex-1 items-center justify-center gap-2 border-none bg-surface-dark text-sm font-bold text-off-white hover:bg-off-white/10"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                                    />
                                </svg>
                                Offer Draw
                            </Button>
                            <Button
                                variant="outline"
                                className="flex h-12 flex-1 items-center justify-center gap-2 border-none bg-surface-dark text-sm font-bold text-off-white hover:bg-off-white/10"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                    />
                                </svg>
                                Resign
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
