import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import HashnodeSVG from './icons/svgs/HashnodeSVG';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex w-full flex-col items-center gap-5 text-center text-slate-600 dark:text-neutral-300">
					<div className="[&>div]:!justify-center">
						<SocialLinks isSidebar={true} />
					</div>
					<p>&copy; 2023 Company Inc.</p>
					<p>
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>{' '}
						·{' '}
						<a href="#" className="hover:underline">
							Terms
						</a>
					</p>
					<a
						href="https://hashnode.com/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit Hashnode"
						className="mt-8 flex flex-row items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-2 font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
					>
						<HashnodeSVG className="h-5 w-5 stroke-current" />
						<span>Hashnode</span>
					</a>
				</div>
			</Container>
		</footer>
	);
};
