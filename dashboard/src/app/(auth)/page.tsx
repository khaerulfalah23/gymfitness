import { Metadata } from 'next';
import SignInView from './_components/signin-view';

export const metadata: Metadata = {
  title: 'Gym Account Login',
  description:
    'Log in to your gym account to access your fitness journey and personalized workouts.',
};

export default function SignIn() {
  return <SignInView />;
}
