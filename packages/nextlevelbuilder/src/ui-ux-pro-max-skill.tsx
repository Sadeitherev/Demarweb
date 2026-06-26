'use client';

import type { CSSProperties, ReactNode } from 'react';

interface AnimatedAuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  intensity?: 'premium' | 'subtle';
  palette?: string[];
  grain?: boolean;
  spotlight?: boolean;
}

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  easing?: string;
  y?: number;
  opacity?: boolean;
  blur?: number;
  style?: CSSProperties;
}

interface MagneticSurfaceProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
}

export function AnimatedAuroraBackground(props: AnimatedAuroraBackgroundProps) {
  const palette = props.palette ?? ['#071a3d', '#1f3f66', '#8b98a8'];

  return (
    <div
      className={props.className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(circle at 18% 12%, ${palette[1]}66, transparent 30%), radial-gradient(circle at 82% 18%, ${palette[2]}33, transparent 34%), linear-gradient(135deg, ${palette[0]}, #020817)`,
      }}
    >
      {props.children}
    </div>
  );
}

export function MotionReveal(props: MotionRevealProps) {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        animation: `demarReveal ${props.duration ?? 900}ms cubic-bezier(.16,1,.3,1) ${props.delay ?? 0}ms both`,
      }}
    >
      {props.children}
    </div>
  );
}

export function MagneticSurface(props: MagneticSurfaceProps) {
  return <span className={props.className}>{props.children}</span>;
}
