import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Flame, RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('The Elite Grill Uncaught Error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0c] text-white flex items-center justify-center p-6 select-none">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#121217] border border-amber-500/30 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Flame className="w-8 h-8 text-amber-500 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-2xl font-bold text-white">
                The Elite Grill
              </h1>
              <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                Artisanal Wood-Fired Smokehouse
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 text-left space-y-1 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5 text-amber-400 font-medium">
                <AlertTriangle className="w-4 h-4" />
                <span>Application Recovery Notice</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                A temporary rendering exception was safely caught. Click below to reload.
              </p>
              {this.state.error?.message && (
                <p className="font-mono text-[10px] text-zinc-500 pt-1 truncate">
                  {this.state.error.message}
                </p>
              )}
            </div>

            <button
              onClick={this.handleReload}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm tracking-wide transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Experience</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
