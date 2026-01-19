import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { PublicationFragment } from '../generated/graphql';
import HashnodeSVG from './icons/svgs/HashnodeSVG';

const getPublicationLogo = (publication: PublicationFragment, isSidebar?: boolean) => {
	if (isSidebar) {
		return publication.preferences.logo; // Always display light mode logo in sidebar
	}
	return publication.preferences.darkMode?.logo || publication.preferences.logo;
}

export const PublicationLogo = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = getPublicationLogo(publication, isSidebar);

	return (
		<h1 className="relative w-full flex flex-row items-center justify-center gap-3">
			<a
				href="https://hashnode.com/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit Hashnode"
				className="flex items-center"
			>
				<HashnodeSVG className={`h-6 w-6 shrink-0 ${isSidebar ? 'text-black dark:text-white' : 'text-white md:h-8 md:w-8'}`} />
			</a>
			<Link
				href={'/'}
				aria-label={`${publication.title} blog home page`}
				className="flex flex-row items-center justify-center"
			>
				{PUBLICATION_LOGO ? (
					<>
						<img
							className="block w-32 shrink-0 md:w-40"
							alt={publication.title}
							src={resizeImage(PUBLICATION_LOGO, { w: 320, h: 80 })}
						/>
						<span className="text-2xl font-semibold text-white md:text-3xl">Blog</span>
					</>
				) : (
					<span
						className={`inline-block text-2xl font-semibold leading-none ${
							isSidebar ? 'text-black dark:text-white' : 'text-white md:text-4xl'
						}`}
					>
						{publication.title}
					</span>
				)}
			</Link>
		</h1>
	);
};
