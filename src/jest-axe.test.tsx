import App from '@/app/page';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { describe, expect, test } from 'vitest';

expect.extend(toHaveNoViolations);

describe('jest-axe test', () => {
  test('should report a11y violation', async () => {
    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
