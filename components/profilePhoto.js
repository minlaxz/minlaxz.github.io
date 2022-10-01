import Image from 'next/image'

export default function ProfilePhoto({ myName, isHome, path, ...rest }) {
    return (
        <>
            <Image
                priority
                src={path}
                style={rest.styles?.profileImage}
                className={rest.className?.profileImage}
                height={isHome ? `144` : `108`}
                width={isHome ? `144` : `108`}
                alt={`${myName} Profile Image`}
            />
        </>
    )
}