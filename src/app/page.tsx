import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const headersList = await headers(); 
  const lang = headersList.get('accept-language');

  const locale = lang?.startsWith('en') ? 'en' : 'es';

  redirect(`/${locale}`);
}