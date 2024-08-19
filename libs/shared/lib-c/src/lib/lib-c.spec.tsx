import { render } from '@testing-library/react';

import { LibCComponent } from './lib-c';

describe('LibC', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibCComponent />);
    expect(baseElement).toBeTruthy();
  });
});
