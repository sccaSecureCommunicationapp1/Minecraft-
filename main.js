import { world, system, GameMode } from "@minecraft/server";

// 300x Ultra Speed & Creative Mode for Virtual Player Assistant
system.runInterval(() => {
    const players = world.getAllPlayers();
    
    for (const player of players) {
        // Check if this is our virtual player entity or controlled bot
        if (player.nameTag.includes("VirtualPlayer") || player.nameTag.includes("Assistant")) {
            
            // Set to Creative mode so it has infinite inventory and blocks
            if (player.getGameMode() !== GameMode.creative) {
                player.setGameMode(GameMode.creative);
            }
            
            // Apply 300x speed effects (Speed and Haste/Mining speed multiplier)
            player.runCommandAsync("effect @s speed 99999 25 true");
            player.runCommandAsync("effect @s haste 99999 25 true");
            player.runCommandAsync("effect @s saturation 99999 255 true");
        }
    }
}, 1); // Runs every single tick for real-time 300x performance

console.warn("Virtual Player 300x Speed & Creative Mode script loaded successfully!");
