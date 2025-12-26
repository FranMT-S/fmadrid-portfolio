import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Profile } from '../profile';

describe('Profile component', () => {
  const name = 'Francisco Madrid';
  const job = 'Full Stack Developer';
  it('Title must be have Francisco Madrid', () => {
    render(<Profile />);
    const profileTitle = screen.getByTestId('profile-title');
    expect(profileTitle.textContent).toContain(name);
  });

  it('Subtitle must be have Job', () => {
    render(<Profile />);
    const profileTitle = screen.getByTestId('profile-subtitle');
    expect(profileTitle.textContent).toContain(job);
  });

  it('CTA must be existt', () => {
    render(<Profile />);
    const profileTitle = screen.getByTestId('profile-cta-job');
    expect(profileTitle).toBeTruthy();
  });
});
