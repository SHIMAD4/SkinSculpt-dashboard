import { PropsWithChildren, HTMLAttributes, forwardRef, createElement, ForwardedRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type TextDesign = 'basic-menu' | 'basic-graphics' | 'common' | 'systemic';

type TextProps = PropsWithChildren<{
  as?: keyof HTMLElementTagNameMap;
  design?: TextDesign;
  raw?: boolean;
  className?: string;
}> &
  HTMLAttributes<HTMLElement>;

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = 'p', design = 'basic-menu', raw, className, children, ...rest }, ref) =>
    createElement<TextProps & { ref: ForwardedRef<HTMLElement> }>(
      as,
      {
        className: clsx(styles[design], className),
        ...rest,
        ref,
        ...(raw && typeof children === 'string'
          ? { dangerouslySetInnerHTML: { __html: children } }
          : {}),
      },
      !raw ? children : null,
    ),
);
