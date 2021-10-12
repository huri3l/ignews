import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { useSession } from 'next-auth/client';
import { SignInButton } from '.';

jest.mock('next-auth/client');

const useSessionMocked = mocked(useSession);

const authenticatedUserMock = {
  user: { name: 'John Doe', email: 'john.doe@example.com' },
  expires: 'fake-expires',
};

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });

  it('renders correctly when user is authenticated', () => {
    useSessionMocked.mockReturnValueOnce([authenticatedUserMock, false]);

    render(<SignInButton />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
