// lib/utils.js

export function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  