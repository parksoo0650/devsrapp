import Link from 'next/link'

const ListRow = ({ children }) => <>{children}</>

ListRow.Admin = ({ url, icon, alt, title, size, opt }) => {
    return (
        <Link href={url}>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className={`w-8 h-8 rounded-full ${opt && 'bg-red-200'}`}          // 찬양 관리자. opt: true.
                             src={icon}
                             alt={alt} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-base font-medium text-gray-900 truncate dark:text-white">
                            {title}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {size}
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ListRow