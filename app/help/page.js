import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/help'); // internal redirect — stays on your domain
}
