import * as React from 'react';
import Link from 'next/link';

const LinkButton = ({
    children,
    href = '/',
    text = null,
    firstSpanBg = null,
    firstSpanSx = null,
    secondSpanSx = null,
    target = null,
    rel = null,
    ...props
}) => {
    return (
        <Link
            href={href}
            {...props}
        >
            <a className="relative inline-block group focus:outline-none focus:ring">
                <span
                    style={firstSpanSx}
                    className={
                        `absolute 
                    inset-0 
                    transition-transform 
                    translate-x-1.5
                    translate-y-1.5
                    ${firstSpanBg ? firstSpanBg : 'bg-purple-300'}
                    group-hover:translate-y-0 
                    group-hover:translate-x-0
                    `}>
                </span>
                <span
                    style={
                        secondSpanSx
                            ?
                            { ...secondSpanSx }
                            :
                            {
                                padding: '1rem',
                            }
                    }
                    className="
                        relative 
                        inline-block 
                        text-sm 
                        font-bold 
                        tracking-widest 
                        text-black 
                        uppercase 
                        border-2
                        border-current 
                        group-active:text-opacity-75
                        ">
                    {text ? text : 'Default'}
                    {children}
                </span>
            </a>
        </Link>
    )
}

export default LinkButton;