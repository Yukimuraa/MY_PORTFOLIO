import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSound } from '../../context/SoundContext.jsx';

/**
 * Computes shortest signed circular offset in [-floor(total/2), +floor(total/2)]
 */
const getCircularOffset = (index, activeIndex, total) => {
  let diff = index - activeIndex;
  const half = Math.floor(total / 2);
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  return diff;
};

/**
 * Reusable Bryl-inspired compact horizontal fanned card carousel.
 * Supports:
 * - Bi-directional pointer drag/swipe (left & right) without native link/img drag hijacking
 * - Trackpad horizontal wheel swipe
 * - Clicking left or right angled neighbor cards to bring them to center
 * - Keyboard ArrowLeft / ArrowRight navigation
 * - Prev / Next buttons + dot indicators + counter
 */
export const FannedCarousel = ({
  items,
  getKey,
  getLabel,
  onSelectItem,
  renderCard,
  stageHeightClass = 'h-[330px] sm:h-[355px]',
  cardWidthClass = 'w-[74vw] max-w-[300px] sm:max-w-[340px]',
  ariaLabel = 'Items carousel',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const { playSound } = useSound();
  const pointerStartRef = useRef(null);
  const didDragRef = useRef(false);
  const wheelCooldownRef = useRef(false);
  const total = items.length;

  const step = useCallback(
    (dir) => {
      if (total <= 1) return;
      setActiveIndex((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    }
  };

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    didDragRef.current = false;
    setDragDeltaX(0);
  };

  const handlePointerMove = (e) => {
    if (!pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
      didDragRef.current = true;
      setDragDeltaX(Math.max(-90, Math.min(90, dx * 0.35)));
    }
  };

  const finishPointer = (e) => {
    if (!pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    pointerStartRef.current = null;
    setDragDeltaX(0);

    if (Math.abs(dx) > 38) {
      didDragRef.current = true;
      // Swipe left (dx < 0) -> next card (+1); Swipe right (dx > 0) -> previous card (-1)
      step(dx < 0 ? 1 : -1);
    }
  };

  const handlePointerCancel = () => {
    pointerStartRef.current = null;
    setDragDeltaX(0);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 22) {
      if (wheelCooldownRef.current) return;
      wheelCooldownRef.current = true;
      step(e.deltaX > 0 ? 1 : -1);
      setTimeout(() => {
        wheelCooldownRef.current = false;
      }, 360);
    }
  };

  if (total === 0) return null;

  return (
    <div
      className="relative outline-none select-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onWheel={handleWheel}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Fanned Stage */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={finishPointer}
        className={`relative mx-auto w-full overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing py-2 ${stageHeightClass}`}
      >
        {items.map((item, idx) => {
          const offset = getCircularOffset(idx, activeIndex, total);
          if (Math.abs(offset) > 2) return null;

          const isCenter = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;
          const isVisible = Math.abs(offset) <= 1;

          // Center via inset-x-0 mx-auto so Framer Motion transform never conflicts with CSS centering
          const animateTarget = isCenter
            ? { x: dragDeltaX, y: 0, rotate: dragDeltaX * 0.03, scale: 1, opacity: 1, zIndex: 30 }
            : isLeft
            ? { x: -190 + dragDeltaX * 0.4, y: 20, rotate: -8, scale: 0.88, opacity: 0.45, zIndex: 20 }
            : isRight
            ? { x: 190 + dragDeltaX * 0.4, y: 20, rotate: 8, scale: 0.88, opacity: 0.45, zIndex: 20 }
            : {
                x: offset < 0 ? -290 : 290,
                y: 36,
                rotate: offset < 0 ? -14 : 14,
                scale: 0.78,
                opacity: 0,
                zIndex: 10,
              };

          const handleCardActivate = (e) => {
            if (didDragRef.current) {
              e.preventDefault();
              didDragRef.current = false;
              return;
            }
            if (isCenter) {
              onSelectItem(item, idx);
            } else if (isLeft) {
              e.preventDefault();
              step(-1);
            } else if (isRight) {
              e.preventDefault();
              step(1);
            }
          };

          return (
            <motion.article
              key={getKey(item, idx)}
              initial={false}
              animate={animateTarget}
              transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.85 }}
              style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
              aria-hidden={!isVisible}
              className={`absolute inset-x-0 top-2 mx-auto ${cardWidthClass}`}
            >
              {renderCard({
                item,
                idx,
                isCenter,
                isVisible,
                label: getLabel(item),
                onActivate: handleCardActivate,
              })}
            </motion.article>
          );
        })}
      </div>

      {/* Carousel Controls & Pagination */}
      {total > 1 && (
        <div className="mt-3 flex items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={() => {
              playSound();
              step(-1);
            }}
            aria-label="Previous item"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1.5 sm:flex" role="tablist" aria-label="Choose slide">
              {items.map((item, idx) => {
                const selected = idx === activeIndex;
                return (
                  <button
                    key={getKey(item, idx)}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={`Slide ${idx + 1}: ${getLabel(item)}`}
                    onClick={() => {
                      playSound();
                      setActiveIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      selected ? 'w-5 bg-ink' : 'w-1.5 bg-line-strong hover:bg-ink-subtle'
                    }`}
                  />
                );
              })}
            </div>
            <span className="font-mono text-xs text-ink-subtle sm:ml-1.5">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              playSound();
              step(1);
            }}
            aria-label="Next item"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};
