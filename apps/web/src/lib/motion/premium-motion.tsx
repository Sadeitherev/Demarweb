'use client';

import type { CSSProperties, ReactNode } from 'react';
import {
  AnimatedAuroraBackground,
  MagneticSurface,
  MotionReveal,
} from 'nextlevelbuilder/ui-ux-pro-max-skill';

interface PremiumBackgroundProps {
  children: ReactNode;
  className?: string;
}

interface PremiumRevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  style?: CSSProperties;
}

interface PremiumMagneticProps {
  children: ReactNode;
  className?: string;
}

export function PremiumBackground(props: PremiumBackgroundProps) {
  return (
    <AnimatedAuroraBackground
      className={props.className}
      intensity="premium"
      palette={["#071a3d", "#1f3f66", "#8b98a8", "#ffffff"]}
      grain
      spotlight
    >
      {props.children}
    </AnimatedAuroraBackground>
  );
}

export function PremiumReveal(props: PremiumRevealProps) {
  return (
    <MotionReveal
      className={props.className}
      delay={props.delayMs ?? 0}
      duration={900}
      easing="expo-out"
      y={28}
      opacity
      blur={10}
      style={props.style}
    >
      {props.children}
    </MotionReveal>
  );
}

export function PremiumMagnetic(props: PremiumMagneticProps) {
  return (
    <MagneticSurface className={props.className} strength={0.18} radius={220}>
      {props.children}
    </MagneticSurface>
  );
}
