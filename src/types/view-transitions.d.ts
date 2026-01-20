// src/types/view-transitions.d.ts

interface Document {
    startViewTransition(callback: () => void): {
        ready: Promise<void>;
        finished: Promise<void>;
        updateCallbackDone: Promise<void>;
    };
}