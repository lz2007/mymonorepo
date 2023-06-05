import {describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Accordion test", () => {
  test("should show title all the time", () => {
    expect(true).toBe(true)
      render(<App></App>);
      expect(screen.getByText(/Edit/i)).toBeDefined()
  })
})